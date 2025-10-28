# 🚀 Deploy to Vercel via GitHub - Step by Step Guide

## Overview
This guide will walk you through:
1. Creating a GitHub repository
2. Pushing your code to GitHub
3. Deploying to Vercel from GitHub

---

## Step 1: Check Current Git Status

First, let's see what branch you're on:

```bash
git status
git branch
```

You're currently on: `cursor/recreate-social-media-dashboard-in-python-2ccb`

---

## Step 2: Create a New GitHub Repository

### Option A: Via GitHub Website (Easiest)

1. Go to [https://github.com/new](https://github.com/new)
2. Fill in the repository details:
   - **Repository name**: `python-social-media-dashboard` (or your preferred name)
   - **Description**: "Social media analytics dashboard with Python Flask backend"
   - **Visibility**: Public or Private (both work with Vercel)
   - **⚠️ IMPORTANT**: Do NOT initialize with README, .gitignore, or license (we already have these)
3. Click "Create repository"

### Option B: Via GitHub CLI (For Advanced Users)

```bash
gh repo create python-social-media-dashboard --public --source=. --remote=origin --push
```

---

## Step 3: Push Your Code to GitHub

### If you created the repo via GitHub Website:

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/python-social-media-dashboard.git

# Push your current branch
git push -u origin cursor/recreate-social-media-dashboard-in-python-2ccb
```

### Or, if you want to push as the main branch:

```bash
# Add the GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/python-social-media-dashboard.git

# Rename your current branch to main (optional)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## Step 4: Verify the Push

Check that your code is on GitHub:
```bash
# Open your GitHub repository in a browser
git remote -v
# Visit the URL shown
```

Or visit: `https://github.com/YOUR_USERNAME/python-social-media-dashboard`

---

## Step 5: Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended for First Deployment)

1. **Go to Vercel**: [https://vercel.com/new](https://vercel.com/new)

2. **Sign in** (use GitHub for easier integration)

3. **Import Git Repository**:
   - Click "Import Git Repository"
   - Select your GitHub account
   - Find `python-social-media-dashboard`
   - Click "Import"

4. **Configure Project**:
   - **Framework Preset**: Leave as "Other" or "Vite"
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

5. **Environment Variables**: None needed for basic deployment

6. **Deploy**: Click "Deploy"

7. **Wait**: Deployment takes 2-3 minutes

8. **Done!** 🎉 You'll get a URL like: `https://python-social-media-dashboard.vercel.app`

### Method 2: Vercel CLI (For Subsequent Deployments)

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Link to your GitHub repo
vercel link

# Deploy
vercel --prod
```

---

## Step 6: Test Your Deployed App

Once deployed, test these URLs (replace with your actual domain):

```
Frontend:
https://your-app.vercel.app/

API Endpoints:
https://your-app.vercel.app/api/health
https://your-app.vercel.app/api/paid-performance
https://your-app.vercel.app/api/organic-performance
```

---

## 🔧 Troubleshooting

### Error: "remote origin already exists"
```bash
# Remove the existing remote and add the new one
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/python-social-media-dashboard.git
```

### Error: "Permission denied" when pushing to GitHub
```bash
# Option 1: Use GitHub CLI
gh auth login

# Option 2: Use HTTPS with personal access token
# Generate token at: https://github.com/settings/tokens
# Use token as password when prompted
```

### Vercel Build Fails
1. Check Vercel deployment logs
2. Ensure `vercel.json`, `requirements.txt`, and `package.json` are in the root directory
3. Verify Python version is 3.9+ in Vercel settings

### API Returns 404 in Production
- Check Vercel function logs
- Verify `api/index.py` exists in your GitHub repo
- Check that `vercel.json` has correct routing

---

## 📋 Quick Command Reference

```bash
# Check current status
git status

# Add GitHub remote
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub (current branch)
git push -u origin BRANCH_NAME

# Or push as main branch
git branch -M main
git push -u origin main

# Deploy to Vercel via CLI
vercel --prod
```

---

## 🎯 What Happens During Deployment

1. **Vercel detects** your `vercel.json` configuration
2. **Installs** Python dependencies from `requirements.txt`
3. **Installs** Node dependencies from `package.json`
4. **Builds** your React frontend with `npm run build`
5. **Deploys** Python API as serverless functions
6. **Deploys** React frontend to CDN
7. **Routes** `/api/*` to Python, everything else to React

---

## 🔄 Future Updates

After initial deployment, to update your app:

```bash
# Make your changes
git add .
git commit -m "Your update message"
git push

# Vercel will automatically deploy the changes!
```

That's it! Vercel automatically redeploys when you push to GitHub.

---

## ✅ Checklist

Before deploying, ensure:
- [x] Code is committed to git
- [ ] GitHub repository is created
- [ ] Code is pushed to GitHub
- [ ] Vercel account is created
- [ ] Project is imported to Vercel
- [ ] Deployment is successful
- [ ] APIs are working (test `/api/health`)
- [ ] Frontend is loading correctly

---

## 🆘 Need Help?

- **GitHub Help**: [docs.github.com](https://docs.github.com)
- **Vercel Help**: [vercel.com/docs](https://vercel.com/docs)
- **Python on Vercel**: [vercel.com/docs/functions/serverless-functions/runtimes/python](https://vercel.com/docs/functions/serverless-functions/runtimes/python)

---

**Ready to deploy? Start with Step 1!** 🚀
