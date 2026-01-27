import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TrustStrip from "@/components/TrustStrip";
import { ArrowRight, CheckCircle, Download, Layers, Leaf, Sprout } from "lucide-react";
import { Link } from "wouter";
import homeContent from "../../../content/pages/home.json";
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

  // Debug logging
  console.log('Hero Video Config:', homeContent.heroVideo);
  console.log('Extracted Wistia ID:', wistiaId);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Debug info - remove later */}
        {wistiaId && (
          <div style={{ position: 'fixed', top: 10, right: 10, background: 'red', color: 'white', padding: '10px', zIndex: 9999 }}>
            Video ID: {wistiaId}
          </div>
        )}
        
        {/* Background Video */}
        {wistiaId && homeContent.heroVideo ? (
          <div className="absolute inset-0 w-full h-full opacity-20 z-0">
            <WistiaVideo
              videoId={wistiaId}
              autoplay={homeContent.heroVideo.autoplay ?? true}
              loop={homeContent.heroVideo.loop ?? true}
              controls={homeContent.heroVideo.controls ?? false}
              muted={homeContent.heroVideo.muted ?? true}
              className="w-full h-full"
            />
          </div>
        ) : (
          <div style={{ position: 'fixed', top: 10, right: 10, background: 'orange', color: 'white', padding: '10px', zIndex: 9999 }}>
            No wistiaId found. URL: {homeContent.heroVideo?.wistiaUrl || 'none'}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/95" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {homeContent.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {homeContent.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <Link href="/contact">Book a Site Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/evidence/sds-tds">
                  <Download className="mr-2 h-5 w-5" />
                  Download Bid Ready Spec Pack
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Who It's For Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Who it's for
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {homeContent.features.map((feature, index) => {
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

      {/* How It Works Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Apply while yellow iron is on site
              </h3>
              <p className="text-muted-foreground">
                Broadcast, drill, or hydroseed Terra Revive pellets using standard
                equipment. No special handling required.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Pellets integrate and feed biology
              </h3>
              <p className="text-muted-foreground">
                Organic matter and minerals break down gradually, feeding soil
                microbes and rebuilding structure.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Soil function returns and vegetation establishes
              </h3>
              <p className="text-muted-foreground">
                Native species germinate and establish without synthetics. Sites
                close faster with fewer re-visits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes That Matter Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Outcomes that matter
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {homeContent.outcomes.map((outcome, index) => (
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

      {/* Product Snapshot Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Product snapshot: Terra Revive
            </h2>
            <div className="mb-8 rounded-lg overflow-hidden">
              <img src="/pellets-in-hand.jpg" alt="Terra Revive pelleted soil amendment close-up" className="w-full h-64 object-cover" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold mb-2">Application Rate</h3>
                <p className="text-muted-foreground">
                  1,500 to 2,000 lb per acre based on soil degradation
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Packaging</h3>
                <p className="text-muted-foreground">
                  1,500 lb totes at $1.50/lb | 50 lb bags at $1.75/lb
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Lead Time</h3>
                <p className="text-muted-foreground">36 to 48 hours</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Delivery</h3>
                <p className="text-muted-foreground">
                  Alberta and across the Prairies
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href="/product/terra-revive">See Rates and Methods</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Evidence Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Evidence from the field
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded mb-4 overflow-hidden">
                  <img src="/field-dozer.jpg" alt="Dozer working on reclamation site" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mb-2">Oil and Gas Wellsite</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Broadcast application | Native prairie mix
                </p>
                <p className="text-sm text-muted-foreground">
                  70% vegetative cover in first season. Site closed 6 months ahead
                  of schedule.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded mb-4 overflow-hidden">
                  <img src="/field-tractor-wide.jpg" alt="Tractor seeding reclaimed land" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mb-2">Stockpiled Topsoil</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Drill incorporation | Mixed grass species
                </p>
                <p className="text-sm text-muted-foreground">
                  Germination improved from 40% to 85%. Reduced re-seeding costs by
                  $12,000.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded mb-4 overflow-hidden">
                  <img src="/field-site-overview.jpg" alt="Overview of reclamation site with equipment" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mb-2">Pipeline Right-of-Way</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Hydroseeding | Native forbs and grasses
                </p>
                <p className="text-sm text-muted-foreground">
                  Uniform establishment across 50 acres. Zero re-mobilizations
                  required.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/evidence/case-studies">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Bid Ready Download Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Get your bid ready spec pack
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Download a complete PDF bundle with spec sheets, SDS/TDS, method
              statements, rate charts, QA summary, and insurance information.
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

      {/* Contact and Support Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to restore your site?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a site assessment or start a pilot project. On-site support and
              partner application services available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Book a Site Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Start a Pilot</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
