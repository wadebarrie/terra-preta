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
import costPaybackContent from "@content/pages/cost-payback.json";

export default function CostPayback() {
  const [acres, setAcres] = useState("");
  const [rate, setRate] = useState("");
  const [reVisitsAvoided, setReVisitsAvoided] = useState("");
  const [showResults, setShowResults] = useState(false);

  const calculateCost = () => {
    if (!acres || !rate) return null;

    const settings = costPaybackContent.calculationSettings;
    const acresNum = parseFloat(acres);
    const rateNum = parseFloat(rate);
    const totalPounds = acresNum * rateNum;

    // Calculate using tote pricing
    const totes = Math.ceil(totalPounds / settings.toteWeight);
    const productCost = totes * settings.totePrice;

    // Estimate re-mobilization costs
    const reVisits = reVisitsAvoided ? parseInt(reVisitsAvoided) : 0;
    const estimatedSavings = reVisits * settings.remobilizationCost;

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
              {costPaybackContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {costPaybackContent.heroSubtitle}
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
                      <Label htmlFor="acres">{costPaybackContent.form.fields.acres.label}</Label>
                      <Input
                        id="acres"
                        type="number"
                        placeholder={costPaybackContent.form.fields.acres.placeholder}
                        value={acres}
                        onChange={(e) => setAcres(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="rate">{costPaybackContent.form.fields.rate.label}</Label>
                      <Select value={rate} onValueChange={setRate}>
                        <SelectTrigger>
                          <SelectValue placeholder={costPaybackContent.form.fields.rate.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {costPaybackContent.form.fields.rate.options.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="reVisits">
                        {costPaybackContent.form.fields.reVisits.label}
                      </Label>
                      <Input
                        id="reVisits"
                        type="number"
                        placeholder={costPaybackContent.form.fields.reVisits.placeholder}
                        value={reVisitsAvoided}
                        onChange={(e) => setReVisitsAvoided(e.target.value)}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        {costPaybackContent.form.fields.reVisits.helpText}
                      </p>
                    </div>
                  </div>

                  <Button onClick={handleCalculate} className="w-full">
                    {costPaybackContent.form.submitButton}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            {results && (
              <div className="mt-8 space-y-6">
                <Card className="border-primary">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6">{costPaybackContent.results.costEstimate.title}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">{costPaybackContent.results.costEstimate.totalPoundsLabel}</h3>
                        <p className="text-2xl font-bold">
                          {results.totalPounds.toLocaleString()} lb
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">{costPaybackContent.results.costEstimate.totesLabel}</h3>
                        <p className="text-2xl font-bold">{results.totes}</p>
                      </div>

                      <div className="md:col-span-2 bg-muted p-4 rounded">
                        <h3 className="font-semibold mb-2">{costPaybackContent.results.costEstimate.productCostLabel}</h3>
                        <p className="text-3xl font-bold text-primary">
                          ${results.productCost.toLocaleString()}
                        </p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {costPaybackContent.results.costEstimate.productCostNote}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {results.reVisits > 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <h2 className="text-2xl font-bold mb-6">
                        {costPaybackContent.results.potentialSavings.title}
                      </h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2">
                            {costPaybackContent.results.potentialSavings.reVisitsLabel}
                          </h3>
                          <p className="text-2xl font-bold">
                            {results.reVisits} {costPaybackContent.results.potentialSavings.reVisitsUnit}
                          </p>
                        </div>

                        <div className="bg-muted p-4 rounded">
                          <h3 className="font-semibold mb-2">
                            {costPaybackContent.results.potentialSavings.estimatedSavingsLabel}
                          </h3>
                          <p className="text-3xl font-bold text-primary">
                            ${results.estimatedSavings.toLocaleString()}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {costPaybackContent.results.potentialSavings.savingsNote}
                          </p>
                        </div>

                        <div className="bg-primary text-primary-foreground p-4 rounded">
                          <h3 className="font-semibold mb-2">{costPaybackContent.results.potentialSavings.netCostLabel}</h3>
                          <p className="text-3xl font-bold">
                            ${Math.max(0, results.netCost).toLocaleString()}
                          </p>
                          {results.netCost <= 0 && (
                            <p className="text-sm mt-1 opacity-90">
                              {costPaybackContent.results.potentialSavings.paybackMessage}
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
                      {costPaybackContent.results.scheduleRisk.title}
                    </h3>
                    {costPaybackContent.results.scheduleRisk.paragraphs.map((para, index) => (
                      <p key={index} className={`text-muted-foreground leading-relaxed ${index < costPaybackContent.results.scheduleRisk.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                        {para}
                      </p>
                    ))}
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
            <h2 className="text-2xl font-bold mb-6">{costPaybackContent.infoSection.title}</h2>
            {costPaybackContent.infoSection.paragraphs.map((para, index) => (
              <p key={index} className={`text-muted-foreground leading-relaxed ${index < costPaybackContent.infoSection.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
