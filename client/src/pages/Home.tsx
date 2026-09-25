import { Button } from "@/components/ui/button";
import { WistiaVideo, extractWistiaId } from "@/components/WistiaVideo";
import { usePageMeta } from "@/hooks/usePageMeta";
import { SITE_ORIGIN } from "@/const";
import { Link } from "wouter";
import homeContent from "@content/pages/home.json";

const SITE_TITLE =
  "Terra Preta Organics | Organic based fertilizer for prairie agriculture and reclamation";
const SITE_DESCRIPTION =
  "SuperN for prairie crops and SuperN-Revive for disturbed land, made in Sundre, Alberta. Request a quote.";

export default function Home() {
  usePageMeta(SITE_TITLE, SITE_DESCRIPTION, `${SITE_ORIGIN}/`);

  const heroVideo = homeContent.heroVideo;
  const wistiaId = heroVideo?.wistiaUrl
    ? extractWistiaId(heroVideo.wistiaUrl)
    : null;

  const gradient = heroVideo?.gradient;
  const gradientClass = gradient
    ? `bg-gradient-${gradient.direction || "to-b"} from-background/${gradient.topOpacity ?? 60} to-background/${gradient.bottomOpacity ?? 90}`
    : "bg-gradient-to-b from-background/60 to-background/90";

  return (
    <div>
      <section className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2 py-20 md:py-28 overflow-hidden">
        {wistiaId && heroVideo ? (
          <div className="absolute inset-0 z-0 w-full min-w-full h-full">
            <WistiaVideo
              videoId={wistiaId}
              layout="cover"
              autoplay={heroVideo.autoplay ?? true}
              loop={heroVideo.loop ?? true}
              controls={heroVideo.controls ?? false}
              muted={heroVideo.muted ?? true}
              className="h-full w-full"
            />
          </div>
        ) : null}
        <div className={`absolute inset-0 ${gradientClass} z-10`} />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 leading-snug text-black">
              Organic based fertilizer for prairie crops and disturbed land.
              Made in Sundre, Alberta.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/agriculture">Agriculture</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-primary"
              >
                <Link href="/reclamation">Reclamation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
