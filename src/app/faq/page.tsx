import React from "react";

const QUESTIONS = [
  {
    question: "How private is the platform?",
    answer: "Placeholder: Explain your privacy policy and visibility controls.",
  },
  {
    question: "Is family involvement supported?",
    answer: "Placeholder: Describe guardian/family collaboration options.",
  },
  {
    question: "How are matches screened?",
    answer: "Placeholder: Outline verification and values-based compatibility steps.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="serif-heading text-4xl text-midnight font-light">FAQ</h1>
        <p className="text-sm text-slate-light">
          Placeholder answers for commonly asked questions.
        </p>
      </header>
      <div className="space-y-3">
        {QUESTIONS.map((item) => (
          <article key={item.question} className="bg-white border border-gold/20 p-5">
            <h2 className="text-base font-semibold text-midnight">{item.question}</h2>
            <p className="text-sm text-slate-custom mt-1">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
