import React from "react";
import { Gavel, ShieldAlert, Award, Star } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-12 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
          Bureau Code of Conduct
        </span>
        <h1 className="serif-heading text-4xl font-light tracking-wide text-midnight">
          matrimonial Vetting & Discretion Terms
        </h1>
        <div className="h-[0.5px] w-24 bg-gold mx-auto mt-4"></div>
      </div>

      {/* Content */}
      <div className="bg-white border border-slate-200 p-8 md:p-10 space-y-8 text-xs font-light text-slate-custom leading-relaxed">
        
        <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-100">
          <Gavel className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
          <div className="space-y-1">
            <h3 className="font-bold text-midnight uppercase tracking-wider">Registry Membership Guidelines</h3>
            <p>Our bureau caters exclusively to individuals demonstrating serious, long-term marital intent. All members pledge to adhere to strict traditional and professional ethics.</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="serif-heading text-lg text-midnight font-bold">1. Mandatory Identity Authentication</h3>
          <p>
            Applicants must provide valid government-issued identification and confirm their professional credentials (LinkedIn, bar registries, or medical resident listings) to earn the "Verified by Ismat" gold seal. Providing false information results in immediate, permanent registry suspension.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="serif-heading text-lg text-midnight font-bold">2. Absolute Confidentiality Covenant</h3>
          <p>
            All candidate dossiers, anonymized profiles, matching credentials, and photographs shared within the private showroom are strictly confidential. Members are legally bound not to screenshot, download, share, or disseminate any matching dossiers.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="serif-heading text-lg text-midnight font-bold">3. Honor & Traditional Conduct</h3>
          <p>
            Match communications must remain highly respectful, dignified, and aligned with Islamic traditional ethics. Parent/guardian liaison options are available and encouraged to maintain familial honor and coordinate introductions.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="serif-heading text-lg text-midnight font-bold">4. Life Concierge Vendor Bookings</h3>
          <p>
            Private assemblies, VIP socials, Mehndi artistry, and private culinary gastronomy are premium concierge selections. Booking fees, deposits, and tickets are strictly non-transferable and require matching photo ID verification at assembly checkpoints.
          </p>
        </div>

      </div>

    </div>
  );
}
