import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE_ORIGIN } from "@/const";
import { Link } from "wouter";

const SITE_TITLE =
  "Terra Preta Organics | Organic based fertilizer for prairie agriculture and reclamation";
const SITE_DESCRIPTION =
  "SuperN for prairie crops and SuperN-Revive for disturbed land, made in Sundre, Alberta. Request a quote.";

export default function About() {
  usePageMeta(SITE_TITLE, SITE_DESCRIPTION, `${SITE_ORIGIN}/about`);

  return (
    <div>
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Made in Sundre, Alberta.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Terra Preta Organics makes organic based fertilizers and soil
              amendments at our facility in Sundre, Alberta. We blend and
              pelletize every tote ourselves, for prairie farms and for the
              reclamation crews bringing disturbed land back.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Request a quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
