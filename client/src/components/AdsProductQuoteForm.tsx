import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FORMSPREE_ENDPOINT, ADS_QUOTE_SUCCESS_MESSAGE } from "@/lib/formspree";
import { trackQualifiedLead } from "@/lib/analytics";

export type AdsProductChoice = "SuperN" | "OrganiPhos" | "Both";
export type AdsInquiryIntent = "Order" | "Sample" | "General";

const PROVINCES = [
  { value: "AB", label: "Alberta" },
  { value: "SK", label: "Saskatchewan" },
  { value: "MB", label: "Manitoba" },
  { value: "BC", label: "British Columbia" },
  { value: "OTHER_CA", label: "Other (Canada)" },
  { value: "OUTSIDE_CA", label: "Outside Canada" },
] as const;

type AdsProductQuoteFormProps = {
  /** Page context for analytics + Formspree */
  landingSlug: string;
  defaultProduct: AdsProductChoice;
  defaultIntent?: AdsInquiryIntent;
};

export function AdsProductQuoteForm({
  landingSlug,
  defaultProduct,
  defaultIntent,
}: AdsProductQuoteFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [acres, setAcres] = useState("");
  const [productInterest, setProductInterest] =
    useState<AdsProductChoice>(defaultProduct);
  const [intent, setIntent] = useState<AdsInquiryIntent>(
    defaultIntent ?? "General"
  );
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (defaultIntent) return;
    const params = new URLSearchParams(window.location.search);
    const raw = (params.get("intent") || "").toLowerCase();
    if (raw === "order") setIntent("Order");
    else if (raw === "sample") setIntent("Sample");
    else if (raw === "general") setIntent("General");
  }, [defaultIntent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!intent) {
      toast.error("Please select an inquiry type.");
      return;
    }
    if (!province) {
      toast.error("Please select a province or region.");
      return;
    }
    if (!acres.trim()) {
      toast.error("Please enter approximate acres.");
      return;
    }
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "ads_product_quote",
          landingPage: landingSlug,
          name,
          email,
          phone,
          province,
          approximateAcres: acres,
          productInterest,
          intent,
          notes,
          _subject: `[${intent}] ${productInterest} — ${name} (${province}, ${acres} ac)`,
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      trackQualifiedLead("form", {
        form_name: "ads_product_quote",
        product: productInterest,
        province,
      });

      toast.success(ADS_QUOTE_SUCCESS_MESSAGE);
      setSuccess(true);
      setName("");
      setEmail("");
      setPhone("");
      setProvince("");
      setAcres("");
      setProductInterest(defaultProduct);
      setIntent("General");
      setNotes("");
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong. Please try again or call (403) 921-6291."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <Card id="quote" className="shadow-md border-primary/20">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Request received</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-muted/50 p-5 text-center">
            <p className="text-base font-medium text-foreground leading-relaxed">
              {ADS_QUOTE_SUCCESS_MESSAGE}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-5"
              onClick={() => setSuccess(false)}
            >
              Submit another request
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card id="quote" className="shadow-md border-primary/20 lg:sticky lg:top-24">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl">Get a quote</CardTitle>
        <p className="text-sm text-muted-foreground font-normal leading-snug">
          Short form—we will follow up to size a program for your acres.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="ads-intent">Inquiry type *</Label>
            <Select
              required
              value={intent}
              onValueChange={(v) => setIntent(v as AdsInquiryIntent)}
            >
              <SelectTrigger id="ads-intent" className="mt-1">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Order">Order spring fertility</SelectItem>
                <SelectItem value="Sample">Request a sample</SelectItem>
                <SelectItem value="General">General inquiry</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="ads-name">Name *</Label>
            <Input
              id="ads-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1"
              autoComplete="name"
            />
          </div>

          <div>
            <Label htmlFor="ads-email">Email *</Label>
            <Input
              id="ads-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1"
              autoComplete="email"
            />
          </div>

          <div>
            <Label htmlFor="ads-phone">Phone</Label>
            <Input
              id="ads-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1"
              autoComplete="tel"
            />
          </div>

          <div>
            <Label htmlFor="ads-province">Province / region *</Label>
            <Select
              required
              value={province}
              onValueChange={setProvince}
            >
              <SelectTrigger id="ads-province" className="mt-1">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {PROVINCES.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="ads-acres">Approximate acres *</Label>
            <Input
              id="ads-acres"
              required
              inputMode="decimal"
              value={acres}
              onChange={(e) => setAcres(e.target.value)}
              className="mt-1"
              placeholder="e.g. 1,200"
            />
          </div>

          <div>
            <Label htmlFor="ads-product">Product interest *</Label>
            <Select
              required
              value={productInterest}
              onValueChange={(v) =>
                setProductInterest(v as AdsProductChoice)
              }
            >
              <SelectTrigger id="ads-product" className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SuperN">SuperN</SelectItem>
                <SelectItem value="OrganiPhos">OrganiPhos</SelectItem>
                <SelectItem value="Both">Both</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="ads-notes">Notes</Label>
            <Textarea
              id="ads-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1"
              rows={3}
              placeholder="Crop mix, timing, delivery—optional"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Request your program"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
