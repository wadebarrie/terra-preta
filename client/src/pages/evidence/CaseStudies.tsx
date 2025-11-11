import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Link } from "wouter";

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "Wellsite Reclamation Success - Central Alberta",
      location: "Central Alberta",
      sector: "Oil and Gas",
      acres: 5,
      method: "Broadcast application",
      rate: "1,800 lb/acre",
      species: "Native prairie mix",
      timeline: "Applied May 2023, assessed September 2023",
      results: [
        "70% vegetative cover in first season",
        "Native species establishment across entire site",
        "Site closed 6 months ahead of schedule",
        "Zero re-mobilizations required",
      ],
    },
    {
      id: 2,
      title: "Stockpiled Topsoil Restoration - Southern Alberta",
      location: "Southern Alberta",
      sector: "Oil and Gas",
      acres: 12,
      method: "Drill incorporation",
      rate: "1,750 lb/acre",
      species: "Mixed grass species",
      timeline: "Applied June 2023, assessed August 2023",
      results: [
        "Germination improved from 40% to 85%",
        "Uniform establishment across stockpiled areas",
        "Reduced re-seeding costs by $12,000",
        "Passed regulatory inspection on first attempt",
      ],
    },
    {
      id: 3,
      title: "Pipeline Right-of-Way - Northern Alberta",
      location: "Northern Alberta",
      sector: "Utilities",
      acres: 50,
      method: "Hydroseeding",
      rate: "1,600 lb/acre",
      species: "Native forbs and grasses",
      timeline: "Applied July 2023, assessed October 2023",
      results: [
        "Uniform establishment across 50 acres",
        "85% germination rate",
        "Dense vegetative cover by end of season",
        "Zero re-mobilizations required",
      ],
    },
    {
      id: 4,
      title: "Mine Tailings Reclamation - Northern Alberta",
      location: "Northern Alberta",
      sector: "Mining",
      acres: 200,
      method: "Broadcast application",
      rate: "2,000 lb/acre",
      species: "Native grass mix",
      timeline: "Applied May 2022, assessed November 2023",
      results: [
        "Native grass establishment across 200 acres",
        "Site met reclamation criteria in 18 months",
        "Soil function restored on severely degraded tailings",
        "Regulatory approval granted",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real-world results from Terra Revive projects across Alberta and
              the Prairies. Each case study includes site details, application
              methods, and measured outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-12">
            {caseStudies.map((study) => (
              <Card key={study.id}>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <div className="aspect-square bg-muted rounded mb-4 flex items-center justify-center">
                        <span className="text-muted-foreground text-center px-4">
                          Before/After Image
                        </span>
                      </div>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF
                      </Button>
                    </div>

                    <div className="md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">{study.title}</h2>

                      <div className="grid md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h3 className="font-semibold text-sm mb-1">
                            Location
                          </h3>
                          <p className="text-muted-foreground">
                            {study.location}
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">Sector</h3>
                          <p className="text-muted-foreground">{study.sector}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">Acres</h3>
                          <p className="text-muted-foreground">{study.acres}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">Method</h3>
                          <p className="text-muted-foreground">{study.method}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">
                            Application Rate
                          </h3>
                          <p className="text-muted-foreground">{study.rate}</p>
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm mb-1">
                            Species
                          </h3>
                          <p className="text-muted-foreground">
                            {study.species}
                          </p>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h3 className="font-semibold mb-2">Timeline</h3>
                        <p className="text-muted-foreground">{study.timeline}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Results</h3>
                        <ul className="space-y-2">
                          {study.results.map((result, index) => (
                            <li
                              key={index}
                              className="flex gap-2 text-muted-foreground"
                            >
                              <span className="text-primary">•</span>
                              <span>{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to see similar results on your site?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a site assessment or start a pilot project.
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
