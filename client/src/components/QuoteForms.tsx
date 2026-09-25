import { Button } from "@/components/ui/button";
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
import { useState } from "react";
import { toast } from "sonner";
import {
  FORMSPREE_ENDPOINT,
  FORM_SUCCESS_MESSAGE,
  FORM_REPLY_NOTE,
} from "@/lib/formspree";
import { trackFormSubmission } from "@/lib/analytics";

type QuoteKind = "Agriculture" | "Reclamation";

type AgricultureQuoteFormProps = {
  id?: string;
};

type ReclamationQuoteFormProps = {
  id?: string;
};

async function submitQuote(
  kind: QuoteKind,
  payload: Record<string, string>,
  honeypot: string,
) {
  if (honeypot) {
    return { ok: true as const };
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      form: kind === "Agriculture" ? "agriculture_quote" : "reclamation_quote",
      _subject: `Quote request: ${kind}`,
      _gotcha: honeypot,
      ...payload,
    }),
  });

  if (!response.ok) {
    throw new Error("Form submission failed");
  }

  return { ok: true as const };
}

function Honeypot({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
      <label htmlFor="company_website">Company website</label>
      <input
        id="company_website"
        name="_gotcha"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="text-sm text-destructive mt-1">{message}</p>;
}

export function AgricultureQuoteForm({ id = "agriculture-quote" }: AgricultureQuoteFormProps) {
  const [name, setName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [acres, setAcres] = useState("");
  const [crop, setCrop] = useState("");
  const [seedingMethod, setSeedingMethod] = useState("");
  const [targetSeedingDate, setTargetSeedingDate] = useState("");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!location.trim()) next.location = "Location is required.";
    if (!acres.trim()) next.acres = "Acres is required.";
    else if (Number.isNaN(Number(acres)) || Number(acres) <= 0) {
      next.acres = "Enter a valid number of acres.";
    }
    if (!crop.trim()) next.crop = "Crop is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await submitQuote(
        "Agriculture",
        {
          name: name.trim(),
          farmName: farmName.trim(),
          email: email.trim(),
          location: location.trim(),
          acres: acres.trim(),
          crop: crop.trim(),
          seedingMethod,
          targetSeedingDate: targetSeedingDate.trim(),
          notes: notes.trim(),
        },
        honeypot,
      );
      trackFormSubmission({ company: farmName, inquiry_type: "Agriculture" });
      setSuccess(true);
      toast.success(FORM_SUCCESS_MESSAGE);
      setName("");
      setFarmName("");
      setEmail("");
      setLocation("");
      setAcres("");
      setCrop("");
      setSeedingMethod("");
      setTargetSeedingDate("");
      setNotes("");
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error(
        "Failed to submit form. Please try again or email info@terrapreta.ca.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div
        id={id}
        className="rounded-lg border border-primary/30 bg-muted/40 p-6 text-center scroll-mt-24"
      >
        <p className="text-lg font-medium">{FORM_SUCCESS_MESSAGE}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSuccess(false)}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="space-y-5 relative scroll-mt-24"
      noValidate
    >
      <h2 className="text-2xl font-bold">Agriculture quote</h2>
      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div>
        <Label htmlFor="ag-name">Name *</Label>
        <Input
          id="ag-name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5"
          autoComplete="name"
          aria-invalid={!!errors.name}
        />
        <FieldError message={errors.name} />
      </div>

      <div>
        <Label htmlFor="ag-farm">Farm name</Label>
        <Input
          id="ag-farm"
          value={farmName}
          onChange={(e) => setFarmName(e.target.value)}
          className="mt-1.5"
          autoComplete="organization"
        />
      </div>

      <div>
        <Label htmlFor="ag-email">Email *</Label>
        <Input
          id="ag-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5"
          autoComplete="email"
          aria-invalid={!!errors.email}
        />
        <FieldError message={errors.email} />
      </div>

      <div>
        <Label htmlFor="ag-location">Location (nearest town) *</Label>
        <Input
          id="ag-location"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1.5"
          aria-invalid={!!errors.location}
        />
        <FieldError message={errors.location} />
      </div>

      <div>
        <Label htmlFor="ag-acres">Acres *</Label>
        <Input
          id="ag-acres"
          type="number"
          inputMode="decimal"
          min={0}
          step="any"
          required
          value={acres}
          onChange={(e) => setAcres(e.target.value)}
          className="mt-1.5"
          aria-invalid={!!errors.acres}
        />
        <FieldError message={errors.acres} />
      </div>

      <div>
        <Label htmlFor="ag-crop">Crop *</Label>
        <Input
          id="ag-crop"
          required
          value={crop}
          onChange={(e) => setCrop(e.target.value)}
          className="mt-1.5"
          aria-invalid={!!errors.crop}
        />
        <FieldError message={errors.crop} />
      </div>

      <div>
        <Label htmlFor="ag-seeding-method">Seeding method</Label>
        <Select value={seedingMethod} onValueChange={setSeedingMethod}>
          <SelectTrigger id="ag-seeding-method" className="mt-1.5">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Drill">Drill</SelectItem>
            <SelectItem value="Broadcast">Broadcast</SelectItem>
            <SelectItem value="Both">Both</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="ag-target-date">Target seeding date</Label>
        <Input
          id="ag-target-date"
          value={targetSeedingDate}
          onChange={(e) => setTargetSeedingDate(e.target.value)}
          className="mt-1.5"
          placeholder="e.g. mid-May"
        />
      </div>

      <div>
        <Label htmlFor="ag-notes">Anything else we should know</Label>
        <Textarea
          id="ag-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1.5"
          rows={4}
        />
      </div>

      <p className="text-sm text-muted-foreground">{FORM_REPLY_NOTE}</p>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Request my quote"}
      </Button>
    </form>
  );
}

export function ReclamationQuoteForm({
  id = "reclamation-quote",
}: ReclamationQuoteFormProps) {
  const [company, setCompany] = useState("");
  const [contactName, setContactName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [siteLocation, setSiteLocation] = useState("");
  const [numberOfSites, setNumberOfSites] = useState("");
  const [disturbedArea, setDisturbedArea] = useState("");
  const [areaUnit, setAreaUnit] = useState<"acres" | "hectares">("acres");
  const [siteType, setSiteType] = useState("");
  const [soilTest, setSoilTest] = useState("");
  const [targetTiming, setTargetTiming] = useState("");
  const [notes, setNotes] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!company.trim()) next.company = "Company is required.";
    if (!contactName.trim()) next.contactName = "Contact name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!siteLocation.trim()) next.siteLocation = "Site location is required.";
    if (!disturbedArea.trim()) next.disturbedArea = "Disturbed area is required.";
    else if (Number.isNaN(Number(disturbedArea)) || Number(disturbedArea) <= 0) {
      next.disturbedArea = "Enter a valid area.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      await submitQuote(
        "Reclamation",
        {
          company: company.trim(),
          contactName: contactName.trim(),
          role: role.trim(),
          email: email.trim(),
          siteLocation: siteLocation.trim(),
          numberOfSites: numberOfSites.trim(),
          disturbedArea: disturbedArea.trim(),
          areaUnit,
          siteType,
          soilTestAvailable: soilTest,
          targetTiming: targetTiming.trim(),
          notes: notes.trim(),
        },
        honeypot,
      );
      trackFormSubmission({ company, inquiry_type: "Reclamation" });
      setSuccess(true);
      toast.success(FORM_SUCCESS_MESSAGE);
      setCompany("");
      setContactName("");
      setRole("");
      setEmail("");
      setSiteLocation("");
      setNumberOfSites("");
      setDisturbedArea("");
      setAreaUnit("acres");
      setSiteType("");
      setSoilTest("");
      setTargetTiming("");
      setNotes("");
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error(
        "Failed to submit form. Please try again or email info@terrapreta.ca.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div
        id={id}
        className="rounded-lg border border-primary/30 bg-muted/40 p-6 text-center scroll-mt-24"
      >
        <p className="text-lg font-medium">{FORM_SUCCESS_MESSAGE}</p>
        <Button
          type="button"
          variant="outline"
          className="mt-6"
          onClick={() => setSuccess(false)}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="space-y-5 relative scroll-mt-24"
      noValidate
    >
      <h2 className="text-2xl font-bold">Reclamation quote</h2>
      <Honeypot value={honeypot} onChange={setHoneypot} />

      <div>
        <Label htmlFor="rec-company">Company *</Label>
        <Input
          id="rec-company"
          required
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="mt-1.5"
          autoComplete="organization"
          aria-invalid={!!errors.company}
        />
        <FieldError message={errors.company} />
      </div>

      <div>
        <Label htmlFor="rec-contact">Contact name *</Label>
        <Input
          id="rec-contact"
          required
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          className="mt-1.5"
          autoComplete="name"
          aria-invalid={!!errors.contactName}
        />
        <FieldError message={errors.contactName} />
      </div>

      <div>
        <Label htmlFor="rec-role">Role</Label>
        <Input
          id="rec-role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="rec-email">Email *</Label>
        <Input
          id="rec-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5"
          autoComplete="email"
          aria-invalid={!!errors.email}
        />
        <FieldError message={errors.email} />
      </div>

      <div>
        <Label htmlFor="rec-site-location">Site location *</Label>
        <Input
          id="rec-site-location"
          required
          value={siteLocation}
          onChange={(e) => setSiteLocation(e.target.value)}
          className="mt-1.5"
          aria-invalid={!!errors.siteLocation}
        />
        <FieldError message={errors.siteLocation} />
      </div>

      <div>
        <Label htmlFor="rec-sites">Number of sites</Label>
        <Input
          id="rec-sites"
          type="number"
          inputMode="numeric"
          min={0}
          step={1}
          value={numberOfSites}
          onChange={(e) => setNumberOfSites(e.target.value)}
          className="mt-1.5"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="rec-area">Disturbed area *</Label>
          <Input
            id="rec-area"
            type="number"
            inputMode="decimal"
            min={0}
            step="any"
            required
            value={disturbedArea}
            onChange={(e) => setDisturbedArea(e.target.value)}
            className="mt-1.5"
            aria-invalid={!!errors.disturbedArea}
          />
          <FieldError message={errors.disturbedArea} />
        </div>
        <div>
          <Label htmlFor="rec-area-unit">Unit</Label>
          <Select
            value={areaUnit}
            onValueChange={(v) => setAreaUnit(v as "acres" | "hectares")}
          >
            <SelectTrigger id="rec-area-unit" className="mt-1.5">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="acres">acres</SelectItem>
              <SelectItem value="hectares">hectares</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="rec-site-type">Site type</Label>
        <Select value={siteType} onValueChange={setSiteType}>
          <SelectTrigger id="rec-site-type" className="mt-1.5">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Well site">Well site</SelectItem>
            <SelectItem value="Pipeline">Pipeline</SelectItem>
            <SelectItem value="Borrow area">Borrow area</SelectItem>
            <SelectItem value="Other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="rec-soil-test">Soil test available</Label>
        <Select value={soilTest} onValueChange={setSoilTest}>
          <SelectTrigger id="rec-soil-test" className="mt-1.5">
            <SelectValue placeholder="Select one" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Yes">Yes</SelectItem>
            <SelectItem value="No">No</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="rec-timing">Target timing</Label>
        <Input
          id="rec-timing"
          value={targetTiming}
          onChange={(e) => setTargetTiming(e.target.value)}
          className="mt-1.5"
        />
      </div>

      <div>
        <Label htmlFor="rec-notes">Notes</Label>
        <Textarea
          id="rec-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="mt-1.5"
          rows={4}
        />
      </div>

      <p className="text-sm text-muted-foreground">{FORM_REPLY_NOTE}</p>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending…" : "Request my quote"}
      </Button>
    </form>
  );
}
