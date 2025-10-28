# 🖥️ CURSOR DESKTOP APP - TERMINAL COMMANDS

## 📍 INSTRUCTIONS FOR CURSOR DESKTOP

### Step 1: Open Terminal in Cursor
1. Open this project in **Cursor Desktop App**
2. Press: **`Ctrl + ` `** (Control + Backtick)
   - Or on Mac: **`Cmd + ` `**
   - Or click: `View` → `Terminal` from top menu
   - Or click the terminal icon at the bottom of Cursor

### Step 2: Copy & Paste These Commands

Once the terminal opens at the bottom of Cursor, paste these commands one by one:

```bash
# Verify you're in the right directory
pwd
```
Should show: `/workspace`

```bash
# Check git status (optional - to see what's ready)
git status
```

```bash
# Push your Python dashboard to GitHub
git push origin cursor/recreate-social-media-dashboard-in-python-2ccb
```

**That's it!** After the push completes, continue to Step 3.

---

### Step 3: Deploy to Vercel (In Your Web Browser)

After pushing to GitHub, open your web browser:

1. Go to: **https://vercel.com/new**

2. **Sign in** (use GitHub account for easier setup)

3. **Import Repository:**
   - Click "Import Git Repository"
   - Find: `AK3IL/Mock-Social-Media-Ad-Dashboard`
   - Click "Import"

4. **Configure Project:**
   - Framework Preset: Leave as "Other" or "Vite"
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Root Directory: `./` (leave default)
   
5. **Click "Deploy"** button

6. **Wait 2-3 minutes** for deployment

7. **Done!** 🎉 You'll get a URL like:
   ```
   https://mock-social-media-ad-dashboard.vercel.app
   ```

---

### Step 4: Test Your Live Dashboard

Visit these URLs (replace with your actual Vercel URL):

✅ **Dashboard Homepage:**
```
https://your-app.vercel.app/
```

✅ **API Health Check:**
```
https://your-app.vercel.app/api/health
```

✅ **Paid Performance Data:**
```
https://your-app.vercel.app/api/paid-performance
```

✅ **Organic Performance Data:**
```
https://your-app.vercel.app/api/organic-performance
```

---

## 🎯 QUICK REFERENCE

**Terminal Shortcut in Cursor:**
- Windows/Linux: `Ctrl + ` `
- Mac: `Cmd + ` `

**Git Push Command:**
```bash
git push origin cursor/recreate-social-media-dashboard-in-python-2ccb
```

**Vercel Deploy:**
- URL: https://vercel.com/new
- Import: AK3IL/Mock-Social-Media-Ad-Dashboard
- Click: Deploy

---

## ⚡ ALTERNATIVE: Deploy Directly from Cursor Terminal

If you have Vercel CLI installed, you can deploy directly from Cursor terminal:

```bash
# Install Vercel CLI (one-time setup)
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

---

## 🆘 TROUBLESHOOTING

**Problem: Terminal doesn't open in Cursor**
- Try: `View` → `Terminal` from menu
- Or: Right-click in file explorer → "Open in Integrated Terminal"

**Problem: "Permission denied" when pushing**
- Run: `gh auth login` in terminal
- Or visit: https://github.com/settings/tokens to create a token

**Problem: "Not a git repository"**
- Make sure you're in `/workspace` directory
- Run: `pwd` to check current directory

**Problem: Can't find terminal shortcut key**
- Go to: `File` → `Preferences` → `Keyboard Shortcuts`
- Search for: "Toggle Terminal"
- See your system's shortcut

---

## 📂 YOUR PROJECT STRUCTURE

```
/workspace/
├── api/
│   └── index.py              ← Python Flask API (190 lines)
├── src/                      ← React Frontend
├── vercel.json              ← Vercel Configuration
├── requirements.txt         ← Python Dependencies
├── package.json            ← Node Dependencies
└── CURSOR_TERMINAL_COMMANDS.md  ← This file!
```

---

## ✅ WHAT'S BEEN DONE

✅ Python Flask API created
✅ All configuration files ready
✅ Git repository connected
✅ Code committed and ready
✅ Documentation complete

## 📋 WHAT YOU NEED TO DO

1. ⬜ Open terminal in Cursor Desktop
2. ⬜ Run git push command
3. ⬜ Go to vercel.com/new in browser
4. ⬜ Import your GitHub repository
5. ⬜ Click Deploy button
6. ⬜ Test your live dashboard

---

## 🎉 EXPECTED RESULT

After deployment, you'll have:
- ✨ Live dashboard with Python backend
- 🌐 Public URL you can share
- 📊 All 4 social platforms (Facebook, Twitter, LinkedIn, Instagram)
- 🎨 Dark/Light theme toggle
- 📈 Interactive charts
- 🔄 Auto-deploys when you push to GitHub

---

**GOOD LUCK! YOUR DASHBOARD WILL BE LIVE IN ~5 MINUTES! 🚀**

---

## 📞 LINKS

- GitHub Repo: https://github.com/AK3IL/Mock-Social-Media-Ad-Dashboard
- Vercel Deploy: https://vercel.com/new
- Original Dashboard: https://mock-social-media-ad-perfomance-dashboard.i-akeilsandy.workers.dev/
