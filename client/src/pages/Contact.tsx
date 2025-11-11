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
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export default function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    role: "",
    company: "",
    email: "",
    phone: "",
    siteSize: "",
    legalDescription: "",
    soilTest: null as File | null,
    timeline: "",
    method: "",
    deliveryNeeds: "",
    notes: "",
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: () => {
      toast.success(
        "Thank you for your inquiry! We'll be in touch within 24 hours and send you the bid ready spec pack via email."
      );
      // Reset form
      setFormData({
        role: "",
        company: "",
        email: "",
        phone: "",
        siteSize: "",
        legalDescription: "",
        soilTest: null,
        timeline: "",
        method: "",
        deliveryNeeds: "",
        notes: "",
      });
      setStep(1);
    },
    onError: (error) => {
      toast.error("Failed to submit form. Please try again or contact us directly.");
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitMutation.mutate({
      role: formData.role,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      siteSize: formData.siteSize,
      legalDescription: formData.legalDescription,
      soilTestUrl: formData.soilTest ? "uploaded" : undefined, // File upload would need S3 integration
      timeline: formData.timeline,
      method: formData.method,
      deliveryNeeds: formData.deliveryNeeds,
      notes: formData.notes,
    });
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Book a site assessment, request a quote, or start a pilot project.
              On-site support and partner application services available.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardContent className="pt-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">
                  Sundre, Alberta
                  <br />
                  Serving Alberta and the Prairies
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">
                  <a
                    href="tel:+14035551234"
                    className="hover:text-foreground transition-colors"
                  >
                    (403) 555-1234
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6 text-center">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  <a
                    href="mailto:sales@terrapreta.ca"
                    className="hover:text-foreground transition-colors"
                  >
                    sales@terrapreta.ca
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Multi-step Form */}
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">
                      {step === 1 && "Step 1: Your Information"}
                      {step === 2 && "Step 2: Site Details"}
                      {step === 3 && "Step 3: Project Requirements"}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      Step {step} of 3
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <div
                      className={`flex-1 h-2 rounded ${
                        step >= 1 ? "bg-primary" : "bg-muted"
                      }`}
                    />
                    <div
                      className={`flex-1 h-2 rounded ${
                        step >= 2 ? "bg-primary" : "bg-muted"
                      }`}
                    />
                    <div
                      className={`flex-1 h-2 rounded ${
                        step >= 3 ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Your Information */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="role">Role *</Label>
                        <Select
                          value={formData.role}
                          onValueChange={(value) =>
                            setFormData({ ...formData, role: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consultant">
                              Reclamation Consultant
                            </SelectItem>
                            <SelectItem value="epc">EPC / Contractor</SelectItem>
                            <SelectItem value="operator">
                              Site Operator
                            </SelectItem>
                            <SelectItem value="environmental">
                              Environmental Manager
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="company">Company *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            setFormData({ ...formData, company: e.target.value })
                          }
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your.email@company.com"
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="(403) 555-1234"
                        />
                      </div>

                      <Button type="button" onClick={nextStep} className="w-full">
                        Next Step
                      </Button>
                    </div>
                  )}

                  {/* Step 2: Site Details */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="siteSize">Site Size (acres) *</Label>
                        <Input
                          id="siteSize"
                          type="number"
                          value={formData.siteSize}
                          onChange={(e) =>
                            setFormData({ ...formData, siteSize: e.target.value })
                          }
                          placeholder="e.g., 25"
                        />
                      </div>

                      <div>
                        <Label htmlFor="legalDescription">
                          Legal Land Description or Coordinates
                        </Label>
                        <Input
                          id="legalDescription"
                          value={formData.legalDescription}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              legalDescription: e.target.value,
                            })
                          }
                          placeholder="e.g., NW 12-34-5-W5M or 51.0447° N, 114.0719° W"
                        />
                      </div>

                      <div>
                        <Label htmlFor="soilTest">
                          Soil Test Upload (optional)
                        </Label>
                        <Input
                          id="soilTest"
                          type="file"
                          accept=".pdf,.doc,.docx,.jpg,.png"
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              soilTest: e.target.files?.[0] || null,
                            })
                          }
                        />
                        <p className="text-sm text-muted-foreground mt-1">
                          Accepts PDF, Word, or image files
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="flex-1"
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="flex-1"
                        >
                          Next Step
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Project Requirements */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="timeline">Timeline *</Label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            setFormData({ ...formData, timeline: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">
                              Immediate (within 2 weeks)
                            </SelectItem>
                            <SelectItem value="1-month">1-2 months</SelectItem>
                            <SelectItem value="3-months">3-6 months</SelectItem>
                            <SelectItem value="planning">
                              Planning stage
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="method">
                          Preferred Application Method
                        </Label>
                        <Select
                          value={formData.method}
                          onValueChange={(value) =>
                            setFormData({ ...formData, method: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="broadcast">Broadcast</SelectItem>
                            <SelectItem value="drill">
                              Drill Incorporation
                            </SelectItem>
                            <SelectItem value="hydroseeding">
                              Hydroseeding
                            </SelectItem>
                            <SelectItem value="drone">Drone</SelectItem>
                            <SelectItem value="unsure">Not sure yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="deliveryNeeds">Delivery Needs</Label>
                        <Input
                          id="deliveryNeeds"
                          value={formData.deliveryNeeds}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              deliveryNeeds: e.target.value,
                            })
                          }
                          placeholder="e.g., Deliver to site, pickup in Sundre"
                        />
                      </div>

                      <div>
                        <Label htmlFor="notes">Additional Notes</Label>
                        <Textarea
                          id="notes"
                          value={formData.notes}
                          onChange={(e) =>
                            setFormData({ ...formData, notes: e.target.value })
                          }
                          placeholder="Tell us about your project, any specific requirements, or questions you have..."
                          rows={5}
                        />
                      </div>

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={prevStep}
                          className="flex-1"
                        >
                          Back
                        </Button>
                        <Button type="submit" className="flex-1" disabled={submitMutation.isPending}>
                          {submitMutation.isPending ? "Submitting..." : "Submit Request"}
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground text-center mt-6">
              By submitting this form, you'll receive a bid ready spec pack via
              email and a member of our team will contact you within 24 hours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
