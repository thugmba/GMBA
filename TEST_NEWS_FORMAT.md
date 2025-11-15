# Test News Formatting Guide

## How to Add Images in GitHub Issues

When you create a news post in GitHub Issues, you have **two options** for adding images:

### Option 1: Drag & Drop (Recommended ✅)

1. While creating/editing the issue
2. **Drag an image file** from your computer into the text box
3. GitHub automatically uploads it and inserts markdown:
   ```markdown
   ![image](https://user-images.githubusercontent.com/12345/image.png)
   ```
4. This is the **easiest and recommended method**

### Option 2: Use Markdown Syntax

If you already have an image URL, use this format:
```markdown
![Image description](https://url-to-your-image.jpg)
```

**Important:** The image must be:
- A real, accessible URL (not `https://url-to-image.jpg`)
- From GitHub (`user-images.githubusercontent.com`) or another public host
- A valid image file (JPG, PNG, GIF)

## Example News Post

Here's a complete example of a properly formatted news post:

### Title:
```
Welcome New Students 2024
```

### Body:
```markdown
We are excited to welcome our new students!

![Welcome Event](https://user-images.githubusercontent.com/12345/welcome-2024.png)

## Event Highlights

The orientation week included:

1. Campus tour
2. Meet and greet with faculty
3. Team building activities

### Student Testimonials

> "The orientation was amazing!" - Student A

**We look forward to a great year ahead!**

For more information, visit our [Program page](/GMBA/program).
```

## What You Might Be Seeing

If you see this literally in your news post:
```
<img src="https://url-to-image.jpg" alt="test">
```

It means you **typed HTML** instead of using **markdown**.

### ❌ Wrong (HTML):
```html
<img src="https://url-to-image.jpg" alt="test">
```

### ✅ Correct (Markdown):
```markdown
![test](https://user-images.githubusercontent.com/12345/actual-image.png)
```

## Testing Your Format

To test if images work:

1. **Create a test issue**
2. **Drag and drop a real image** (from your computer)
3. GitHub will show something like:
   ```markdown
   ![image](https://user-images.githubusercontent.com/XXXXXX/actual-url.png)
   ```
4. Click "Submit new issue"
5. Check the website - image should appear

## Common Mistakes

### Mistake 1: Using Placeholder URLs
```markdown
❌ ![test](https://url-to-image.jpg)  ← This is not a real image!
✅ ![test](https://user-images.githubusercontent.com/12345/image.png)
```

### Mistake 2: Using HTML Instead of Markdown
```markdown
❌ <img src="..." alt="test">  ← GitHub Issues uses Markdown
✅ ![test](actual-url.jpg)
```

### Mistake 3: Not Uploading the Image
```markdown
❌ ![test](my-computer/image.jpg)  ← Local path doesn't work
✅ Drag & drop to upload, then use the generated URL
```

## Summary

**Best Practice:**
1. Write your news in markdown
2. **Drag & drop images** directly into the issue
3. GitHub handles everything automatically
4. Don't type HTML - use markdown syntax

**Quick Reference:**
- **Image**: `![description](url)` or drag & drop
- **Link**: `[text](url)`
- **Bold**: `**text**`
- **Italic**: `*text*`
- **Heading**: `## Heading`
- **List**: `- item` or `1. item`
