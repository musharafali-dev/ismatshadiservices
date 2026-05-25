"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, X, Send, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";

export default function ConciergeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPrompted, setIsPrompted] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // 12 Seconds Timed Delayed Slide-up as per strict specifications
    const timer = setTimeout(() => {
      setIsPrompted(true);
      setIsOpen(true);
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmailInput("");
      setIsOpen(false);
      alert("CONFIDENTIAL SECURED: Mrs. Ismat's personal assistant has locked in your priority request. We will email you within 12 hours.");
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      
      {/* 1. PASSIVE FLOATING BADGE OR PILL BUTTON */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-5 py-3.5 bg-midnight hover:bg-slate-900 text-gold border border-gold/40 shadow-2xl rounded-none transition-all duration-300 transform hover:scale-[1.02] animate-bounce"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </div>
          <span className="text-[10px] tracking-[0.25em] font-bold uppercase">
            Private Inquiry Desk
          </span>
          <MessageSquare className="w-4 h-4 text-gold" />
        </button>
      )}

      {/* 2. CHAT PANEL SLIDE-UP */}
      {isOpen && (
        <div className="w-80 md:w-96 bg-midnight border border-gold shadow-2xl p-6 space-y-5 rounded-none animate-fade-in relative">
          
          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              {/* Initials avatar framed in Champagne Gold */}
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center text-gold font-light serif-heading bg-white/5 text-sm">
                MI
              </div>
              <div>
                <h4 className="serif-heading text-sm text-gold font-medium">Mrs. Ismat</h4>
                <p className="text-[9px] tracking-wider text-white/50 uppercase font-light">Bureau Director</p>
              </div>
            </div>
            
            <button 
              onClick={handleClose} 
              className="text-white/60 hover:text-gold transition-colors p-1"
              aria-label="Close desk"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Dialogue Core Copy */}
          <div className="space-y-3">
            <div className="p-3 bg-white/5 border border-white/5 text-xs text-white/80 font-light leading-relaxed space-y-2.5">
              <p>Assalamu Alaikum.</p>
              <p>
                I am currently cross-referencing custom profiles for medical residents, attorneys, and corporate executives in New York and Chicago.
              </p>
              <p>
                Would you or your family prefer a brief, highly confidential 15-minute consultation to review unindexed off-market matches?
              </p>
            </div>
          </div>

          {/* Intake state check */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-1">
                <label className="text-[9px] tracking-wider uppercase font-semibold text-gold/80 block">
                  Professional Email Address:
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. zayn@alumni.chicago.edu"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-white/5 text-white placeholder-white/20 border border-white/15 focus:outline-none focus:border-gold rounded-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gold text-midnight hover:bg-gold-hover text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 rounded-none"
              >
                <span>Request Confidential Consultation</span>
                <PhoneCall className="w-3 h-3" />
              </button>
            </form>
          ) : (
            <div className="text-center py-4 text-xs font-light text-gold animate-pulse">
              Locking in secure desk transmission...
            </div>
          )}

          {/* Security details indicator */}
          <div className="flex items-center gap-1.5 justify-center text-[8px] text-white/40 tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-gold/60" />
            <span>SECURED BY ISMAT DISCRETION PACT</span>
          </div>

        </div>
      )}

    </div>
  );
}
