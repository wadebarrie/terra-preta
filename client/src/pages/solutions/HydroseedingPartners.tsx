import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";
import hydroseedingContent from "@content/pages/hydroseeding-partners.json";

export default function HydroseedingPartners() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {hydroseedingContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {hydroseedingContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Problem Summary */}
      {hydroseedingContent.problemSection.enabled && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">
                {hydroseedingContent.problemSection.title}
              </h2>
              {hydroseedingContent.problemSection.paragraphs.map((paragraph, index) => (
                <p key={index} className={`text-lg text-muted-foreground leading-relaxed ${index < hydroseedingContent.problemSection.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How Terra Revive Helps */}
      {hydroseedingContent.solutionSection.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">
                {hydroseedingContent.solutionSection.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {hydroseedingContent.solutionSection.subtitle}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {hydroseedingContent.solutionSection.benefits.map((benefit, index) => (
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
      {hydroseedingContent.methodSection.enabled && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">
                {hydroseedingContent.methodSection.title}
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">
                    {hydroseedingContent.methodSection.cardTitle}
                  </h3>
                  <div className="space-y-4">
                    {hydroseedingContent.methodSection.details.map((detail, index) => (
                      <div key={index}>
                        <h4 className="font-medium mb-2">{detail.label}</h4>
                        <p className="text-muted-foreground">
                          {detail.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* What to Expect */}
      {hydroseedingContent.expectationsSection.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">{hydroseedingContent.expectationsSection.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">{hydroseedingContent.expectationsSection.thisSeason.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {hydroseedingContent.expectationsSection.thisSeason.items.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">{hydroseedingContent.expectationsSection.nextSeason.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {hydroseedingContent.expectationsSection.nextSeason.items.map((item, index) => (
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
      {hydroseedingContent.evidenceSection.enabled && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{hydroseedingContent.evidenceSection.title}</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {hydroseedingContent.evidenceSection.caseStudies.map((study, index) => (
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
              {hydroseedingContent.evidenceSection.showCaseStudies ? (
                <Button variant="outline" asChild>
                  <Link href="/evidence/case-studies">View All Case Studies</Link>
                </Button>
              ) : (
                <Button variant="outline" className="opacity-50 pointer-events-none">
                  <span>{hydroseedingContent.evidenceSection.comingSoonMessage}</span>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {hydroseedingContent.ctaSection.enabled && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {hydroseedingContent.ctaSection.title}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {hydroseedingContent.ctaSection.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">{hydroseedingContent.ctaSection.primaryButton}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{hydroseedingContent.ctaSection.secondaryButton}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
