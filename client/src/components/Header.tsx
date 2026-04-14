import { Button } from "@/components/ui/button";
import { APP_LOGO, APP_TITLE } from "@/const";
import siteChrome from "@content/settings/site-chrome.json";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ctaLabel, ctaHref, navItems } = siteChrome.header;

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />
          <span className="font-semibold text-lg">{APP_TITLE}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.children?.length ? (
                <>
                  <button className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                    {item.label}
                  </button>
                  <div className="absolute left-0 top-full mt-2 w-56 bg-card border border-border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="py-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                        >
                          {child.label}
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
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href={ctaHref}>{ctaLabel}</Link>
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
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children?.length ? (
                  <>
                    <div className="font-medium text-sm mb-2">{item.label}</div>
                    <div className="pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
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
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild className="w-full">
              <Link href={ctaHref} onClick={() => setMobileMenuOpen(false)}>
                {ctaLabel}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
