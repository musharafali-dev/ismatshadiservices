import React from "react";
import { ShieldCheck, Lock, EyeOff, ShieldAlert } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-12 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
          Bureau Security Standards
        </span>
        <h1 className="serif-heading text-4xl font-light tracking-wide text-midnight">
          The Confidential Client Discretion Agreement
        </h1>
        <div className="h-[0.5px] w-24 bg-gold mx-auto mt-4"></div>
      </div>

      {/* Copy Content */}
      <div className="bg-white border border-slate-200 p-8 md:p-10 space-y-8 text-xs font-light text-slate-custom leading-relaxed">
        
        <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100">
          <ShieldCheck className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-bold text-midnight uppercase tracking-wider">Our Privacy Covenant</h3>
            <p>At Ismat Shaadi Services, we understand that high-status professional executives value anonymity above all. We stand behind our absolute zero public exposure guarantee.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="serif-heading text-lg text-midnight font-bold">1. Zero Public Database Indexing</h3>
          <p>
            Unlike mass-market matrimonial applications, our directories are entirely unindexed. No public search engine, web crawler, or external protocol can access client portfolios or photographs. Your presence in our bureau remains strictly off-market.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="serif-heading text-lg text-midnight font-bold">2. Photo Vault Encryption Standards</h3>
          <p>
            Candidate photographs are securely encrypted using standard transport layer protocols. All images are rendered under a high-performance frosted glass blur. Only approved, verified matches can request visibility access, which can be revoked at any time by the candidate.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="serif-heading text-lg text-midnight font-bold">3. Parent & Guardian Oversee Liaisons</h3>
          <p>
            To align matching dialogues with Shariah-compliant traditional integrity, parent/guardian oversee settings copy all matched candidate dossiers directly to family liaisons. We facilitate a safe, collaborative matching space keeping communications honorable and transparent.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="serif-heading text-lg text-midnight font-bold">4. Magic Link Passwordless Entry</h3>
          <p>
            To prevent credential leaks, account breaches, or password harvesting, our gateway utilizes secure magic link bypasses and Multi-Factor smartphone OTP codes. Each access session is heavily validated to protect registry sovereignty.
          </p>
        </div>

      </div>

    </div>
  );
}
