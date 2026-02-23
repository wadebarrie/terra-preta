# Complete CMS Editing Guide

## ✅ Fully CMS-Managed Pages

These pages read 100% of their content from JSON files. You can edit any text by modifying the corresponding JSON file.

---

## 1. Home Page
**File:** `/content/pages/home.json`

### What You Can Edit:
- **Hero Section**
  - Title: "Restore soil function. Close your site faster."
  - Subtitle
  - Video URL, autoplay, loop, muted settings
  - Gradient overlay settings
  
- **Who It's For (3 cards)**
  - Title, description, icon, link for each card
  
- **Outcomes (4 items)**
  - Title and description for each outcome
  
- **Product Snapshot**
  - Application rate
  - Packaging
  - Delivery area

---

## 2. About Page
**File:** `/content/pages/about.json`

### What You Can Edit:
- **Hero Section**
  - Title: "About Us"
  - Subtitle
  
- **Our Story**
  - Title
  - 3 paragraphs of text
  
- **Facility & Quality Assurance**
  - Section title
  - 2 cards (Manufacturing, Quality Assurance)
  - Icons, titles, descriptions
  
- **Team Members (4 people)**
  - Name, role, description, photo URL
  
- **Safety & Insurance**
  - Section title
  - 2 cards with multiple bullet points each

---

## 3. Reclamation Sites
**File:** `/content/pages/reclamation-sites.json`

### What You Can Edit:
- **Hero Section**
  - Title: "Oil and Gas Reclamation"
  - Subtitle
  
- **Problem Section**
  - Title: "Why reclamation sites fail in Alberta"
  - 2 paragraphs
  
- **Solution Section**
  - Title: "How Terra Revive restores soil function"
  - Subtitle
  - 4 benefits (each with title and description)
  
- **Methods Section**
  - Title: "Methods and application"
  - 4 methods (Broadcast, Drill, Hydroseeding, Drone)
  - Each method: title, description, bestFor
  
- **Expectations Section**
  - Title: "What to expect"
  - This Season: 4 bullet points
  - Next Season: 4 bullet points
  
- **Evidence Section**
  - Title: "Evidence from the field"
  - Case studies toggle (true/false to show/hide)
  - 3 case studies (title, location, result, image)
  - Coming soon message
  
- **CTA Section**
  - Title: "Ready to close your site faster?"
  - Subtitle
  - Primary button text: "Get a Quote"
  - Secondary button text: "Start a Pilot"

---

## 4. Mining & Industrial
**File:** `/content/pages/mining-industrial.json`

### What You Can Edit:
- Same structure as Reclamation Sites
- Different content for mining context
- All sections fully editable

---

## 5. Hydroseeding Partners
**File:** `/content/pages/hydroseeding-partners.json`

### What You Can Edit:
- Same structure as Reclamation Sites
- **Method Section** (unique to this page)
  - Card title: "Hydroseeding with Terra Revive"
  - 5 detail fields: Rate, Mixing, Application, Compatibility, Best for
- All other sections same as Reclamation Sites

---

## 6. Evidence Library
**File:** `/content/pages/evidence-library.json`

### What You Can Edit:
- **Hero Section**
  - Title: "Evidence Library"
  - Subtitle
  
- **Case Studies Section**
  - Enable/disable toggle
  - Title, description
  - Coming soon message
  
- **Additional Resources**
  - Each resource: title, description, icon, link, enabled toggle

---

## 7. SDS & TDS Downloads
**File:** `/content/pages/sds-tds.json`

### What You Can Edit:
- **Hero Section**
  - Title: "SDS and TDS Downloads"
  - Subtitle
  
- **Documents (3 items)**
  - SDS: title, description, PDF URL, download filename
  - TDS: title, description, PDF URL, download filename
  - Spec Pack: title, description, PDF URL, featured flag
  
- **Additional Info**
  - Title
  - 3 paragraphs of text

---

## Quick Edit Examples

### Change Application Rate Everywhere
Edit these files to update pricing/rates across the site:
- `/content/pages/home.json` - Product snapshot
- `/content/pages/reclamation-sites.json` - Methods section
- `/content/pages/mining-industrial.json` - Methods section
- `/content/pages/hydroseeding-partners.json` - Method section

### Add a Team Member
Edit `/content/pages/about.json`:
```json
{
  "team": {
    "members": [
      {
        "name": "New Person",
        "role": "New Role",
        "description": "Their background",
        "photo": null
      }
    ]
  }
}
```

### Change CTA Buttons Site-Wide
Edit all solution page JSON files:
```json
{
  "ctaSection": {
    "primaryButton": "New Text Here",
    "secondaryButton": "New Text Here"
  }
}
```

### Enable/Disable Case Studies
Edit any solution page JSON:
```json
{
  "evidenceSection": {
    "showCaseStudies": false,  // true to show, false to hide
    "comingSoonMessage": "Case Studies Coming Soon"
  }
}
```

---

## Files NOT Yet CMS-Managed

These have JSON files created but components not updated:
- Contact page (form fields, validation)
- Terra Revive product page (specifications, FAQ)
- Pellet Selector calculator (settings)
- Cost & Payback calculator (settings)

**Note:** The calculators contain complex logic that should remain in code. Only labels would benefit from CMS.

---

## Testing Your Changes

After editing a JSON file:
1. Save the file
2. Rebuild: `npm run build`
3. The changes will appear on the site

No code changes needed!
