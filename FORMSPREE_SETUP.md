# Formspree Setup Guide

Your contact form is now configured to use **Formspree** - a simple, serverless form backend.

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io/)
2. Sign up (free - no credit card needed)
3. Create a new form called "Contact"

### Step 2: Get Your Form Endpoint
After creating the form, you'll get an endpoint like:
```
https://formspree.io/f/xyzabc123
```

### Step 3: Add to Environment Variable
In your project, update the form submission URL:

**File:** `client/src/pages/Contact.tsx`

Find this line (around line 35):
```typescript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
```

Replace `YOUR_FORM_ID` with your actual Formspree form ID.

**Example:**
```typescript
const response = await fetch("https://formspree.io/f/xyzabc123", {
```

### Step 4: Deploy and Test!
```bash
git add .
git commit -m "Add Formspree contact form"
git push origin main
```

That's it! Your form is ready. 🎉

---

## ✨ Formspree Features (Free Tier)

### Included Free:
- ✅ **50 submissions/month**
- ✅ **Email notifications** - Get submissions via email
- ✅ **Spam protection** - reCAPTCHA & Akismet
- ✅ **File uploads** - Up to 10MB per form
- ✅ **Webhooks** - Send data to other services
- ✅ **Auto-responder** - Send confirmation emails
- ✅ **Form dashboard** - View submissions online
- ✅ **Export** - Download as CSV
- ✅ **AJAX support** - Already implemented ✓

### Paid Plans (if you need more):
- **Gold**: $10/month - 1,000 submissions
- **Platinum**: $40/month - 10,000 submissions

---

## 📧 Email Configuration

### Set Notification Email
1. In Formspree dashboard, click on your form
2. Go to **Settings** → **Email**
3. Enter: `sales@terrapreta.ca` (or your preferred email)
4. Save

Now you'll receive an email for every submission! 📨

### Custom Subject Line
Already configured in the code:
```typescript
_subject: `New Contact Form: ${formData.company}`,
```

This sends: "New Contact Form: [Company Name]" in email subject.

---

## 🎨 Custom Settings (Optional)

### 1. Custom Thank You Page
In Formspree dashboard:
- Settings → Redirect
- Enter: `https://your-site.com/thank-you`

Or keep the current toast notification (already implemented).

### 2. Auto-Reply Email
In Formspree dashboard:
- Settings → Auto-Responder
- Enable and customize the message
- Users get instant confirmation email

### 3. reCAPTCHA
In Formspree dashboard:
- Settings → Spam Protection
- Enable reCAPTCHA v2 or v3
- No code changes needed!

### 4. Form Rules
- Require certain fields
- Block specific domains
- Rate limiting
- All configured in dashboard

---

## 🧪 Testing Your Form

### Local Testing
1. Run: `pnpm dev`
2. Fill out the form
3. Click submit
4. **Should work!** ✅ Formspree works in development

### Production Testing
1. Deploy to Netlify
2. Visit your live site
3. Submit the form
4. Check your email for notification
5. Check Formspree dashboard for submission

---

## 📊 Viewing Submissions

### In Formspree Dashboard:
1. Log into [formspree.io](https://formspree.io)
2. Click on "Contact" form
3. See all submissions with:
   - Date/time
   - All form fields
   - User's email
   - IP address
   - Export option

### Via Email:
You'll receive an email with all form details:
```
New submission from Contact form

Role: Reclamation Consultant
Company: ABC Corp
Email: john@abc.com
Phone: (403) 555-1234
Site Size: 25 acres
...
```

---

## 🔒 Security & Spam Protection

### Built-in Protection:
- ✅ **reCAPTCHA** - Optional, enable in dashboard
- ✅ **Akismet** - Automatic spam filtering
- ✅ **Rate limiting** - Prevents abuse
- ✅ **Email verification** - Validates email addresses
- ✅ **Honeypot field** - Can add if needed

### GDPR Compliance:
- ✅ Data stored securely
- ✅ Can delete submissions anytime
- ✅ EU data center option (paid plans)
- ✅ Privacy policy integration

---

## 🆚 Formspree vs Netlify Forms

| Feature | Formspree | Netlify Forms |
|---------|-----------|---------------|
| **Free submissions** | 50/month | 100/month |
| **Works on any host** | ✅ Yes | ❌ Netlify only |
| **Setup complexity** | ⭐ Super easy | ⭐⭐ Medium |
| **Email notifications** | ✅ Built-in | ✅ Built-in |
| **Dashboard** | ✅ Yes | ✅ Yes |
| **Spam protection** | ✅ reCAPTCHA & Akismet | ✅ reCAPTCHA |
| **File uploads** | ✅ 10MB | ✅ 8MB |
| **Auto-responder** | ✅ Yes | ❌ No |
| **Webhooks** | ✅ Yes | ✅ Yes |
| **Works in dev** | ✅ Yes | ❌ No |

**Recommendation:** Formspree is better for:
- Multi-platform deployment
- Local development testing
- Simpler setup
- Auto-responder emails

---

## 💡 Pro Tips

### 1. Test in Development
Unlike Netlify Forms, Formspree works locally:
```bash
pnpm dev
# Form works even on localhost! 🎉
```

### 2. Use Environment Variables
For better security, store the form ID:

```typescript
// .env
VITE_FORMSPREE_ID=xyzabc123

// In code:
fetch(`https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID}`, {
```

### 3. Add Analytics
Formspree provides:
- Submission trends
- Response times
- Popular fields
- Geographic data (paid)

### 4. Multiple Forms
Create separate Formspree forms for:
- Contact form
- Quote requests
- Job applications
- Newsletter signup

Each gets its own endpoint!

---

## 🐛 Troubleshooting

### Issue: CORS Error
**Solution:** Already handled! We use proper headers:
```typescript
headers: { "Content-Type": "application/json" }
```

### Issue: Submissions Not Arriving
**Check:**
1. Is Form ID correct?
2. Is email address verified in Formspree?
3. Check spam folder
4. Check Formspree dashboard directly

### Issue: Spam Submissions
**Solution:**
1. Enable reCAPTCHA in dashboard
2. Add honeypot field
3. Use email verification
4. Enable Akismet

---

## 📞 Support

### Formspree Support:
- Email: help@formspree.io
- Docs: https://help.formspree.io/
- Response time: Usually < 24 hours

### Your Implementation:
- All code is in: `client/src/pages/Contact.tsx`
- Single file to manage
- No server-side code needed

---

## ✅ Final Checklist

Before going live:

- [ ] Created Formspree account
- [ ] Created "Contact" form in dashboard
- [ ] Updated form ID in `Contact.tsx`
- [ ] Set notification email in Formspree
- [ ] Tested form submission
- [ ] Verified email arrives
- [ ] (Optional) Enabled reCAPTCHA
- [ ] (Optional) Set up auto-responder
- [ ] Deployed to production

---

## 🎉 You're Done!

Your contact form is now powered by Formspree and will:
- ✅ Work on any hosting platform
- ✅ Work in development
- ✅ Send you email notifications
- ✅ Store submissions securely
- ✅ Protect against spam
- ✅ Scale automatically

**No server needed. No complex setup. Just works! 🚀**

---

**Questions?** Check the [Formspree documentation](https://help.formspree.io/) or reach out to their support team.

