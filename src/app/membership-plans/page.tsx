import React from "react";

const PLANS = [
  { name: "Starter", details: "Placeholder: Basic profile support and limited introductions." },
  { name: "Guided", details: "Placeholder: Expanded support, screening, and guided communication." },
  { name: "Premium", details: "Placeholder: Concierge-level support for families and professionals." },
];

export default function MembershipPlansPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="serif-heading text-4xl text-midnight font-light">Membership Plans</h1>
        <p className="text-sm text-slate-light">
          Placeholder pricing page — replace names, pricing, and benefits as your offerings evolve.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {PLANS.map((plan) => (
          <article key={plan.name} className="bg-white border border-gold/20 p-6 space-y-2">
            <h2 className="serif-heading text-2xl text-midnight">{plan.name}</h2>
            <p className="text-xs text-slate-custom">{plan.details}</p>
            <p className="text-xs text-gold uppercase tracking-widest font-semibold">Pricing placeholder</p>
          </article>
        ))}
      </div>
    </div>
  );
}
