# Netlify Deployment Guide

This guide covers deploying your Terra Preta site with Decap CMS to Netlify with full optimization.

## ✅ Pre-Deployment Checklist

- [x] Dependencies installed (`gray-matter`, `remark`, `remark-html`)
- [x] CMS configuration at `client/public/admin/`
- [x] Content files in `content/` directory
- [x] Netlify configuration in `netlify.toml`
- [x] Environment variables configured
- [x] TypeScript configured for JSON imports
- [x] Content loader utilities created
- [x] tRPC router for content access

## 🚀 Deployment Steps

### 1. Environment Variables

Set these in Netlify Dashboard → Site settings → Environment variables:

```bash
# Required
NODE_ENV=production
DATABASE_URL=your_production_database_url
SESSION_SECRET=your_secure_random_string

# Optional (if using features)
OPENAI_API_KEY=your_openai_key
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your_bucket
```

### 2. Deploy to Netlify

#### Option A: Connect via Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket:
```bash
git add .
git commit -m "Add CMS and optimize for Netlify"
git push origin main
```

2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose your Git provider
5. Select your repository
6. Netlify will auto-detect settings from `netlify.toml`
7. Click **"Deploy site"**

#### Option B: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### 3. Enable Netlify Identity & Git Gateway

**Critical for CMS to work:**

1. In Netlify Dashboard → **Site settings**
2. Go to **Identity** → Click **"Enable Identity"**
3. Under **Registration preferences**:
   - Select **"Invite only"** (recommended for security)
4. Under **External providers** (optional):
   - Enable GitHub, Google, etc. if desired
5. Under **Services** → **Git Gateway**:
   - Click **"Enable Git Gateway"**

### 4. Invite Users to CMS

1. Go to **Identity** tab in Netlify Dashboard
2. Click **"Invite users"**
3. Enter email addresses for team members
4. They'll receive an invitation email
5. They set their password and can access `/admin`

### 5. Configure Custom Domain (Optional)

1. **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Netlify)

## 🎯 Netlify-Specific Optimizations

### Build Settings (Already Configured)

```toml
[build]
  command = "pnpm run build"
  publish = "dist/public"
  functions = "netlify/functions"

[build.environment]
  NODE_VERSION = "20"
  PNPM_VERSION = "10"
```

### Performance Optimizations

#### 1. Image Caching
Static images are cached for 1 year (configured in `netlify.toml`):
- `/uploads/*` - User uploaded images
- `/*.jpg` - Static images
- `/*.png` - Logos and graphics

#### 2. Security Headers
Automatically applied:
- X-Frame-Options
- X-Content-Type-Options
- X-XSS-Protection
- Referrer-Policy

#### 3. SPA Routing
Configured to redirect all routes to `index.html` for client-side routing.

### Build Performance Tips

1. **Enable Build Caching** (automatic on Netlify)
2. **Use pnpm** for faster installs (already configured)
3. **Optimize dependencies** - only production deps are deployed

## 📊 Monitoring & Analytics

### Build Status

Monitor builds at: `https://app.netlify.com/sites/[your-site]/deploys`

### Deploy Notifications

Set up in **Site settings** → **Build & deploy** → **Deploy notifications**:
- Email on deploy success/failure
- Slack integration
- Webhook notifications

### Performance Monitoring

Netlify provides:
- Deploy time tracking
- Build log analysis
- Bandwidth usage
- Form submission tracking (if using Netlify Forms)

## 🔧 Troubleshooting

### Build Failures

**"Module not found"**
- Check that all dependencies are in `dependencies` not `devDependencies`
- Run `pnpm install` locally to verify

**"Out of memory"**
- Netlify provides 3GB RAM for builds
- Consider optimizing large dependencies

**"Build timeout"**
- Netlify allows 15 minutes for builds (free tier)
- Optimize build process if exceeding

### CMS Issues

**"Unable to load configuration"**
- Verify `client/public/admin/config.yml` is valid YAML
- Check that file is included in build output

**"Authentication failed"**
- Ensure Git Gateway is enabled
- Verify user invitation was accepted
- Try logging out and back in

**"Cannot save changes"**
- Check Git Gateway is enabled
- Verify user has write permissions
- Check Netlify Identity is active

### Content Not Updating

**Changes in CMS not showing:**
1. CMS commits to Git → triggers new build
2. Wait for build to complete (usually 1-2 minutes)
3. Check **Deploys** tab for build status
4. Clear browser cache if needed

## 🔐 Security Best Practices

### 1. Protect Admin Routes
Already configured - `/admin` requires authentication

### 2. Invite-Only Registration
Keep Identity set to "Invite only" to prevent unauthorized access

### 3. Environment Variables
- Never commit `.env` files
- Set production secrets in Netlify Dashboard
- Rotate secrets regularly

### 4. HTTPS
- Automatically enabled by Netlify
- Ensure all external resources use HTTPS

### 5. Content Security
- CMS changes are tracked in Git history
- Review Git commits regularly
- Use branch protection if needed

## 📈 Performance Benchmarks

Expected performance on Netlify:

- **Build time**: 1-3 minutes
- **Deploy time**: 30-60 seconds
- **First load**: < 2 seconds
- **Page transitions**: < 500ms
- **CMS load time**: < 1 second

## 🆘 Support Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [Netlify Community](https://answers.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)

## ✅ Post-Deployment Checklist

After deployment:

- [ ] Site loads at Netlify URL
- [ ] All pages render correctly
- [ ] Images load properly
- [ ] CMS admin accessible at `/admin`
- [ ] Can log in to CMS
- [ ] Can edit and publish content
- [ ] Content changes trigger rebuilds
- [ ] Forms work (if applicable)
- [ ] Analytics tracking (if configured)
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

## 🎉 You're Live!

Your Terra Preta site is now live on Netlify with a fully functional CMS!

**Your URLs:**
- **Public Site**: `https://[your-site-name].netlify.app`
- **CMS Admin**: `https://[your-site-name].netlify.app/admin`
- **Netlify Dashboard**: `https://app.netlify.com/sites/[your-site-name]`

## 🚀 Next Steps

1. Test all functionality in production
2. Set up custom domain (optional)
3. Configure deploy notifications
4. Invite team members to CMS
5. Start creating content!
6. Set up backup strategy (Git history is automatic)
7. Monitor site performance and usage

