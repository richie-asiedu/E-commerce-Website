# GitHub Pages Deployment Guide

This guide will help you deploy your e-commerce website to GitHub Pages.

## Prerequisites

1. Make sure your code is pushed to a GitHub repository
2. Ensure you have the necessary permissions to enable GitHub Pages

## Step 1: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

## Step 2: Configure Repository Settings

1. In the same Settings page, go to "Actions" → "General"
2. Under "Workflow permissions", select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"
4. Click "Save"

## Step 3: Update Homepage URL

Before deploying, update the homepage URL in `package.json`:

```json
{
  "homepage": "https://yourusername.github.io/e-commerce-website"
}
```

Replace `yourusername` with your actual GitHub username.

## Step 4: Deploy

### Option A: Manual Deployment

1. Run the build command:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

### Option B: Automatic Deployment (Recommended)

1. Push your changes to the main branch:
```bash
git add .
git commit -m "Update website"
git push origin main
```

2. The GitHub Actions workflow will automatically:
   - Build the project
   - Deploy to the gh-pages branch
   - Make your website live

## Step 5: Verify Deployment

1. Wait a few minutes for the deployment to complete
2. Visit your website at: `https://yourusername.github.io/e-commerce-website`
3. Check that all features are working correctly

## Troubleshooting

### Common Issues

1. **404 Error**: Make sure the base path in `vite.config.ts` matches your repository name
2. **Assets not loading**: Verify that the `base` path is correctly set
3. **Build fails**: Check the GitHub Actions logs for specific error messages

### Manual Fixes

If automatic deployment fails:

1. Check the Actions tab in your repository
2. Review the build logs for errors
3. Fix any issues and push again
4. The workflow will automatically retry

## Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure your domain's DNS settings
3. Update the homepage URL in `package.json`
4. Deploy again

## Support

If you encounter any issues:

1. Check the GitHub Actions logs
2. Verify your repository settings
3. Ensure all dependencies are properly installed
4. Review the build output for errors 