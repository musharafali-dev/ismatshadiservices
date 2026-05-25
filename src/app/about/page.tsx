import React from "react";
import { ShieldAlert, Users, Award, Lock, BookOpen } from "lucide-react";
import { BiometricIcon, RingMatrixIcon, GateVaultIcon } from "@/components/icons";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16 animate-fade-in">
      
      {/* Editorial Header */}
      <div className="text-center space-y-4">
        <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
          Bureau Creed & Sanctity
        </span>
        <h1 className="serif-heading text-4xl lg:text-5xl font-light text-midnight leading-tight">
          Meticulous Curation. Zero Public Exposure.
        </h1>
        <div className="h-[0.5px] w-24 bg-gold mx-auto mt-4"></div>
      </div>

      {/* The Core Story */}
      <div className="space-y-6 text-sm font-light text-slate-custom leading-relaxed">
        <p>
          Ismat Shaadi Services operates as a boutique, unindexed matrimonial registry catering exclusively to highly educated, second-generation Muslim professionals (Physicians, Attorneys, Venture Capitalists, and Corporate Executives) residing in major US metropolitan areas.
        </p>
        <p>
          Founded on the principle that digital convenience should never compromise Islamic sanctity or client discretion, we stand as the absolute antithesis to modern dating apps. We do not use swipe mechanics, public search galleries, or automated matching algorithms.
        </p>
      </div>

      {/* Grid: Four Pillars of our Halal Commitment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        
        <div className="border border-slate-200 p-6 space-y-3 bg-white">
          <div className="p-2 bg-midnight text-gold w-fit">
            <BiometricIcon size={20} />
          </div>
          <h3 className="serif-heading text-lg text-midnight font-bold uppercase tracking-wider">
            100% Identity Integrity Audit
          </h3>
          <p className="text-xs font-light text-slate-light leading-relaxed">
            Every member undergoes government-issued ID matching alongside professional licensing verification. You will only match with genuine, vetted individuals.
          </p>
        </div>

        <div className="border border-slate-200 p-6 space-y-3 bg-white">
          <div className="p-2 bg-midnight text-gold w-fit">
            <GateVaultIcon size={20} />
          </div>
          <h3 className="serif-heading text-lg text-midnight font-bold uppercase tracking-wider">
            Discretion & Security Vault
          </h3>
          <p className="text-xs font-light text-slate-light leading-relaxed">
            Your photograph and editorial bio remain fully encrypted under our off-market directory protocols. Mutual visibility is only granted under absolute candidate consent.
          </p>
        </div>

        <div className="border border-slate-200 p-6 space-y-3 bg-white">
          <div className="p-2 bg-midnight text-gold w-fit">
            <RingMatrixIcon size={20} />
          </div>
          <h3 className="serif-heading text-lg text-midnight font-bold uppercase tracking-wider">
            Parental Overview Settings
          </h3>
          <p className="text-xs font-light text-slate-light leading-relaxed">
            Islamic marital traditions are preserved. Members can link their parent or guardian's email to overview dossiers and collaborate on mutual matching approvals.
          </p>
        </div>

        <div className="border border-slate-200 p-6 space-y-3 bg-white">
          <div className="p-2 bg-midnight text-gold w-fit">
            <Award size={20} className="text-gold" />
          </div>
          <h3 className="serif-heading text-lg text-midnight font-bold uppercase tracking-wider">
            Bespoke Human Matchmaking
          </h3>
          <p className="text-xs font-light text-slate-light leading-relaxed">
            No machine algorithms. Our matchmakers personally interview all applicants to evaluate spiritual alignment, professional goals, and cultural dynamics.
          </p>
        </div>

      </div>

      {/* Shariah Compliance Guarantee Callout */}
      <div className="bg-midnight border border-gold/40 p-8 text-center text-white space-y-4">
        <h3 className="serif-heading text-xl text-gold font-light tracking-widest uppercase">
          Our Shariah Vetting Pledge
        </h3>
        <p className="text-xs font-light text-white/70 leading-relaxed max-w-2xl mx-auto">
          We operate strictly in compliance with Islamic marital traditions. We facilitate dignified, family-approved matching conduits, rejecting public exhibitionism, superficial profiles, or unsanctioned communications.
        </p>
      </div>

    </div>
  );
}
