// Fetch news from GitHub Issues
const GITHUB_REPO = 'thugmba/GMBA';
const GITHUB_API = `https://api.github.com/repos/${GITHUB_REPO}/issues`;

// Fetch news from GitHub Issues with 'news' label
async function fetchNews(limit = null) {
  try {
    console.log('Fetching news from GitHub Issues API...');
    const url = `${GITHUB_API}?labels=news&state=open&sort=created&direction=desc`;
    console.log('API URL:', url);

    const response = await fetch(url);

    if (!response.ok) {
      console.error('API response not OK:', response.status, response.statusText);
      throw new Error(`Failed to fetch news: ${response.status}`);
    }

    const issues = await response.json();
    console.log('Fetched issues:', issues.length);

    // Filter and transform issues
    let news = issues.map(issue => ({
      title: issue.title,
      date: new Date(issue.created_at),
      excerpt: extractExcerpt(issue.body),
      body: issue.body,
      url: issue.html_url,
      number: issue.number,
      image: extractImage(issue.body)
    }));

    console.log('Transformed news:', news);

    // Limit results if specified
    if (limit) {
      news = news.slice(0, limit);
      console.log(`Limited to ${limit} news items`);
    }

    return news;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

// Extract first image from markdown body
function extractImage(body) {
  if (!body) return null;

  // Match markdown image syntax: ![alt](url)
  const imageRegex = /!\[.*?\]\((.*?)\)/;
  const match = body.match(imageRegex);

  return match ? match[1] : null;
}

// Extract excerpt from body (first paragraph or first 160 characters)
function extractExcerpt(body) {
  if (!body) return '';

  // Remove images and links
  let text = body.replace(/!\[.*?\]\(.*?\)/g, '');
  text = text.replace(/\[([^\]]+)\]\(.*?\)/g, '$1');

  // Get first paragraph or first 160 characters
  const firstParagraph = text.split('\n\n')[0];
  const excerpt = firstParagraph.length > 160
    ? firstParagraph.substring(0, 160) + '...'
    : firstParagraph;

  return excerpt.trim();
}

// Format date as "Month DD, YYYY"
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

// Convert markdown to HTML (basic)
function markdownToHtml(markdown) {
  if (!markdown) return '';

  let html = markdown;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

  // Line breaks
  html = html.replace(/\n\n/g, '</p><p>');
  html = '<p>' + html + '</p>';

  // Lists (basic)
  html = html.replace(/^\- (.+)$/gim, '<li>$1</li>');
  html = html.replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>');

  return html;
}

// Display news on homepage (latest 3)
async function displayHomeNews() {
  const newsContainer = document.querySelector('.news-grid');
  if (!newsContainer) return;

  const news = await fetchNews(3);

  if (news.length === 0) {
    newsContainer.innerHTML = '<p>No news available at the moment. Check back soon!</p>';
    return;
  }

  newsContainer.innerHTML = news.map(item => `
    <article class="news-card">
      ${item.image ? `<img src="${item.image}" alt="${item.title}" class="news-image">` : ''}
      <div class="news-content">
        <time datetime="${item.date.toISOString()}">${formatDate(item.date)}</time>
        <h3><a href="/GMBA/news/${item.number}">${item.title}</a></h3>
        <p>${item.excerpt}</p>
        <a href="/GMBA/news/${item.number}" class="read-more">Read More →</a>
      </div>
    </article>
  `).join('');
}

// Display all news on news page
async function displayAllNews() {
  const newsContainer = document.querySelector('.news-list');
  if (!newsContainer) return;

  // Show loading state
  newsContainer.innerHTML = '<div class="loading">Loading news...</div>';

  const news = await fetchNews();

  if (news.length === 0) {
    newsContainer.innerHTML = '<div class="no-news"><p>No news available at the moment. Check back soon!</p></div>';
    return;
  }

  newsContainer.innerHTML = news.map(item => `
    <article class="news-item">
      <div class="news-item-date">
        <time datetime="${item.date.toISOString()}">
          <span class="day">${item.date.getDate()}</span>
          <span class="month">${item.date.toLocaleDateString('en-US', { month: 'short' })}</span>
          <span class="year">${item.date.getFullYear()}</span>
        </time>
      </div>
      <div class="news-item-content">
        ${item.image ? `<div class="news-item-image"><img src="${item.image}" alt="${item.title}"></div>` : ''}
        <h2><a href="/GMBA/news/${item.number}">${item.title}</a></h2>
        <p class="excerpt">${item.excerpt}</p>
        <a href="/GMBA/news/${item.number}" class="read-more">Read Full Article →</a>
      </div>
    </article>
  `).join('');
}

// Display single news post
async function displayNewsPost() {
  const newsContent = document.querySelector('.news-post-content');
  if (!newsContent) return;

  // Get issue number from URL
  const pathParts = window.location.pathname.split('/');
  const issueNumber = pathParts[pathParts.length - 1];

  if (!issueNumber || isNaN(issueNumber)) {
    newsContent.innerHTML = '<p>News post not found.</p>';
    return;
  }

  // Show loading state
  newsContent.innerHTML = '<div class="loading">Loading...</div>';

  try {
    const response = await fetch(`${GITHUB_API}/${issueNumber}`);

    if (!response.ok) {
      throw new Error('News post not found');
    }

    const issue = await response.json();

    // Check if it has the 'news' label
    const hasNewsLabel = issue.labels.some(label => label.name === 'news');

    if (!hasNewsLabel) {
      newsContent.innerHTML = '<p>This is not a news post.</p>';
      return;
    }

    const date = new Date(issue.created_at);
    const image = extractImage(issue.body);

    newsContent.innerHTML = `
      <header class="post-header">
        <h1>${issue.title}</h1>
        <div class="post-meta">
          <time datetime="${date.toISOString()}">${formatDate(date)}</time>
        </div>
      </header>
      ${image ? `<div class="post-featured-image"><img src="${image}" alt="${issue.title}"></div>` : ''}
      <div class="post-content">
        ${markdownToHtml(issue.body)}
      </div>
      <footer class="post-footer">
        <div class="back-to-news">
          <a href="/GMBA/news/" class="btn btn-outline">← Back to All News</a>
        </div>
      </footer>
    `;

    // Update page title
    document.title = `${issue.title} | Global MBA Program`;

  } catch (error) {
    console.error('Error loading news post:', error);
    newsContent.innerHTML = '<p>Error loading news post. Please try again later.</p>';
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  // Check which page we're on and load appropriate content
  const path = window.location.pathname;
  console.log('Current path:', path);

  // More flexible path detection
  const isHomepage = path === '/GMBA/' ||
                     path === '/GMBA/index.html' ||
                     path.endsWith('/') && path.includes('index') ||
                     document.querySelector('.news-grid') && !document.querySelector('.news-list');

  const isNewsArchive = path.includes('/news/') &&
                        (path.endsWith('/news/') || path.endsWith('/news/index.html')) ||
                        document.querySelector('.news-list');

  const isNewsPost = path.match(/\/news\/\d+/) ||
                     document.querySelector('.news-post-content');

  console.log('Page detection:', { isHomepage, isNewsArchive, isNewsPost });

  if (isHomepage) {
    // Homepage - load latest 3 news
    console.log('Loading homepage news...');
    displayHomeNews();
  } else if (isNewsPost) {
    // Single news post page
    console.log('Loading single news post...');
    displayNewsPost();
  } else if (isNewsArchive) {
    // News archive page - load all news
    console.log('Loading news archive...');
    displayAllNews();
  } else {
    console.log('No matching page type found');
  }
});
