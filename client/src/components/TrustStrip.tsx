export default function TrustStrip() {
  const partners = [
    "Choice Environmental",
    "Trace Associates",
    "Gran Tierra Oil and Gas",
  ];

  return (
    <div className="bg-muted py-6">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <span className="text-sm text-muted-foreground font-medium">
            Trusted by leading partners:
          </span>
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-sm font-medium text-foreground/70"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
