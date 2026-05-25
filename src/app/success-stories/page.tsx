import React from "react";

const STORIES = [
  { title: "Story One", excerpt: "Placeholder: Share how two families connected through your service." },
  { title: "Story Two", excerpt: "Placeholder: Highlight values, compatibility, and respectful communication." },
  { title: "Story Three", excerpt: "Placeholder: Add a testimonial with milestones and lessons learned." },
];

export default function SuccessStoriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-3">
        <h1 className="serif-heading text-4xl text-midnight font-light">Success Stories</h1>
        <p className="text-sm text-slate-light">
          Placeholder stories section — update with real testimonials and approved narratives.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {STORIES.map((story) => (
          <article key={story.title} className="bg-white border border-gold/20 p-6 space-y-2">
            <h2 className="serif-heading text-xl text-midnight">{story.title}</h2>
            <p className="text-xs text-slate-custom">{story.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
