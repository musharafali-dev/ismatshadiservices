import React from "react";

const STEPS = [
  "Create a private profile with basic details and preferences.",
  "Complete a guided intake and verification review.",
  "Receive curated introductions aligned with your values.",
  "Continue with family-aware communication and follow-up support.",
];

export default function HowItWorksPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="serif-heading text-4xl text-midnight font-light">How It Works</h1>
        <p className="text-sm text-slate-light">
          Placeholder process overview — update each step with your exact workflow.
        </p>
      </header>
      <ol className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {STEPS.map((step, index) => (
          <li key={step} className="bg-white border border-gold/20 p-5 text-sm text-slate-custom">
            <span className="text-gold font-bold mr-2">0{index + 1}.</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
