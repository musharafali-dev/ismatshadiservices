import React from "react";
import Link from "next/link";
import { Check, ShieldCheck, Gem, UserCheck2, HelpCircle } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-16 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
          Membership Curation
        </span>
        <h1 className="serif-heading text-4xl lg:text-5xl font-light text-midnight leading-tight">
          Transparent, Quality-Driven Investment
        </h1>
        <p className="text-xs font-light text-slate-light leading-relaxed">
          Zero hidden matchmaking success fees. We prioritize high-status candidate credentials authentication, absolute identity encryption, and serious long-term intent.
        </p>
        <div className="h-[0.5px] w-24 bg-gold mx-auto mt-4"></div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        
        {/* Tier 1: Self-Service Portal Access */}
        <div className="bg-white border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-gold transition-colors duration-300">
          <div className="space-y-4">
            <span className="text-[9px] tracking-widest uppercase font-bold text-slate-custom">Portal Entrance</span>
            <h3 className="serif-heading text-2xl text-midnight font-bold">
              Premium Portal Access
            </h3>
            <div className="pt-2">
              <span className="text-3xl font-bold text-midnight">$199</span>
              <span className="text-xs text-slate-light font-light"> / year</span>
            </div>
            <p className="text-xs font-light text-slate-custom leading-relaxed pt-2">
              Best for independent professionals who prefer to browse verified profiles privately and manage visibility permissions on their own.
            </p>
            <div className="h-[0.5px] w-full bg-slate-100 my-4"></div>
            <ul className="space-y-3 text-xs font-light text-slate-custom">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Search verified US directory index</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Encrypted profile picture blurs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Direct manual human verification seal</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Mutual visible request permissions</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <Link 
              href="/apply/onboarding" 
              className="block w-full py-3.5 border border-midnight hover:bg-slate-50 text-midnight text-center text-xs font-bold tracking-widest uppercase transition-colors rounded-none"
            >
              Begin Portal Application
            </Link>
          </div>
        </div>

        {/* Tier 2: Bespoke Executive Placement */}
        <div className="bg-midnight border-2 border-gold p-8 space-y-6 flex flex-col justify-between relative shadow-2xl">
          {/* Executive placement ribbon */}
          <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-gold text-midnight text-[8px] font-bold tracking-widest uppercase px-3 py-1 font-mono">
            EXECUTIVE PLACEMENT
          </div>
          
          <div className="space-y-4">
            <span className="text-[9px] tracking-widest uppercase font-bold text-gold/80">Managed Curation</span>
            <h3 className="serif-heading text-2xl text-gold font-light">
              Bespoke Gold Concierge
            </h3>
            <div className="pt-2">
              <span className="text-3xl font-bold text-white">$499</span>
              <span className="text-xs text-white/50 font-light"> / year</span>
            </div>
            <p className="text-xs font-light text-white/70 leading-relaxed pt-2">
              Highly recommended for busy physicians, attorneys, partners, and families who prefer an experienced matchmaker to run custom searches and vet candidate families directly.
            </p>
            <div className="h-[0.5px] w-full bg-white/10 my-4"></div>
            <ul className="space-y-3 text-xs font-light text-white/80">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span>All Self-Service Portal features included</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Dedicated personal matchmaker consultant</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Exclusion list of unindexed, off-market profiles</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Direct parent-to-parent introduction coordination</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Priority invitation checking for VIP socials</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <Link 
              href="/apply/onboarding" 
              className="block w-full py-3.5 bg-gold text-midnight hover:bg-gold-hover text-center text-xs font-bold tracking-widest uppercase transition-colors rounded-none"
            >
              Initiate VIP Onboarding
            </Link>
          </div>
        </div>

      </div>

      {/* Security notice block */}
      <div className="bg-slate-50 border border-slate-200/50 p-6 flex flex-col sm:flex-row items-center gap-4 text-xs font-light text-slate-custom leading-relaxed">
        <ShieldCheck className="w-8 h-8 text-gold flex-shrink-0" />
        <p>
          <strong>No Automatic Billing:</strong> We will never automatically renew your membership or charge your credit card without explicit notice. The trust, dignity, and absolute sovereignty of our client portfolios represent our core mission.
        </p>
      </div>

    </div>
  );
}
