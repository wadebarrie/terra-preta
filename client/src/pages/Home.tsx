import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE_ORIGIN } from "@/const";
import { Link } from "wouter";

const SITE_TITLE =
  "Terra Preta Organics | Organic based fertilizer for prairie agriculture and reclamation";
const SITE_DESCRIPTION =
  "SuperN for prairie crops and SuperN-Revive for disturbed land, made in Sundre, Alberta. Request a quote.";

export default function Home() {
  usePageMeta(SITE_TITLE, SITE_DESCRIPTION, `${SITE_ORIGIN}/`);

  return (
    <div>
      <section className="bg-gradient-to-b from-muted/50 to-background py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-snug">
              Organic based fertilizer for prairie crops and disturbed land.
              Made in Sundre, Alberta.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/agriculture">Agriculture</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/reclamation">Reclamation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
