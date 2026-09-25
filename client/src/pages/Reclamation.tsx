import { Button } from "@/components/ui/button";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE_ORIGIN } from "@/const";
import { Link } from "wouter";

const SITE_TITLE =
  "Terra Preta Organics | Organic based fertilizer for prairie agriculture and reclamation";
const SITE_DESCRIPTION =
  "SuperN for prairie crops and SuperN-Revive for disturbed land, made in Sundre, Alberta. Request a quote.";

const INGREDIENTS =
  "Blood meal, feather meal, alfalfa meal, black soldier fly larvae frass, volcanic phosphate, gypsum, humalite, glacial rock dust, biochar, zeolite.";

export default function Reclamation() {
  usePageMeta(SITE_TITLE, SITE_DESCRIPTION, `${SITE_ORIGIN}/reclamation`);

  return (
    <div>
      <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Disturbed soil doesn&apos;t come back on its own. Give it
              something to build on.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              SuperN-Revive is a pelletized, organic based soil amendment made
              in Sundre, Alberta, for well sites, pipelines and other disturbed
              land. It puts back the organic matter, nutrients and soil life
              that disturbance strips out, so your seed mix has something to
              establish in.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact#reclamation-quote">Request a quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16" aria-labelledby="the-problem">
        <div className="container max-w-3xl">
          <h2 id="the-problem" className="text-3xl font-bold mb-6">
            The problem
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            When soil is stripped, stockpiled, moved or replaced, its structure
            breaks down, its biology drops off, and its nutrient reserve gets
            lost or buried. You can seed it, but you&apos;re seeding into
            something that can&apos;t carry a stand. The result is slow
            establishment, patchy cover and return trips.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted" aria-labelledby="what-it-does">
        <div className="container max-w-3xl">
          <h2 id="what-it-does" className="text-3xl font-bold mb-8">
            What SuperN-Revive does
          </h2>
          <ul className="space-y-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">
                Rebuilds the nutrient reserve.
              </strong>{" "}
              Nitrogen from a mix of faster and slower sources (blood meal,
              feather meal, alfalfa and insect frass), plus phosphorus and a
              broad range of minerals.
            </li>
            <li>
              <strong className="text-foreground">Feeds soil life.</strong>{" "}
              Organic inputs give soil microbes what they need to become active
              again, and that activity is what turns dead dirt back into working
              soil.
            </li>
            <li>
              <strong className="text-foreground">
                Helps soil hold water and nutrients.
              </strong>{" "}
              Biochar, humalite and zeolite may help the soil hang on to what
              you put in instead of losing it.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16" aria-labelledby="application-rates">
        <div className="container max-w-3xl">
          <h2 id="application-rates" className="text-3xl font-bold mb-8">
            Application rates
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <caption className="sr-only">
                SuperN-Revive application rates
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
                <tr>
                  <td className="py-3 pr-4">Typical</td>
                  <td className="py-3">
                    2,000 to 3,000 lb/acre (2,240 to 3,360 kg/ha)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Rates are set from your site conditions and soil test. We&apos;ll
            recommend a rate for each site with your quote.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted" aria-labelledby="why-rate-high">
        <div className="container max-w-3xl">
          <h2 id="why-rate-high" className="text-3xl font-bold mb-6">
            Why the rate is high
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              If you&apos;re used to fertilizer rates, 2,000 to 3,000 lb per
              acre looks like a lot. It is, and it&apos;s supposed to be.
            </p>
            <p>
              A fertilizer rate feeds one crop for one season. On disturbed land
              there&apos;s often almost nothing there to feed. You&apos;re
              building back the organic matter, nutrient reserve and biology
              that healthy soil holds in large quantities, and you can&apos;t do
              that at 100 lb per acre.
            </p>
            <p>
              The math works in your favour, too. One properly rated pass costs
              far less than reseeding, return visits and a site that won&apos;t
              come back.
            </p>
          </div>
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

      <section className="py-16 bg-muted" aria-labelledby="how-it-works">
        <div className="container max-w-3xl">
          <h2 id="how-it-works" className="text-3xl font-bold mb-8">
            How it works
          </h2>
          <ol className="list-decimal list-inside space-y-6 text-muted-foreground leading-relaxed">
            <li>
              <strong className="text-foreground">
                Send us your site details.
              </strong>{" "}
              Location, disturbed area, soil conditions and timeline.
            </li>
            <li>
              <strong className="text-foreground">
                Get a site recommendation and quote.
              </strong>{" "}
              We&apos;ll set a rate for each site.
            </li>
            <li>
              <strong className="text-foreground">
                Your contractor spreads it.
              </strong>{" "}
              SuperN-Revive goes down with a standard broadcast spreader,
              before, during or after seeding. Shipped in 1,500 or 2,000 lb
              totes, delivered across Western Canada.
            </li>
          </ol>
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/contact#reclamation-quote">Request a quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
