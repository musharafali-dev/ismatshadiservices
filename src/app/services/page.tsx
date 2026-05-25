import React from "react";
import { Gem, ShieldCheck, CalendarDays, Sparkles, ChefHat, UserCheck2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-16 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
          Executive Matrimonial Suite
        </span>
        <h1 className="serif-heading text-4xl lg:text-5xl font-light text-midnight leading-tight">
          Luxury Life Concierge Services
        </h1>
        <p className="text-xs font-light text-slate-light leading-relaxed">
          From verified human matching to custom wedding artistry and private family dining, we facilitate the absolute finest matrimonial lifestyle assets.
        </p>
        <div className="h-[0.5px] w-24 bg-gold mx-auto mt-4"></div>
      </div>

      {/* Services Grid with Asymmetric Detail Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Service 1: Bespoke Matchmaking */}
        <div className="bg-white border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-gold transition-colors duration-300">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-midnight text-gold w-fit">
                <Gem className="w-6 h-6" />
              </div>
              <h3 className="serif-heading text-xl text-midnight font-bold uppercase tracking-wider">
                1. VIP Matchmaking Bureau
              </h3>
            </div>
            <p className="text-xs font-light text-slate-custom leading-relaxed">
              We allocate a dedicated, senior matrimonial matchmaker to act as your confidential liaison. Our bureau conducts manual partner queries, custom compatibility evaluations, and direct family screening.
            </p>
            <ul className="text-[11px] text-slate-light font-mono space-y-1">
              <li>• Direct 1-on-1 consultation scheduling</li>
              <li>• Complete off-market registry matches</li>
              <li>• Parent/Guardian coordinated introductions</li>
            </ul>
          </div>
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-gold font-bold">
            <span>PREMIUM BUREAU ACCESS</span>
            <span>SHARIAH ALIGNED</span>
          </div>
        </div>

        {/* Service 2: Private Social Dinners */}
        <div className="bg-white border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-gold transition-colors duration-300">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-midnight text-gold w-fit">
                <CalendarDays className="w-6 h-6" />
              </div>
              <h3 className="serif-heading text-xl text-midnight font-bold uppercase tracking-wider">
                2. Elite Social Meetups
              </h3>
            </div>
            <p className="text-xs font-light text-slate-custom leading-relaxed">
              Discreet, highly curated social cocktail dinners and matching socials organized across NY, Chicago, Dallas, and the Bay Area. No public ticket indices or open marketing.
            </p>
            <ul className="text-[11px] text-slate-light font-mono space-y-1">
              <li>• Handpicked candidate guest lists</li>
              <li>• Professional, respectful atmospheres</li>
              <li>• Digital check-in secure passes</li>
            </ul>
          </div>
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-gold font-bold">
            <span>INVITATION ONLY</span>
            <span>METROPOLITAN LOCATIONS</span>
          </div>
        </div>

        {/* Service 3: Mehndi Artistry */}
        <div className="bg-white border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-gold transition-colors duration-300">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-midnight text-gold w-fit">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="serif-heading text-xl text-midnight font-bold uppercase tracking-wider">
                3. Bridal Mehndi Directories
              </h3>
            </div>
            <p className="text-xs font-light text-slate-custom leading-relaxed">
              Unlock a carefully vetted registry of high-end traditional and contemporary bridal mehndi artists in the US. Avoid the stress of unverified vendors for your big matrimonial celebration.
            </p>
            <ul className="text-[11px] text-slate-light font-mono space-y-1">
              <li>• Pristine portfolio reviews</li>
              <li>• Verified client testimonials</li>
              <li>• Secured wedding day bookings</li>
            </ul>
          </div>
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-gold font-bold">
            <span>VETTED CREATIVES</span>
            <span>EXQUISITE PORTFOLIOS</span>
          </div>
        </div>

        {/* Service 4: Personal Chefs */}
        <div className="bg-white border border-slate-200 p-8 space-y-6 flex flex-col justify-between hover:border-gold transition-colors duration-300">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-midnight text-gold w-fit">
                <ChefHat className="w-6 h-6" />
              </div>
              <h3 className="serif-heading text-xl text-midnight font-bold uppercase tracking-wider">
                4. Private Halal Gastronomy
              </h3>
            </div>
            <p className="text-xs font-light text-slate-custom leading-relaxed">
              Curate the ultimate family introduction dinner. We pair you with elite personal chefs specialized in premium Halal fusion gastronomy to cook directly in your private residence.
            </p>
            <ul className="text-[11px] text-slate-light font-mono space-y-1">
              <li>• Curated multiple-course fusion menus</li>
              <li>• In-home preparation & clean services</li>
              <li>• 100% certified Halal ingredients</li>
            </ul>
          </div>
          <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-gold font-bold">
            <span>PRIVATE RESIDENCE</span>
            <span>CUSTOM GASTRONOMY</span>
          </div>
        </div>

      </div>

    </div>
  );
}
