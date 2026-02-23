# Home Page Hardcoded Content - FIXED

## Issue
User reported that clicking the X button in the CMS didn't remove content from the frontend. Investigation revealed that several sections on the Home page had hardcoded content that wasn't connected to the CMS JSON file.

## Hardcoded Sections Found

### 1. How It Works Section
**Was:** 3 hardcoded steps in `Home.tsx`
**Now:** Reads from `home.json` → `howItWorksSection.steps[]`

**CMS Location:** Pages → Home Page → How It Works Section → Steps (add/remove/edit)

### 2. Product Snapshot Section
**Was:** Hardcoded Application Rate, Packaging, Delivery details
**Now:** Reads from `home.json` → `productSnapshotSection.details[]`

**CMS Location:** Pages → Home Page → Product Snapshot Section → Product Details (add/remove/edit)

### 3. Evidence Section
**Was:** 3 hardcoded case study cards
**Now:** Reads from `home.json` → `evidenceSection.caseStudies[]`

**CMS Location:** Pages → Home Page → Evidence Section → Case Studies (add/remove/edit)

## Changes Made

### 1. Updated `content/pages/home.json`
Added the following arrays:

```json
{
  "howItWorksSection": {
    "steps": [
      { "number": 1, "title": "...", "description": "..." },
      { "number": 2, "title": "...", "description": "..." },
      { "number": 3, "title": "...", "description": "..." }
    ]
  },
  "productSnapshotSection": {
    "details": [
      { "label": "Application Rate", "value": "..." },
      { "label": "Packaging", "value": "..." },
      { "label": "Delivery", "value": "..." }
    ],
    "image": "/pellets-in-hand.jpg",
    "imageAlt": "...",
    "buttonText": "See Rates and Methods",
    "buttonLink": "/product/terra-revive"
  },
  "evidenceSection": {
    "caseStudies": [
      { "title": "...", "location": "...", "result": "...", "image": "..." },
      { "title": "...", "location": "...", "result": "...", "image": "..." },
      { "title": "...", "location": "...", "result": "...", "image": "..." }
    ],
    "comingSoonMessage": "Case Studies Coming Soon"
  }
}
```

### 2. Updated `client/public/admin/config.yml`
Added list widgets for:
- How It Works → Steps
- Product Snapshot → Product Details
- Evidence Section → Case Studies

### 3. Updated `client/src/pages/Home.tsx`
Replaced hardcoded content with:
- `.map()` loops over JSON arrays
- Dynamic rendering from CMS data

## Now You Can:

### Add/Remove/Edit "How It Works" Steps
1. Go to CMS → Pages → Home Page
2. Find "How It Works Section" → "Steps"
3. Click "+ Add Steps" to add a new step
4. Click X to remove a step
5. Drag to reorder steps
6. Edit number, title, description for each step

### Add/Remove/Edit Product Details
1. Go to CMS → Pages → Home Page
2. Find "Product Snapshot Section" → "Product Details"
3. Click "+ Add Product Details" to add new detail
4. Click X to remove a detail
5. Edit label and value for each detail

### Add/Remove/Edit Evidence Case Studies
1. Go to CMS → Pages → Home Page
2. Find "Evidence Section" → "Case Studies"
3. Click "+ Add Case Studies" to add new case study
4. Click X to remove a case study
5. Edit title, location, result, and upload image

## Other Pages Still With Hardcoded Content

Based on the audit, these components still have hardcoded arrays:

### `client/src/pages/evidence/CaseStudies.tsx`
- `const caseStudies = [...]` - Hardcoded array of case studies
- **Status:** This page is currently disabled (links removed from nav)
- **Fix needed:** Create `content/pages/case-studies.json` and integrate

### `client/src/pages/evidence/MethodStatements.tsx`
- `const methods = [...]` - Hardcoded array of methods  
- **Status:** This page was removed from navigation per earlier request
- **Fix needed:** Can be deleted or integrated with CMS if needed later

## Build Status
✅ Build passes successfully
✅ No linter errors
✅ All Home page content now editable in CMS

## What This Fixes
- **X button now works** on Home page sections
- You can add/remove steps, details, and case studies
- All changes in CMS immediately reflect on the frontend
- No more mystery hardcoded content

## Testing
To verify the fix:
1. Go to CMS → Pages → Home Page
2. Navigate to "Evidence Section" → "Case Studies"
3. Click X on one of the 3 case studies
4. Save and publish
5. Refresh your site - the case study should be gone!

Same test works for:
- How It Works steps (add a 4th step, remove a step, etc.)
- Product Details (change packaging info, add new detail, etc.)
- Evidence case studies (add new ones, remove existing ones)

---

**Date Fixed:** February 23, 2026
**Issue:** X button not removing frontend content
**Root Cause:** Hardcoded JSX instead of JSON mapping
**Resolution:** Connected all Home page sections to CMS JSON
