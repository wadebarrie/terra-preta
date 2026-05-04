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
import { FORMSPREE_ENDPOINT, FORM_SUCCESS_MESSAGE } from "@/lib/formspree";
import { trackQualifiedLead } from "@/lib/analytics";

export type ProductInquiryType = "Order" | "Sample" | "General";

type ProductInquiryFormProps = {
  productName: string;
  inquiryType: ProductInquiryType;
  onInquiryTypeChange: (t: ProductInquiryType) => void;
};

export function ProductInquiryForm({
  productName,
  inquiryType,
  onInquiryTypeChange,
}: ProductInquiryFormProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = (params.get("inquiry") || "").toLowerCase();
    if (raw === "order") onInquiryTypeChange("Order");
    else if (raw === "sample") onInquiryTypeChange("Sample");
    else if (raw === "general") onInquiryTypeChange("General");
    // Intentionally run once on mount so ?inquiry= presets the form.
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          company,
          email,
          phone,
          notes,
          inquiryType,
          product: productName,
          _subject: `[${productName}] ${inquiryType} inquiry — ${company || name || email}`,
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      trackQualifiedLead("form", {
        form_name: "product_inquiry",
        product: productName,
        inquiry_type: inquiryType,
        company,
      });

      toast.success(FORM_SUCCESS_MESSAGE);
      setSuccess(true);
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setNotes("");
    } catch (err) {
      console.error(err);
      toast.error(
        "Something went wrong. Please try again or email chris@terrapreta.ca."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <Card id="quote">
        <CardHeader>
          <CardTitle>Request a quote</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-muted/50 p-6 text-center">
            <p className="text-lg font-medium text-foreground">
              {FORM_SUCCESS_MESSAGE}
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-6"
              onClick={() => setSuccess(false)}
            >
              Send another message
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card id="quote">
      <CardHeader>
        <CardTitle>Request a quote</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="inquiry-type">Inquiry type *</Label>
            <Select
              required
              value={inquiryType}
              onValueChange={(v) =>
                onInquiryTypeChange(v as ProductInquiryType)
              }
            >
              <SelectTrigger id="inquiry-type" className="mt-1.5">
                <SelectValue placeholder="Select one" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Order">Order</SelectItem>
                <SelectItem value="Sample">Sample</SelectItem>
                <SelectItem value="General">General</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="pi-name">Name *</Label>
            <Input
              id="pi-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5"
              autoComplete="name"
            />
          </div>

          <div>
            <Label htmlFor="pi-company">Company *</Label>
            <Input
              id="pi-company"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="mt-1.5"
              autoComplete="organization"
            />
          </div>

          <div>
            <Label htmlFor="pi-email">Email *</Label>
            <Input
              id="pi-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5"
              autoComplete="email"
            />
          </div>

          <div>
            <Label htmlFor="pi-phone">Phone</Label>
            <Input
              id="pi-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1.5"
              autoComplete="tel"
            />
          </div>

          <div>
            <Label htmlFor="pi-notes">Details</Label>
            <Textarea
              id="pi-notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="mt-1.5"
              rows={4}
              placeholder="Crop or use case, approximate volume, timing, delivery location…"
            />
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Submit inquiry"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
