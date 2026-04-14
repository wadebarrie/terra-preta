import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { trackFormSubmission } from "@/lib/analytics";
import { FORMSPREE_ENDPOINT, ADS_QUOTE_SUCCESS_MESSAGE } from "@/lib/formspree";
import contactContent from "@content/pages/contact.json";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE_ORIGIN } from "@/const";
import { cmsStringList } from "@/lib/cmsStringList";

type InquiryIntent = "Order" | "Sample" | "General";
type ProductInterest = "SuperN" | "OrganiPhos" | "Both";

const iconFor = (name: string) => {
  if (name === "Phone") return Phone;
  if (name === "Mail") return Mail;
  return MapPin;
};

export default function Contact() {
  usePageMeta(
    contactContent.metaTitle,
    contactContent.metaDescription,
    `${SITE_ORIGIN}/contact`,
  );

  const lf = contactContent.leadForm;
  const formEndpoint =
    contactContent.formspreeEndpoint?.trim() || FORMSPREE_ENDPOINT;
  const errMsg =
    contactContent.form?.errorMessage ||
    "Failed to submit form. Please try again or contact us directly at sales@terrapreta.ca";

  const intentOptions = lf?.intentOptions?.length
    ? lf.intentOptions
    : [
        { value: "Order" as const, label: "Order spring fertility" },
        { value: "Sample" as const, label: "Request a sample" },
        { value: "General" as const, label: "General inquiry" },
      ];

  const productOptions = lf?.productOptions?.length
    ? lf.productOptions
    : [
        { value: "SuperN" as const, label: "SuperN" },
        { value: "OrganiPhos" as const, label: "OrganiPhos" },
        { value: "Both" as const, label: "Both" },
      ];

  const L = lf?.labels ?? {};

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [intent, setIntent] = useState<InquiryIntent>("General");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [acres, setAcres] = useState("");
  const [productInterest, setProductInterest] =
    useState<ProductInterest>("Both");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const raw = (params.get("intent") || "").toLowerCase();
    if (raw === "order") setIntent("Order");
    else if (raw === "sample") setIntent("Sample");
    else if (raw === "general") setIntent("General");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form: "ag_contact",
          intent,
          name,
          company,
          email,
          phone,
          province,
          approximateAcres: acres,
          productInterest,
          notes,
          _subject: `[${intent}] ${productInterest} — ${name} (${province}, ${acres} ac)`,
        }),
      });

      if (!response.ok) throw new Error("Form submission failed");

      trackFormSubmission({
        company,
        inquiry_type: intent,
      });

      toast.success(ADS_QUOTE_SUCCESS_MESSAGE);
      setSubmitSuccess(true);

      setIntent("General");
      setName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setProvince("");
      setAcres("");
      setProductInterest("Both");
      setNotes("");
    } catch (error) {
      toast.error(errMsg);
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {contactContent.heroTitle}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {contactContent.heroSubtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div
            className={`grid gap-8 mb-12 ${
              contactContent.contactCards?.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-3"
            }`}
          >
            {(contactContent.contactCards ?? []).map((card) => {
              const Icon = iconFor(card.icon);
              const lines = cmsStringList(card.lines as unknown);
              return (
                <Card key={card.title}>
                  <CardContent className="pt-6 text-center">
                    <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{card.title}</h3>
                    <div className="text-muted-foreground">
                      {card.email ? (
                        <a
                          href={`mailto:${card.email}`}
                          className="hover:text-foreground transition-colors"
                        >
                          {card.email}
                        </a>
                      ) : card.tel ? (
                        <a
                          href={`tel:${String(card.tel).replace(/\s/g, "")}`}
                          className="hover:text-foreground transition-colors"
                        >
                          {lines[0] ?? card.tel}
                        </a>
                      ) : (
                        lines.map((line, i) => (
                          <span key={i}>
                            {line}
                            {i < lines.length - 1 ? <br /> : null}
                          </span>
                        ))
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto">
            {submitSuccess ? (
              <Card className="border-primary/30 bg-muted/40">
                <CardContent className="pt-6 text-center">
                  <p className="text-lg font-medium">{ADS_QUOTE_SUCCESS_MESSAGE}</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitSuccess(false)}
                  >
                    {lf?.submitAnotherLabel ?? "Submit another request"}
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>{lf?.cardTitle ?? "Request a quote"}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="intent">{L.intent ?? "Inquiry type *"}</Label>
                      <Select
                        required
                        value={intent}
                        onValueChange={(v) => setIntent(v as InquiryIntent)}
                      >
                        <SelectTrigger id="intent" className="mt-1.5">
                          <SelectValue placeholder="Select one" />
                        </SelectTrigger>
                        <SelectContent>
                          {intentOptions.map((o) => (
                            <SelectItem key={o.value} value={o.value}>
                              {o.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="name">{L.name ?? "Name *"}</Label>
                      <Input
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1.5"
                        autoComplete="name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="company">{L.company ?? "Farm / Company *"}</Label>
                      <Input
                        id="company"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="mt-1.5"
                        autoComplete="organization"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">{L.email ?? "Email *"}</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mt-1.5"
                        autoComplete="email"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">{L.phone ?? "Phone"}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="mt-1.5"
                        autoComplete="tel"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="province">{L.province ?? "Province / region *"}</Label>
                        <Input
                          id="province"
                          required
                          value={province}
                          onChange={(e) => setProvince(e.target.value)}
                          className="mt-1.5"
                          placeholder={lf?.placeholders?.province ?? "e.g. AB, SK"}
                        />
                      </div>
                      <div>
                        <Label htmlFor="acres">{L.acres ?? "Approximate acres *"}</Label>
                        <Input
                          id="acres"
                          required
                          value={acres}
                          onChange={(e) => setAcres(e.target.value)}
                          className="mt-1.5"
                          placeholder={lf?.placeholders?.acres ?? "e.g. 1,200"}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="productInterest">
                        {L.productInterest ?? "Product interest *"}
                      </Label>
                      <Select
                        required
                        value={productInterest}
                        onValueChange={(v) =>
                          setProductInterest(v as ProductInterest)
                        }
                      >
                        <SelectTrigger id="productInterest" className="mt-1.5">
                          <SelectValue placeholder="Select one" />
                        </SelectTrigger>
                        <SelectContent>
                          {productOptions.map((o) => (
                            <SelectItem key={o.value} value={o.value}>
                              {o.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="notes">{L.notes ?? "Notes"}</Label>
                      <Textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="mt-1.5"
                        rows={4}
                        placeholder={
                          lf?.placeholders?.notes ??
                          "Crop mix, timing, delivery location—optional"
                        }
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting
                        ? lf?.submittingLabel ?? "Sending…"
                        : lf?.submitLabel ?? "Request your program"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {!submitSuccess ? (
              <p className="text-sm text-muted-foreground text-center mt-6">
                {lf?.footerNote ??
                  "We will be in touch within one business day to put together your program."}
              </p>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
