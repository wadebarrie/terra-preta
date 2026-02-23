import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download } from "lucide-react";
import { Link } from "wouter";
import { StructuredData, productSchema } from "@/components/StructuredData";
import terraReviveContent from "@content/pages/terra-revive.json";

export default function TerraRevive() {
  return (
    <div>
      {/* Product Structured Data */}
      <StructuredData data={productSchema} />
      {/* Sticky CTAs */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 md:hidden">
        <Button asChild>
          <Link href="/contact">Get a Quote</Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{terraReviveContent.heroTitle}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {terraReviveContent.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">{terraReviveContent.specifications.title}</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y">
                      {terraReviveContent.specifications.rows.map((row, index) => (
                        <tr key={index}>
                          <td className="py-3 font-semibold">{row.label}</td>
                          <td className="py-3 text-muted-foreground">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Rates */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">{terraReviveContent.applicationRates.title}</h2>
            <div className="space-y-6">
              {terraReviveContent.applicationRates.methods.map((method, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">{method.name}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Rate:</span>
                        <span className="font-medium">{method.rate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Notes:</span>
                        <span className="font-medium text-right max-w-md">
                          {method.notes}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging and Pricing */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">
              {terraReviveContent.packaging.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {terraReviveContent.packaging.options.map((option, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4">{option.name}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-medium">{option.price}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Total:</span>
                        <span className="font-medium">{option.total}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Best for:</span>
                        <span className="font-medium text-right max-w-xs">
                          {option.bestFor}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {terraReviveContent.packaging.delivery.map((item, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <h3 className="font-semibold mb-2">{item.label}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">{terraReviveContent.downloads.title}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {terraReviveContent.downloads.documents.map((doc, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-2">{doc.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {doc.description}
                    </p>
                    <Button variant="outline" asChild>
                      <Link href={doc.link}>
                        <Download className="mr-2 h-4 w-4" />
                        Download {doc.title.includes('SDS') ? 'SDS' : 'TDS'}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">
              {terraReviveContent.faq.title}
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {terraReviveContent.faq.questions.map((item, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {terraReviveContent.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {terraReviveContent.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">{terraReviveContent.cta.button}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
