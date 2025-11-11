export default function TrustStrip() {
  const partners = [
    {
      name: "Choice Environmental",
      logo: "/partner-choice.png",
    },
    {
      name: "Trace Associates",
      logo: "/partner-trace.png",
    },
    {
      name: "Gran Tierra Energy",
      logo: "/partner-grantierra.png",
    },
  ];

  return (
    <div className="bg-muted py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <span className="text-sm text-muted-foreground font-medium">
            Trusted by leading partners:
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
