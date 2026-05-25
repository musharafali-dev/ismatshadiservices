"use client";

import React from "react";
import Link from "next/link";
import { BookOpen, CalendarDays, ArrowRight, Clock } from "lucide-react";

interface Post {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  snippet: string;
}

const INSIGHTS_POSTS: Post[] = [
  {
    id: "post1",
    title: "Navigating Parental Liaison Roles in Modern Matrimonial Vetting",
    category: "Family Dynamics",
    date: "May 20, 2026",
    readTime: "6 min read",
    snippet: "Islamic marriage traditions heavily value parent/guardian involvement. We review how second-generation professionals can elegantly coordinate match reviews with family representatives while maintaining personal career benchmarks."
  },
  {
    id: "post2",
    title: "Vetting for Spiritual Alignment & Executive Demands",
    category: "Islamic Matchmaking",
    date: "April 28, 2026",
    readTime: "5 min read",
    snippet: "Attorneys, physicians, and founders face demanding professional schedules. We discuss maintaining Halal boundaries, scheduling direct introductions, and evaluating spiritual observance benchmarks without compromise."
  },
  {
    id: "post3",
    title: "Bridging East Coast and Silicon Valley Professional Cohorts",
    category: "Cultural Perspectives",
    date: "March 15, 2026",
    readTime: "8 min read",
    snippet: "From major tech centers in California to corporate banking hubs in New York, we outline metropolitan relocation, professional compatibility vectors, and raising families under dual-career conditions."
  }
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-16 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
          Matrimonial Bureau Journal
        </span>
        <h1 className="serif-heading text-4xl lg:text-5xl font-light text-midnight leading-tight">
          Insights, Guidance & Marriage Prep
        </h1>
        <div className="h-[0.5px] w-24 bg-gold mx-auto mt-4"></div>
      </div>

      {/* Grid of Journal Posts */}
      <div className="space-y-10">
        {INSIGHTS_POSTS.map((post) => (
          <article 
            key={post.id}
            className="bg-white border border-slate-200 hover:border-gold transition-all duration-300 p-8 space-y-4"
          >
            <div className="flex items-center justify-between text-[10px] text-gold font-bold uppercase tracking-widest font-mono">
              <span>{post.category}</span>
              <div className="flex items-center gap-4 text-slate-custom font-light">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-3.5 h-3.5 text-gold" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-gold" />
                  {post.readTime}
                </span>
              </div>
            </div>

            <h3 className="serif-heading text-2xl text-midnight font-bold leading-snug">
              {post.title}
            </h3>

            <p className="text-xs font-light text-slate-custom leading-relaxed">
              {post.snippet}
            </p>

            <div className="pt-2">
              <button 
                onClick={() => alert("CONFIDENTIAL REGISTERED: Subscribe to the Ismat Shaadi newsletter to receive complete PDF journal prints.")}
                className="text-xs text-midnight font-bold tracking-widest uppercase hover:text-gold flex items-center gap-1.5 transition-colors"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </article>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-midnight border border-gold/40 p-8 text-center text-white space-y-4">
        <span className="text-[10px] tracking-[0.25em] font-bold text-gold uppercase">Confidential Updates</span>
        <h3 className="serif-heading text-2xl font-light text-white">Join the Private Journal Registry</h3>
        <p className="text-xs font-light text-white/60 max-w-md mx-auto leading-relaxed">
          Receive priority announcements for upcoming invitation-only events and new unindexed off-market candidate portfolios.
        </p>
        
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            alert("SECURE SUBSCRIPTION SAVED: Your email has been added to our offline ledger.");
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2"
        >
          <input 
            type="email" 
            required
            placeholder="Enter professional email..."
            className="flex-grow bg-white/5 text-white placeholder-white/20 text-xs px-4 py-3 border border-white/10 focus:outline-none focus:border-gold rounded-none"
          />
          <button 
            type="submit"
            className="bg-gold text-midnight hover:bg-gold-hover px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors rounded-none"
          >
            Subscribe
          </button>
        </form>
      </div>

    </div>
  );
}
