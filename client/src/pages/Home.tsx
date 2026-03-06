import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TrustStrip from "@/components/TrustStrip";
import { ArrowRight, CheckCircle, Download, Layers, Leaf, Sprout } from "lucide-react";
import { Link } from "wouter";
import homeContent from "@content/pages/home.json";
import { WistiaVideo, extractWistiaId } from "@/components/WistiaVideo";

// Map icon names to components
const iconMap: Record<string, any> = {
  Sprout,
  Leaf,
  Layers,
};

export default function Home() {
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
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
                  className="bg-white text-primary border-white hover:bg-primary hover:text-white hover:border-primary"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                {homeContent.productSnapshotSection.title}
              </h2>
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
