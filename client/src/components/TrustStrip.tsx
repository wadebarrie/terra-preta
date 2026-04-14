import siteChrome from "@content/settings/site-chrome.json";

export default function TrustStrip() {
  const strip = siteChrome.trustStrip;
  if (!strip?.enabled) return null;

  const { heading, partners } = strip;

  return (
    <div className="bg-secondary py-8 border-y border-border/70">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <span className="text-sm text-muted-foreground font-medium">
            {heading}
          </span>
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
