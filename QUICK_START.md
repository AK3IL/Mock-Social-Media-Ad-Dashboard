# Quick Start - Deploy to Vercel

This is a Python Flask + React dashboard that can be deployed to Vercel in minutes.

## Prerequisites
- A [Vercel account](https://vercel.com/signup) (free tier works!)
- Git installed on your machine

## Option 1: Deploy via Vercel Dashboard (Easiest)

### Step 1: Push to GitHub
```bash
# If you haven't already, initialize git and push to GitHub
git init
git add .
git commit -m "Python social media dashboard"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [https://vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your repository
4. Vercel will auto-detect the configuration
5. Click "Deploy"
6. Wait 2-3 minutes for deployment to complete
7. Your dashboard will be live! 🎉

## Option 2: Deploy via CLI (Faster for developers)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
# From the project root directory
vercel --prod
```

That's it! Your dashboard is now live.

## Testing Locally

### Method 1: Use Vercel Dev (Recommended)
```bash
vercel dev
```
Opens at `http://localhost:3000`

### Method 2: Run Separately
Terminal 1 - API:
```bash
python3 api/index.py
```

Terminal 2 - Frontend:
```bash
npm run dev
```

## What Gets Deployed

- ✅ Python Flask API at `/api/*` routes
- ✅ React frontend (static files)
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-scaling

## API Endpoints

Once deployed, your API will be available at:
- `https://your-project.vercel.app/api/paid-performance`
- `https://your-project.vercel.app/api/organic-performance`
- `https://your-project.vercel.app/api/health`

## Troubleshooting

**Problem**: Build fails
**Solution**: Make sure `requirements.txt` and `vercel.json` are in the root directory

**Problem**: API returns 500 error
**Solution**: Check Vercel function logs in the dashboard

**Problem**: CORS errors in browser
**Solution**: CORS is pre-configured in `api/index.py` - check that flask-cors is installed

## Next Steps

- ✅ Your dashboard is deployed!
- 📊 Customize the data in `api/index.py`
- 🎨 Modify the UI in `src/` directory
- 🔐 Add authentication
- 💾 Connect to a real database

## Need Help?

See `PYTHON_DEPLOYMENT.md` for detailed documentation.
