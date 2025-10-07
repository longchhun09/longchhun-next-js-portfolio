# 🚀 Deploy to Vercel Guide

## Prerequisites
- Vercel account (sign up at https://vercel.com)
- Git repository pushed to GitHub/GitLab/Bitbucket
- Vercel CLI installed (already have it!)

## Option 1: Deploy via Vercel CLI (Fastest) ⚡

### Step 1: Login to Vercel
```bash
vercel login
```

### Step 2: Deploy to Production
```bash
vercel --prod
```

That's it! The CLI will:
- Link your project to Vercel (first time only)
- Build your Next.js app
- Deploy to production
- Give you a live URL

## Option 2: Deploy via Vercel Dashboard (Recommended for continuous deployment) 🔄

1. Go to https://vercel.com/new
2. Import your Git repository
3. Configure project settings (Vercel auto-detects Next.js)
4. Click "Deploy"

Vercel will automatically:
- Deploy on every git push to main branch
- Generate preview URLs for pull requests
- Handle SSL certificates
- Set up CDN globally

## Option 3: Manual Git + Vercel CLI

### Step 1: Commit recent changes
```bash
git add .
git commit -m "feat: add blog images and update content"
git push origin main
```

### Step 2: Deploy with Vercel
```bash
vercel --prod
```

## Environment Variables (if needed)

If you have any environment variables:
1. Create `.env.local` file (already in .gitignore)
2. Add them in Vercel Dashboard → Project Settings → Environment Variables

## Build Settings (Auto-detected by Vercel)

```
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
Install Command: npm install
```

## Post-Deployment

Your site will be live at:
- Production: https://your-project.vercel.app
- Custom domain: Configure in Vercel Dashboard

## Troubleshooting

If build fails:
1. Test build locally: `npm run build`
2. Check Vercel build logs
3. Ensure all dependencies are in package.json

## Additional Features

Vercel provides:
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Analytics (already integrated in your code!)
- ✅ Speed Insights (already integrated!)
- ✅ Preview deployments
- ✅ Instant rollbacks

