"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ShieldCheck, 
  Lock, 
  Users, 
  MapPin, 
  ArrowRight, 
  Award,
  Sparkles,
  ChevronRight,
  BookOpen,
  CalendarDays,
  UserCheck2,
  CheckCircle,
  Gem
} from "lucide-react";
import { BiometricIcon, RingMatrixIcon, GateVaultIcon, VerifiedSealIcon } from "@/components/icons";
import ProfileDashboard from "@/components/profile-dashboard";
import ConciergeChat from "@/components/concierge-chat";

export default function PremiumLandingPage() {
  // Hero search bar state
  const [seeking, setSeeking] = useState("Female");
  const [cohort, setCohort] = useState("29-34");
  const [metro, setMetro] = useState("NY Tri-State");
  const [searchResultsActive, setSearchResultsActive] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchResultsActive(true);
    setTimeout(() => {
      const el = document.getElementById("private-showroom");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <div className="relative">
      
      {/* Mrs. Ismat's Timed AI Concierge Chatbox component */}
      <ConciergeChat />

      {/* 1. EDITORIAL ASYMMETRIC HERO SECTION */}
      <section className="relative px-6 lg:px-16 py-16 lg:py-28 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-gold/10">
        
        {/* Left Column: Deep Copy, Value Prop, Trust Indicators */}
        <div className="lg:col-span-7 space-y-8 animate-fade-in">
          
          <div className="space-y-2">
            <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
              Bespoke Matrimonial Bureau
            </span>
            <h1 className="serif-heading text-4xl lg:text-6xl font-light text-midnight leading-tight">
              Where <span className="italic font-normal text-gold">Traditional Sanctity</span> Meets <span className="font-medium text-midnight">Executive Excellence</span>.
            </h1>
          </div>

          <p className="text-sm lg:text-base font-light text-slate-custom leading-relaxed max-w-2xl">
            An elite, highly private matchmaking space engineered strictly for second-generation Muslim professionals in the United States. We unite physicians, attorneys, tech founders, and executives within a framework of absolute discretion, Shariah-compliance, and direct parent-linked coordination.
          </p>

          {/* Core Trust Badges Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-midnight text-gold rounded-none">
                <BiometricIcon size={20} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-midnight uppercase tracking-wider mb-1">Human Vetted</h4>
                <p className="text-[10px] text-slate-light font-light leading-relaxed">No algorithms. 100% manual credentials verification and personal video interview.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-midnight text-gold rounded-none">
                <GateVaultIcon size={20} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-midnight uppercase tracking-wider mb-1">Unindexed Vault</h4>
                <p className="text-[10px] text-slate-light font-light leading-relaxed">Absolute privacy. Zero public searches or search-engine exposure of directories.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 bg-midnight text-gold rounded-none">
                <RingMatrixIcon size={20} />
              </div>
              <div>
                <h4 className="text-xs font-semibold text-midnight uppercase tracking-wider mb-1">Family Centered</h4>
                <p className="text-[10px] text-slate-light font-light leading-relaxed">Direct parental oversee capabilities keeping matching dialogues respectful and safe.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Premium "Meet Your Match" Onboarding Frame */}
        <div className="lg:col-span-5 bg-midnight border border-gold/30 p-8 shadow-2xl relative overflow-hidden rounded-none">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-gold/10 to-transparent pointer-events-none"></div>
          
          <div className="space-y-4 mb-6">
            <h3 className="serif-heading text-xl lg:text-2xl text-gold font-light tracking-wide">
              Begin a Confidential Registry Inquiry
            </h3>
            <p className="text-[11px] font-light text-white/60 leading-relaxed">
              Define your candidate demographics and initiate the curation search within our private registry.
            </p>
          </div>

          <form onSubmit={handleSearch} className="space-y-5">
            {/* Seeking Choice */}
            <div className="space-y-2">
              <label className="text-[10px] tracking-wider uppercase font-semibold text-gold/80 block">
                I am looking for a partner:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSeeking("Female")}
                  className={`py-2 text-xs font-semibold tracking-wider uppercase transition-colors rounded-none ${
                    seeking === "Female" 
                      ? "bg-gold text-midnight border border-gold" 
                      : "bg-transparent text-white/70 border border-white/20 hover:border-gold/50"
                  }`}
                >
                  Female Candidate
                </button>
                <button
                  type="button"
                  onClick={() => setSeeking("Male")}
                  className={`py-2 text-xs font-semibold tracking-wider uppercase transition-colors rounded-none ${
                    seeking === "Male" 
                      ? "bg-gold text-midnight border border-gold" 
                      : "bg-transparent text-white/70 border border-white/20 hover:border-gold/50"
                  }`}
                >
                  Male Candidate
                </button>
              </div>
            </div>

            {/* Target Age Cohort */}
            <div className="space-y-2">
              <label className="text-[10px] tracking-wider uppercase font-semibold text-gold/80 block">
                Target Age Cohort:
              </label>
              <select 
                value={cohort}
                onChange={(e) => setCohort(e.target.value)}
                className="w-full bg-midnight/50 border border-white/20 text-white text-xs px-3 py-2 focus:outline-none focus:border-gold rounded-none"
              >
                <option value="24-28">24 - 28 (Young Professionals)</option>
                <option value="29-34">29 - 34 (Established Professionals)</option>
                <option value="35+">35+ (Executives & Leaders)</option>
              </select>
            </div>

            {/* US Metropolitan Region */}
            <div className="space-y-2">
              <label className="text-[10px] tracking-wider uppercase font-semibold text-gold/80 block">
                US Metropolitan Base:
              </label>
              <select 
                value={metro}
                onChange={(e) => setMetro(e.target.value)}
                className="w-full bg-midnight/50 border border-white/20 text-white text-xs px-3 py-2 focus:outline-none focus:border-gold rounded-none"
              >
                <option value="NY Tri-State">NY Tri-State (NYC Core)</option>
                <option value="Chicagoland">Chicagoland (IL Core)</option>
                <option value="Bay Area">Bay Area (CA Core)</option>
                <option value="Texas Triangle">Texas Triangle (Dallas/Houston)</option>
              </select>
            </div>

            {/* Submit Action */}
            <button
              type="submit"
              className="w-full py-3.5 bg-gold text-midnight hover:bg-gold-hover text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 rounded-none mt-2"
            >
              <span>Query Private Registry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Privacy Footnote */}
          <div className="mt-4 flex items-center gap-2 text-[9px] text-white/40 font-light leading-relaxed">
            <Lock className="w-3 h-3 text-gold/60" />
            <span>All inquiries are fully encrypted and Shariah-compliant.</span>
          </div>

        </div>

      </section>

      {/* 2. THE PRIVATE SHOWROOM DASHBOARD SECTION */}
      <section id="private-showroom" className="bg-white border-b border-gold/10 py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gold">
              Encrypted Registry Search
            </span>
            <h2 className="serif-heading text-3xl lg:text-4xl text-midnight font-light">
              Explore Our Private Candidate Showroom
            </h2>
            <p className="text-xs font-light text-slate-light leading-relaxed">
              Each profile represents a fully authenticated US resident candidate. Photos are blurred for client safety and require mutual approval to be unlocked.
            </p>
          </div>

          {/* Showroom Interactive Registry Component */}
          <ProfileDashboard 
            initialSeeking={seeking} 
            initialRegion={metro} 
            activeSearchDefault={searchResultsActive} 
          />

        </div>
      </section>

      {/* 3. VERIFIED BY ISMAT EXPLANATORY MODULE */}
      <section className="bg-midnight border-b border-gold/20 text-white py-20 px-6 lg:px-16 relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-gradient-to-br from-gold/5 to-transparent rounded-full pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Gold Seal Representation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative border border-gold/45 p-8 bg-midnight/80 max-w-[320px] text-center space-y-4 shadow-2xl">
              <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto border border-gold/40">
                <VerifiedSealIcon size={44} color="#D4AF37" />
              </div>
              <h3 className="serif-heading text-xl text-gold font-light tracking-widest">
                VERIFIED BY ISMAT
              </h3>
              <p className="text-[11px] font-light text-white/50 leading-relaxed">
                The gold standard certification for Halal matchmaking. Look for this badge on authenticated candidate files.
              </p>
              <div className="h-[0.5px] w-24 bg-gold/30 mx-auto"></div>
              <p className="text-[9px] font-mono text-gold/70 tracking-widest uppercase">
                ID & CREDENTIAL AUDITED
              </p>
            </div>
          </div>

          {/* Explanation Text and Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gold">
              Verification Standards
            </span>
            <h2 className="serif-heading text-3xl lg:text-4xl text-gold font-light">
              Meticulous Human Vetting. No Compromises.
            </h2>
            <p className="text-xs font-light text-white/70 leading-relaxed">
              We reject all automated, unverified user registrations. To earn the "Verified by Ismat" gold seal, every single profile undergoes a multi-stage background check:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 text-xs font-light">
              <div className="space-y-1.5 border-l-2 border-gold pl-4">
                <h4 className="font-bold text-white uppercase tracking-wider">1. Structural Identity Audit</h4>
                <p className="text-white/60 text-[11px] leading-relaxed">Mandatory government-issued ID check cross-referenced to eliminate fraudulent accounts.</p>
              </div>

              <div className="space-y-1.5 border-l-2 border-gold pl-4">
                <h4 className="font-bold text-white uppercase tracking-wider">2. Professional Licensing Verification</h4>
                <p className="text-white/60 text-[11px] leading-relaxed">Active background audits of LinkedIn records, medical residency boards, and bar registries.</p>
              </div>

              <div className="space-y-1.5 border-l-2 border-gold pl-4">
                <h4 className="font-bold text-white uppercase tracking-wider">3. Personal Zoom Consultation</h4>
                <p className="text-white/60 text-[11px] leading-relaxed">Every candidate sits down for a private 1-on-1 video call to verify intent and spiritual criteria.</p>
              </div>

              <div className="space-y-1.5 border-l-2 border-gold pl-4">
                <h4 className="font-bold text-white uppercase tracking-wider">4. Family Connect Validation</h4>
                <p className="text-white/60 text-[11px] leading-relaxed">Verifying parent/guardian liaison emails to ensure genuine, long-term marital intent.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. THE WELCOMING LETTER BY MRS. ISMAT */}
      <section className="bg-alabaster py-20 px-6 lg:px-16 border-b border-gold/10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
          
          <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
            A Letter from the Bureau Director
          </span>
          
          <blockquote className="serif-heading text-xl lg:text-3xl text-midnight font-light leading-relaxed italic">
            "At Ismat Shaadi Services, we understand that professional Muslim executives value discretion above all else. They refuse to expose their private directories to public databases. Our mission is to combine strict traditional Halal integrity with modern, next-generation security to help families safely meet their future spouses under complete discretion."
          </blockquote>
          
          <div className="space-y-1.5">
            <h4 className="serif-heading text-lg text-midnight font-medium">Mrs. Ismat</h4>
            <p className="text-[10px] tracking-[0.2em] uppercase text-gold font-bold">
              Bureau Director & Chief Matchmaker
            </p>
          </div>
          
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>

        </div>
      </section>

      {/* 5. LIFE CONCIERGE PREVIEW BLOCK */}
      <section className="bg-white py-20 px-6 lg:px-16">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gold">
                Premium Concierge Offerings
              </span>
              <h2 className="serif-heading text-3xl lg:text-4xl text-midnight font-light">
                Our Luxury Life Concierge Services
              </h2>
            </div>
            <Link 
              href="/services" 
              className="text-xs text-gold uppercase tracking-widest font-semibold hover:text-gold-hover flex items-center gap-1 group transition-colors"
            >
              <span>View Services Suite</span>
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            <div className="border border-gold/20 p-6 bg-alabaster/40 hover:border-gold transition-all duration-300 space-y-4">
              <h3 className="serif-heading text-lg text-midnight font-medium">1. Bespoke Matchmaking</h3>
              <p className="text-xs font-light text-slate-custom leading-relaxed">
                Direct assignment to a premium, dedicated matchmaker conducting human matches and family vetting calls.
              </p>
            </div>

            <div className="border border-gold/20 p-6 bg-alabaster/40 hover:border-gold transition-all duration-300 space-y-4">
              <h3 className="serif-heading text-lg text-midnight font-medium">2. VIP Social Events</h3>
              <p className="text-xs font-light text-slate-custom leading-relaxed">
                Invite-only cocktail social dinners in Manhattan, Chicagoland, Silicon Valley, and the Texas Triangle.
              </p>
            </div>

            <div className="border border-gold/20 p-6 bg-alabaster/40 hover:border-gold transition-all duration-300 space-y-4">
              <h3 className="serif-heading text-lg text-midnight font-medium">3. Mehndi Artistry</h3>
              <p className="text-xs font-light text-slate-custom leading-relaxed">
                Curated catalogs of verified traditional mehndi artists for your celebratory traditional wedding events.
              </p>
            </div>

            <div className="border border-gold/20 p-6 bg-alabaster/40 hover:border-gold transition-all duration-300 space-y-4">
              <h3 className="serif-heading text-lg text-midnight font-medium">4. Personal Halal Chefs</h3>
              <p className="text-xs font-light text-slate-custom leading-relaxed">
                Exquisite private chefs specialized in Halal gastronomy to curate your family introduction dinners.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 6. JOIN BUREAU FINAL CALL TO ACTION */}
      <section className="bg-midnight border-t border-gold/30 py-20 px-6 lg:px-16 text-center text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gold">
            Begin Your Journey
          </span>
          <h2 className="serif-heading text-4xl lg:text-5xl text-gold font-light leading-tight">
            Take Your Future Seriously
          </h2>
          <p className="text-sm font-light text-white/70 max-w-xl mx-auto leading-relaxed">
            Submit a confidential membership application. Our concierge team reviews all files within 48 hours to preserve the integrity of our registry database.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Link 
              href="/apply/onboarding" 
              className="px-8 py-4 bg-gold text-midnight hover:bg-gold-hover text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Apply for Private Registry
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 bg-transparent border border-white/30 hover:border-gold text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Explore Vetting Protocol
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
