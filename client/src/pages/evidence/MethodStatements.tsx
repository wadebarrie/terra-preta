import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";

export default function MethodStatements() {
  const methods = [
    {
      id: 1,
      title: "Broadcast Application Method Statement",
      description:
        "Detailed procedure for applying Terra Revive pellets using broadcast spreaders. Includes equipment requirements, application rates, incorporation techniques, and safety protocols.",
      equipment: "Spreader truck, ATV spreader, or tractor-mounted spreader",
      rate: "1,500 to 2,000 lb/acre",
      bestFor: "Large wellsites, access roads, open areas",
    },
    {
      id: 2,
      title: "Drill Incorporation Method Statement",
      description:
        "Step-by-step guide for applying Terra Revive pellets with seed drills. Covers drill calibration, seed row placement, and integration with seeding operations.",
      equipment: "Standard seed drill or air seeder",
      rate: "1,500 to 2,000 lb/acre",
      bestFor: "Sites with existing drill equipment, one-pass applications",
    },
    {
      id: 3,
      title: "Hydroseeding Method Statement",
      description:
        "Complete hydroseeding protocol including mixing procedures, slurry preparation, application techniques, and equipment maintenance. Ensures even pellet distribution in hydroseed mix.",
      equipment: "Standard hydroseed equipment, no modifications required",
      rate: "1,500 to 2,000 lb/acre",
      bestFor: "Slopes, uneven terrain, large acreages",
    },
    {
      id: 4,
      title: "Drone Application Method Statement",
      description:
        "Emerging method for applying Terra Revive pellets using agricultural drones. Includes flight planning, spreader attachment setup, and application patterns for remote sites.",
      equipment: "Agricultural drone with spreader attachment",
      rate: "1,500 to 2,000 lb/acre",
      bestFor: "Remote sites, steep slopes, limited ground access",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Method Statements
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Detailed application procedures for each Terra Revive application
              method. These method statements provide step-by-step guidance for
              contractors, operators, and reclamation specialists.
            </p>
          </div>
        </div>
      </section>

      {/* Method Statements */}
      <section className="py-16">
        <div className="container">
          <div className="space-y-8">
            {methods.map((method) => (
              <Card key={method.id}>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-bold mb-4">{method.title}</h2>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {method.description}
                  </p>

                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="font-semibold text-sm mb-2">Equipment</h3>
                      <p className="text-muted-foreground text-sm">
                        {method.equipment}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-2">Rate</h3>
                      <p className="text-muted-foreground text-sm">
                        {method.rate}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm mb-2">Best For</h3>
                      <p className="text-muted-foreground text-sm">
                        {method.bestFor}
                      </p>
                    </div>
                  </div>

                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Method Statement PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              Using method statements in tenders and reclamation plans
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Method statements provide detailed application procedures that can
              be included in tender documents, reclamation plans, and regulatory
              submissions. Each method statement includes equipment
              requirements, safety protocols, application rates, and quality
              assurance procedures.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For site-specific method statements or custom application
              procedures, contact us to discuss your project requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
