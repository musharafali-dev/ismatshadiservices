"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";

export default function SearchFilterScaffold() {
  const [formState, setFormState] = useState({
    ageRange: "25-32",
    region: "Any Region",
    practiceLevel: "Moderately Practicing",
  });

  return (
    <section className="bg-white border border-gold/20 p-6 md:p-8 space-y-5">
      <div className="space-y-2">
        <h3 className="serif-heading text-2xl text-midnight font-light">Search & Filter (Scaffold)</h3>
        <p className="text-xs text-slate-light">
          Placeholder filter form for future matchmaking search integration.
        </p>
      </div>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-4" onSubmit={(e) => e.preventDefault()}>
        <label className="text-xs font-medium text-slate-custom">
          Age Range
          <select
            value={formState.ageRange}
            onChange={(e) => setFormState((prev) => ({ ...prev, ageRange: e.target.value }))}
            className="mt-1 w-full border border-slate-200 px-3 py-2 bg-alabaster focus:outline-none focus:border-gold"
          >
            <option>22-28</option>
            <option>25-32</option>
            <option>30-38</option>
          </select>
        </label>
        <label className="text-xs font-medium text-slate-custom">
          Region
          <select
            value={formState.region}
            onChange={(e) => setFormState((prev) => ({ ...prev, region: e.target.value }))}
            className="mt-1 w-full border border-slate-200 px-3 py-2 bg-alabaster focus:outline-none focus:border-gold"
          >
            <option>Any Region</option>
            <option>North America</option>
            <option>UK & Europe</option>
            <option>Gulf Region</option>
          </select>
        </label>
        <label className="text-xs font-medium text-slate-custom">
          Islamic Practice
          <select
            value={formState.practiceLevel}
            onChange={(e) => setFormState((prev) => ({ ...prev, practiceLevel: e.target.value }))}
            className="mt-1 w-full border border-slate-200 px-3 py-2 bg-alabaster focus:outline-none focus:border-gold"
          >
            <option>Highly Practicing</option>
            <option>Moderately Practicing</option>
            <option>Open to Discussion</option>
          </select>
        </label>
      </form>
      <button
        type="button"
        className="inline-flex items-center gap-2 bg-midnight text-gold px-5 py-2.5 text-xs uppercase tracking-widest font-semibold"
      >
        <Search className="w-3.5 h-3.5" />
        Run Placeholder Search
      </button>
    </section>
  );
}
