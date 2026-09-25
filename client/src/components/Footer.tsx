import { Link } from "wouter";
import general from "@content/settings/general.json";
import siteChrome from "@content/settings/site-chrome.json";

export default function Footer() {
  const email = general.contactEmail || "info@terrapreta.ca";
  const { navLinks, lineTemplate } = siteChrome.footer;
  const line = lineTemplate.replace("{email}", email);

  return (
    <footer className="bg-[#4A3728] text-white mt-24">
      <div className="container py-12">
        <p className="text-sm text-white/90 text-center mb-6">
          {line.split(email)[0]}
          <a
            href={`mailto:${email}`}
            className="hover:text-white underline-offset-2 hover:underline transition-colors"
          >
            {email}
          </a>
          {line.split(email)[1] ?? ""}
        </p>
        <nav
          className="flex flex-wrap justify-center gap-x-6 gap-y-2"
          aria-label="Footer"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
