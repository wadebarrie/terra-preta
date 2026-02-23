# Terra Preta CMS Content Management

All website content is now manageable through JSON files in the `/content/pages/` directory. This allows you to update text, titles, descriptions, prices, and settings without touching any code.

## Available CMS Files

### Core Pages
- **`home.json`** - Home page hero, features, outcomes, video settings
- **`about.json`** - About page story, team members, facility info, safety & insurance
- **`contact.json`** - Contact page cards, form configuration, messaging
- **`terra-revive.json`** - Product page specifications, rates, packaging, FAQ

### Solutions Pages
- **`reclamation-sites.json`** - Reclamation page content, methods, expectations
- **`mining-industrial.json`** - Mining page content, methods, expectations
- **`hydroseeding-partners.json`** - Hydroseeding page content, methods, expectations

### Evidence Library
- **`evidence-library.json`** - Main library page, case studies toggle, resources
- **`sds-tds.json`** - Documents, descriptions, PDF links

### Calculators
- **`pellet-selector.json`** - Calculator fields, methods, calculation settings
- **`cost-payback.json`** - Cost calculator fields, pricing, estimates

### Settings
- **`general.json`** - Global site settings (if needed)

## How to Edit Content

### Example: Change Product Pricing

Edit `/content/pages/terra-revive.json`:
```json
{
  "packaging": {
    "options": [
      {
        "name": "1,500-2,000 lb Tote",
        "price": "$1.00/lb",  // ← Change price here
        "total": "$1,500 - $2,000 per tote",
        "bestFor": "Large sites, bulk orders"
      }
    ]
  }
}
```

### Example: Add a Team Member

Edit `/content/pages/about.json`:
```json
{
  "team": {
    "members": [
      {
        "name": "New Person",
        "role": "New Role",
        "description": "Their background",
        "photo": "/path/to/photo.jpg"
      }
    ]
  }
}
```

### Example: Enable Case Studies

Edit `/content/pages/evidence-library.json`:
```json
{
  "sections": {
    "caseStudies": {
      "enabled": true,  // ← Change to true when ready
      "title": "Case Studies",
      ...
    }
  }
}
```

### Example: Update Application Rates

Edit `/content/pages/pellet-selector.json`:
```json
{
  "calculationSettings": {
    "baseRate": 2000,  // ← Minimum rate
    "maxRate": 6000,   // ← Maximum rate
    "adjustments": {
      "severeCompaction": 1500,  // ← How much to add
      ...
    }
  }
}
```

## Content That's Still Hardcoded

Some content remains in React components for technical reasons:
- Calculator logic (formulas, calculations)
- Form validation rules
- Navigation structure (Header/Footer menus)
- Page layouts and styling

## Adding New Content

To add new editable sections:
1. Add the content to the appropriate JSON file
2. Update the React component to read from that JSON
3. Test that changes in JSON appear on the site

## Benefits

✅ **No code changes needed** - Edit JSON files to update content
✅ **Version controlled** - All changes tracked in git
✅ **Easy to manage** - Clear structure, easy to find content
✅ **Fast updates** - No deployment needed for content changes
✅ **Consistent** - Single source of truth for all content
