import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import TrustStrip from "@/components/TrustStrip";
import { ArrowRight, CheckCircle, Download, Layers, Leaf, Sprout } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 md:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Restore soil function. Close your site faster.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Terra Revive is a pelleted soil amendment that rebuilds biology,
              structure, and nutrient cycling so native species establish without
              synthetics.
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
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Sprout className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Oil and Gas Reclamation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Restore soil function on wellsites and access roads. Faster
                  vegetative cover and smoother audits.
                </p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/solutions/reclamation">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Leaf className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Municipal and Utilities
                </h3>
                <p className="text-muted-foreground mb-4">
                  Rebuild stockpiled topsoil and establish vegetation on
                  disturbed sites with minimal re-mobilizations.
                </p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/solutions/hydroseeding">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Layers className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Contractors and EPCs
                </h3>
                <p className="text-muted-foreground mb-4">
                  Deliver reliable reclamation outcomes with spec-grade products
                  and on-site support.
                </p>
                <Button variant="link" asChild className="p-0">
                  <Link href="/solutions/mining">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
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
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Faster vegetative cover</h3>
                  <p className="text-muted-foreground text-sm">
                    Native species establish in the first growing season on
                    properly prepared sites.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">
                    Higher germination on stockpiled topsoil
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Rebuild biology in degraded topsoil and improve seed
                    establishment rates.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">
                    Fewer re-mobilizations and smoother audits
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Reduce risk of failed inspections and costly return visits.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Compatible with standard methods</h3>
                  <p className="text-muted-foreground text-sm">
                    Works with broadcast, drill incorporation, hydroseeding, and
                    drone application.
                  </p>
                </div>
              </div>
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
                <div className="aspect-video bg-muted rounded mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Before/After Image</span>
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
                <div className="aspect-video bg-muted rounded mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Before/After Image</span>
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
                <div className="aspect-video bg-muted rounded mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Before/After Image</span>
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
