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
import pelletSelectorContent from "@content/pages/pellet-selector.json";
import { trackCalculatorUsage } from "@/lib/analytics";

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

    const settings = pelletSelectorContent.calculationSettings;
    let rate = settings.baseRate;

    // Adjust based on soil conditions
    if (compaction === "severe") rate += settings.adjustments.severeCompaction;
    else if (compaction === "moderate") rate += settings.adjustments.moderateCompaction;

    if (organicMatter && parseFloat(organicMatter) < 2) rate += settings.adjustments.lowOrganicMatter;

    if (ph) {
      const phValue = parseFloat(ph);
      if (phValue < 5.5 || phValue > 8.5) rate += settings.adjustments.extremePh;
    }

    // Cap at max rate
    rate = Math.min(rate, settings.maxRate);

    const acresNum = parseFloat(acres);
    const totalPounds = rate * acresNum;
    const totes = Math.ceil(totalPounds / settings.toteWeight);
    const bags = Math.ceil(totalPounds / settings.bagWeight);

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
    
    // Track calculator usage in Google Analytics
    const results = calculateRecommendation();
    if (results) {
      trackCalculatorUsage('pellet_selector', {
        acres: parseFloat(acres),
        method: method,
        recommended_rate: results.rate,
        total_pounds: results.totalPounds,
        totes_needed: results.totes,
        soil_texture: soilTexture || 'not_specified',
        ph_value: ph || 'not_specified',
        organic_matter: organicMatter || 'not_specified',
        compaction: compaction || 'not_specified',
      });
    }
  };

  const results = showResults ? calculateRecommendation() : null;

  const getMethodNotes = (method: string) => {
    return pelletSelectorContent.methodNotes[method as keyof typeof pelletSelectorContent.methodNotes] || "";
  };

  const getIncorporationGuidance = (method: string) => {
    return pelletSelectorContent.incorporationGuidance[method as keyof typeof pelletSelectorContent.incorporationGuidance] || "";
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {pelletSelectorContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {pelletSelectorContent.heroSubtitle}
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
                      <Label htmlFor="acres">{pelletSelectorContent.form.fields.acres.label}</Label>
                      <Input
                        id="acres"
                        type="number"
                        placeholder={pelletSelectorContent.form.fields.acres.placeholder}
                        value={acres}
                        onChange={(e) => setAcres(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="method">{pelletSelectorContent.form.fields.method.label}</Label>
                      <Select value={method} onValueChange={setMethod}>
                        <SelectTrigger>
                          <SelectValue placeholder={pelletSelectorContent.form.fields.method.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {pelletSelectorContent.form.fields.method.options.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="soilTexture">{pelletSelectorContent.form.fields.soilTexture.label}</Label>
                      <Select value={soilTexture} onValueChange={setSoilTexture}>
                        <SelectTrigger>
                          <SelectValue placeholder={pelletSelectorContent.form.fields.soilTexture.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {pelletSelectorContent.form.fields.soilTexture.options.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="ph">{pelletSelectorContent.form.fields.ph.label}</Label>
                      <Input
                        id="ph"
                        type="number"
                        step="0.1"
                        placeholder={pelletSelectorContent.form.fields.ph.placeholder}
                        value={ph}
                        onChange={(e) => setPh(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="organicMatter">
                        {pelletSelectorContent.form.fields.organicMatter.label}
                      </Label>
                      <Input
                        id="organicMatter"
                        type="number"
                        step="0.1"
                        placeholder={pelletSelectorContent.form.fields.organicMatter.placeholder}
                        value={organicMatter}
                        onChange={(e) => setOrganicMatter(e.target.value)}
                      />
                    </div>

                    <div>
                      <Label htmlFor="compaction">{pelletSelectorContent.form.fields.compaction.label}</Label>
                      <Select value={compaction} onValueChange={setCompaction}>
                        <SelectTrigger>
                          <SelectValue placeholder={pelletSelectorContent.form.fields.compaction.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {pelletSelectorContent.form.fields.compaction.options.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleCalculate} className="w-full">
                    {pelletSelectorContent.form.submitButton}
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
                      {pelletSelectorContent.results.title}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-2">
                          {pelletSelectorContent.results.rateLabel}
                        </h3>
                        <p className="text-3xl font-bold text-primary">
                          {results.rate} lb/acre
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">{pelletSelectorContent.results.totalPoundsLabel}</h3>
                        <p className="text-3xl font-bold text-primary">
                          {results.totalPounds.toLocaleString()} lb
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          {pelletSelectorContent.results.totesLabel}
                        </h3>
                        <p className="text-2xl font-bold">
                          {results.totes} totes
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {pelletSelectorContent.results.totesNote.replace('$', `$${(results.totes * pelletSelectorContent.calculationSettings.totePrice * pelletSelectorContent.calculationSettings.toteWeight).toLocaleString()}`)}
                        </p>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-2">
                          {pelletSelectorContent.results.bagsLabel}
                        </h3>
                        <p className="text-2xl font-bold">
                          {results.bags} bags
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {pelletSelectorContent.results.bagsNote}
                          {(results.bags * pelletSelectorContent.calculationSettings.bagWeight * pelletSelectorContent.calculationSettings.bagPrice).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-3">
                      {pelletSelectorContent.results.methodNotesTitle} {method.charAt(0).toUpperCase() + method.slice(1)}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {getMethodNotes(results.method)}
                    </p>
                    <h3 className="font-semibold text-lg mb-3">
                      {pelletSelectorContent.results.incorporationGuidanceTitle}
                    </h3>
                    <p className="text-muted-foreground">
                      {getIncorporationGuidance(results.method)}
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
                      Get a Quote
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
            <h2 className="text-2xl font-bold mb-6">{pelletSelectorContent.infoSection.title}</h2>
            {pelletSelectorContent.infoSection.paragraphs.map((para, index) => (
              <p key={index} className={`text-muted-foreground leading-relaxed ${index < pelletSelectorContent.infoSection.paragraphs.length - 1 ? 'mb-4' : ''}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
