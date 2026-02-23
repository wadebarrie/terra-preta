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
                <Link href="/evidence/sds-tds" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  SDS and TDS
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Service Area</h3>
            <p className="text-sm text-muted-foreground">
              Canada Wide
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Terra Preta Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
