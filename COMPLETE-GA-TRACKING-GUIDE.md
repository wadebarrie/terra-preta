# Complete Google Analytics Tracking Implementation

## 🎯 Overview

Your website now has **comprehensive lead generation and user behavior tracking** that provides deep insights into:
- **Lead quality** (qualified leads with intent signals)
- **User engagement** (calculators, CTAs, documents, scroll depth)
- **Conversion funnel** (user journey patterns)
- **Content effectiveness** (time on page, scroll depth)

---

## 📊 Events Tracked (10 Types)

### 1. **`qualified_lead`** - Primary Conversion Goal
**Value:** 100 points

Tracks when a visitor becomes a qualified lead through:
- **Email clicks** (`mailto:` links)
- **Form submissions** (contact form)
- **Phone clicks** (`tel:` links - when you add them)

**Parameters:**
```javascript
{
  method: 'email' | 'form' | 'phone',
  event_category: 'engagement',
  value: 100,
  // Plus method-specific data
}
```

**Why it matters:** Direct lead generation measurement

---

### 2. **`calculator_completed`** - High Intent Signal
**Value:** 50 points

Tracks when someone completes a calculator (strong buying intent):
- **Pellet Selector** - Site planning, application method research
- **Cost & Payback** - Budget planning, ROI evaluation

**Parameters Tracked:**
```javascript
// Pellet Selector
{
  calculator_name: 'pellet_selector',
  acres: 50,
  method: 'hydroseeding',
  recommended_rate: 4000,
  total_pounds: 200000,
  totes_needed: 115,
  soil_texture: 'clay',
  ph_value: '6.5',
  compaction: 'severe',
  value: 50
}

// Cost & Payback
{
  calculator_name: 'cost_payback',
  acres: 50,
  application_rate: 4000,
  product_cost: 201250,
  re_visits_avoided: 2,
  estimated_savings: 10000,
  net_cost: 191250,
  roi_positive: false,
  value: 50
}
```

**Why it matters:** Users doing calculations are actively planning purchases. Track which calculators lead to conversions.

---

### 3. **`cta_click`** - Engagement Signal
**Value:** 25 points

Automatically tracks clicks on Call-To-Action buttons with keywords:
- "Get a Quote"
- "Contact Us"
- "Get Started"
- "Request"
- "Start a Pilot"
- "Add to Quote"
- "Calculate"
- "Download"
- "Learn More"

**Parameters:**
```javascript
{
  button_text: 'Get a Quote',
  destination: '/contact',
  location: '/product/terra-revive',
  value: 25
}
```

**Why it matters:** Understand which CTAs drive action and which pages generate the most interest.

---

### 4. **`document_download`** - Technical Interest
**Value:** 30 points

Tracks downloads of technical documents:
- **SDS** (Safety Data Sheet)
- **TDS** (Technical Data Sheet)
- **Spec Packs**
- **Case Studies** (when downloaded)
- **Method Statements** (when downloaded)

**Parameters:**
```javascript
{
  document_name: 'Safety Data Sheet',
  document_type: 'sds',
  value: 30
}
```

**Why it matters:** Users downloading technical docs are doing serious evaluation. Track which documents lead to conversions.

---

### 5. **`scroll_depth`** - Content Engagement
**No monetary value** (engagement metric)

Automatically tracks when users scroll to:
- **25%** of page
- **50%** of page
- **75%** of page
- **90%** of page

**Parameters:**
```javascript
{
  percent_scrolled: 75,
  page_path: '/solutions/reclamation',
  event_category: 'engagement'
}
```

**Why it matters:** Understand which content keeps users engaged. Identify pages that need improvement.

---

### 6. **`time_on_page`** - Content Quality
**No monetary value** (engagement metric)

Tracks time spent on each page (only if > 10 seconds).

**Parameters:**
```javascript
{
  time_seconds: 245,
  page_path: '/product/terra-revive',
  event_category: 'engagement'
}
```

**Why it matters:** High time = valuable content. Low time = bounce/poor content.

---

### 7. **`high_intent_journey`** - Conversion Path Insight
**Value:** 75 points

Tracks when users follow a high-intent pattern:
- **Product page** → **Calculator** → **Contact page**

**Parameters:**
```javascript
{
  journey_pattern: '/product/terra-revive → /calculator/pellet-selector → /contact',
  event_label: 'product_calculator_contact',
  value: 75
}
```

**Why it matters:** Identify your best-converting user journeys. Optimize pages in this flow.

---

### 8. **`page_view`** - Enhanced Navigation
**No monetary value** (navigation metric)

Tracks page views with additional context.

**Parameters:**
```javascript
{
  page_path: '/solutions/reclamation',
  page_title: 'Reclamation Sites Solutions',
  page_category: 'solution'
}
```

**Categories tracked:**
- `solution` - Solution pages
- `product` - Product pages
- `calculator` - Calculator tools
- `evidence` - Evidence/case studies
- `about` - About/company info
- `contact` - Contact page

**Why it matters:** Segment analysis by page type. Understand which categories drive conversions.

---

### 9. **User Journey Tracking** (Session Storage)
**Not sent to GA directly** - Powers `high_intent_journey` event

Stores last 20 pages visited in session to:
- Detect conversion patterns
- Understand user flow
- Identify drop-off points

**Why it matters:** Understand the full user journey, not just isolated page views.

---

### 10. **User Properties** (Segmentation)
**Not an event** - User-level attributes

Sets properties for segmentation:
- `last_page_category` - Most recent page type visited

**Why it matters:** Create audiences and segments based on user behavior.

---

## 🎁 Automatic Features

### ✅ What Works Automatically (No Code Changes Needed)

1. **Email Link Tracking**
   - Any `mailto:` link anywhere on site
   - Existing: Contact page, Footer

2. **Phone Link Tracking**
   - Any `tel:` link anywhere on site
   - Ready for when you add phone numbers

3. **CTA Button Tracking**
   - Buttons with common CTA text
   - Works for existing and future buttons

4. **Scroll Depth Tracking**
   - All pages automatically tracked
   - 25%, 50%, 75%, 90% thresholds

5. **Time on Page Tracking**
   - All pages automatically tracked
   - Only counts if > 10 seconds

6. **User Journey Tracking**
   - Tracks navigation between pages
   - Detects high-intent patterns

---

## 📈 Value Scoring System

Every event has a **value** score to help prioritize leads:

| Event | Value | Intent Level |
|-------|-------|--------------|
| `qualified_lead` (form) | 100 | 🔥🔥🔥 Highest |
| `qualified_lead` (email) | 100 | 🔥🔥🔥 Highest |
| `qualified_lead` (phone) | 100 | 🔥🔥🔥 Highest |
| `high_intent_journey` | 75 | 🔥🔥 Very High |
| `calculator_completed` | 50 | 🔥🔥 High |
| `document_download` | 30 | 🔥 Medium-High |
| `cta_click` | 25 | 🔥 Medium |

**Lead Scoring Example:**
```
User A (Hot Lead):
- Calculator: 50 points
- Document download: 30 points
- CTA clicks: 50 points (2 clicks)
- Form submission: 100 points
= 230 points total

User B (Warm Lead):
- CTA clicks: 25 points
- Scroll depth 90%: engagement signal
- Time on page 3 mins: engaged
= 25 points, but engaged
```

---

## 🎯 Key Insights You Can Get

### 1. Lead Quality Analysis
**Question:** Which source generates the best leads?

**How to measure:**
- Segment by `utm_source`
- Compare average value per session
- Look at qualified_lead conversion rate

### 2. Calculator ROI
**Question:** Do calculators lead to conversions?

**How to measure:**
- Create audience: "Completed Calculator"
- Compare conversion rate vs non-calculator users
- Track calculator → contact form flow

### 3. Content Effectiveness
**Question:** Which pages are most valuable?

**How to measure:**
- Sort pages by average event value
- Check scroll depth by page
- Compare time on page vs bounce rate

### 4. Conversion Path Optimization
**Question:** What path do buyers take?

**How to measure:**
- Analyze `high_intent_journey` events
- Use Funnel Analysis in GA4
- Track most common page sequences

### 5. Document Impact
**Question:** Do technical docs lead to sales?

**How to measure:**
- Create audience: "Downloaded SDS/TDS"
- Check conversion rate
- Segment by document type

---

## 📊 Google Analytics Setup

### 1. Mark Events as Conversions

**Admin → Events → Mark as Conversion:**
- ✅ `qualified_lead` (primary conversion)
- ✅ `calculator_completed` (secondary conversion)
- ✅ `high_intent_journey` (tertiary conversion)

### 2. Create Custom Reports

**Recommended Reports:**

**A. Lead Generation Overview**
- Events: `qualified_lead`
- Dimension: `method` (email/form/phone)
- Metric: Count, Value

**B. Calculator Performance**
- Events: `calculator_completed`
- Dimension: `calculator_name`
- Metrics: Completions, Average values (acres, rate, cost)

**C. Content Engagement**
- Events: `scroll_depth`, `time_on_page`
- Dimension: `page_path`
- Metrics: Average scroll %, Average time

**D. CTA Effectiveness**
- Events: `cta_click`
- Dimension: `button_text`, `location`
- Metric: Clicks, subsequent qualified_leads

### 3. Create Audiences

**High-Intent Users:**
- Condition: `calculator_completed` OR `document_download`
- Use for: Remarketing, priority follow-up

**Product Researchers:**
- Condition: Visited `/product/*` AND `time_on_page` > 60s
- Use for: Product content optimization

**Near-Converters:**
- Condition: `cta_click` count >= 2, no `qualified_lead`
- Use for: Remarketing, reducing friction

### 4. Set Up Explorations

**Funnel Analysis:**
```
Step 1: Land on site
Step 2: View product page
Step 3: Use calculator
Step 4: qualified_lead
```

**Path Exploration:**
- Starting point: Home page
- Ending point: Contact form
- View most common paths

---

## 🧪 Testing Guide

### Development Testing

1. **Start dev server:**
   ```bash
   npm run dev
   ```

2. **Open browser console** (F12)

3. **Test each event type:**

   **✅ Email Click:**
   - Click any `mailto:` link
   - Console: `✅ GA4 Event: qualified_lead (email)`

   **✅ Form Submission:**
   - Submit contact form
   - Console: `✅ GA4 Event: qualified_lead (form)`

   **✅ Calculator:**
   - Complete Pellet Selector
   - Console: `✅ GA4 Event: calculator_completed (pellet_selector)`

   **✅ CTA Click:**
   - Click "Get a Quote" button
   - Console: `✅ GA4 Event: cta_click (Get a Quote)`

   **✅ Document Download:**
   - Click download on SDS/TDS page
   - Console: `✅ GA4 Event: document_download (sds)`

   **✅ Scroll Depth:**
   - Scroll down a page
   - Console: `✅ GA4 Event: scroll_depth (25%)` (etc.)

   **✅ Time on Page:**
   - Stay on page > 10 seconds, then leave
   - Console: `✅ GA4 Event: time_on_page (Xs)`

   **✅ Journey Tracking:**
   - Visit Product → Calculator → Contact
   - Console: `✅ GA4 Event: high_intent_journey`

### Production Testing

1. **Deploy changes**
2. **Open GA4 Real-Time Reports**
3. **Test each event type**
4. **Verify events appear within ~5 seconds**

---

## 🔍 Troubleshooting

### Events Not Appearing

**Check Console:**
- Should see `✅ GA4 Event:` messages
- If see `⚠️ Google Analytics not available`, check GA4 script

**Check GA4:**
- Admin → Data Streams → Check measurement ID
- Currently set to: `G-2RWSMCV2DD`

**Check Ad Blockers:**
- Disable ad blockers for testing
- Use incognito mode

**Check Network Tab:**
- Filter for "google-analytics" or "gtag"
- Should see requests to `google-analytics.com`

### Events Not Converting

**Mark as Conversion:**
- Admin → Events → Toggle "Mark as conversion"

**Wait 24-48 hours:**
- New events take time to appear in standard reports
- Real-time reports are instant

---

## 📱 Adding Phone Tracking

You currently have no phone links. To add trackable phone numbers:

**Example 1: Contact Card**
```tsx
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

**Automatically tracked** - no additional code needed!

---

## 🚀 Future Enhancements

### Potential Additions:

1. **Video Tracking** (if you add videos)
   ```typescript
   trackVideoPlay('product_demo', 'Terra Revive Overview')
   ```

2. **Chat Widget Tracking** (if you add live chat)
   ```typescript
   trackQualifiedLead('chat', { chat_initiated: true })
   ```

3. **Newsletter Signups**
   ```typescript
   trackEngagement('newsletter_signup', { form_location: 'footer' })
   ```

4. **Social Media Clicks**
   ```typescript
   trackSocialClick('linkedin', '/company-page')
   ```

---

## 📋 Summary

### ✅ Implemented (10 Event Types)

1. ✅ `qualified_lead` - Email, Form, Phone
2. ✅ `calculator_completed` - Pellet Selector, Cost & Payback
3. ✅ `cta_click` - All CTA buttons
4. ✅ `document_download` - SDS, TDS, Spec Packs
5. ✅ `scroll_depth` - 25%, 50%, 75%, 90%
6. ✅ `time_on_page` - All pages
7. ✅ `high_intent_journey` - Product → Calculator → Contact
8. ✅ `page_view` - Enhanced with categories
9. ✅ User journey tracking (session storage)
10. ✅ User properties (segmentation)

### 🎯 Key Benefits

- **Lead Quality Scoring** - Prioritize high-value leads
- **Conversion Funnel Analysis** - Optimize user paths
- **Content ROI** - Measure what content drives conversions
- **Calculator Impact** - Prove tool effectiveness
- **Technical Interest** - Track document engagement
- **User Behavior** - Understand engagement patterns

### 📊 Next Steps

1. Deploy to production
2. Mark key events as conversions in GA4
3. Create custom reports for your KPIs
4. Set up audiences for remarketing
5. Review data after 7 days to spot trends

---

**Created:** February 23, 2026  
**GA4 Property:** G-2RWSMCV2DD  
**Events:** 10 types  
**Status:** ✅ Production Ready
