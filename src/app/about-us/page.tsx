import React from "react";

export default function AboutUsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-3">
        <span className="arabic-accent text-2xl text-emerald">بِسْمِ ٱللَّٰهِ</span>
        <h1 className="serif-heading text-4xl text-midnight font-light">About Us</h1>
        <p className="text-sm text-slate-light">
          Placeholder content: Share your mission, values, and the story behind your matchmaking service.
        </p>
      </header>
      <section className="bg-white border border-gold/20 p-6 text-sm text-slate-custom leading-relaxed">
        <p>
          We help Muslim families and individuals pursue marriage through a respectful process rooted in trust, privacy, and Islamic etiquette.
        </p>
      </section>
    </div>
  );
}
