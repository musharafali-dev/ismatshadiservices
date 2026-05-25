"use client";

import React, { useState } from "react";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="serif-heading text-4xl text-midnight font-light">Contact Us</h1>
        <p className="text-sm text-slate-light">
          Placeholder form scaffold for future backend integration.
        </p>
      </header>
      <section className="bg-white border border-gold/20 p-6 md:p-8">
        {!submitted ? (
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="text-xs text-slate-custom">
              Full Name
              <input required className="mt-1 w-full border border-slate-200 px-3 py-2 focus:outline-none focus:border-gold" />
            </label>
            <label className="text-xs text-slate-custom">
              Email
              <input type="email" required className="mt-1 w-full border border-slate-200 px-3 py-2 focus:outline-none focus:border-gold" />
            </label>
            <label className="text-xs text-slate-custom md:col-span-2">
              Message
              <textarea rows={5} required className="mt-1 w-full border border-slate-200 px-3 py-2 focus:outline-none focus:border-gold resize-y" />
            </label>
            <button type="submit" className="md:col-span-2 bg-midnight text-gold px-5 py-3 text-xs uppercase tracking-widest font-semibold">
              Submit Inquiry
            </button>
          </form>
        ) : (
          <p className="text-sm text-emerald font-medium">Thank you. Placeholder submission complete.</p>
        )}
      </section>
    </div>
  );
}
