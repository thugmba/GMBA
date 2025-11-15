# Tunghai University Global MBA Website

This is the official website for the Tunghai University Global MBA Program, built with Jekyll and hosted on GitHub Pages.

## Features

- 📱 Responsive design for all devices
- 📝 Decap CMS for easy content management (no technical knowledge required)
- 📊 Interactive class profile visualizations using Chart.js
- 📰 Dynamic news section
- 🎨 Modern, professional design
- ⚡ Fast, static site generation with Jekyll

## Project Structure

```
GMBA/
├── _config.yml              # Jekyll configuration
├── _layouts/                # Page templates
│   ├── default.html         # Base layout
│   ├── home.html            # Homepage layout
│   ├── page.html            # Static page layout
│   └── news-post.html       # News post layout
├── _news/                   # News posts (managed by Decap CMS)
├── admin/                   # Decap CMS admin interface
│   ├── config.yml           # CMS configuration
│   └── index.html           # CMS admin page
├── assets/
│   ├── css/
│   │   └── main.css         # Main stylesheet
│   ├── js/
│   │   ├── main.js          # Main JavaScript
│   │   └── charts.js        # Chart.js visualizations
│   └── images/
│       └── uploads/         # Uploaded images (via CMS)
├── index.md                 # Homepage
├── about.md                 # About page
├── program.md               # Program page
├── admissions.md            # Admissions page
├── contact.md               # Contact page
├── news/
│   └── index.md             # News archive page
├── Gemfile                  # Ruby dependencies
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
   git clone https://github.com/yourusername/GMBA.git
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

#### Step 1: Create GitHub Repository

1. Create a new repository on GitHub (e.g., `thu-gmba`)
2. Initialize Git in your project folder (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

3. Connect to GitHub and push:
   ```bash
   git remote add origin https://github.com/yourusername/thu-gmba.git
   git branch -M main
   git push -u origin main
   ```

#### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** → **Pages**
3. Under **Source**, select `main` branch
4. Click **Save**
5. Your site will be published at `https://yourusername.github.io/thu-gmba/`

#### Step 3: Set Up Decap CMS with Netlify Identity (Recommended)

For the CMS to work on GitHub Pages, you need to set up authentication:

**Option A: Use Netlify (Recommended)**

1. Sign up for a free account at [Netlify](https://www.netlify.com/)
2. Connect your GitHub repository
3. Deploy the site on Netlify
4. Enable Netlify Identity:
   - Go to **Site settings** → **Identity**
   - Click **Enable Identity**
   - Under **Registration preferences**, select "Invite only"
   - Under **External providers**, you can enable GitHub, Google, etc.
5. Enable Git Gateway:
   - Go to **Site settings** → **Identity** → **Services**
   - Enable **Git Gateway**

**Option B: GitHub Pages with External OAuth**

1. Set up OAuth application on GitHub
2. Configure the backend in `admin/config.yml`

For detailed instructions, see [Decap CMS Documentation](https://decapcms.org/docs/github-backend/)

### 3. Using Decap CMS

#### For Administrators (Adding News Posts)

1. **Access the CMS:**
   - Navigate to `https://yoursite.com/admin/`
   - Log in with your credentials

2. **Create a new news post:**
   - Click on **"News"** in the left sidebar
   - Click **"New News"**
   - Fill in the form:
     - **Title**: Enter the news title
     - **Publish Date**: Select the date
     - **Featured Image**: Upload an image (optional)
     - **Summary**: Brief summary (shown in news listings)
     - **Body**: Write your news content (supports Markdown)
     - **Published**: Toggle to publish/unpublish
   - Click **"Publish"** → **"Publish now"**

3. **Edit existing posts:**
   - Click on any post in the list
   - Make your changes
   - Click **"Publish"** → **"Publish now"**

4. **Upload images:**
   - When editing, click the **"+"** button in the body
   - Select **"Image"**
   - Upload your image
   - Add alt text for accessibility

#### Tips for Non-Technical Users

- **Markdown basics** (for formatting text):
  - `# Heading` - Large heading
  - `## Subheading` - Smaller heading
  - `**bold text**` - Bold text
  - `*italic text*` - Italic text
  - `[link text](url)` - Create a link
  - `![image](url)` - Insert an image
- **Save drafts**: You can save posts as drafts and publish them later
- **Preview**: Use the preview pane to see how your post will look

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

### Adding Administrators

If using Netlify Identity:
1. Go to your Netlify site dashboard
2. Navigate to **Identity** → **Invite users**
3. Enter the email address of the new administrator
4. They will receive an invitation email

## Troubleshooting

### CMS not loading
- Check that you've properly configured authentication (Netlify Identity or GitHub OAuth)
- Ensure `admin/config.yml` is correctly configured
- Check browser console for errors

### Images not showing
- Verify the image path is correct
- Ensure images are uploaded to `assets/images/uploads/`
- Check file permissions

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
- Check [Decap CMS documentation](https://decapcms.org/docs/)

## License

© 2024 Tunghai University Global MBA. All rights reserved.
