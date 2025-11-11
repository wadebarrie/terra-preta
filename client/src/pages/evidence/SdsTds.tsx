import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

export default function SdsTds() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SDS and TDS Downloads
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Safety Data Sheets (SDS) and Technical Data Sheets (TDS) for Terra
              Revive. These documents provide complete safety information,
              product specifications, and handling instructions.
            </p>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-8">
            {/* SDS */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <FileText className="h-16 w-16 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">
                      Safety Data Sheet (SDS)
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Complete safety information for Terra Revive including
                      hazard identification, composition, first aid measures,
                      firefighting measures, accidental release measures,
                      handling and storage, exposure controls, physical and
                      chemical properties, stability and reactivity, toxicological
                      information, ecological information, disposal
                      considerations, transport information, and regulatory
                      information.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download SDS (PDF)
                      </Button>
                      <Button variant="outline">View Online</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TDS */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <FileText className="h-16 w-16 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">
                      Technical Data Sheet (TDS)
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Detailed product specifications for Terra Revive including
                      ingredients, functional claims, particle size, moisture
                      content, storage requirements, shelf life, application
                      rates by method, packaging options, compatibility with
                      seeding methods, and quality assurance procedures.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button>
                        <Download className="mr-2 h-4 w-4" />
                        Download TDS (PDF)
                      </Button>
                      <Button variant="outline">View Online</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bid Ready Spec Pack */}
            <Card className="border-primary">
              <CardContent className="pt-6">
                <div className="flex items-start gap-6">
                  <Download className="h-16 w-16 text-primary flex-shrink-0" />
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3">
                      Bid Ready Spec Pack
                    </h2>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Complete PDF bundle for tender submissions and reclamation
                      plans. Includes SDS, TDS, method statements for all
                      application methods, rate charts, manufacturing QA summary,
                      and insurance and safety summary. Everything you need to
                      include Terra Revive in your bid documents.
                    </p>
                    <Button size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download Complete Spec Pack (ZIP)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">
              Using these documents in your project
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The SDS and TDS provide complete product information that can be
              included in tender documents, reclamation plans, and regulatory
              submissions. The Bid Ready Spec Pack includes all documentation
              needed to specify Terra Revive in your project.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              All documents are updated regularly to reflect current product
              specifications and regulatory requirements. For the most recent
              versions or site-specific documentation, contact us.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Questions about product specifications, safety information, or
              regulatory compliance? Our team is available to support your
              project requirements.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
