# Section and Page Deletion Guide

This guide explains how to hide or delete sections and entire pages using the Decap CMS.

## Overview

You can now control which pages and sections appear on your website through the CMS without editing code. There are two levels of control:

1. **Page-Level Visibility** - Enable/disable entire pages
2. **Section-Level Visibility** - Show/hide individual sections within pages

## Page-Level Visibility

### Accessing Page Visibility Settings

1. Log into the CMS at `/admin`
2. Navigate to **Site Settings** → **Page Visibility**
3. Each page has two toggles:
   - **Enable Page** - Controls whether the page is accessible
   - **Show in Navigation** - Controls whether the page appears in menus

### How It Works

When you disable a page:
- The page still exists but won't be linked in navigation
- Direct URLs may still work (depending on implementation)
- You can re-enable it anytime

**Current Pages with Visibility Control:**
- Home
- About
- Contact
- Reclamation Sites
- Mining & Industrial
- Hydroseeding Partners (currently disabled)
- Evidence Library
- SDS & TDS
- Case Studies (currently disabled)
- Terra Revive Product
- Pellet Selector
- Cost & Payback

### Example: Hiding a Page

To hide the Hydroseeding Partners page:
1. Go to **Site Settings** → **Page Visibility**
2. Find "Hydroseeding Partners"
3. Toggle **Enable Page** to OFF
4. Toggle **Show in Navigation** to OFF
5. Save and publish

## Section-Level Visibility

### Pages with Section Controls

The following pages have section-level visibility toggles:

#### Home Page
- Hero Section
- Features Section (Who It's For)
- How It Works Section
- Outcomes Section
- Product Snapshot Section
- Evidence Section
- Bid Ready Download Section
- Contact & Support Section

#### About Page
- Our Story
- Facility & Quality Assurance
- Team
- Safety & Insurance

#### Reclamation Sites Page
- Problem Section
- Solution Section
- Methods Section
- Expectations Section
- Evidence Section
- CTA Section

#### Mining & Industrial Page
- Problem Section
- Solution Section
- Methods Section
- Expectations Section
- Evidence Section
- CTA Section

#### Hydroseeding Partners Page
- Problem Section
- Solution Section
- Method Section
- Expectations Section
- Evidence Section
- CTA Section

### How to Hide a Section

1. Navigate to the page in the CMS (e.g., **Pages** → **Home Page**)
2. Find the section you want to hide (e.g., "Evidence Section")
3. Toggle **Show Section** to OFF
4. Save and publish

The section will immediately disappear from the live site.

### How to Delete List Items

For repeatable sections (like team members, features, case studies), you can delete individual items:

1. Navigate to the page and section
2. Find the list (e.g., "Team Members" in About Page)
3. Click the **X** or delete button next to the item
4. Save and publish

**Examples of deletable list items:**
- Team members
- Features
- Benefits
- Methods
- Case studies
- FAQ questions
- Documents
- Outcomes

## Editorial Workflow

The CMS is now configured with **Editorial Workflow** mode, which means:

- Changes go through a **Draft → Review → Ready** workflow
- You can save drafts without publishing immediately
- You can preview changes before they go live
- Multiple people can collaborate on content changes

### Workflow States
1. **Draft** - Work in progress, not visible to anyone else
2. **In Review** - Ready for review by another team member
3. **Ready** - Approved and ready to publish
4. **Published** - Live on the website

## Best Practices

### When to Hide vs Delete

**Hide (using "enabled" toggle):**
- Temporary content you might bring back
- Seasonal sections
- Features under development
- Content pending approval

**Delete (using X button on list items):**
- Outdated information
- Incorrect entries
- Permanent removal

### Testing Changes

Before disabling major sections:
1. Save as a draft first
2. Preview the page to see how it looks
3. Ensure no broken layouts or empty pages
4. Publish when satisfied

### Common Scenarios

**Scenario: Remove the Team section temporarily**
1. Go to **Pages** → **About Page**
2. Find "Team" section
3. Toggle **Show Section** to OFF
4. Save and publish

**Scenario: Remove one team member permanently**
1. Go to **Pages** → **About Page**
2. Find "Team" → "Team Members"
3. Click X next to the member you want to remove
4. Save and publish

**Scenario: Hide Case Studies until ready**
1. Go to **Site Settings** → **Page Visibility**
2. Find "Case Studies"
3. Set **Enable Page** to OFF
4. Or, go to individual solution pages and toggle **Show Case Studies** to OFF in the Evidence Section

## Technical Notes

### How Visibility Works Under the Hood

Each section in the JSON content files now has an `enabled` flag:

```json
{
  "story": {
    "enabled": true,
    "title": "Our story",
    "paragraphs": [...]
  }
}
```

The React components check this flag before rendering:

```typescript
{aboutContent.story.enabled && (
  <section>
    {/* Section content */}
  </section>
)}
```

### Files Modified

- **CMS Config**: `client/public/admin/config.yml` - Added "Show Section" toggles
- **Content Files**: All JSON files in `content/pages/` - Added `enabled` fields
- **React Components**: Updated to check `enabled` flags before rendering
- **Page Visibility**: New `content/settings/page-visibility.json` file

### Need to Add Visibility to More Pages?

Currently, the following pages don't have full section visibility yet:
- Contact (basic structure, no major sections)
- Terra Revive Product (pending)
- Calculators (pending)
- Evidence Library (has some controls via sections.caseStudies.enabled)
- SDS & TDS (document list only)

These can be added following the same pattern if needed.

## Troubleshooting

**Section still showing after disabling:**
- Clear browser cache
- Check that you saved AND published the changes
- Verify the correct section was toggled

**Page broken after hiding sections:**
- Some sections may have layout dependencies
- Re-enable the section if issues occur
- Contact technical support for assistance

**Can't find delete button:**
- Not all fields are deletable (single-value fields can only be edited)
- Only list items (team members, features, etc.) can be deleted
- Check you're in edit mode, not preview mode

## Support

For questions about section visibility or deletion:
- Check the [DECAP-CMS-GUIDE.md](./DECAP-CMS-GUIDE.md) for general CMS usage
- Review the [CMS-GUIDE.md](./content/CMS-GUIDE.md) for content structure details
- Contact your development team for technical issues
