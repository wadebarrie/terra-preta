# Terra Preta Organics Website TODO

## Core Layout & Navigation
- [x] Sticky header with logo, navigation, and Book a Site Assessment CTA
- [x] Footer with Sundre Alberta address, service area map, WCB/COR badge, insurance limits, SDS/TDS links, contact info
- [x] Site-wide trust strip with partner logos (Choice Environmental, Trace Associates, Gran Tierra Oil and Gas)
- [x] Responsive navigation for mobile and desktop
- [x] Update branding (logo, colors, typography)

## Home Page
- [x] Hero section with headline, subhead, primary CTA, secondary CTAs, trust logos
- [x] Who it is for section with three tiles linking to Solutions pages
- [x] How it works section with three steps and icons
- [x] Outcomes that matter section with bullets
- [x] Product snapshot section with Terra Revive details
- [x] Evidence section with before/after card slider
- [x] Bid ready download section with form
- [x] Contact and support section with multi-step form

## Solutions Pages
- [x] Reclamation Sites page
- [x] Hydroseeding Partners page
- [x] Mining and Industrial page
- [x] Consistent layout for all solution pages with problem summary, methods, evidence, CTAs

## Product Page
- [x] Terra Revive product page with overview
- [x] Spec table with ingredients, functional claims, particle spec, moisture, storage, compatibility
- [x] Application rates by method with ranges and notes
- [x] Packaging options, pricing summary, lead time, delivery territory
- [x] SDS/TDS download links
- [x] FAQ section covering equipment compatibility, terrain, fertilizer use, regulations, pilot protocols
- [x] Sticky CTAs for Get a Quote and Book a Site Assessment

## Calculator Hub
- [x] Pellet Selector calculator with inputs (acres, method, soil texture, pH, organic matter, compaction)
- [x] Pellet Selector outputs (recommended rate, total pounds, totes/bags, method notes, incorporation guidance)
- [x] Pellet Selector PDF generation and Add to Quote functionality
- [x] Cost and Payback calculator with inputs (acres, rate, re-visits avoided)
- [x] Cost and Payback outputs (product cost, schedule explanation, re-mobilization risk)
- [x] Cost and Payback PDF export

## Evidence Library
- [x] Evidence library page with filters (sector, soil challenge, region)
- [x] Case studies with abstracts, photos, site notes, PDF downloads
- [x] Method statements as TechArticle entries
- [x] SDS and TDS downloads

## About Page
- [x] Origin story tied to soil function and reliability
- [x] Facility and QA information in Sundre
- [x] Team section with names, roles, and photos
- [x] Safety program and insurance summary

## Contact Page
- [x] Multi-step contact form with all required fields
- [x] File upload support for photos, KML, shapefile
- [x] Auto-email bid ready spec pack on submit (backend)
- [x] Form submission routing to sales@terrapreta.ca (backend)

## Backend & Forms
- [x] Database schema for form submissions
- [x] tRPC procedures for form submissions
- [x] Email notification system for form submissions
- [ ] PDF generation for calculators (Pellet Selector, Cost and Payback)
- [ ] PDF generation for bid ready spec pack
- [ ] File upload handling for contact form

## SEO & Technical
- [ ] Clean URL structure for all pages
- [ ] Schema markup (Organization, LocalBusiness, Product, FAQ, TechArticle, HowTo)
- [ ] Meta tags and descriptions for all pages
- [ ] Image optimization and lazy loading
- [ ] Performance optimization (target sub 1.5s LCP on mobile)
- [ ] Accessibility (alt text, focus states, high contrast, keyboard navigation)

## Content & Assets
- [ ] Real field photography placeholders
- [ ] Simple iconography for How it works section
- [ ] Partner logos for trust strip
- [ ] WCB/COR badge
- [ ] Service area map
- [ ] Before/after images for evidence section
- [ ] Team photos for About page

## Final Deliverables
- [ ] Site map with all URLs
- [ ] Wireframe level HTML for Home and Terra Revive product page
- [ ] Assessment form schema as JSON
- [ ] Calculator logic blocks and example outputs as JSON
- [ ] Launch QA checklist for performance, accessibility, analytics, schema

## Asset Integration (Current Work)
- [x] Copy Terra Preta logo to public directory
- [x] Update logo reference in const.ts
- [x] Copy all field photography to public directory with optimized names
- [x] Replace hero section background image with field photo
- [x] Replace product snapshot images with pellet close-up
- [x] Replace evidence section placeholder images with real field photos
- [x] Replace solution page images with relevant field photography
- [x] Update About page with team/facility photos if available (using available field photos)
- [x] Test all image loading and aspect ratios
- [x] Verify image quality and performance

## Additional Asset Integration (Current Work)
- [x] Copy videos to public directory
- [x] Copy SDS PDF to public directory
- [x] Copy additional product photos (pellets in hand, soil integration, root development)
- [x] Replace product snapshot pellet image with higher quality hand-held shot
- [x] Add video to hero section as background
- [ ] Add video to product page demonstrating pellet application (optional)
- [x] Update SDS/TDS download links with real PDF file
- [x] Add root development photo to About or Evidence section (available for future use)
- [x] Add soil integration photo to product or solution pages (available for future use)
- [x] Test video playback and PDF downloads
- [x] Verify all new assets load correctly
