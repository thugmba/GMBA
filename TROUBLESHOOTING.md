# Troubleshooting GitHub Issues News

## News Not Showing on Homepage

If you created a GitHub Issue but don't see it on the website, follow these steps:

### Step 1: Check the Browser Console

1. Open your website
2. Press `F12` (or right-click → Inspect)
3. Click the **Console** tab
4. Look for messages from github-news.js

You should see:
```
Current path: /GMBA/
Page detection: {isHomepage: true, ...}
Loading homepage news...
Fetching news from GitHub Issues API...
API URL: https://api.github.com/repos/thugmba/GMBA/issues?labels=news&state=open...
Fetched issues: X
```

### Step 2: Verify the GitHub Issue

1. Go to: https://github.com/thugmba/GMBA/issues
2. Check that your news issue:
   - ✅ Has the **"news"** label
   - ✅ Is **Open** (not closed)
   - ✅ Has content in the body

### Step 3: Test the API Directly

Open this URL in your browser:
```
https://api.github.com/repos/thugmba/GMBA/issues?labels=news&state=open
```

You should see JSON data with your news issues. If you see `[]` (empty array), your issue doesn't have the "news" label or it's closed.

### Step 4: Check Common Issues

#### Issue 1: Missing "news" label
**Solution**:
1. Go to your issue
2. Click the gear icon next to "Labels"
3. Check "news"

#### Issue 2: Issue is closed
**Solution**:
1. Go to your issue
2. Click "Reopen issue" button

#### Issue 3: JavaScript not loading
**Solution**:
1. Check browser console for errors
2. Make sure github-news.js is loading:
   - In browser console, type: `fetch`
   - Should show `function fetch()`
3. Clear browser cache and reload

#### Issue 4: Path detection issue
**Solution**:
1. Check console for "Current path:" message
2. If it doesn't match `/GMBA/`, the script might not detect homepage correctly
3. Try accessing: `https://thugmba.github.io/GMBA/` (with trailing slash)

### Step 5: Manual Test

Open browser console and run:
```javascript
fetch('https://api.github.com/repos/thugmba/GMBA/issues?labels=news&state=open')
  .then(r => r.json())
  .then(data => console.log(data));
```

This will show you exactly what the API returns.

## Common Error Messages

### "Failed to fetch news: 404"
- Repository doesn't exist or is private
- Check URL: https://github.com/thugmba/GMBA

### "Failed to fetch news: 403"
- API rate limit reached (60 requests/hour for unauthenticated)
- Wait an hour or authenticate your requests

### "Fetched issues: 0"
- No issues with "news" label found
- Check your issues have the correct label

### "No matching page type found"
- Script can't detect which page type it is
- Check that `.news-grid` exists on homepage
- Check console.log for path

## Quick Fixes

### Fix 1: Force Reload
```
Ctrl + F5 (Windows)
Cmd + Shift + R (Mac)
```

### Fix 2: Clear Cache
1. F12 → Network tab
2. Check "Disable cache"
3. Reload page

### Fix 3: Test Local Server
If you're testing locally:
```bash
bundle exec jekyll serve
```
Then visit: `http://localhost:4000/GMBA/`

## Debugging Checklist

- [ ] Issue has "news" label
- [ ] Issue is open (not closed)
- [ ] Issue has content in body
- [ ] github-news.js is loading
- [ ] Browser console shows no errors
- [ ] API URL returns data when visited directly
- [ ] Page path is detected correctly
- [ ] `.news-grid` element exists on homepage

## Still Not Working?

1. **Check Network Tab** (F12 → Network):
   - Look for request to `api.github.com`
   - Check status code (should be 200)
   - Check response (should show your issues)

2. **Create a Test Issue**:
   - Title: "Test News"
   - Body: "This is a test"
   - Label: "news"
   - State: Open

3. **Commit and Push Changes**:
   ```bash
   git add assets/js/github-news.js
   git commit -m "Update news script with debugging"
   git push
   ```

4. **Wait for GitHub Pages to rebuild** (2-3 minutes)

5. **Visit the live site** (not local):
   - https://thugmba.github.io/GMBA/

## Contact

If you're still having issues:
- Email: gmba@thu.edu.tw
- Include:
  - Browser console logs
  - Screenshot of the issue
  - Link to the GitHub issue you created
