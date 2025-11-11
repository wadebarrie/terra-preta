import { Card, CardContent } from "@/components/ui/card";
import { Award, Building, Shield, Users } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "John Anderson",
      role: "Founder & CEO",
      description: "20+ years in reclamation and soil science",
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager",
      description: "Manufacturing and quality assurance specialist",
    },
    {
      name: "Mike Thompson",
      role: "Field Services Lead",
      description: "On-site support and application training",
    },
    {
      name: "Lisa Rodriguez",
      role: "Technical Sales",
      description: "Project planning and customer support",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Terra Preta Organics develops soil amendments that restore soil
              function on degraded reclamation sites across Alberta and the
              Prairies.
            </p>
          </div>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our story</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Soil function is an integrated set of biological, physical, and
              chemical processes that enable self-sustaining vegetation. When
              heavy equipment compacts soil or topsoil sits stockpiled for years,
              these processes break down. Native species struggle to establish.
              Sites fail inspections. Operators face costly re-mobilizations and
              delayed closure.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              We founded Terra Preta Organics to solve this problem. Our flagship
              product, Terra Revive, rebuilds soil biology and structure so
              native species establish without synthetics. Applied at 1,500 to
              2,000 lb per acre, the pellets integrate into the soil profile and
              support long-term vegetation establishment.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with reclamation consultants, EPCs, and operational
              decision makers who need reliable outcomes and spec-grade
              documentation. Our goal is to help sites close faster and reduce
              long-term liability.
            </p>
          </div>
        </div>
      </section>

      {/* Facility and QA */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Facility and quality assurance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Building className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Manufacturing in Sundre, Alberta
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our facility in Sundre produces Terra Revive pellets using
                    consistent formulations and quality-controlled processes. We
                    maintain inventory to support 36 to 48 hour lead times across
                    Alberta and the Prairies.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Quality assurance
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every batch is tested for moisture content, particle size,
                    and ingredient consistency. We provide batch-specific QA
                    documentation and maintain traceability for all shipments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our team</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {team.map((member) => (
                <Card key={member.name}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-muted rounded-full h-16 w-16 flex items-center justify-center flex-shrink-0">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">
                          {member.name}
                        </h3>
                        <p className="text-sm text-primary mb-2">
                          {member.role}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety and Insurance */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Safety program and insurance
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Safety certification
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>WCB/COR Certified</p>
                    <p>Comprehensive safety program</p>
                    <p>Regular safety training and audits</p>
                    <p>Incident reporting and investigation protocols</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">
                    Insurance coverage
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>General Liability: $5,000,000</p>
                    <p>Environmental Liability: $2,000,000</p>
                    <p>Product Liability: Included</p>
                    <p>Certificates of Insurance available upon request</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
