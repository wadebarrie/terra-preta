// This file shows the pattern for updating Mining Industrial page to use CMS
// Apply the same pattern to MiningIndustrial.tsx and HydroseedingPartners.tsx

// 1. Add import at the top:
import miningContent from "@content/pages/mining-industrial.json";

// 2. Replace all hardcoded strings with content from JSON:
// Hero: miningContent.heroTitle, miningContent.heroSubtitle
// Problem: miningContent.problemSection.title, miningContent.problemSection.paragraphs
// Solution: miningContent.solutionSection (title, subtitle, benefits)
// Methods: miningContent.methodsSection (title, methods array)
// Expectations: miningContent.expectationsSection (thisSeason, nextSeason)
// Evidence: miningContent.evidenceSection (title, showCaseStudies, caseStudies)
// CTA: miningContent.ctaSection (title, subtitle, primaryButton, secondaryButton)

// Same pattern for Hydroseeding with:
import hydroseedingContent from "@content/pages/hydroseeding-partners.json";
