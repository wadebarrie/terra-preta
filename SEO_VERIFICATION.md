# SEO Verification Checklist

After you deploy, use this checklist to verify everything is working:

## ✅ Google Analytics

### Test 1: Real-Time Tracking
1. Deploy your site to Netlify
2. Visit your site: `https://your-site.netlify.app`
3. Open Google Analytics: https://analytics.google.com/
4. Go to Reports → Realtime
5. **Verify:** You should see your visit in real-time

### Test 2: DataLayer
1. On your site, open browser DevTools (F12)
2. Go to Console tab
3. Type: `window.dataLayer`
4. **Verify:** Should show array with GA events

---

## ✅ Meta Tags & Open Graph

### Test 1: Facebook Sharing
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL: `https://your-site.netlify.app`
3. Click "Debug"
4. **Verify:**
   - ✅ Title appears correctly
   - ✅ Description shows
   - ✅ Image displays (`/pellets-in-hand.jpg`)

### Test 2: Twitter Card
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL
3. **Verify:**
   - ✅ Card preview shows
   - ✅ Large image format
   - ✅ Correct title and description

### Test 3: LinkedIn Preview
1. Go to: https://www.linkedin.com/post-inspector/inspect/
2. Enter your URL
3. **Verify:** Preview shows correctly

---

## ✅ Structured Data (Most Important!)

### Test 1: Rich Results Test
1. Go to: https://search.google.com/test/rich-results
2. Enter your HOME page URL
3. **Verify:**
   - ✅ Organization detected
   - ✅ Local Business detected
   - ✅ No errors

### Test 2: Product Page
1. Same tool: https://search.google.com/test/rich-results
2. Enter: `https://your-site.netlify.app/product/terra-revive`
3. **Verify:**
   - ✅ Product detected
   - ✅ Price shown ($1.50-$1.75)
   - ✅ Availability: In Stock
   - ✅ Brand: Terra Preta Organics

### Test 3: Schema Markup Validator
1. Go to: https://validator.schema.org/
2. Enter your URL
3. **Verify:** 
   - ✅ All schemas valid
   - ✅ No warnings
   - ✅ Green checkmarks

---

## ✅ Files Accessible

### Test 1: robots.txt
```
https://your-site.netlify.app/robots.txt
```
**Should show:**
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Sitemap: https://terrapretaorganics.ca/sitemap.xml
```

### Test 2: sitemap.xml
```
https://your-site.netlify.app/sitemap.xml
```
**Should show:** XML file with all your pages listed

---

## ✅ Google Search Console (Do This!)

### Step 1: Add Property
1. Go to: https://search.google.com/search-console
2. Click "Add Property"
3. Choose "URL prefix"
4. Enter: `https://your-site.netlify.app`

### Step 2: Verify Ownership
**Option A: HTML Tag (Easiest)**
1. Choose "HTML tag" method
2. Copy the meta tag like: `<meta name="google-site-verification" content="abc123..." />`
3. Add it to `client/index.html` in the `<head>` section
4. Redeploy
5. Click "Verify"

**Option B: Google Analytics**
- If GA is working, you can verify using that method

### Step 3: Submit Sitemap
1. In Search Console, go to "Sitemaps"
2. Enter: `sitemap.xml`
3. Click "Submit"
4. **Verify:** Status shows "Success"

### Step 4: Check Coverage
1. Wait 24-48 hours
2. Go to "Coverage" report
3. **Verify:** Pages are being indexed

---

## ✅ Performance Tests

### Test 1: PageSpeed Insights
1. Go to: https://pagespeed.web.dev/
2. Enter your URL
3. **Targets:**
   - Performance: 80+
   - Accessibility: 90+
   - Best Practices: 90+
   - SEO: 90+

### Test 2: Mobile-Friendly Test
1. Go to: https://search.google.com/test/mobile-friendly
2. Enter your URL
3. **Verify:** ✅ Page is mobile-friendly

---

## ✅ View Page Source

### Manual Check
1. Visit your deployed site
2. Right-click → "View Page Source"
3. **Look for:**

```html
<!-- Should see Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-2RWSMCV2DD"></script>

<!-- Should see meta tags -->
<meta name="description" content="Terra Preta Organics..." />
<meta property="og:title" content="..." />
<meta name="twitter:card" content="summary_large_image" />

<!-- Should see structured data (in body) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  ...
}
</script>
```

---

## 📊 Timeline for Results

### Immediate (After Deployment)
- ✅ Google Analytics starts tracking
- ✅ Meta tags work in social shares
- ✅ Structured data detected by validators

### 1-3 Days
- 📈 Google starts crawling
- 📈 Pages begin to index
- 📈 Search Console shows data

### 1-2 Weeks
- 📈 Site appears in branded searches (company name)
- 📈 Rich snippets may start appearing
- 📈 Basic search presence

### 1-3 Months
- 🎯 Ranking for competitive keywords
- 🎯 Organic traffic grows
- 🎯 Knowledge panel may appear

---

## 🚨 Common Issues & Fixes

### Issue: GA Not Tracking
**Fix:** 
- Check browser console for errors
- Verify GA ID: `G-2RWSMCV2DD`
- Check if ad blocker is active
- Wait 24 hours for data to appear in reports

### Issue: Structured Data Not Detected
**Fix:**
- View page source - is the JSON-LD present?
- Check for JavaScript errors (prevents injection)
- Try in incognito mode
- Clear cache and retry

### Issue: Social Preview Not Showing Image
**Fix:**
- Verify image exists: `/pellets-in-hand.jpg`
- Check image is accessible (not 404)
- Use absolute URL in production
- Facebook: Use Debug tool to "Fetch new information"

### Issue: Sitemap Not Accessible
**Fix:**
- Check file is in `client/public/sitemap.xml`
- Verify it's deployed to Netlify
- Check URL exactly: `sitemap.xml` (no slash before)

---

## ✅ Final Checklist

Before considering SEO complete:

- [ ] Site is deployed to Netlify
- [ ] Google Analytics shows real-time visitors
- [ ] Rich Results Test passes (no errors)
- [ ] Open Graph tags validated
- [ ] robots.txt accessible
- [ ] sitemap.xml accessible
- [ ] Google Search Console verified
- [ ] Sitemap submitted to Search Console
- [ ] Mobile-friendly test passes
- [ ] PageSpeed score acceptable (80+)

---

## 📞 Support

If you need help with any of these tests:

1. **GA Not Working:** Check browser console for errors
2. **Structured Data Errors:** Use Schema Validator for details
3. **Search Console Issues:** Check Google's help docs
4. **General SEO:** Consider hiring an SEO consultant

---

## 🎉 You're Done When...

✅ All tests above pass  
✅ Google Search Console is verified  
✅ Sitemap is submitted  
✅ Rich Results Test shows no errors  
✅ Google Analytics is tracking  

**Your site is now fully SEO optimized and ready to rank! 🚀**

---

## 📅 Next Steps

1. **Week 1:** Monitor GA for traffic, check Search Console for crawl errors
2. **Week 2:** Review indexed pages, fix any issues
3. **Month 1:** Analyze keyword performance, adjust content
4. **Month 3:** Review rankings, optimize high-potential pages
5. **Ongoing:** Create fresh content, build backlinks, monitor competitors

**Good luck with your SEO journey!** 🎊

