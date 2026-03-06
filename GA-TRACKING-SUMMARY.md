# GA4 Tracking Quick Reference

## 🎯 10 Events Tracked

### Lead Generation (Value: 100)
- ✅ **Email clicks** → `qualified_lead` (email)
- ✅ **Form submissions** → `qualified_lead` (form)  
- ✅ **Phone clicks** → `qualified_lead` (phone)

### High Intent Signals
- ✅ **Calculator usage** → `calculator_completed` (Value: 50)
- ✅ **Journey pattern** → `high_intent_journey` (Value: 75)
- ✅ **Document downloads** → `document_download` (Value: 30)
- ✅ **CTA clicks** → `cta_click` (Value: 25)

### Engagement Metrics
- ✅ **Scroll depth** → `scroll_depth` (25%, 50%, 75%, 90%)
- ✅ **Time on page** → `time_on_page` (>10s)
- ✅ **Page views** → `page_view` (enhanced)

---

## 💡 What to Track in GA4

### Week 1: Setup
- [ ] Mark `qualified_lead` as conversion
- [ ] Mark `calculator_completed` as conversion
- [ ] Create "Lead Generation" report
- [ ] Create "Calculator Performance" report

### Week 2: Analysis
- [ ] Which pages generate most qualified leads?
- [ ] Do calculator users convert more?
- [ ] Which documents are most downloaded?
- [ ] What's the average scroll depth?

### Week 3: Optimization
- [ ] Identify high-performing CTAs
- [ ] Optimize low-scroll pages
- [ ] A/B test calculator placements
- [ ] Improve low-converting pages

---

## 🔥 Lead Scoring

**Hot Lead (200+ points):**
- Used calculator (50)
- Downloaded docs (30)
- Multiple CTA clicks (50+)
- Submitted form (100)

**Warm Lead (50-199 points):**
- Calculator usage (50)
- Document downloads (30)
- CTA engagement (25)

**Cold Lead (<50 points):**
- Page views only
- Low engagement

---

## 📊 Key Reports to Create

### 1. Lead Quality Report
**Metrics:** Qualified leads by method  
**Dimensions:** Email vs Form vs Phone  
**Goal:** Optimize highest-converting method

### 2. Calculator Impact Report
**Metrics:** Calculator completions → Leads  
**Dimensions:** Calculator type, Results  
**Goal:** Prove calculator ROI

### 3. Content Engagement Report
**Metrics:** Scroll depth, Time on page  
**Dimensions:** Page path, Category  
**Goal:** Identify best/worst content

### 4. User Journey Report
**Metrics:** High-intent journey events  
**Dimensions:** Journey pattern  
**Goal:** Optimize conversion path

---

## 🧪 Quick Test Checklist

**In Development:**
```bash
npm run dev
```

**Test Events (check console):**
- [ ] Click email link → See: `qualified_lead (email)`
- [ ] Submit form → See: `qualified_lead (form)`
- [ ] Complete calculator → See: `calculator_completed`
- [ ] Click "Get a Quote" → See: `cta_click`
- [ ] Download SDS → See: `document_download`
- [ ] Scroll 50% → See: `scroll_depth (50%)`

**All tests should show:** `✅ GA4 Event: ...`

---

## 🎁 Automatic Features

**No code changes needed for:**
- Any new email links (`mailto:`)
- Any new phone links (`tel:`)
- Any new CTA buttons (with keywords)
- Scroll tracking (all pages)
- Time tracking (all pages)
- Journey tracking (navigation)

**Just add the HTML - tracking works automatically!**

---

## 📞 Want Phone Tracking?

Add this anywhere:
```tsx
<a href="tel:+14035551234">Call Us: (403) 555-1234</a>
```

**Automatically tracked as `qualified_lead (phone)`** ✅

---

## 🚀 Files Modified

1. **`client/src/lib/analytics.ts`** - All tracking functions
2. **`client/src/App.tsx`** - Initialize tracking
3. **`client/src/pages/Contact.tsx`** - Form tracking
4. **`client/src/pages/calculator/PelletSelector.tsx`** - Calculator tracking
5. **`client/src/pages/calculator/CostPayback.tsx`** - Calculator tracking
6. **`client/src/pages/evidence/SdsTds.tsx`** - Document tracking

---

## 📖 Documentation

- **Quick Start:** `GA-TRACKING-QUICKSTART.md`
- **Complete Guide:** `COMPLETE-GA-TRACKING-GUIDE.md`
- **Original Setup:** `GOOGLE-ANALYTICS-TRACKING.md`

---

**Status:** ✅ Production Ready  
**GA4 ID:** G-2RWSMCV2DD  
**Events:** 10 types tracking  
**Build:** ✅ Passing
