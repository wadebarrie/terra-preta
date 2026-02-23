# Decap CMS Admin Guide

## Accessing the CMS

**URL:** `https://yourdomain.com/admin` (or `http://localhost:5000/admin` for local)

**Note:** Decap CMS is the new name for Netlify CMS. Same great features, new name!

## NEW: Section and Page Deletion Features

You can now hide or delete sections and pages directly from the CMS without editing code!

### Page-Level Visibility Control

Navigate to **Site Settings** → **Page Visibility** to control which pages appear on your site:

**Available Controls:**
- **Enable Page** - Makes the page accessible or inaccessible
- **Show in Navigation** - Controls whether the page appears in menus

**Example:** To hide Hydroseeding Partners from your site:
1. Go to Site Settings → Page Visibility
2. Find "Hydroseeding Partners"
3. Toggle both switches to OFF
4. Save and publish

### Section-Level Visibility Control

Most pages now have a **"Show Section"** toggle for each major section:

**Pages with Section Controls:**
- **Home Page** - All 7 sections (Hero, Features, How It Works, Outcomes, Product Snapshot, Evidence, Bid Ready, Contact)
- **About Page** - All 4 sections (Story, Facility, Team, Safety)
- **Reclamation Sites** - All 6 sections (Problem, Solution, Methods, Expectations, Evidence, CTA)
- **Mining & Industrial** - All 6 sections (Problem, Solution, Methods, Expectations, Evidence, CTA)
- **Hydroseeding Partners** - All 6 sections (Problem, Solution, Method, Expectations, Evidence, CTA)

**Example:** To hide the Team section on About page:
1. Go to Pages → About Page
2. Find "Team" section
3. Toggle "Show Section" to OFF
4. Save and publish

### Deleting List Items

You can delete individual items from repeatable lists:

**Deletable Items Include:**
- Team members
- Features/Benefits
- Application methods
- Case studies
- FAQ questions
- Documents
- Contact cards
- Outcomes

**How to delete:**
1. Navigate to the page with the list
2. Find the item in the list
3. Click the **X** or trash icon next to it
4. Save and publish

### Editorial Workflow Mode

Changes now go through a review process:
1. **Drafts** - Work in progress
2. **In Review** - Ready for review
3. **Ready** - Approved for publishing
4. **Published** - Live on site

This prevents accidental immediate publishing and allows collaboration.

## What's Now Available in CMS

### Pages Section

All these pages are fully editable with organized, repeatable sections:

#### 1. **Home Page**
- Hero Section (title, subtitle, video)
- Features (Who It's For) - Add/edit/remove cards
- Outcomes - Add/edit/remove outcome items

#### 2. **About Page**
- Hero Section
- Our Story (paragraphs - add/remove)
- Facility & QA (2 items with icons)
- Team Members (add/edit/remove team members)
- Safety & Insurance (2 cards with bullet points)

#### 3. **Reclamation Sites**
Organized into collapsible sections:
- Hero Section
- Problem Section (paragraphs)
- Solution Section (benefits - add/remove)
- Methods Section (4 methods - add/remove)
- Expectations (This Season & Next Season bullet points)
- Evidence Section (case studies - add/remove, toggle visibility)
- CTA Section

#### 4. **Mining & Industrial**
Same structure as Reclamation Sites with mining-specific content

#### 5. **Hydroseeding Partners**
Same structure as Reclamation Sites with hydroseeding-specific content

#### 6. **Evidence Library**
- Hero Section
- Case Studies Section (enable/disable toggle)
- Additional Resources (add/remove resource cards)

#### 7. **SDS & TDS Downloads**
- Hero Section
- Documents (add/remove documents - SDS, TDS, Spec Packs)
- Additional Info (paragraphs)

#### 8. **Terra Revive Product**
- Hero Section
- Specifications Table (rows - add/remove)
- Application Rates (methods - add/remove)
- Packaging Options (add/remove packages)
- Delivery Info
- Downloads Section
- FAQ (questions - add/remove)
- CTA Section

#### 9. **Contact Page**
- Hero Section
- Contact Cards (location, email - add/remove)
- Form Configuration
- Formspree Endpoint

#### 10. **Pellet Selector Calculator**
- Hero Section
- Calculation Settings (base rate, max rate, pricing)
- Info Section

#### 11. **Cost & Payback Calculator**
- Hero Section
- Calculation Settings (tote pricing, remobilization cost)
- Info Section

### Site Settings

#### General Settings
- Site title, description
- Contact email, phone (optional)
- Address
- Social media links

#### Page Visibility (NEW!)
Control which pages appear on your site:
- Enable/disable entire pages
- Show/hide pages from navigation menus
- Each page has two toggles:
  - **Enable Page** - Makes the page accessible
  - **Show in Navigation** - Shows/hides from menus

**Example:** Currently "Hydroseeding Partners" and "Case Studies" are disabled.

## How to Use Repeatable Sections

### Adding Items to Lists

1. Click "Add [Item Name]" button
2. Fill in the fields
3. Save

### Removing Items

1. Click the item to expand it
2. Click the trash icon
3. Confirm deletion

### Reordering Items

Drag and drop items using the handle icon on the left

## Common Edits

### Update Pricing Site-Wide

1. Go to **Pages → Home Page**
   - Find "Product Snapshot" section
   - Update packaging/pricing

2. Go to **Pages → Terra Revive Product**
   - Find "Packaging" section
   - Update all pricing fields

3. Go to **Pages → Pellet Selector Calculator**
   - Find "Calculation Settings"
   - Update tote price and bag price

4. Go to **Pages → Cost & Payback Calculator**
   - Find "Calculation Settings"
   - Update tote price

### Add a Team Member

1. Go to **Pages → About Page**
2. Find "Team" section
3. Click "Add Team Members"
4. Fill in:
   - Name
   - Role
   - Description
   - Photo (optional - click "Choose an image" to upload)
5. Save

### Enable/Disable Case Studies

1. Go to any Solution page (Reclamation, Mining, Hydroseeding)
2. Find "Evidence Section"
3. Toggle "Show Case Studies" on/off
4. Edit "Coming Soon Message" if needed
5. Save

### Add/Edit Case Study Examples

1. Go to any Solution page
2. Find "Evidence Section"
3. Under "Case Studies" click "Add case Studies"
4. Fill in:
   - Title
   - Location
   - Result
   - Image
5. Save

### Update CTA Buttons

1. Go to any Solution page
2. Find "CTA Section" (at the bottom)
3. Edit:
   - Title
   - Subtitle
   - Primary Button text
   - Secondary Button text
4. Save

## Publishing Workflow

**Editorial Workflow is now enabled**, which means changes go through a review process:

1. **Draft** - Make your changes and save as draft
2. **Set Status** - Move to "In Review" when ready
3. **Review** - Another team member can review
4. **Ready** - Mark as "Ready" when approved
5. **Publish** - Deploy changes to production

To publish immediately without workflow:
1. Make changes
2. Click "Save"
3. Click "Set status" → "Ready"
4. Click "Publish now"

## Deleting and Hiding Content

### Hiding Entire Pages

1. Go to **Site Settings** → **Page Visibility**
2. Find the page you want to hide
3. Toggle **Enable Page** to OFF
4. Toggle **Show in Navigation** to OFF (optional)
5. Save and publish

**When a page is disabled:**
- It won't appear in navigation menus
- Direct URLs may not work
- You can re-enable it anytime

### Hiding Sections on Pages

Many pages now have **"Show Section"** toggles:

1. Navigate to the page (e.g., **About Page**)
2. Expand the section you want to hide
3. Toggle **"Show Section"** to OFF
4. Save and publish

**Pages with section visibility:**
- Home (7 sections)
- About (4 sections)
- Reclamation Sites (6 sections)
- Mining & Industrial (6 sections)
- Hydroseeding Partners (6 sections)

### Deleting List Items

For repeatable items (team members, features, case studies, etc.):

1. Navigate to the page and section
2. Find the item in the list
3. Click the **X** or trash icon next to it
4. Save and publish

**Common deletable items:**
- Team members
- Features and benefits
- Application methods
- Case studies
- FAQ questions
- Documents
- Contact cards

**Note:** Deleting is permanent once published. To temporarily hide content, use the "Show Section" toggle instead.

## Tips

- Use the **Search** feature to find specific content
- Use **Workflows** for editorial review (if enabled)
- **Preview** changes before publishing
- **Duplicate** items to create similar content faster
- Use **Rich Text Editor** for formatted content in text areas

## Folder Structure

Your content is organized in Git:
```
content/
  pages/
    home.json
    about.json
    contact.json
    reclamation-sites.json
    mining-industrial.json
    hydroseeding-partners.json
    evidence-library.json
    sds-tds.json
    terra-revive.json
    pellet-selector.json
    cost-payback.json
  settings/
    general.json
    page-visibility.json
```

Every edit you make in the CMS updates these JSON files in your Git repository.

## Quick Reference

### To Hide a Page
Site Settings → Page Visibility → Toggle OFF → Save

### To Hide a Section
Pages → [Page Name] → [Section] → Toggle "Show Section" OFF → Save

### To Delete an Item
Pages → [Page Name] → [Section] → Click X on item → Save

### To Re-enable Hidden Content
Just toggle the switches back ON and save!

## Need Help?

- **Section Deletion Guide**: See `SECTION-DELETION-GUIDE.md` for detailed visibility controls
- Decap CMS Docs: https://decapcms.org/docs/
- Your content files: `/content/pages/`
- CMS Config: `/client/public/admin/config.yml`
