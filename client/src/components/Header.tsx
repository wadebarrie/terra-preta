import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";

const navigation = [
  {
    name: "Solutions",
    href: "/solutions",
    children: [
      { name: "Reclamation Sites", href: "/solutions/reclamation" },
      { name: "Hydroseeding Partners", href: "/solutions/hydroseeding" },
      { name: "Mining and Industrial", href: "/solutions/mining" },
    ],
  },
  {
    name: "Product",
    href: "/product",
    children: [{ name: "Terra Revive", href: "/product/terra-revive" }],
  },
  {
    name: "Calculator Hub",
    href: "/calculator",
    children: [
      { name: "Pellet Selector", href: "/calculator/pellet-selector" },
      { name: "Cost and Payback", href: "/calculator/cost-payback" },
    ],
  },
  {
    name: "Evidence Library",
    href: "/evidence",
    children: [
      { name: "Case Studies", href: "/evidence/case-studies" },
      { name: "Method Statements", href: "/evidence/method-statements" },
      { name: "SDS and TDS", href: "/evidence/sds-tds" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />
          <span className="font-semibold text-lg">{APP_TITLE}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {item.name}
                  </button>
                  <div className="absolute left-0 top-full mt-2 w-56 bg-white border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href="/contact">Book a Site Assessment</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container py-4 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <>
                    <div className="font-medium text-sm mb-2">{item.name}</div>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block font-medium text-sm hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Book a Site Assessment
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
