import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import agricultureContent from "@content/pages/agriculture.json";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE_ORIGIN } from "@/const";
import { cmsStringList } from "@/lib/cmsStringList";

type AgCaseStudy = {
  title: string;
  image: string;
  location: string;
  result: string;
};

export default function Agriculture() {
  usePageMeta(
    agricultureContent.metaTitle,
    agricultureContent.metaDescription,
    `${SITE_ORIGIN}/solutions/agriculture`,
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {agricultureContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {agricultureContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Product lineup: SuperN, OrganiPhos, Terra Revive */}
      {agricultureContent.productLineupSection?.enabled && (
        <section className="py-16 border-b border-border">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {agricultureContent.productLineupSection.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {agricultureContent.productLineupSection.intro}
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {agricultureContent.productLineupSection.products.map((product) => (
                <Card key={product.href} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex flex-col h-full">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      {product.omriListed ? (
                        <Badge variant="secondary" className="font-medium">
                          OMRI Listed®
                        </Badge>
                      ) : null}
                    </div>
                    <p className="text-muted-foreground mb-6 flex-1">{product.description}</p>
                    <Button asChild className="w-full sm:w-auto">
                      <Link href={product.href}>
                        View product <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Problem Summary */}
      {agricultureContent.problemSection.enabled && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">
                {agricultureContent.problemSection.title}
              </h2>
              {agricultureContent.problemSection.paragraphs.map((paragraph, index) => (
                <p key={index} className={`text-lg text-muted-foreground leading-relaxed ${index < agricultureContent.problemSection.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* How Terra Revive Helps */}
      {agricultureContent.solutionSection.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">
                {agricultureContent.solutionSection.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {agricultureContent.solutionSection.subtitle}
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {agricultureContent.solutionSection.benefits.map((benefit, index) => (
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
      {agricultureContent.methodSection.enabled && (
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">{agricultureContent.methodSection.title}</h2>
              <div className="space-y-6">
                {agricultureContent.methodSection.methods.map((method, index) => (
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
      {agricultureContent.expectationsSection.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">{agricultureContent.expectationsSection.title}</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold text-lg mb-3">{agricultureContent.expectationsSection.thisSeason.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {cmsStringList(
                      agricultureContent.expectationsSection.thisSeason.items as unknown,
                    ).map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-3">{agricultureContent.expectationsSection.nextSeason.title}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    {cmsStringList(
                      agricultureContent.expectationsSection.nextSeason.items as unknown,
                    ).map((item, index) => (
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
      {agricultureContent.evidenceSection.enabled && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">{agricultureContent.evidenceSection.title}</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {(agricultureContent.evidenceSection.caseStudies as AgCaseStudy[]).map(
                (study, index) => (
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
              {agricultureContent.evidenceSection.showCaseStudies ? (
                <Button variant="outline" asChild>
                  <Link href="/evidence/case-studies">View All Case Studies</Link>
                </Button>
              ) : (
                <Button variant="outline" className="opacity-50 pointer-events-none">
                  <span>{agricultureContent.evidenceSection.comingSoonMessage}</span>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      {agricultureContent.ctaSection.enabled && (
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {agricultureContent.ctaSection.title}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {agricultureContent.ctaSection.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">{agricultureContent.ctaSection.primaryButton}</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">{agricultureContent.ctaSection.secondaryButton}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
