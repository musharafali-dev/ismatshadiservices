import React from "react";
import { UserCheck, HeartHandshake, BadgeCheck } from "lucide-react";

const FIELDS = [
  "Faith goals and preferred communication boundaries",
  "Guardian/family involvement preferences",
  "Education, profession, and relocation readiness",
  "Lifestyle compatibility priorities",
];

export default function ProfileEnhancementScaffold() {
  return (
    <section className="bg-alabaster border border-gold/20 p-6 md:p-8 space-y-5">
      <div className="space-y-2">
        <h3 className="serif-heading text-2xl text-midnight font-light">Enhanced Profile (Scaffold)</h3>
        <p className="text-xs text-slate-light">
          Editable profile blueprint for richer future member onboarding.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="border border-slate-200 bg-white p-4 flex items-start gap-3">
          <UserCheck className="w-4 h-4 text-gold mt-0.5" />
          <p>Identity and profile verification checkpoints</p>
        </div>
        <div className="border border-slate-200 bg-white p-4 flex items-start gap-3">
          <HeartHandshake className="w-4 h-4 text-gold mt-0.5" />
          <p>Compatibility prompts for meaningful matching</p>
        </div>
        <div className="border border-slate-200 bg-white p-4 flex items-start gap-3">
          <BadgeCheck className="w-4 h-4 text-gold mt-0.5" />
          <p>Trust and privacy controls for member safety</p>
        </div>
      </div>
      <ul className="list-disc pl-5 text-xs text-slate-custom space-y-1">
        {FIELDS.map((field) => (
          <li key={field}>{field}</li>
        ))}
      </ul>
    </section>
  );
}
