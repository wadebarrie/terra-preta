import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Terra Preta Organics</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Sundre, Alberta
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              <a href="tel:+14035551234" className="hover:text-foreground transition-colors">
                (403) 555-1234
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:sales@terrapreta.ca" className="hover:text-foreground transition-colors">
                sales@terrapreta.ca
              </a>
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/reclamation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Reclamation Sites
                </Link>
              </li>
              <li>
                <Link href="/solutions/hydroseeding" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Hydroseeding Partners
                </Link>
              </li>
              <li>
                <Link href="/solutions/mining" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Mining and Industrial
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/product/terra-revive" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terra Revive Product
                </Link>
              </li>
              <li>
                <Link href="/evidence/case-studies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/evidence/method-statements" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Method Statements
                </Link>
              </li>
              <li>
                <Link href="/evidence/sds-tds" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  SDS and TDS
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Certifications</h3>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded border border-border text-center">
                <div className="text-xs font-medium">WCB/COR Certified</div>
              </div>
              <div className="text-xs text-muted-foreground">
                <p className="mb-1">Liability Insurance: $5M</p>
                <p>Environmental Insurance: $2M</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="font-semibold text-sm mb-4">Service Area</h3>
          <p className="text-sm text-muted-foreground">
            Alberta and across the Prairies. Delivery available within 36 to 48 hours.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Terra Preta Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
