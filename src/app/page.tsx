import Link from "next/link";
import { ArrowRight, BookHeart, Gem, Heart, ShieldCheck } from "lucide-react";
import SearchFilterScaffold from "@/components/search-filter-scaffold";
import ProfileEnhancementScaffold from "@/components/profile-enhancement-scaffold";

const SERVICES = [
  {
    title: "Guided Matchmaking",
    description: "Dedicated support with a faith-conscious and family-friendly process.",
    href: "/how-it-works",
  },
  {
    title: "Membership Plans",
    description: "Transparent plans designed for different stages of your journey.",
    href: "/membership-plans",
  },
  {
    title: "Islamic Resources",
    description: "Curated reminders, articles, and practical marriage guidance.",
    href: "/islamic-resources",
  },
];

const TESTIMONIALS = [
  "“The process felt respectful, structured, and rooted in our values.” — A & H",
  "“We appreciated the family-first communication and clear expectations.” — S. Family",
  "“A calm platform that balanced deen, compatibility, and privacy.” — M & R",
];

export default function HomePage() {
  return (
    <div className="space-y-16 pb-16">
      <section className="max-w-7xl mx-auto px-6 lg:px-16 pt-14">
        <div className="bg-midnight text-white border border-gold/30 p-8 md:p-12 relative overflow-hidden">
          <div className="islamic-motif-strip absolute left-0 right-0 bottom-0 h-6 opacity-50 pointer-events-none" />
          <span className="arabic-accent text-2xl text-gold block mb-3">السلام عليكم</span>
          <h1 className="serif-heading text-4xl md:text-5xl font-light leading-tight max-w-3xl">
            Welcome to Ismat Shaadi Services — where trust, dignity, and Islamic values guide every match.
          </h1>
          <p className="mt-5 text-sm text-white/75 max-w-2xl">
            Begin with a respectful and private matchmaking experience built for Muslim individuals and families.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link href="/contact-us" className="bg-gold text-midnight px-6 py-3 text-xs tracking-widest uppercase font-bold inline-flex items-center gap-2">
              Start Your Journey
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/how-it-works" className="border border-gold text-gold px-6 py-3 text-xs tracking-widest uppercase font-bold">
              Learn the Process
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-16 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="serif-heading text-3xl text-midnight font-light">Our Key Services</h2>
          <p className="text-sm text-slate-light">Simple content blocks so your team can edit future offerings quickly.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <article key={service.title} className="bg-white border border-gold/20 p-6 space-y-3">
              <Gem className="w-5 h-5 text-gold" />
              <h3 className="serif-heading text-xl text-midnight">{service.title}</h3>
              <p className="text-xs text-slate-custom">{service.description}</p>
              <Link href={service.href} className="text-[11px] uppercase tracking-wider font-semibold text-emerald hover:text-gold">
                View page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-white border border-gold/20 p-8 space-y-5">
          <h2 className="serif-heading text-3xl text-midnight font-light text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map((quote) => (
              <blockquote key={quote} className="border border-slate-100 bg-alabaster p-4 text-xs text-slate-custom leading-relaxed">
                {quote}
              </blockquote>
            ))}
          </div>
          <div className="text-center">
            <Link href="/success-stories" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold font-bold">
              Read More Stories
              <Heart className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SearchFilterScaffold />
        <ProfileEnhancementScaffold />
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="bg-midnight text-white border border-gold/30 p-8 text-center space-y-4">
          <ShieldCheck className="w-8 h-8 text-gold mx-auto" />
          <h2 className="serif-heading text-3xl text-gold font-light">Faith-Centered, Privacy-Focused</h2>
          <p className="text-sm text-white/70 max-w-2xl mx-auto">
            Explore resources, FAQs, and membership guidance designed to be culturally respectful and easy to customize.
          </p>
          <Link href="/faq" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold bg-gold text-midnight px-5 py-2.5">
            Visit FAQ
            <BookHeart className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
