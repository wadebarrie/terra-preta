# Environment Variables Setup

## ✅ Build Warnings Fixed

The environment variable warnings during build have been resolved by:
1. Removing unused Vite environment variables from `index.html`
2. Using direct values for logo and title
3. Removing optional analytics script (can be re-added later)

## 🔧 Local Development

### 1. Environment File Created

A `.env` file has been created in the root directory with default values:

```bash
NODE_ENV=development
PORT=5001
DATABASE_URL=mysql://user:password@localhost:3306/terrapreta
SESSION_SECRET=change-this-in-production-to-a-random-string
```

### 2. Required Variables

For local development, you need:
- `DATABASE_URL` - Your MySQL connection string
- `SESSION_SECRET` - A random string for session encryption

### 3. Optional Variables

These are commented out by default:
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` - For S3 uploads
- `OPENAI_API_KEY` - For AI features
- `VITE_ANALYTICS_ENDPOINT`, `VITE_ANALYTICS_WEBSITE_ID` - For analytics

## 🚀 Netlify Deployment

### Required Environment Variables

Set these in Netlify Dashboard → Site settings → Environment variables:

#### Production Database
```bash
DATABASE_URL=your-production-mysql-url
```

#### Session Secret
```bash
SESSION_SECRET=your-secure-random-string-here
```

**Generate a secure secret:**
```bash
# On Mac/Linux:
openssl rand -base64 32

# Or use any random string generator
```

### Optional Environment Variables

Only add these if you're using the features:

#### AWS S3 (for file uploads)
```bash
AWS_ACCESS_KEY_ID=your-key
AWS_SECRET_ACCESS_KEY=your-secret
AWS_REGION=us-east-1
AWS_BUCKET_NAME=your-bucket
```

#### OpenAI (for AI features)
```bash
OPENAI_API_KEY=your-openai-key
```

#### Analytics (Umami or similar)
```bash
VITE_ANALYTICS_ENDPOINT=https://your-analytics-url
VITE_ANALYTICS_WEBSITE_ID=your-site-id
```

## 📝 What Changed

### Before (Had Warnings)
```html
<link rel="icon" href="%VITE_APP_LOGO%" />
<title>%VITE_APP_TITLE%</title>
<script src="%VITE_ANALYTICS_ENDPOINT%/umami"></script>
```

Build output:
```
⚠️ %VITE_APP_LOGO% is not defined
⚠️ %VITE_APP_TITLE% is not defined
⚠️ %VITE_ANALYTICS_ENDPOINT% is not defined
```

### After (No Warnings)
```html
<link rel="icon" href="/logo.png" />
<title>Terra Preta Organics</title>
<!-- Analytics removed - can be added back if needed -->
```

Build output:
```
✓ built in 4.54s
```

## 🎯 Best Practices

### Security
1. ✅ Never commit `.env` to Git (already in `.gitignore`)
2. ✅ Use different `SESSION_SECRET` for production
3. ✅ Rotate secrets regularly
4. ✅ Use strong, random strings for secrets

### Netlify
1. Set environment variables before first deploy
2. Redeploy after changing environment variables
3. Use Netlify's UI (more secure than committing to repo)
4. Different values for staging/production if needed

## 🔄 Adding Analytics Back (Optional)

If you want to add analytics tracking later:

### 1. Set Environment Variables in Netlify
```bash
VITE_ANALYTICS_ENDPOINT=https://analytics.example.com
VITE_ANALYTICS_WEBSITE_ID=your-website-id
```

### 2. Create Analytics Script Component

```typescript
// client/src/components/Analytics.tsx
export default function Analytics() {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
  
  if (!endpoint || !websiteId) return null;
  
  return (
    <script
      defer
      src={`${endpoint}/umami`}
      data-website-id={websiteId}
    />
  );
}
```

### 3. Add to Your App

```typescript
// Use React Helmet or similar to inject the script
```

## 📋 Quick Reference

| Variable | Required | Where to Set | Purpose |
|----------|----------|--------------|---------|
| `DATABASE_URL` | ✅ Yes | Netlify | Database connection |
| `SESSION_SECRET` | ✅ Yes | Netlify | Session encryption |
| `AWS_*` | ❌ Optional | Netlify | File uploads |
| `OPENAI_API_KEY` | ❌ Optional | Netlify | AI features |
| `VITE_ANALYTICS_*` | ❌ Optional | Netlify | Analytics |

## ✅ Verification

After deploying, check:

1. **Build completes without warnings** ✓
2. **Site loads correctly** ✓
3. **Logo appears in browser tab** ✓
4. **Page title is correct** ✓
5. **No console errors** ✓

## 🆘 Troubleshooting

### "Cannot connect to database"
- Check `DATABASE_URL` is set in Netlify
- Verify database credentials are correct
- Ensure database allows connections from Netlify

### "Session errors"
- Check `SESSION_SECRET` is set
- Redeploy after adding the variable

### Logo not appearing
- Verify `/logo.png` exists in `client/public/`
- Check file permissions

---

**All environment variable warnings are now resolved!** The build is clean and production-ready.

