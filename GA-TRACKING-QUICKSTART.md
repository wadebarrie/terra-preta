# Quick Start: Google Analytics Qualified Lead Tracking

## ✅ What's Implemented

Your website now tracks `qualified_lead` events in Google Analytics 4 for:
1. **Email clicks** - Any `mailto:` link (automatic)
2. **Form submissions** - Contact form submissions (automatic)
3. **Phone clicks** - Any `tel:` link (automatic, when you add phone links)

---

## 📍 Where Events Fire

### Current Locations:
- ✅ **Contact page email link** - `sales@terrapreta.ca`
- ✅ **Footer email link** - `sales@terrapreta.ca`
- ✅ **Contact form submission** - After successful Formspree submission

### To Add Phone Tracking:
Currently, you have **no phone links** on your site. When you add them (using `href="tel:+1234567890"`), they'll automatically be tracked.

---

## 🧪 Testing

### In Development:
1. Run `npm run dev`
2. Open browser console (F12)
3. Click an email link or submit form
4. Look for: `✅ GA4 Event: qualified_lead (method)`

### In Production:
1. Open **Google Analytics 4** → **Reports** → **Realtime**
2. Visit your site and click an email link
3. Event should appear within ~5 seconds

---

## 📊 View in Google Analytics

### Quick View:
**Reports → Engagement → Events**  
Look for the `qualified_lead` event

### By Method:
Click into `qualified_lead` → See breakdown:
- `email` - Email link clicks
- `form` - Form submissions
- `phone` - Phone link clicks (when added)

### Make it a Conversion:
**Admin → Events → qualified_lead → Mark as conversion**

---

## 🔧 Files Modified

1. **Created:** `client/src/lib/analytics.ts` - Tracking functions
2. **Modified:** `client/src/App.tsx` - Initialize tracking
3. **Modified:** `client/src/pages/Contact.tsx` - Track form submissions

---

## 📱 Want to Add Phone Tracking?

Add phone links like this:

```tsx
<a href="tel:+14035551234">(403) 555-1234</a>
```

They'll **automatically** be tracked - no extra code needed!

---

## 🎯 Event Details

**Event Name:** `qualified_lead`

**Parameters:**
- `method`: email | form | phone
- `event_category`: engagement
- `event_label`: (same as method)
- Plus: email address, phone number, or form data

---

## 📖 Full Documentation

See `GOOGLE-ANALYTICS-TRACKING.md` for:
- Complete implementation details
- Event structure
- Troubleshooting guide
- Custom tracking examples
- Future enhancements

---

**Status:** ✅ Ready to use  
**Build:** ✅ Passing  
**GA4 ID:** G-2RWSMCV2DD
