
# Vercel Deployment Guide

This document explains how to  **deploy the React + Vite portfolio website using Vercel** .

Vercel is a modern deployment platform designed for frontend frameworks like React, Next.js, and Vite. It provides:

* Automatic deployments
* Fast global CDN
* Preview deployments
* Environment variable management
* Simple GitHub integration

Once deployed, the portfolio will be accessible online and can be shared with:

* Recruiters
* Hiring managers
* Developers
* Professional networks

---

# 1. Prerequisites

Before deploying the portfolio, ensure the following are installed:

* Node.js
* npm
* Git
* GitHub account
* Vercel account

Your project should also be  **working locally** .

Run the development server to confirm:

```
npm run dev
```

Open the local server in your browser and confirm the application loads correctly.

---

# 2. Ensure the Project Builds Successfully

Before deploying, verify that the project builds without errors.

Run:

```
npm run build
```

This should create the production build folder:

```
dist/
```

The `dist` directory contains optimized production files that will be deployed.

---

# 3. Push the Project to GitHub

Vercel deploys projects directly from GitHub repositories.

Initialize Git if necessary:

```
git init
```

Add project files:

```
git add .
```

Create a commit:

```
git commit -m "Initial portfolio commit"
```

Add the GitHub repository:

```
git remote add origin https://github.com/username/portfolio.git
```

Push the project:

```
git push -u origin main
```

The project should now appear on GitHub.

---

# 4. Create a Vercel Account

Visit:

```
https://vercel.com
```

Create an account and sign in using:

```
Continue with GitHub
```

This allows Vercel to access your repositories and automate deployments.

---

# 5. Import the Project in Vercel

After logging into Vercel:

1. Click **Add New**
2. Select **Project**
3. Import the GitHub repository

Example repository:

```
username/portfolio
```

Vercel will automatically analyze the project and detect the framework.

---

# 6. Configure Deployment Settings

For a React + Vite project, verify the following settings.

Framework preset:

```
Vite
```

Build command:

```
npm run build
```

Output directory:

```
dist
```

Install command:

```
npm install
```

Root directory:

```
./
```

These settings allow Vercel to correctly build and deploy the application.

---

# 7. Deploy the Project

Click:

```
Deploy
```

Vercel will automatically:

1. Clone the GitHub repository
2. Install dependencies
3. Build the project
4. Deploy the optimized files

Deployment typically completes within  **30–60 seconds** .

---

# 8. Access the Live Website

After deployment, the portfolio will be available at:

```
https://project-name.vercel.app
```

Example:

```
https://devsid-portfolio.vercel.app
```

This URL can now be shared publicly.

---

# 9. Automatic Deployments

One of the advantages of Vercel is  **automatic deployment** .

Whenever changes are pushed to GitHub:

```
git add .
git commit -m "Update portfolio"
git push
```

Vercel will automatically:

* detect the new commit
* rebuild the project
* deploy the updated version

No manual deployment command is required.

---

# 10. Environment Variables

If the project uses external services such as  **EmailJS** , environment variables should be configured.

Navigate to:

```
Project Settings → Environment Variables
```

Add variables such as:

```
VITE_EMAIL_SERVICE_ID
VITE_EMAIL_TEMPLATE_ID
VITE_EMAIL_PUBLIC_KEY
```

After adding variables, redeploy the project.

---

# 11. Vite Configuration for Vercel

When deploying to Vercel, ensure the Vite base path is set correctly.

Open:

```
vite.config.js
```

Example configuration:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/"
})
```

Unlike GitHub Pages, Vercel requires the base path to be:

```
/
```

This ensures that all assets load correctly.

---

# 12. Updating the Portfolio

To update the live website:

```
git add .
git commit -m "Update portfolio content"
git push
```

Vercel will automatically deploy the new version.

---

# 13. Optional: Custom Domain

Vercel supports custom domains for production websites.

Example:

```
sid.dev
```

Steps:

1. Open the Vercel project
2. Go to:

```
Settings → Domains
```

3. Add the custom domain
4. Configure DNS records as instructed

Once configured, the portfolio will be accessible using the custom domain.

---

# 14. Troubleshooting

## Blank Page After Deployment

Cause:

Incorrect Vite base path.

Solution:

Ensure `vite.config.js` contains:

```
base: "/"
```

---

## Assets Not Loading

Cause:

Incorrect asset paths.

Solution:

Use assets from the `src/assets` directory and import them properly in React components.

---

## Environment Variables Not Working

Cause:

Variables were added after deployment.

Solution:

Redeploy the project from the Vercel dashboard.

---

# Summary

Deploying the portfolio with Vercel involves:

1. Pushing the project to GitHub
2. Importing the repository into Vercel
3. Configuring build settings
4. Deploying automatically
5. Updating via Git commits

This method provides a **fast, scalable, and automated deployment workflow** for modern React applications.
