import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Link } from "wouter";
import caseStudiesContent from "@content/pages/case-studies.json";

export default function CaseStudies() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {caseStudiesContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {caseStudiesContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            {caseStudiesContent.caseStudies.map((study, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="aspect-square bg-muted rounded mb-4 flex items-center justify-center">
                        <span className="text-muted-foreground text-center px-4">
                          Before/After Image
                        </span>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>

                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">{study.title}</h2>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h3 className="font-semibold text-sm mb-1">
                            Location
                          </h3>
                          <p className="text-muted-foreground">
                            {study.location}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">Sector</h3>
                          <p className="text-muted-foreground">{study.sector}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">Acres</h3>
                          <p className="text-muted-foreground">{study.acres}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">Method</h3>
                          <p className="text-muted-foreground">{study.method}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">
                            Application Rate
                          </h3>
                          <p className="text-muted-foreground">{study.rate}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">
                            Species
                          </h3>
                          <p className="text-muted-foreground">
                            {study.species}
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">Timeline</h3>
                        <p className="text-muted-foreground">{study.timeline}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-muted-foreground"
                            >
                              <span className="text-primary">•</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {caseStudiesContent.cta.title}
            </h2>
            <p className="text-xl mb-8 opacity-90">
              {caseStudiesContent.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">{caseStudiesContent.cta.buttonPrimary}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">{caseStudiesContent.cta.buttonSecondary}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
