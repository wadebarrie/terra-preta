import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function MiningIndustrial() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mining and Industrial
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Deliver reliable reclamation outcomes on large-scale mining and
              industrial sites. Terra Revive rebuilds soil function so vegetation
              establishes without synthetics, meeting regulatory requirements and
              reducing long-term liability.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Summary */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              Why mining and industrial sites struggle
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Soil function is an integrated set of biological, physical, and
              chemical processes that enable self-sustaining vegetation. Mining
              and industrial operations strip topsoil, compact subsoil, and
              disrupt these processes at scale.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Reclamation plans call for native vegetation, but degraded soil
              cannot support it. Contractors apply synthetic fertilizers that
              provide a temporary boost but do not rebuild biology or structure.
              Sites fail inspections. Liability persists. Costs escalate.
            </p>
          </div>
        </div>
      </section>

      {/* How Terra Revive Helps */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">
              How Terra Revive restores soil function at scale
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Terra Revive pellets deliver organic matter, minerals, and
              microbial food sources that rebuild soil biology and structure.
              Applied at 1,500 to 2,000 lb per acre, the pellets integrate into
              the soil profile and support long-term vegetation establishment.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
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
                  <h3 className="font-semibold mb-1">Improve structure</h3>
                  <p className="text-muted-foreground text-sm">
                    Aggregates form as microbes bind soil particles, improving
                    water infiltration and root penetration.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Enable nutrient cycling</h3>
                  <p className="text-muted-foreground text-sm">
                    Minerals and organic matter release nutrients gradually,
                    supporting vegetation without synthetics.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Meet regulatory requirements</h3>
                  <p className="text-muted-foreground text-sm">
                    Restored soil function allows native species to establish and
                    persist, satisfying reclamation criteria.
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
            <h2 className="text-3xl font-bold mb-6">Methods and application</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Broadcast</h3>
                  <p className="text-muted-foreground mb-2">
                    Apply 1,500 to 2,000 lb per acre with spreader trucks or
                    large-scale broadcast equipment. Incorporate with harrowing
                    or discing.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Best for large open areas where heavy equipment can maneuver.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Drill incorporation
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Apply 1,500 to 2,000 lb per acre with large seed drills.
                    Pellets are placed in the seed row and covered with soil.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Ideal for sites with existing drill equipment and when seed
                    and amendment can be applied in one pass.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Hydroseeding</h3>
                  <p className="text-muted-foreground mb-2">
                    Mix 1,500 to 2,000 lb per acre into the hydroseed slurry.
                    Pellets suspend well and apply evenly across the site.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Perfect for slopes, tailings ponds, and areas where broadcast
                    equipment cannot access.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">Drone</h3>
                  <p className="text-muted-foreground mb-2">
                    Apply 1,500 to 2,000 lb per acre with agricultural drones.
                    Pellets flow through standard spreader attachments.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Emerging method for remote sites, steep slopes, and areas
                    with limited ground access.
                  </p>
                </CardContent>
              </Card>
            </div>
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
                    <span>Pellets integrate into the soil profile</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Microbial activity increases</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Seed germination improves</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Native species begin to establish if moisture is adequate
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3">Next season</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Soil structure continues to improve</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Vegetative cover increases</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Native species diversity expands</span>
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Sites meet reclamation criteria</span>
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
                <div className="aspect-video bg-muted rounded mb-4 overflow-hidden">
                  <img src="/field-worker-equipment.jpg" alt="Field operations" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mb-2">Mine Tailings Area</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Northern Alberta | Broadcast application
                </p>
                <p className="text-sm text-muted-foreground">
                  Native grass establishment across 200 acres. Site met
                  reclamation criteria in 18 months.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded mb-4 overflow-hidden">
                  <img src="/field-worker-equipment.jpg" alt="Field operations" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mb-2">Industrial Stockpile</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Central Alberta | Drill incorporation
                </p>
                <p className="text-sm text-muted-foreground">
                  Germination improved from 35% to 80%. Reduced re-seeding costs
                  by $45,000.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="aspect-video bg-muted rounded mb-4 overflow-hidden">
                  <img src="/field-worker-equipment.jpg" alt="Field operations" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-semibold mb-2">Haul Road</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Southern Alberta | Hydroseeding
                </p>
                <p className="text-sm text-muted-foreground">
                  Uniform establishment on compacted subsoil. Passed regulatory
                  inspection on first attempt.
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
              Ready to meet your reclamation requirements?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a site assessment or start a pilot project. On-site support
              and spec-grade documentation available.
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
