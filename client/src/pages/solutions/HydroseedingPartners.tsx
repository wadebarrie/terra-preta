import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function HydroseedingPartners() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hydroseeding Partners
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Add Terra Revive to your hydroseed mix and deliver superior
              establishment rates. Rebuild soil biology while you seed, reducing
              callbacks and improving customer outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Summary */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              Why hydroseeding projects fail
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Soil function is an integrated set of biological, physical, and
              chemical processes that enable self-sustaining vegetation. When
              soil is compacted, stockpiled, or stripped of topsoil, these
              processes break down.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hydroseed slurry delivers seed and mulch, but it does not rebuild
              soil biology or structure. Germination is poor. Vegetation
              struggles. Contractors face callbacks and unhappy clients.
            </p>
          </div>
        </div>
      </section>

      {/* How Terra Revive Helps */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              How Terra Revive improves hydroseeding outcomes
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Terra Revive pellets suspend in hydroseed slurry and apply evenly
              across the site. At 1,500 to 2,000 lb per acre, the pellets
              deliver organic matter and minerals that rebuild soil biology and
              improve germination.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Mix easily</h3>
                  <p className="text-muted-foreground text-sm">
                    Pellets suspend in slurry without clogging hoses or nozzles.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Apply uniformly</h3>
                  <p className="text-muted-foreground text-sm">
                    Even distribution across slopes and uneven terrain.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Rebuild biology</h3>
                  <p className="text-muted-foreground text-sm">
                    Organic matter feeds soil microbes that cycle nutrients and
                    improve structure.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Improve germination</h3>
                  <p className="text-muted-foreground text-sm">
                    Restored soil function supports seed establishment and
                    reduces callbacks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methods and Application */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              Application method and rates
            </h2>
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-4">
                  Hydroseeding with Terra Revive
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Rate</h4>
                    <p className="text-muted-foreground">
                      1,500 to 2,000 lb per acre based on soil degradation
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Mixing</h4>
                    <p className="text-muted-foreground">
                      Add pellets to the hydroseed tank after seed and mulch.
                      Agitate for 2 to 3 minutes to ensure even suspension.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Application</h4>
                    <p className="text-muted-foreground">
                      Apply slurry at standard pressure and flow rates. Pellets
                      distribute evenly with seed and mulch.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Compatibility</h4>
                    <p className="text-muted-foreground">
                      Works with all standard hydroseed equipment. No special
                      nozzles or modifications required.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Best for</h4>
                    <p className="text-muted-foreground">
                      Slopes, uneven terrain, large acreages, and sites where
                      broadcast equipment cannot access.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">What to expect</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-lg mb-3">This season</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Higher germination rates</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Faster seedling establishment</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>More uniform coverage</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fewer callbacks for re-seeding</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Next season</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Improved soil structure</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Denser vegetative cover</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Self-sustaining vegetation</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Satisfied customers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8">Evidence from the field</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Before/After Image</span>
                </div>
                <h3 className="font-semibold mb-2">Pipeline Right-of-Way</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Central Alberta | Hydroseeding
                </p>
                <p className="text-sm text-muted-foreground">
                  85% germination rate. Uniform establishment across 50 acres.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Before/After Image</span>
                </div>
                <h3 className="font-semibold mb-2">Slope Stabilization</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Southern Alberta | Hydroseeding
                </p>
                <p className="text-sm text-muted-foreground">
                  Native grass cover in 6 weeks. Zero erosion observed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded mb-4 flex items-center justify-center">
                  <span className="text-muted-foreground">Before/After Image</span>
                </div>
                <h3 className="font-semibold mb-2">Utility Corridor</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Northern Alberta | Hydroseeding
                </p>
                <p className="text-sm text-muted-foreground">
                  Dense vegetative cover. Customer satisfaction rating: 5/5.
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to improve your hydroseeding outcomes?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a site assessment or start a pilot project. Partner
              application services available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
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
