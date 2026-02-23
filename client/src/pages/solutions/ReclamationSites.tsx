import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";
import reclamationContent from "@content/pages/reclamation-sites.json";

export default function ReclamationSites() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {reclamationContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {reclamationContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Summary */}
      {reclamationContent.problemSection.enabled && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">
                {reclamationContent.problemSection.title}
              </h2>
              {reclamationContent.problemSection.paragraphs.map((paragraph, index) => (
                <p key={index} className={`text-lg text-muted-foreground leading-relaxed ${index < reclamationContent.problemSection.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How Terra Revive Helps */}
      {reclamationContent.solutionSection.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">
                {reclamationContent.solutionSection.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {reclamationContent.solutionSection.subtitle}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {reclamationContent.solutionSection.benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Methods and Application */}
      {reclamationContent.methodsSection.enabled && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">{reclamationContent.methodsSection.title}</h2>
              <div className="space-y-6">
                {reclamationContent.methodsSection.methods.map((method, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                      <p className="text-muted-foreground mb-2">
                        {method.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {method.bestFor}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What to Expect */}
      {reclamationContent.expectationsSection.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">{reclamationContent.expectationsSection.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">{reclamationContent.expectationsSection.thisSeason.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {reclamationContent.expectationsSection.thisSeason.items.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">{reclamationContent.expectationsSection.nextSeason.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {reclamationContent.expectationsSection.nextSeason.items.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Evidence */}
      {reclamationContent.evidenceSection.enabled && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{reclamationContent.evidenceSection.title}</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {reclamationContent.evidenceSection.caseStudies.map((study, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <div className="aspect-video bg-muted rounded mb-4 overflow-hidden">
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-semibold mb-2">{study.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {study.location}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {study.result}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              {reclamationContent.evidenceSection.showCaseStudies ? (
                <Button variant="outline" asChild>
                  <Link href="/evidence/case-studies">View All Case Studies</Link>
                </Button>
              ) : (
                <Button variant="outline" className="opacity-50 pointer-events-none">
                  <span>{reclamationContent.evidenceSection.comingSoonMessage}</span>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {reclamationContent.ctaSection.enabled && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {reclamationContent.ctaSection.title}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {reclamationContent.ctaSection.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">{reclamationContent.ctaSection.primaryButton}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{reclamationContent.ctaSection.secondaryButton}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
