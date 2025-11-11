import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

export default function PelletSelector() {
  const [acres, setAcres] = useState("");
  const [method, setMethod] = useState("");
  const [soilTexture, setSoilTexture] = useState("");
  const [ph, setPh] = useState("");
  const [organicMatter, setOrganicMatter] = useState("");
  const [compaction, setCompaction] = useState("");
  const [showResults, setShowResults] = useState(false);

  const calculateRecommendation = () => {
    if (!acres || !method) return null;

    // Base rate calculation
    let rate = 1500;

    // Adjust based on soil conditions
    if (compaction === "severe") rate += 300;
    else if (compaction === "moderate") rate += 150;

    if (organicMatter && parseFloat(organicMatter) < 2) rate += 200;

    if (ph) {
      const phValue = parseFloat(ph);
      if (phValue < 5.5 || phValue > 8.5) rate += 150;
    }

    // Cap at 2000
    rate = Math.min(rate, 2000);

    const acresNum = parseFloat(acres);
    const totalPounds = rate * acresNum;
    const totes = Math.ceil(totalPounds / 1500);
    const bags = Math.ceil(totalPounds / 50);

    return {
      rate,
      totalPounds,
      totes,
      bags,
      method,
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateRecommendation() : null;

  const getMethodNotes = (method: string) => {
    switch (method) {
      case "broadcast":
        return "Apply with spreader truck or ATV spreader. Light incorporation recommended if equipment available.";
      case "drill":
        return "Place in seed row with standard drill equipment. Pellets integrate with soil during seeding.";
      case "hydroseeding":
        return "Mix into slurry after seed and mulch. Agitate for 2-3 minutes to ensure even suspension.";
      case "drone":
        return "Flows through standard spreader attachments. Ideal for remote sites and areas with limited ground access.";
      default:
        return "";
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pellet Selector
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Calculate the recommended Terra Revive application rate for your
              site based on acres, application method, and soil conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="acres">Acres *</Label>
                      <Input
                        id="acres"
                        type="number"
                        placeholder="Enter acres"
                        value={acres}
                        onChange={(e) => setAcres(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="method">Application Method *</Label>
                      <Select value={method} onValueChange={setMethod}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="broadcast">Broadcast</SelectItem>
                          <SelectItem value="drill">Drill Incorporation</SelectItem>
                          <SelectItem value="hydroseeding">Hydroseeding</SelectItem>
                          <SelectItem value="drone">Drone</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="soilTexture">Soil Texture</Label>
                      <Select value={soilTexture} onValueChange={setSoilTexture}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select texture" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="sand">Sand</SelectItem>
                          <SelectItem value="loam">Loam</SelectItem>
                          <SelectItem value="clay">Clay</SelectItem>
                          <SelectItem value="silt">Silt</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="ph">Soil pH (optional)</Label>
                      <Input
                        id="ph"
                        type="number"
                        step="0.1"
                        placeholder="e.g., 6.5"
                        value={ph}
                        onChange={(e) => setPh(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="organicMatter">
                        Organic Matter % (optional)
                      </Label>
                      <Input
                        id="organicMatter"
                        type="number"
                        step="0.1"
                        placeholder="e.g., 3.5"
                        value={organicMatter}
                        onChange={(e) => setOrganicMatter(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="compaction">Compaction Level</Label>
                      <Select value={compaction} onValueChange={setCompaction}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None / Light</SelectItem>
                          <SelectItem value="moderate">Moderate</SelectItem>
                          <SelectItem value="severe">Severe</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleCalculate} className="w-full">
                    Calculate Recommendation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {results && (
              <div className="mt-8 space-y-6">
                <Card className="border-primary">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6">
                      Recommended Application
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">
                          Recommended Rate
                        </h3>
                        <p className="text-3xl font-bold text-primary">
                          {results.rate} lb/acre
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Total Pounds</h3>
                        <p className="text-3xl font-bold text-primary">
                          {results.totalPounds.toLocaleString()} lb
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          1,500 lb Totes Needed
                        </h3>
                        <p className="text-2xl font-bold">
                          {results.totes} totes
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Estimated cost: $
                          {(results.totes * 2250).toLocaleString()}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          50 lb Bags Needed
                        </h3>
                        <p className="text-2xl font-bold">
                          {results.bags} bags
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Estimated cost: $
                          {(results.bags * 87.5).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">
                      Method Notes: {method.charAt(0).toUpperCase() + method.slice(1)}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {getMethodNotes(results.method)}
                    </p>
                    <h3 className="font-semibold text-lg mb-3">
                      Incorporation Guidance
                    </h3>
                    <p className="text-muted-foreground">
                      {results.method === "broadcast" &&
                        "Light harrowing or raking after application improves pellet-soil contact. If equipment is not available, pellets will integrate naturally with rainfall and freeze-thaw cycles."}
                      {results.method === "drill" &&
                        "Pellets are placed in the seed row and covered with soil during drilling. No additional incorporation needed."}
                      {results.method === "hydroseeding" &&
                        "Pellets are suspended in slurry and applied with seed and mulch. No additional incorporation needed."}
                      {results.method === "drone" &&
                        "Pellets are broadcast from the air. Light rainfall or irrigation helps integrate pellets into the soil surface."}
                    </p>
                  </CardContent>
                </Card>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Generate Bid Ready PDF
                  </Button>
                  <Button asChild className="flex-1">
                    <Link href="/contact">
                      <FileText className="mr-2 h-4 w-4" />
                      Add to Quote Request
                    </Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">About this calculator</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              The Pellet Selector calculates a recommended Terra Revive
              application rate based on your site conditions. The base rate is
              1,500 lb per acre for sites with moderate degradation. The
              calculator adjusts the rate upward (to a maximum of 2,000 lb per
              acre) based on compaction level, low organic matter, and extreme pH
              values.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This is a planning tool. For site-specific recommendations, book a
              site assessment or contact us to discuss your reclamation needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
