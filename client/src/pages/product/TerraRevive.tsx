import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Download } from "lucide-react";
import { Link } from "wouter";

export default function TerraRevive() {
  return (
    <div>
      {/* Sticky CTAs */}
      <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-2 md:hidden">
        <Button asChild>
          <Link href="/contact">Get a Quote</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/contact">Book Assessment</Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terra Revive</h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Terra Revive is a pelleted soil amendment that rebuilds biology,
              structure, and nutrient cycling on degraded reclamation sites.
              Applied at 1,500 to 2,000 lb per acre, the pellets deliver organic
              matter and minerals that support native species establishment
              without synthetics. Compatible with broadcast, drill, hydroseeding,
              and drone application methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Book a Site Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Product specifications</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3 font-semibold">Ingredients Family</td>
                        <td className="py-3 text-muted-foreground">
                          Organic matter, minerals, microbial food sources
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">Functional Claims</td>
                        <td className="py-3 text-muted-foreground">
                          Rebuilds soil biology, improves structure, enables
                          nutrient cycling, supports native species establishment
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">Particle Size</td>
                        <td className="py-3 text-muted-foreground">
                          Pelleted, 3-5mm diameter
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">Moisture Content</td>
                        <td className="py-3 text-muted-foreground">
                          Less than 15%
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">Storage</td>
                        <td className="py-3 text-muted-foreground">
                          Store in a dry location. Protect from moisture.
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">Shelf Life</td>
                        <td className="py-3 text-muted-foreground">
                          24 months when stored properly
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold">
                          Seeding Method Compatibility
                        </td>
                        <td className="py-3 text-muted-foreground">
                          Broadcast, drill incorporation, hydroseeding, drone
                          application
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Rates */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Application rates by method</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Broadcast</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rate:</span>
                      <span className="font-medium">1,500 to 2,000 lb/acre</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Notes:</span>
                      <span className="font-medium text-right max-w-md">
                        Light incorporation recommended if equipment available
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Drill Incorporation</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rate:</span>
                      <span className="font-medium">1,500 to 2,000 lb/acre</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Notes:</span>
                      <span className="font-medium text-right max-w-md">
                        Place in seed row with standard drill equipment
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Hydroseeding</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rate:</span>
                      <span className="font-medium">1,500 to 2,000 lb/acre</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Notes:</span>
                      <span className="font-medium text-right max-w-md">
                        Mix into slurry after seed and mulch, agitate 2-3 minutes
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-3">Drone Application</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Rate:</span>
                      <span className="font-medium">1,500 to 2,000 lb/acre</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Notes:</span>
                      <span className="font-medium text-right max-w-md">
                        Flows through standard spreader attachments
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Packaging and Pricing */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">
              Packaging, pricing, and delivery
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">1,500 lb Tote</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-medium">$1.50/lb</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-medium">$2,250 per tote</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Best for:</span>
                      <span className="font-medium text-right max-w-xs">
                        Large sites, bulk orders
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-4">50 lb Bag</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-medium">$1.75/lb</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total:</span>
                      <span className="font-medium">$87.50 per bag</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Best for:</span>
                      <span className="font-medium text-right max-w-xs">
                        Small sites, pilots, trials
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Lead Time</h3>
                  <p className="text-muted-foreground">36 to 48 hours</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Delivery Territory</h3>
                  <p className="text-muted-foreground">
                    Alberta and across the Prairies
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="font-semibold mb-2">Minimum Order</h3>
                  <p className="text-muted-foreground">No minimum</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">Downloads</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Safety Data Sheet (SDS)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Complete safety information and handling instructions
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/evidence/sds-tds">
                      <Download className="mr-2 h-4 w-4" />
                      Download SDS
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Technical Data Sheet (TDS)
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Detailed product specifications and application guidance
                  </p>
                  <Button variant="outline" asChild>
                    <Link href="/evidence/sds-tds">
                      <Download className="mr-2 h-4 w-4" />
                      Download TDS
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-8">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="equipment">
                <AccordionTrigger className="text-left">
                  What equipment is compatible with Terra Revive?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Terra Revive works with standard broadcast spreaders, seed
                  drills, hydroseed equipment, and agricultural drones. No
                  special modifications or attachments required. The pellets flow
                  freely and distribute evenly with existing equipment.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="terrain">
                <AccordionTrigger className="text-left">
                  Can Terra Revive be used on uneven terrain?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Hydroseeding and drone application methods work well on
                  slopes, uneven terrain, and areas where ground equipment cannot
                  access. Broadcast and drill methods are best for relatively
                  level sites where equipment can maneuver.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fertilizer">
                <AccordionTrigger className="text-left">
                  Can I use Terra Revive with conventional fertilizer?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Terra Revive is designed to rebuild soil function so native
                  species establish without synthetics. If your reclamation plan
                  requires conventional fertilizer, Terra Revive can be applied
                  alongside it. However, most sites do not need additional
                  fertilizer when soil biology and structure are restored.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="regulators">
                <AccordionTrigger className="text-left">
                  Do regulators accept Terra Revive in reclamation plans?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Yes. Terra Revive is a soil amendment that supports native
                  species establishment, which aligns with Alberta reclamation
                  criteria. We provide spec sheets, method statements, and QA
                  documentation that can be included in reclamation plans and
                  submitted to regulators.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pilot">
                <AccordionTrigger className="text-left">
                  How do I run a pilot project?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Start with a small test area (1 to 5 acres) and apply Terra
                  Revive at 1,500 to 2,000 lb per acre using your preferred
                  method. Monitor germination, vegetative cover, and species
                  establishment over one growing season. Compare results to a
                  control area treated with your standard reclamation protocol.
                  Contact us to book a site assessment and discuss pilot design.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="soil-function">
                <AccordionTrigger className="text-left">
                  What is soil function?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Soil function is an integrated set of biological, physical, and
                  chemical processes that enable self-sustaining vegetation.
                  Healthy soil supports microbial activity, nutrient cycling,
                  water infiltration, and root penetration. When heavy equipment
                  compacts soil or topsoil sits stockpiled, these processes break
                  down. Terra Revive rebuilds soil function by delivering organic
                  matter and minerals that feed soil biology and improve
                  structure.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to order Terra Revive?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a quote or book a site assessment to discuss your reclamation
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Book a Site Assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
