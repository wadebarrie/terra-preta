import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TrustStrip from "@/components/TrustStrip";
import {
  ArrowRight,
  CheckCircle,
  Download,
  Layers,
  Leaf,
  Sprout,
  XCircle,
} from "lucide-react";
import { Link } from "wouter";
import homeBase from "@content/pages/home.json";
import homeAgPivot from "@content/pages/home-ag-pivot.json";

const homeContent = { ...homeBase, ...homeAgPivot };
import { WistiaVideo, extractWistiaId } from "@/components/WistiaVideo";
import { usePageMeta } from "@/hooks/usePageMeta";
import { APP_TITLE, SITE_ORIGIN } from "@/const";
import { cmsStringList } from "@/lib/cmsStringList";

// Map icon names to components
const iconMap: Record<string, any> = {
  Sprout,
  Leaf,
  Layers,
};

export default function Home() {
  usePageMeta(
    homeContent.metaTitle ??
      `Terra Preta Organics | Organic fertilizers | ${APP_TITLE}`,
    homeContent.metaDescription,
    `${SITE_ORIGIN}/`,
  );

  // Extract Wistia ID if video is configured
  const wistiaId = homeContent.heroVideo?.wistiaUrl 
    ? extractWistiaId(homeContent.heroVideo.wistiaUrl)
    : null;

  // Build gradient class from CMS settings
  const getGradientClass = () => {
    const gradient = homeContent.heroVideo?.gradient;
    if (!gradient) {
      return "bg-gradient-to-b from-background/60 to-background/90";
    }
    
    const direction = gradient.direction || "to-b";
    const topOpacity = gradient.topOpacity ?? 60;
    const bottomOpacity = gradient.bottomOpacity ?? 90;
    
    return `bg-gradient-${direction} from-background/${topOpacity} to-background/${bottomOpacity}`;
  };

  // Agriculture-first homepage (migrated from terrapretaag.com)
  if (homeContent.agPivot?.enabled) {
    return (
      <div>
        {/* Hero */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          {wistiaId && homeContent.heroVideo ? (
            <div className="absolute inset-0 w-full h-full z-0">
              <WistiaVideo
                videoId={wistiaId}
                autoplay={homeContent.heroVideo.autoplay ?? true}
                loop={homeContent.heroVideo.loop ?? true}
                controls={homeContent.heroVideo.controls ?? false}
                muted={homeContent.heroVideo.muted ?? true}
                className="w-full h-full"
              />
            </div>
          ) : null}
          <div className={`absolute inset-0 ${getGradientClass()} z-10`} />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-sm font-semibold tracking-wide text-black/80 mb-3">
                {homeContent.agPivot.brandLine}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {homeContent.agPivot.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-black">
                {homeContent.agPivot.heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href={homeContent.agPivot.heroPrimaryCta.href}>
                    {homeContent.agPivot.heroPrimaryCta.label}
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="bg-card text-primary border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Link href={homeContent.agPivot.heroSecondaryCta.href}>
                    {homeContent.agPivot.heroSecondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustStrip />

        {/* Organic fertility has always meant compromise */}
        {homeContent.agPivot.compromiseSection?.enabled ? (
          <section className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  {homeContent.agPivot.compromiseSection.title}
                </h2>
                <div className="space-y-5">
                  {cmsStringList(homeContent.agPivot.compromiseSection.paragraphs).map(
                    (p, i) => (
                      <p
                        key={i}
                        className="text-lg text-muted-foreground leading-relaxed"
                      >
                        {p}
                      </p>
                    )
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* There is */}
        {homeContent.agPivot.thereIsSection?.enabled ? (
          <section className="py-20 bg-muted">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {homeContent.agPivot.thereIsSection.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {homeContent.agPivot.thereIsSection.paragraph}
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {/* Products */}
        {homeContent.agPivot.productsSection?.enabled ? (
          <section
            id={homeContent.agPivot.productsSection.anchorId || "products"}
            className="py-20"
          >
            <div className="container">
              <div className="max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {homeContent.agPivot.productsSection.title}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {homeContent.agPivot.productsSection.products.map((p: any) => (
                  <Card key={p.name} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="secondary" className="font-medium">
                          {p.badge}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">{p.headline}</h3>
                      <p className="text-muted-foreground font-medium mb-4">
                        {p.subheadline}
                      </p>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {p.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button asChild className="flex-1">
                          <Link href={p.primaryCta.href}>{p.primaryCta.label}</Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                          <Link href={p.secondaryCta.href}>{p.secondaryCta.label}</Link>
                        </Button>
                      </div>
                      <div className="mt-4">
                        <Button variant="link" asChild className="p-0">
                          <Link href={p.learnMoreCta.href}>
                            {p.learnMoreCta.label}{" "}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {homeContent.agPivot.productsSection.moreComing ? (
                <div className="max-w-4xl mx-auto text-center mt-10">
                  <p className="text-muted-foreground">
                    {homeContent.agPivot.productsSection.moreComing}
                  </p>
                </div>
              ) : null}
            </div>
          </section>
        ) : null}

        {/* Fit / not fit */}
        {homeContent.agPivot.fitSection?.enabled ? (
          <section className="py-20 bg-brand-muted">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                  {homeContent.agPivot.fitSection.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-10">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      {homeContent.agPivot.fitSection.goodFitTitle}
                    </h3>
                    <ul className="space-y-3">
                      {cmsStringList(homeContent.agPivot.fitSection.goodFitBullets).map(
                        (b, i) => (
                          <li key={i} className="flex gap-3">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{b}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      {homeContent.agPivot.fitSection.notFitTitle}
                    </h3>
                    <ul className="space-y-3">
                      {cmsStringList(homeContent.agPivot.fitSection.notFitBullets).map(
                        (b, i) => (
                          <li key={i} className="flex gap-3">
                            <XCircle className="h-5 w-5 text-red-600 dark:text-red-500 shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{b}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* Prairie soils */}
        {homeContent.agPivot.prairieSection?.enabled ? (
          <section className="py-20">
            <div className="container">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {homeContent.agPivot.prairieSection.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {homeContent.agPivot.prairieSection.paragraph}
                </p>
              </div>
            </div>
          </section>
        ) : null}

        {/* Story */}
        {homeContent.agPivot.storySection?.enabled ? (
          <section className="py-20 bg-muted">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                  {homeContent.agPivot.storySection.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {homeContent.agPivot.storySection.sections.map((s: any) => (
                    <Card key={s.title}>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {s.paragraph}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* Let's talk soil */}
        {homeContent.agPivot.talkSection?.enabled ? (
          <section className="py-20">
            <div className="container">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {homeContent.agPivot.talkSection.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-10">
                  {homeContent.agPivot.talkSection.subtitle}
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                  {homeContent.agPivot.talkSection.ctas.map((cta: any) => (
                    <Card key={cta.title} className="hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-3">{cta.title}</h3>
                        <p className="text-muted-foreground mb-6">{cta.description}</p>
                        <Button asChild className="w-full">
                          <Link href={cta.href}>Get started</Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="text-center mt-10 text-muted-foreground">
                  {homeContent.agPivot.talkSection.directContactLine}{" "}
                  <a
                    href={`mailto:${homeContent.agPivot.talkSection.directContactEmail}`}
                    className="text-primary font-medium hover:underline"
                  >
                    {homeContent.agPivot.talkSection.directContactEmail}
                  </a>
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      {homeContent.heroSection.enabled && (
        <section className="relative py-20 md:py-32 overflow-hidden">
          {/* Background Video */}
          {wistiaId && homeContent.heroVideo ? (
            <div className="absolute inset-0 w-full h-full z-0">
              <WistiaVideo
                videoId={wistiaId}
                autoplay={homeContent.heroVideo.autoplay ?? true}
                loop={homeContent.heroVideo.loop ?? true}
                controls={homeContent.heroVideo.controls ?? false}
                muted={homeContent.heroVideo.muted ?? true}
                className="w-full h-full"
              />
            </div>
          ) : null}
          <div className={`absolute inset-0 ${getGradientClass()} z-10`} />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                {homeContent.heroSection.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-black">
                {homeContent.heroSection.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button size="lg" asChild>
                  <Link href="/contact">Get a Quote</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild
                  className="bg-card text-primary border-border hover:bg-primary hover:text-primary-foreground hover:border-primary"
                >
                  <Link href="/evidence/sds-tds">
                    <Download className="mr-2 h-5 w-5" />
                    Download Bid Ready Spec Pack
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Trust Strip */}
      <TrustStrip />

      {/* Agriculture retail products */}
      {homeContent.agProductsSection?.enabled && (
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {homeContent.agProductsSection.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {homeContent.agProductsSection.intro}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {homeContent.agProductsSection.products.map((product) => (
                <Card key={product.href} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <h3 className="text-xl font-semibold">{product.name}</h3>
                      {product.omriListed ? (
                        <Badge variant="secondary" className="font-medium">
                          OMRI Listed®
                        </Badge>
                      ) : null}
                    </div>
                    <p className="text-muted-foreground mb-6">{product.description}</p>
                    <Button asChild>
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

      {/* Who It's For Section */}
      {homeContent.featuresSection.enabled && (
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {homeContent.featuresSection.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {homeContent.featuresSection.features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon] || Layers;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <IconComponent className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {feature.description}
                      </p>
                      <Button variant="link" asChild className="p-0">
                        <Link href={feature.link}>
                          Learn more <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* How It Works Section */}
      {homeContent.howItWorksSection.enabled && (
        <section className="py-20 bg-muted">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {homeContent.howItWorksSection.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {homeContent.howItWorksSection.steps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Outcomes That Matter Section */}
      {homeContent.outcomesSection.enabled && (
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {homeContent.outcomesSection.title}
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {homeContent.outcomesSection.outcomes.map((outcome, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">{outcome.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {outcome.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Snapshot Section */}
      {homeContent.productSnapshotSection.enabled && (
        <section className="py-20 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {homeContent.productSnapshotSection.title}
              </h2>
              {(homeContent.productSnapshotSection as { intro?: string }).intro ? (
                <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
                  {(homeContent.productSnapshotSection as { intro?: string }).intro}
                </p>
              ) : null}
              <div className="mb-8 rounded-lg overflow-hidden">
                <img 
                  src={homeContent.productSnapshotSection.image} 
                  alt={homeContent.productSnapshotSection.imageAlt} 
                  className="w-full h-64 object-cover" 
                />
              </div>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {homeContent.productSnapshotSection.details.map((detail, index) => (
                  <div key={index}>
                    <h3 className="font-semibold mb-2">{detail.label}</h3>
                    <p className="text-muted-foreground">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
              <Button asChild>
                <Link href={homeContent.productSnapshotSection.buttonLink}>
                  {homeContent.productSnapshotSection.buttonText}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Evidence Section */}
      {homeContent.evidenceSection.enabled && (
        <section className="py-20">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {homeContent.evidenceSection.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {homeContent.evidenceSection.caseStudies.map((study, index) => (
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
              {homeContent.evidenceSection.showCaseStudiesButton ? (
                <Button variant="outline" asChild>
                  <Link href="/evidence/case-studies">View All Case Studies</Link>
                </Button>
              ) : (
                <Button variant="outline" asChild className="opacity-50 pointer-events-none">
                  <span>{homeContent.evidenceSection.comingSoonMessage}</span>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Bid Ready Download Section */}
      {homeContent.bidReadySection.enabled && (
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {homeContent.bidReadySection.title}
              </h2>
              <p className="text-xl mb-8 opacity-90">
                {homeContent.bidReadySection.description}
              </p>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/evidence/sds-tds">
                  <Download className="mr-2 h-5 w-5" />
                  Download Spec Pack
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Contact and Support Section */}
      {homeContent.contactSection.enabled && (
        <section className="py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {homeContent.contactSection.title}
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                {homeContent.contactSection.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {homeContent.contactSection.primaryButton && (
                  <Button size="lg" asChild>
                    <Link href="/contact">{homeContent.contactSection.primaryButton}</Link>
                  </Button>
                )}
                {homeContent.contactSection.secondaryButton && (
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/contact">{homeContent.contactSection.secondaryButton}</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {homeContent.faqSection?.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                {homeContent.faqSection.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {homeContent.faqSection.questions.map((item, index) => (
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
      )}
    </div>
  );
}
