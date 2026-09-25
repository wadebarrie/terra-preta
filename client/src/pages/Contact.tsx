import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AgricultureQuoteForm,
  ReclamationQuoteForm,
} from "@/components/QuoteForms";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE_ORIGIN } from "@/const";
import { useEffect } from "react";

const SITE_TITLE =
  "Terra Preta Organics | Organic based fertilizer for prairie agriculture and reclamation";
const SITE_DESCRIPTION =
  "SuperN for prairie crops and SuperN-Revive for disturbed land, made in Sundre, Alberta. Request a quote.";

export default function Contact() {
  usePageMeta(SITE_TITLE, SITE_DESCRIPTION, `${SITE_ORIGIN}/contact`);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div>
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tell us about your acres or your site.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              We&apos;ll come back with a rate recommendation and a quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" type="button" onClick={() => scrollTo("agriculture-quote")}>
                Agriculture quote
              </Button>
              <Button
                size="lg"
                type="button"
                variant="outline"
                onClick={() => scrollTo("reclamation-quote")}
              >
                Reclamation quote
              </Button>
            </div>
            <div className="mt-10 space-y-2 text-muted-foreground">
              <p>
                Prefer email?{" "}
                <a
                  href="mailto:info@terrapreta.ca"
                  className="text-foreground underline-offset-2 hover:underline"
                >
                  info@terrapreta.ca
                </a>
              </p>
              <p>We reply within one business day.</p>
              <p>Terra Preta Organics, Sundre, Alberta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 max-w-5xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <AgricultureQuoteForm />
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <ReclamationQuoteForm />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
