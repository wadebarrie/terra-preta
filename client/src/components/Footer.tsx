import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { filterByRetailProductHref } from "@/lib/retailAgProductVisibility";
import general from "@content/settings/general.json";
import siteChrome from "@content/settings/site-chrome.json";
import { Linkedin, Instagram, Phone } from "lucide-react";

const social = general.socialMedia as {
  linkedin?: string;
  instagram?: string;
  twitter?: string;
  facebook?: string;
};

export default function Footer() {
  const phoneTel =
    (general as { contactPhoneTel?: string }).contactPhoneTel ||
    "+14039216291";
  const phoneDisplay = general.contactPhone || "(403) 921-6291";
  const email = general.contactEmail || "sales@terrapreta.ca";
  const {
    agricultureColumnTitle,
    resourcesColumnTitle,
    companyColumnTitle,
    copyrightEntity,
    agricultureLinks: agricultureLinksRaw,
    resourceLinks,
    companyLinks,
  } = siteChrome.footer;

  const agricultureLinks = filterByRetailProductHref(agricultureLinksRaw);

  return (
    <footer className="bg-[#4A3728] text-white mt-24">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info with Logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={APP_LOGO} alt={APP_TITLE} className="h-8 w-8 brightness-0 invert" />
              <h3 className="font-semibold text-lg">{APP_TITLE}</h3>
            </div>
            <p className="text-sm text-white/80 mb-2">{general.address}</p>
            <p className="text-sm text-white/80 mb-2">
              <a
                href={`tel:${phoneTel.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {phoneDisplay}
              </a>
            </p>
            <p className="text-sm text-white/80 mb-4">
              <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                {email}
              </a>
            </p>

            <div className="flex gap-3 mt-4">
              {social.linkedin ? (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/70 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              ) : null}
              {social.instagram ? (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/70 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              ) : null}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">{agricultureColumnTitle}</h3>
            <ul className="space-y-2">
              {agricultureLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">{resourcesColumnTitle}</h3>
            <ul className="space-y-2">
              {resourceLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-4">{companyColumnTitle}</h3>
            <ul className="space-y-2">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>
            &copy; {new Date().getFullYear()} {copyrightEntity}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
