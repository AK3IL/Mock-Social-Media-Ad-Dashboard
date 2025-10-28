# Python Backend Deployment Guide

## Overview
This dashboard has been recreated with a **Python Flask backend** that can be deployed to **Vercel**. The frontend remains a React application built with Vite.

## Architecture
- **Frontend**: React + Vite (Static Site)
- **Backend**: Python Flask API (Serverless Functions)
- **Deployment**: Vercel (handles both frontend and backend)

## API Endpoints
The Python Flask backend provides the following endpoints:

### `/api/paid-performance`
Returns paid social media performance data including:
- KPI summary data (Total Spend, Impressions, Likes)
- Platform breakdown (Facebook, Twitter, LinkedIn, Instagram)
- Historical data for charts

### `/api/organic-performance`
Returns organic social media performance data including:
- KPI summary data (Followers, Engagement, Reach)
- Platform breakdown (Facebook, Twitter, LinkedIn, Instagram)
- Historical data for charts

### `/api/health`
Health check endpoint that returns the API status and timestamp.

## Local Development

### Method 1: Run Separately
1. **Start the Python API:**
   ```bash
   cd /workspace
   python api/index.py
   ```
   API runs at `http://localhost:5000`

2. **Start the React frontend** (in a new terminal):
   ```bash
   npm run dev
   # or
   bun run dev
   ```
   Frontend runs at `http://localhost:3000`

### Method 2: Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI globally
npm install -g vercel

# Run the project
vercel dev
```
This simulates the production environment and runs both frontend and backend together.

## Deployment to Vercel

### Option 1: Using Vercel CLI
```bash
# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Option 2: Using Vercel Dashboard
1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
3. Click "New Project"
4. Import your repository
5. Vercel will auto-detect the configuration from `vercel.json`
6. Click "Deploy"

## Configuration Files

### `vercel.json`
Configures the deployment:
- Sets up Python runtime for the API
- Builds the React frontend
- Routes `/api/*` to the Python backend
- Routes everything else to the static frontend

### `requirements.txt`
Python dependencies:
- Flask 3.0.0
- flask-cors 4.0.0
- Werkzeug 3.0.1

### `.vercelignore`
Excludes unnecessary files from deployment to optimize build time.

## Key Differences from Original

### Original Stack
- Backend: Cloudflare Workers (Hono framework)
- Frontend: React + Vite
- Deployment: Cloudflare Pages

### New Python Stack
- Backend: Python Flask (Vercel Serverless Functions)
- Frontend: React + Vite (unchanged)
- Deployment: Vercel

### Benefits of Python Backend
1. **Easier for Python developers** - No need to learn TypeScript/Node.js
2. **Rich Python ecosystem** - Easy to integrate with data science libraries (pandas, numpy, etc.)
3. **Simple deployment** - Vercel handles everything automatically
4. **Same functionality** - All features work identically to the original

## Customization

### Modifying the API
Edit `api/index.py` to:
- Change data generation logic
- Add new endpoints
- Integrate with real databases
- Add authentication

### Modifying the Frontend
The frontend code remains unchanged and is located in the `src/` directory. All React components, hooks, and utilities work the same way.

## Troubleshooting

### Common Issues

**Issue**: API returns 404 in production
**Solution**: Ensure `vercel.json` has the correct routing configuration

**Issue**: CORS errors
**Solution**: The API has CORS enabled for all origins. Check if `flask-cors` is installed.

**Issue**: Build fails on Vercel
**Solution**: Check that:
- `requirements.txt` is in the root directory
- Python version in Vercel settings is 3.9 or higher
- All dependencies are listed in `requirements.txt`

### Getting Help
If you encounter issues:
1. Check Vercel deployment logs
2. Verify the API works locally with `python api/index.py`
3. Test the frontend separately with `npm run dev`

## Next Steps
- Connect to a real database (PostgreSQL, MongoDB, etc.)
- Add authentication (JWT, OAuth, etc.)
- Implement caching for better performance
- Add more sophisticated data analysis
- Integrate with real social media APIs
