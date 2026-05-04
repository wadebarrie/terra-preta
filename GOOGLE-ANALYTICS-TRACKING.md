# Google Analytics Qualified Lead Tracking

## Overview

The website now automatically tracks `qualified_lead` events in Google Analytics 4 whenever a visitor:
1. **Clicks an email link** (`mailto:`)
2. **Submits the contact form**
3. **Clicks a phone number link** (`tel:`)

---

## Implementation Summary

### Files Created/Modified

1. **Created: `client/src/lib/analytics.ts`**
   - Core analytics utility functions
   - Automatic event tracking for email and phone links
   - Manual tracking function for form submissions

2. **Modified: `client/src/App.tsx`**
   - Added `useEffect` hook to initialize tracking on app mount
   - Automatically attaches click listeners to all email/phone links

3. **Modified: `client/src/pages/Contact.tsx`**
   - Added `trackFormSubmission()` call after successful form submission
   - Includes form metadata (role, company, site size, timeline)

---

## How It Works

### Automatic Tracking (Email & Phone Links)

The tracking system uses **event delegation** to automatically detect and track clicks on:
- Any link with `href="mailto:..."` 
- Any link with `href="tel:..."`

**Example:**
```tsx
// This link will automatically track when clicked
<a href="mailto:chris@terrapreta.ca">Contact Us</a>

// This link will automatically track when clicked  
<a href="tel:+14035551234">Call Us</a>
```

No additional code is needed for these links - they're tracked automatically!

### Manual Tracking (Form Submissions)

The contact form explicitly calls `trackFormSubmission()` after a successful Formspree submission:

```typescript
trackFormSubmission({
  role: formData.role,
  company: formData.company,
  siteSize: formData.siteSize,
  timeline: formData.timeline,
});
```

---

## Google Analytics Event Structure

### Event Name
`qualified_lead`

### Event Parameters

#### Email Click Events
```javascript
{
  event_category: 'engagement',
  event_label: 'email',
  method: 'email',
  email_address: 'chris@terrapreta.ca',
  link_url: 'mailto:chris@terrapreta.ca'
}
```

#### Phone Click Events
```javascript
{
  event_category: 'engagement',
  event_label: 'phone',
  method: 'phone',
  phone_number: '+14035551234',
  link_url: 'tel:+14035551234'
}
```

#### Form Submission Events
```javascript
{
  event_category: 'engagement',
  event_label: 'form',
  method: 'form',
  form_name: 'contact_form',
  role: 'Reclamation Consultant',
  company: 'Example Corp',
  siteSize: '50',
  timeline: '1-2 months'
}
```

---

## Where Events Are Tracked

### Current Tracking Locations

1. **Contact Page** (`/contact`)
   - Email link: `chris@terrapreta.ca` (in contact card)
   - Form submission: Multi-step contact form

2. **Footer** (all pages)
   - Email link: `chris@terrapreta.ca`

3. **Future-Proof**
   - Any new email or phone links added anywhere on the site will automatically be tracked
   - No additional code needed

---

## Viewing Data in Google Analytics

### 1. In GA4 Real-Time Reports
1. Go to **Reports → Realtime**
2. Test by clicking an email link or submitting the form
3. Look for `qualified_lead` events in the event stream

### 2. In GA4 Events Report
1. Go to **Reports → Engagement → Events**
2. Find the `qualified_lead` event
3. Click to see detailed breakdown by `method` (email/form/phone)

### 3. Creating a Custom Report
You can create a custom report to see:
- Total qualified leads by method
- Qualified leads by company
- Qualified leads by timeline
- Qualified leads by site size

### 4. Setting Up Conversions
Mark `qualified_lead` as a conversion:
1. Go to **Admin → Events**
2. Find `qualified_lead`
3. Toggle "Mark as conversion"

---

## Testing the Implementation

### Local Testing

1. **Start the dev server:**
   ```bash
   npm run dev
   ```

2. **Open browser console** (F12)

3. **Test email click:**
   - Click any `mailto:` link
   - Should see: `✅ GA4 Event: qualified_lead (email)`

4. **Test form submission:**
   - Fill out and submit contact form
   - Should see: `✅ GA4 Event: qualified_lead (form)`

5. **Test phone click:**
   - Click any `tel:` link (when added)
   - Should see: `✅ GA4 Event: qualified_lead (phone)`

### Production Testing

1. Deploy your changes
2. Open **GA4 Real-Time** reports
3. Visit your website
4. Click email links or submit the form
5. Verify events appear in real-time report within ~5 seconds

---

## Adding Phone Links

Currently, there are **no phone links** on your site. To add trackable phone links:

### Example 1: In the Contact Page

```tsx
// In Contact.tsx - add a new contact card
<Card>
  <CardContent className="pt-6 text-center">
    <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
    <h3 className="font-semibold mb-2">Phone</h3>
    <p className="text-muted-foreground">
      <a
        href="tel:+14035551234"
        className="hover:text-foreground transition-colors"
      >
        (403) 555-1234
      </a>
    </p>
  </CardContent>
</Card>
```

### Example 2: In the Footer

```tsx
// In Footer.tsx
<p className="text-sm text-muted-foreground">
  <a href="tel:+14035551234" className="hover:text-foreground transition-colors">
    (403) 555-1234
  </a>
</p>
```

**Important:** Use proper phone number format:
- Include country code: `tel:+1`
- No spaces or special characters: `tel:+14035551234`
- Display format can include formatting: `(403) 555-1234`

---

## Custom Tracking

If you want to track additional qualified lead events (e.g., chat widget, download), use:

```typescript
import { trackQualifiedLead } from "@/lib/analytics";

// Track a custom qualified lead event
trackQualifiedLead('custom_method', {
  custom_field: 'value',
  another_field: 'data'
});
```

---

## Troubleshooting

### Events Not Showing Up

1. **Check browser console** for the `✅ GA4 Event` messages
2. **Verify Google Analytics ID** in `client/index.html` (currently: `G-2RWSMCV2DD`)
3. **Check ad blockers** - they may block GA4
4. **Wait 24-48 hours** for events to appear in standard reports (real-time is instant)

### Console Shows Warning

If you see: `⚠️ Google Analytics (gtag) not available`
- Check that the GA4 script is loading in `client/index.html`
- Check browser console for script loading errors
- Verify network tab shows successful load of `gtag/js`

---

## Future Enhancements

### Potential Additions:

1. **Track CTA button clicks** (e.g., "Get a Quote" buttons)
2. **Track calculator usage** (Pellet Selector, Cost & Payback)
3. **Track PDF downloads** (SDS/TDS documents)
4. **Track video plays** (if added)
5. **Track scroll depth** on key pages

### Adding New Tracking:

```typescript
// Import the function
import { trackQualifiedLead } from "@/lib/analytics";

// Add to button click handler
<Button onClick={() => {
  trackQualifiedLead('cta', { 
    button_text: 'Get a Quote',
    page: window.location.pathname 
  });
}}>
  Get a Quote
</Button>
```

---

## Summary

✅ **Email tracking:** Automatic  
✅ **Form tracking:** Automatic (triggers on successful submission)  
✅ **Phone tracking:** Automatic (when phone links are added)  
✅ **Console logging:** Shows tracking events in development  
✅ **Production ready:** Works in production environment  

**No ongoing maintenance required** - the tracking will automatically work for all current and future email/phone links on your site!

---

**Created:** February 23, 2026  
**GA4 Property:** G-2RWSMCV2DD  
**Event Name:** `qualified_lead`  
**Status:** ✅ Active and tracking
