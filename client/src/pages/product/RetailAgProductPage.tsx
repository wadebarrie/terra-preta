import { AdsProductQuoteForm, type AdsProductChoice } from "@/components/AdsProductQuoteForm";
import { StructuredData } from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_TITLE } from "@/const";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Download, ShieldCheck } from "lucide-react";

export type RetailAgProductContent = {
  slug: string;
  productName: string;
  metaTitle?: string;
  metaDescription?: string;
  heroTitle: string;
  heroSubtitle: string;
  /** Single sentence under NPK for Google Ads / skimmers */
  tagline?: string;
  conversionBullets?: string[];
  omriListed?: boolean;
  omriLabel?: string;
  omriCallout?: string;
  descriptionParagraphs: string[];
  npk?: string;
  keySpecs: { label: string; value: string }[];
  specSheetUrl?: string;
  specSheetLabel?: string;
};

function defaultAdsProduct(slug: string): AdsProductChoice {
  if (slug === "organiphos") return "OrganiPhos";
  return "SuperN";
}

export function RetailAgProductPage({ content }: { content: RetailAgProductContent }) {
  usePageMeta(
    content.metaTitle || `${content.productName} | ${APP_TITLE}`,
    content.metaDescription
  );

  const specUrl = content.specSheetUrl?.trim();
  const hasSpecSheet = Boolean(specUrl);

  const tagline = content.tagline?.trim() || content.heroSubtitle;
  const bullets = content.conversionBullets?.length
    ? content.conversionBullets
    : [];

  const omriCalloutText =
    content.omriCallout?.trim() ||
    "This product is OMRI Listed® for use in certified organic production. Listing details appear on the product label, and we can provide the OMRI reference for your certifier on request.";

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: content.productName,
    description: tagline,
    brand: {
      "@type": "Brand",
      name: APP_TITLE,
    },
    category: "Fertilizer",
    ...(content.npk?.trim()
      ? {
          additionalProperty: [
            {
              "@type": "PropertyValue",
              name: "NPK",
              value: content.npk.trim(),
            },
          ],
        }
      : {}),
  };

  return (
    <div>
      <StructuredData data={productLd} />

      {/* Above-the-fold: proof + lead form (Google Ads landing layout) */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-8 md:py-12 border-b border-border">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {content.omriListed ? (
                  <Badge variant="secondary" className="text-sm font-medium">
                    {content.omriLabel || "OMRI Listed®"}
                  </Badge>
                ) : null}
                <span className="text-sm text-muted-foreground">
                  Ships from Sundre, AB
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {content.heroTitle}
              </h1>

              {content.npk?.trim() ? (
                <p className="text-2xl md:text-3xl font-semibold text-primary">
                  {content.npk.trim()}
                </p>
              ) : null}

              <p className="text-lg text-foreground leading-relaxed">{tagline}</p>

              {bullets.length > 0 ? (
                <ul className="space-y-2 text-muted-foreground text-sm md:text-base">
                  {bullets.map((line, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary font-bold shrink-0">·</span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="flex flex-wrap gap-3 pt-2">
                {hasSpecSheet ? (
                  <Button size="lg" asChild>
                    <a href={specUrl} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-5 w-5" />
                      {content.specSheetLabel || "Download specification sheet (PDF)"}
                    </a>
                  </Button>
                ) : (
                  <p className="text-sm text-muted-foreground self-center max-w-md">
                    Request the current specification sheet in the form — we will email the PDF.
                  </p>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <AdsProductQuoteForm
                landingSlug={content.slug}
                defaultProduct={defaultAdsProduct(content.slug)}
              />
            </div>
          </div>
        </div>
      </section>

      {content.omriListed ? (
        <section className="py-12 bg-muted/40 border-b border-border">
          <div className="container max-w-4xl">
            <Card className="border-primary/25 bg-primary/5 shadow-none">
              <CardContent className="pt-6 pb-6 flex gap-4">
                <ShieldCheck
                  className="h-10 w-10 shrink-0 text-primary"
                  aria-hidden
                />
                <div>
                  <p className="font-semibold text-foreground mb-1">
                    {content.omriLabel || "OMRI Listed®"}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {omriCalloutText}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ) : null}

      <section className="py-14">
        <div className="container">
          <div className="max-w-4xl space-y-6">
            <h2 className="text-3xl font-bold">Product overview</h2>
            {content.descriptionParagraphs.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Guaranteed analysis (label)</h2>
            <Card>
              <CardContent className="pt-6">
                {content.npk?.trim() ? (
                  <>
                    <p className="text-3xl font-semibold tracking-tight mb-3">
                      {content.npk.trim()}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Values shown here match our marketing and Google Ads copy. The{" "}
                      <strong>registered product label</strong> is the legal source of guaranteed
                      analysis; download the spec sheet or ask us for the current label PDF.
                    </p>
                  </>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    Guaranteed N-P-K values are on the specification sheet and product label.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Full specifications</h2>
            <Card>
              <CardContent className="pt-6">
                <table className="w-full">
                  <tbody className="divide-y">
                    {content.keySpecs.map((row, index) => (
                      <tr key={index}>
                        <td className="py-3 font-semibold align-top w-[38%] md:w-[32%]">
                          {row.label}
                        </td>
                        <td className="py-3 text-muted-foreground">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {hasSpecSheet ? (
              <div className="mt-8">
                <Button size="lg" variant="outline" asChild>
                  <a href={specUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    {content.specSheetLabel || "Download specification sheet (PDF)"}
                  </a>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
