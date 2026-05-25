import React from "react";
import Link from "next/link";
import { Shield, CheckCircle } from "lucide-react";

const FOOTER_LINKS = [
  { href: "/about-us", label: "About Us" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/membership-plans", label: "Membership Plans" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/islamic-resources", label: "Islamic Resources" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="bg-midnight border-t border-gold/20 text-white/70 py-16 px-6 lg:px-16 mt-auto relative overflow-hidden">
      <div className="islamic-motif-strip absolute left-0 right-0 top-0 h-4 opacity-60 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Logo and Description */}
        <div className="md:col-span-1 space-y-4">
          <div className="flex items-center gap-2">
            <span className="serif-heading text-2xl text-gold font-light tracking-wide">
              ISMAT
            </span>
            <div className="h-5 w-[0.5px] bg-gold/40"></div>
            <span className="text-[9px] tracking-[0.25em] font-semibold text-white/80 uppercase">
              SHAADI SERVICES
            </span>
          </div>
          <p className="text-xs font-light leading-relaxed text-white/50">
            Bridging Shariah-compliant traditional integrity with modern professional executive matchmaking for North American Muslim cohorts.
          </p>
          <div className="flex items-center gap-2 text-[10px] text-gold/80 font-mono tracking-widest pt-2">
            <Shield className="w-3.5 h-3.5" />
            <span>DATA ENCRYPTED & SECURED</span>
          </div>
        </div>

        {/* Corporate Offices */}
        <div className="space-y-4">
          <h4 className="serif-heading text-sm text-gold font-medium uppercase tracking-wider">
            US Registry Offices
          </h4>
          <ul className="text-xs font-light space-y-2 text-white/60">
            <li>
              <strong>Midwest Bureau:</strong> Michigan Ave, Chicago, IL 60611
            </li>
            <li>
              <strong>East Coast Bureau:</strong> Lexington Ave, New York, NY 10017
            </li>
            <li>
              <strong>Silicon Valley Bureau:</strong> Sand Hill Rd, Menlo Park, CA 94025
            </li>
            <li>
              <strong>Texas Bureau:</strong> McKinney Ave, Dallas, TX 75204
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="serif-heading text-sm text-gold font-medium uppercase tracking-wider">
            Quick Links
          </h4>
          <ul className="text-xs font-light space-y-2.5">
            {FOOTER_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Security & Sanctity Guarantee */}
        <div className="space-y-4">
          <h4 className="serif-heading text-sm text-gold font-medium uppercase tracking-wider">
            Sanctity Guarantee
          </h4>
          <p className="text-xs font-light leading-relaxed text-white/50">
            Our platform strictly rejects automated indexing, social engineering bots, or public galleries. Family connectivity is enabled by default to oversee secure matching communication under Islamic tradition.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold pt-1">
            <CheckCircle className="w-4 h-4" />
            <span>100% Shariah Compliant Vetting</span>
          </div>
        </div>

      </div>

      {/* Footer copyright */}
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-[10px] text-white/40 tracking-wider">
        <p>© 2026 Ismat Shaadi Services LLC. All rights reserved. By Appointment Only.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy" className="hover:text-gold transition-colors">Discretion Agreement</Link>
          <Link href="/terms" className="hover:text-gold transition-colors">Code of Conduct</Link>
        </div>
      </div>
    </footer>
  );
}
