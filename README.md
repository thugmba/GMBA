# Tunghai University Global MBA Website

This is the official website for the Tunghai University Global MBA Program, built with Jekyll and hosted on GitHub Pages.

## Features

- 📱 Responsive design for all devices
- 📝 **Super simple news posting via GitHub Issues** (just fill out a form!)
- 📊 Interactive class profile visualizations using Chart.js
- 📰 Dynamic news section powered by GitHub Issues API
- 🎨 Modern, professional design
- ⚡ Fast, static site generation with Jekyll
- 🚀 Hosted entirely on GitHub Pages - no external dependencies
- 📱 Post news from any device (desktop, tablet, mobile)

## Project Structure

```
GMBA/
├── .github/
│   └── ISSUE_TEMPLATE/      # GitHub Issue templates
│       ├── news-post.md     # Template for news posts
│       └── config.yml       # Issue template configuration
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page templates
│   ├── default.html         # Base layout
│   ├── home.html            # Homepage layout
│   ├── page.html            # Static page layout
│   └── news-post.html       # News post layout
├── assets/
│   ├── css/
│   │   └── main.css         # Main stylesheet
│   ├── js/
│   │   ├── main.js          # Main JavaScript
│   │   ├── charts.js        # Chart.js visualizations
│   │   └── github-news.js   # Fetch news from GitHub Issues
│   └── images/
│       └── uploads/         # Uploaded images
├── index.md                 # Homepage
├── about.md                 # About page
├── program.md               # Program page
├── admissions.md            # Admissions page
├── contact.md               # Contact page
├── news/
│   ├── index.md             # News archive page
│   └── post.html            # Single news post page
├── Gemfile                  # Ruby dependencies
├── HOW_TO_POST_NEWS.md      # Guide for posting news via GitHub Issues
└── README.md                # This file
```

## Setup Instructions

### 1. Local Development

#### Prerequisites
- Ruby 2.7 or higher
- Bundler
- Git

#### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/thugmba/GMBA.git
   cd GMBA
   ```

2. **Install dependencies:**
   ```bash
   bundle install
   ```

3. **Run the development server:**
   ```bash
   bundle exec jekyll serve
   ```

4. **View the site:**
   Open your browser and navigate to `http://localhost:4000`

### 2. Deploy to GitHub Pages

#### Step 1: Push to GitHub

```bash
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/thugmba/GMBA.git
git branch -M main
git push -u origin main
```

#### Step 2: Enable GitHub Pages

1. Go to: https://github.com/thugmba/GMBA/settings/pages
2. Under **Source**, select `main` branch
3. Click **Save**
4. Your site will be published at: `https://thugmba.github.io/GMBA/`

### 3. How to Post News

**Super Simple!** News posts are created as GitHub Issues - just fill out a form!

📖 **See [HOW_TO_POST_NEWS.md](HOW_TO_POST_NEWS.md) for complete step-by-step instructions**

#### Quick Start (5 Steps):

1. Go to: https://github.com/thugmba/GMBA/issues/new/choose
2. Click **"Get started"** next to "News Post"
3. Fill in the title and content (template guides you)
4. Drag & drop images if needed
5. Click **"Submit new issue"** - Done! News appears instantly!

#### Why GitHub Issues?

✅ **Easiest method** - Just fill out a form, no file editing
✅ **Image upload** - Drag and drop images directly
✅ **Mobile friendly** - Post news from your phone
✅ **No mistakes** - Template guides you through the process
✅ **Easy editing** - Edit or delete news with one click
✅ **Team collaboration** - Discuss news posts in comments

#### Adding Administrators:

1. Go to: https://github.com/thugmba/GMBA/settings/access
2. Click **"Invite a collaborator"**
3. Enter their GitHub username or email
4. They receive an invitation and can start posting news!

## Customization

### Updating Class Profile Data

To update the visualization data on the homepage:

1. Edit `assets/js/charts.js`
2. Find the data arrays in each chart configuration
3. Update the values to reflect current class statistics
4. Save and commit the changes

Example:
```javascript
// Industry Background Chart
data: [25, 20, 18, 15, 12, 10], // Update these percentages
```

### Updating Statistics

To update the statistics shown on the homepage:

1. Edit `index.md`
2. Find the `stats-grid` section
3. Update the numbers:

```html
<div class="stat-number">45</div>  <!-- Change this number -->
<div class="stat-label">Students</div>
```

### Changing Colors and Styling

To customize the website colors:

1. Edit `assets/css/main.css`
2. Find the `:root` section at the top
3. Update the CSS variables:

```css
:root {
  --primary-color: #003366;    /* Main color */
  --secondary-color: #d4af37;  /* Accent color */
  --accent-color: #0066cc;     /* Links and highlights */
}
```

### Adding New Static Pages

1. Create a new `.md` file in the root directory (e.g., `faculty.md`)
2. Add front matter:
   ```yaml
   ---
   layout: page
   title: Faculty
   permalink: /faculty/
   ---
   ```
3. Write your content in Markdown
4. Add a link to the navigation in `_layouts/default.html`

## Maintenance

### Updating Dependencies

Periodically update your Ruby gems:

```bash
bundle update
```

### Backup

- All content is stored in Git, so your repository serves as a backup
- News posts are stored in the `_news/` folder
- Images are stored in `assets/images/uploads/`

## Troubleshooting

### News not showing up
- Check that `published: true` is set
- Wait 2-3 minutes for GitHub Pages to rebuild
- Clear your browser cache

### Images not displaying
- Verify the image path is correct (`/GMBA/assets/images/uploads/filename.jpg`)
- Ensure images are uploaded to `assets/images/uploads/`
- Check that the filename matches exactly (case-sensitive)

### Build errors
- Run `bundle exec jekyll build` to see detailed error messages
- Check that all required front matter is present
- Verify YAML syntax in configuration files

### Charts not displaying
- Ensure Chart.js is loading (check browser console)
- Verify that `charts.js` is included in the page
- Check that canvas elements have the correct IDs

## Support

For questions or issues:
- Email: gmba@thu.edu.tw
- Check [Jekyll documentation](https://jekyllrb.com/docs/)
- See [HOW_TO_POST_NEWS.md](HOW_TO_POST_NEWS.md) for posting instructions

## License

© 2024 Tunghai University Global MBA. All rights reserved.
