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

export default function EvidenceLibrary() {
  const [sector, setSector] = useState("all");
  const [challenge, setChallenge] = useState("all");
  const [region, setRegion] = useState("all");

  // Sample evidence data
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
    {
      id: 2,
      title: "Stockpiled Topsoil Restoration",
      sector: "oil-gas",
      challenge: "low-organic-matter",
      region: "southern",
      abstract:
        "Germination improved from 40% to 85% on stockpiled topsoil. Reduced re-seeding costs by $12,000.",
      method: "Drill incorporation",
      species: "Mixed grass species",
      outcome: "$12,000 savings",
    },
    {
      id: 3,
      title: "Pipeline Right-of-Way Establishment",
      sector: "utilities",
      challenge: "poor-germination",
      region: "northern",
      abstract:
        "Uniform establishment across 50 acres of pipeline right-of-way. Zero re-mobilizations required.",
      method: "Hydroseeding",
      species: "Native forbs and grasses",
      outcome: "Zero re-mobilizations",
    },
    {
      id: 4,
      title: "Mine Tailings Reclamation",
      sector: "mining",
      challenge: "severe-degradation",
      region: "northern",
      abstract:
        "Native grass establishment across 200 acres of mine tailings. Site met reclamation criteria in 18 months.",
      method: "Broadcast application",
      species: "Native grass mix",
      outcome: "Met criteria in 18 months",
    },
  ];

  const filteredEvidence = evidence.filter((item) => {
    if (sector !== "all" && item.sector !== sector) return false;
    if (challenge !== "all" && item.challenge !== challenge) return false;
    if (region !== "all" && item.region !== region) return false;
    return true;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Evidence Library
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Case studies, method statements, and technical documentation from
              Terra Revive projects across Alberta and the Prairies.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-muted">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <Select value={sector} onValueChange={setSector}>
                <SelectTrigger>
                  <SelectValue placeholder="All Sectors" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sectors</SelectItem>
                  <SelectItem value="oil-gas">Oil and Gas</SelectItem>
                  <SelectItem value="utilities">Utilities</SelectItem>
                  <SelectItem value="mining">Mining</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={challenge} onValueChange={setChallenge}>
                <SelectTrigger>
                  <SelectValue placeholder="All Challenges" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Challenges</SelectItem>
                  <SelectItem value="compaction">Compaction</SelectItem>
                  <SelectItem value="low-organic-matter">
                    Low Organic Matter
                  </SelectItem>
                  <SelectItem value="poor-germination">
                    Poor Germination
                  </SelectItem>
                  <SelectItem value="severe-degradation">
                    Severe Degradation
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Select value={region} onValueChange={setRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="All Regions" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="northern">Northern Alberta</SelectItem>
                  <SelectItem value="central">Central Alberta</SelectItem>
                  <SelectItem value="southern">Southern Alberta</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Evidence Grid */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredEvidence.length} of {evidence.length} results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredEvidence.map((item) => (
              <Card key={item.id}>
                <CardContent className="pt-6">
                  <div className="aspect-video bg-muted rounded mb-4 flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Before/After Image
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {item.abstract}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Method:</span>
                      <span className="font-medium">{item.method}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Species:</span>
                      <span className="font-medium">{item.species}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Outcome:</span>
                      <span className="font-medium">{item.outcome}</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" />
                    Download Case Study PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Additional Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Method Statements</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed application procedures for each method
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/evidence/method-statements">View Methods</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Download className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">SDS and TDS</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Safety and technical data sheets
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/evidence/sds-tds">Download Sheets</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">All Case Studies</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete collection of project evidence
                </p>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/evidence/case-studies">View All</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
