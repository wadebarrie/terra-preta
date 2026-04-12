import { ProductInquiryForm, type ProductInquiryType } from "@/components/ProductInquiryForm";
import { StructuredData } from "@/components/StructuredData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { APP_TITLE } from "@/const";
import { Download } from "lucide-react";
import { useState } from "react";

export type RetailAgProductContent = {
  slug: string;
  productName: string;
  heroTitle: string;
  heroSubtitle: string;
  omriListed?: boolean;
  omriLabel?: string;
  descriptionParagraphs: string[];
  npk?: string;
  keySpecs: { label: string; value: string }[];
  specSheetUrl?: string;
  specSheetLabel?: string;
};

function scrollToQuote() {
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function RetailAgProductPage({ content }: { content: RetailAgProductContent }) {
  const [inquiryType, setInquiryType] = useState<ProductInquiryType>("General");

  const setInquiryAndScroll = (t: ProductInquiryType) => {
    setInquiryType(t);
    requestAnimationFrame(() => scrollToQuote());
  };

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: content.productName,
    description: content.heroSubtitle,
    brand: {
      "@type": "Brand",
      name: APP_TITLE,
    },
    category: "Fertilizer",
  };

  const specUrl = content.specSheetUrl?.trim();
  const hasSpecSheet = Boolean(specUrl);

  return (
    <div>
      <StructuredData data={productLd} />

      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {content.omriListed ? (
                <Badge variant="secondary" className="text-sm font-medium">
                  {content.omriLabel || "OMRI Listed®"}
                </Badge>
              ) : null}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.heroTitle}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {content.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Button type="button" size="lg" onClick={() => setInquiryAndScroll("Order")}>
                Order inquiry
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={() => setInquiryAndScroll("Sample")}
              >
                Request a sample
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                onClick={() => setInquiryAndScroll("General")}
              >
                General inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
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

      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">N-P-K (guaranteed analysis)</h2>
            <Card>
              <CardContent className="pt-6">
                {content.npk?.trim() ? (
                  <p className="text-3xl font-semibold tracking-tight">{content.npk.trim()}</p>
                ) : (
                  <p className="text-muted-foreground leading-relaxed">
                    Guaranteed N-P-K values are listed on the downloadable specification sheet.
                    We can also email the current analysis on request.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Key specifications</h2>
            <Card>
              <CardContent className="pt-6">
                <table className="w-full">
                  <tbody className="divide-y">
                    {content.keySpecs.map((row, index) => (
                      <tr key={index}>
                        <td className="py-3 font-semibold align-top w-[40%]">{row.label}</td>
                        <td className="py-3 text-muted-foreground">{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            <div className="mt-8">
              {hasSpecSheet ? (
                <Button size="lg" asChild>
                  <a href={specUrl} target="_blank" rel="noopener noreferrer">
                    <Download className="mr-2 h-5 w-5" />
                    {content.specSheetLabel || "Download specification sheet (PDF)"}
                  </a>
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Use the quote form below and we will send the current specification sheet.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <ProductInquiryForm
              productName={content.productName}
              inquiryType={inquiryType}
              onInquiryTypeChange={setInquiryType}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
