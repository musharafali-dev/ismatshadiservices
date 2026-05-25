"use client";

import React from "react";
import ProfileDashboard from "@/components/profile-dashboard";

export default function ProfilesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-12 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <span className="text-[10px] tracking-[0.3em] font-bold uppercase text-gold">
          Encrypted Registry Search
        </span>
        <h1 className="serif-heading text-4xl text-midnight font-light">
          Private Candidate Showroom
        </h1>
        <p className="text-xs font-light text-slate-light leading-relaxed">
          Each profile represents a fully authenticated US resident candidate. Photos are blurred for client safety and require mutual approval to be unlocked.
        </p>
        <div className="h-[0.5px] w-24 bg-gold mx-auto mt-4"></div>
      </div>

      {/* Showroom Interactive Registry Component */}
      <ProfileDashboard 
        initialSeeking="Female" 
        initialRegion="All" 
        activeSearchDefault={false} 
      />

    </div>
  );
}
