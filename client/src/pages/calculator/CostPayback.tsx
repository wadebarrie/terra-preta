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
import { Download } from "lucide-react";
import { useState } from "react";

export default function CostPayback() {
  const [acres, setAcres] = useState("");
  const [rate, setRate] = useState("");
  const [reVisitsAvoided, setReVisitsAvoided] = useState("");
  const [showResults, setShowResults] = useState(false);

  const calculateCost = () => {
    if (!acres || !rate) return null;

    const acresNum = parseFloat(acres);
    const rateNum = parseFloat(rate);
    const totalPounds = acresNum * rateNum;

    // Calculate using tote pricing (more economical for large orders)
    const totes = Math.ceil(totalPounds / 1500);
    const productCost = totes * 2250;

    // Estimate re-mobilization costs
    const reVisits = reVisitsAvoided ? parseInt(reVisitsAvoided) : 0;
    const estimatedSavings = reVisits * 5000; // Assume $5,000 per re-mobilization

    return {
      totalPounds,
      totes,
      productCost,
      reVisits,
      estimatedSavings,
      netCost: productCost - estimatedSavings,
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateCost() : null;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cost and Payback
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Estimate Terra Revive product costs and potential savings from
              reduced re-mobilizations and faster site closure.
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
                      <Label htmlFor="rate">Application Rate (lb/acre) *</Label>
                      <Select value={rate} onValueChange={setRate}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select rate" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1500">1,500 lb/acre</SelectItem>
                          <SelectItem value="1750">1,750 lb/acre</SelectItem>
                          <SelectItem value="2000">2,000 lb/acre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="reVisits">
                        Estimated Re-visits Avoided Per Year
                      </Label>
                      <Input
                        id="reVisits"
                        type="number"
                        placeholder="e.g., 1 or 2"
                        value={reVisitsAvoided}
                        onChange={(e) => setReVisitsAvoided(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Each re-mobilization typically costs $3,000 to $7,000 in
                        equipment, labor, and materials.
                      </p>
                    </div>
                  </div>

                  <Button onClick={handleCalculate} className="w-full">
                    Calculate Cost and Payback
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {results && (
              <div className="mt-8 space-y-6">
                <Card className="border-primary">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6">Cost Estimate</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">Total Pounds</h3>
                        <p className="text-2xl font-bold">
                          {results.totalPounds.toLocaleString()} lb
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">Totes Needed</h3>
                        <p className="text-2xl font-bold">{results.totes}</p>
                      </div>

                      <div className="md:col-span-2 bg-muted p-4 rounded">
                        <h3 className="font-semibold mb-2">Product Cost</h3>
                        <p className="text-3xl font-bold text-primary">
                          ${results.productCost.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Based on 1,500 lb totes at $1.50/lb
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {results.reVisits > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-6">
                        Potential Savings
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">
                            Re-mobilizations Avoided
                          </h3>
                          <p className="text-2xl font-bold">
                            {results.reVisits} per year
                          </p>
                        </div>

                        <div className="bg-muted p-4 rounded">
                          <h3 className="font-semibold mb-2">
                            Estimated Savings
                          </h3>
                          <p className="text-3xl font-bold text-primary">
                            ${results.estimatedSavings.toLocaleString()}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Based on $5,000 per re-mobilization (equipment,
                            labor, materials)
                          </p>
                        </div>

                        <div className="bg-primary text-primary-foreground p-4 rounded">
                          <h3 className="font-semibold mb-2">Net Cost</h3>
                          <p className="text-3xl font-bold">
                            ${Math.max(0, results.netCost).toLocaleString()}
                          </p>
                          {results.netCost <= 0 && (
                            <p className="text-sm mt-1 opacity-90">
                              Terra Revive pays for itself in avoided
                              re-mobilizations
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">
                      Schedule and Re-mobilization Risk
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Sites that fail to establish vegetation require
                      re-mobilization for additional seeding, fertilization, or
                      soil amendments. Each re-mobilization delays site closure
                      and adds costs for equipment, labor, and materials.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Terra Revive rebuilds soil function so native species
                      establish in the first growing season, reducing the risk of
                      failed inspections and costly return visits. Sites close
                      faster and operators avoid carrying long-term liability.
                    </p>
                  </CardContent>
                </Card>

                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Export as PDF
                </Button>
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
              The Cost and Payback calculator estimates Terra Revive product
              costs based on your site size and application rate. It also
              calculates potential savings from avoided re-mobilizations.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Re-mobilization costs vary by site location, access, and scope of
              work. This calculator uses a conservative estimate of $5,000 per
              re-mobilization. Actual costs may be higher for remote sites or
              large acreages.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              For site-specific cost estimates and project planning, contact us
              to discuss your reclamation needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
