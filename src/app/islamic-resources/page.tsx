import React from "react";

const RESOURCES = [
  "Placeholder: Marriage adab and communication etiquette.",
  "Placeholder: Family involvement best practices.",
  "Placeholder: Dua and mindset reminders for marriage seekers.",
  "Placeholder: Suggested readings and trusted scholar links.",
];

export default function IslamicResourcesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="serif-heading text-4xl text-midnight font-light">Islamic Resources</h1>
        <p className="text-sm text-slate-light">
          Placeholder educational content — keep this page as an editable resource hub.
        </p>
      </header>
      <ul className="space-y-3">
        {RESOURCES.map((resource) => (
          <li key={resource} className="bg-white border border-gold/20 p-4 text-sm text-slate-custom">
            {resource}
          </li>
        ))}
      </ul>
    </div>
  );
}
