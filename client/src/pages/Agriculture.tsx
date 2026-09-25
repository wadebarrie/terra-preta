import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE_ORIGIN } from "@/const";
import { Link } from "wouter";

const SITE_TITLE =
  "Terra Preta Organics | Organic based fertilizer for prairie agriculture and reclamation";
const SITE_DESCRIPTION =
  "SuperN for prairie crops and SuperN-Revive for disturbed land, made in Sundre, Alberta. Request a quote.";

const INGREDIENTS =
  "Blood meal, feather meal, alfalfa meal, black soldier fly larvae frass, volcanic phosphate, gypsum, humalite, glacial rock dust, biochar, zeolite.";

export default function Agriculture() {
  usePageMeta(SITE_TITLE, SITE_DESCRIPTION, `${SITE_ORIGIN}/agriculture`);

  return (
    <div>
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Organic nitrogen built for a prairie season.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              SuperN is a pelletized, organic based fertilizer made in Sundre,
              Alberta. Put it down with your seed or spread it across the field.
              It feeds this year&apos;s crop and the soil that has to grow next
              year&apos;s.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact#agriculture-quote">Request a quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="what-it-does">
        <div className="container max-w-3xl">
          <h2 id="what-it-does" className="text-3xl font-bold mb-8">
            What it does
          </h2>
          <ul className="space-y-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">
                Nitrogen that doesn&apos;t all show up at once.
              </strong>{" "}
              SuperN draws nitrogen from blood meal, feather meal, alfalfa and
              insect frass. Each one breaks down at its own pace, so your crop
              gets fed through the season instead of all at once.
            </li>
            <li>
              <strong className="text-foreground">More than N.</strong> Every
              pellet also carries phosphorus, sulphur and trace minerals, plus
              biochar, humalite and zeolite, which may help your soil hold on to
              what you put down.
            </li>
            <li>
              <strong className="text-foreground">Made here.</strong> SuperN is
              blended and pelletized in Sundre, Alberta, for prairie soils and
              prairie growing seasons.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-muted" aria-labelledby="application-rates">
        <div className="container max-w-3xl">
          <h2 id="application-rates" className="text-3xl font-bold mb-8">
            Application rates
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">
                SuperN application rates by method
              </caption>
              <thead>
                <tr className="border-b border-border">
                  <th scope="col" className="py-3 pr-4 font-semibold">
                    Method
                  </th>
                  <th scope="col" className="py-3 font-semibold">
                    Rate
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4">In the drill, with seed</td>
                  <td className="py-3">60 to 100 lb/acre (67 to 112 kg/ha)</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Broadcast</td>
                  <td className="py-3">
                    up to 500 lb/acre (up to 560 kg/ha)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Your best rate depends on your soil test, crop and yield goal. Send
            us those with your quote request and we&apos;ll recommend a rate for
            your acres.
          </p>
        </div>
      </section>

      <section className="py-16" aria-labelledby="whats-in-it">
        <div className="container max-w-3xl">
          <h2 id="whats-in-it" className="text-3xl font-bold mb-6">
            What&apos;s in it
          </h2>
          <p className="text-muted-foreground leading-relaxed">{INGREDIENTS}</p>
        </div>
      </section>

      {/* Reserved for future testimonials and photos */}
      <section className="hidden" aria-hidden="true" data-section="proof">
        <h2>Proof</h2>
      </section>

      <section className="py-16 bg-muted" aria-labelledby="how-ordering">
        <div className="container max-w-3xl">
          <h2 id="how-ordering" className="text-3xl font-bold mb-8">
            How ordering works
          </h2>
          <ol className="list-decimal list-inside space-y-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">
                Tell us about your operation.
              </strong>{" "}
              Acres, crop, seeding method and timing.
            </li>
            <li>
              <strong className="text-foreground">
                Get a recommendation and a quote.
              </strong>{" "}
              We&apos;ll suggest a rate and price it for your acres.
            </li>
            <li>
              <strong className="text-foreground">Get it on the ground.</strong>{" "}
              Shipped in 1,500 or 2,000 lb totes. Delivery across Western Canada,
              or pick up in Sundre, Alberta. One 2,000 lb tote covers about 20 to
              33 acres in the drill.
            </li>
          </ol>
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/contact#agriculture-quote">Request a quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="quick-answers">
        <div className="container max-w-3xl">
          <h2 id="quick-answers" className="text-3xl font-bold mb-8">
            Quick answers
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="air-drill">
              <AccordionTrigger>
                Will it run through my air drill?
              </AccordionTrigger>
              <AccordionContent>
                Yes. SuperN is pelletized to flow through standard air drills
                and air seeders.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="synthetic">
              <AccordionTrigger>
                Can I use it with synthetic fertilizer?
              </AccordionTrigger>
              <AccordionContent>
                Yes. SuperN&apos;s zeolite, biochar and humalite may help your
                soil hold more of those nutrients in the root zone, where your
                crop can use them.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
