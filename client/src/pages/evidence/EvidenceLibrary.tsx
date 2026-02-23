import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, FileText } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import evidenceLibraryContent from "@content/pages/evidence-library.json";

export default function EvidenceLibrary() {
  const [sector, setSector] = useState("all");
  const [challenge, setChallenge] = useState("all");
  const [region, setRegion] = useState("all");

  // Sample evidence data - will be replaced with CMS when case studies are ready
  const evidence = [
    {
      id: 1,
      title: "Wellsite Reclamation Success",
      sector: "oil-gas",
      challenge: "compaction",
      region: "central",
      abstract:
        "70% vegetative cover achieved in first season on heavily compacted wellsite. Site closed 6 months ahead of schedule.",
      method: "Broadcast application",
      species: "Native prairie mix",
      outcome: "Site closed 6 months early",
    },
  ];

  const filteredEvidence = evidence.filter((item) => {
    if (sector !== "all" && item.sector !== sector) return false;
    if (challenge !== "all" && item.challenge !== challenge) return false;
    if (region !== "all" && item.region !== region) return false;
    return true;
  });

  const { sections, additionalResources } = evidenceLibraryContent;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {evidenceLibraryContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {evidenceLibraryContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Coming Soon Message */}
      {!sections.caseStudies.enabled && (
        <section className="py-16 bg-muted">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">{sections.caseStudies.title}</h2>
              <p className="text-xl text-muted-foreground mb-6">
                {sections.caseStudies.description}
              </p>
              <Button variant="outline" className="opacity-50 pointer-events-none">
                {sections.caseStudies.comingSoonMessage}
              </Button>
            </div>
          </div>
        </section>
      )}

      {/* Quick Links */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Available Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {additionalResources.filter(resource => resource.enabled).map((resource, index) => (
              <Card key={index}>
                <CardContent className="pt-6 text-center">
                  {resource.icon === "Download" && (
                    <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                  )}
                  {resource.icon === "FileText" && (
                    <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  )}
                  <h3 className="font-semibold mb-2">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {resource.description}
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <Link href={resource.link}>View Resources</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
