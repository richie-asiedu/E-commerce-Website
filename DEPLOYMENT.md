# GitHub Pages Deployment Guide

This guide will help you deploy your e-commerce website to GitHub Pages.

## Prerequisites

1. Make sure your code is pushed to a GitHub repository
2. Ensure you have the necessary permissions to enable GitHub Pages

## Step 1: Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/richie-asiedu/E-commerce-Website`
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

**Important**: If you see "404 - There isn't a GitHub Pages site here", this means GitHub Pages hasn't been enabled yet. Follow the steps above to enable it.

## Step 2: Configure Repository Settings

1. In the same Settings page, go to "Actions" → "General"
2. Under "Workflow permissions", select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"
4. Click "Save"

## Step 3: Verify Homepage URL

The homepage URL in `package.json` should match your repository:

```json
{
  "homepage": "https://richie-asiedu.github.io/E-commerce-Website"
}
```

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

1. Push your changes to the master branch:
```bash
git add .
git commit -m "Update website"
git push origin master
```

2. The GitHub Actions workflow will automatically:
   - Build the project
   - Deploy to the gh-pages branch
   - Make your website live

## Step 5: Verify Deployment

1. Wait 2-5 minutes for the deployment to complete
2. Check the "Actions" tab in your repository to see if the workflow completed successfully
3. Visit your website at: `https://richie-asiedu.github.io/E-commerce-Website`
4. Check that all features are working correctly

## Troubleshooting

### Common Issues

1. **404 Error**: 
   - Make sure GitHub Pages is enabled in repository settings
   - Verify the source is set to "gh-pages" branch
   - Check that the workflow completed successfully in the Actions tab

2. **Images not loading**: 
   - Make sure the base path in `vite.config.ts` matches your repository name
   - Verify that the `base` path is correctly set to `/E-commerce-Website/`

3. **Build fails**: 
   - Check the GitHub Actions logs for specific error messages
   - Verify all dependencies are properly installed

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