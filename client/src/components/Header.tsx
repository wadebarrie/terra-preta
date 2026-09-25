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
      <nav className="container flex items-center justify-between py-4" aria-label="Main">
        <Link href="/" className="flex items-center gap-2">
          <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8" />
          <span className="font-semibold text-lg">{APP_TITLE}</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button asChild>
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-nav"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div
          id="mobile-nav"
          className="lg:hidden border-t border-border bg-background"
        >
          <div className="container py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block font-medium text-sm hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
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
