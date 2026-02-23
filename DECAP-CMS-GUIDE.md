# Decap CMS Admin Guide

## Accessing the CMS

**URL:** `https://yourdomain.com/admin` (or `http://localhost:5000/admin` for local)

**Note:** Decap CMS is the new name for Netlify CMS. Same great features, new name!

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
- General Settings
  - Site title, description
  - Contact email, phone (optional)
  - Address
  - Social media links

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

1. Make your changes in the CMS
2. Click "Save" (saves as draft)
3. Click "Publish" (commits to Git)
4. Changes will deploy automatically via Netlify

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
```

Every edit you make in the CMS updates these JSON files in your Git repository.

## Need Help?

- Decap CMS Docs: https://decapcms.org/docs/
- Your content files: `/content/pages/`
- CMS Config: `/client/public/admin/config.yml`
