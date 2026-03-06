import { Link } from "wouter";
import { APP_LOGO, APP_TITLE } from "@/const";
import { Linkedin, Instagram } from "lucide-react";

export default function Footer() {
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
            <p className="text-sm text-white/80 mb-2">
              Sundre, Alberta
            </p>
            <p className="text-sm text-white/80 mb-4">
              <a href="mailto:sales@terrapreta.ca" className="hover:text-white transition-colors">
                sales@terrapreta.ca
              </a>
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              <a 
                href="https://www.linkedin.com/company/terra-preta-organics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/terrapretaorganics" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white/70 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions/reclamation" className="text-sm text-white/80 hover:text-white transition-colors">
                  Oil & Gas Reclamation
                </Link>
              </li>
              <li>
                <Link href="/solutions/mining" className="text-sm text-white/80 hover:text-white transition-colors">
                  Mining and Industrial
                </Link>
              </li>
              <li>
                <Link href="/solutions/agriculture" className="text-sm text-white/80 hover:text-white transition-colors">
                  Agriculture
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/product/terra-revive" className="text-sm text-white/80 hover:text-white transition-colors">
                  Terra Revive Product
                </Link>
              </li>
              <li>
                <Link href="/calculator/pellet-selector" className="text-sm text-white/80 hover:text-white transition-colors">
                  Pellet Calculator
                </Link>
              </li>
              <li>
                <Link href="/evidence/sds-tds" className="text-sm text-white/80 hover:text-white transition-colors">
                  SDS and TDS
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} Terra Preta Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
