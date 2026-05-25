"use client";

import React, { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle, ShieldCheck } from "lucide-react";
import { BiometricIcon, GateVaultIcon } from "@/components/icons";

export default function ContactPage() {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormName("");
      setFormEmail("");
      setFormMessage("");
      alert("CONFIDENTIAL SECURED: Mrs. Ismat's office has received your inquiry packet.");
    }, 1500);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-20 animate-fade-in">
      
      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Consultation Instructions */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-3">
            <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
              Confidential Reach
            </span>
            <h1 className="serif-heading text-4xl font-light tracking-wide text-midnight leading-tight">
              Initiate a Private Dialogue
            </h1>
            <div className="h-[0.5px] w-24 bg-gold mt-4"></div>
          </div>

          <p className="text-xs font-light text-slate-custom leading-relaxed">
            Our offices are situated strictly in secure corporate high-rises. Consultation dialogues and private candidate matches are conducted on an appointment-only basis to ensure complete client privacy.
          </p>

          <div className="space-y-6 pt-4 text-xs font-light text-slate-custom">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-midnight uppercase tracking-wider mb-1">Michigan Avenue Office</h4>
                <p>N Michigan Ave, Chicago, IL 60611</p>
                <p className="text-slate-light mt-0.5">By Appointment Only</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-midnight uppercase tracking-wider mb-1">Direct Secure Mail</h4>
                <p>concierge@ismatshaadiservices.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-midnight uppercase tracking-wider mb-1">Office Hours</h4>
                <p>Mon - Sat: 9:00 AM - 6:00 PM CST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Intake Field Container */}
        <div className="lg:col-span-7 bg-white border border-gold/30 p-8 md:p-10 shadow-2xl">
          <h2 className="serif-heading text-2xl font-light tracking-wide text-midnight mb-6">
            Intake Request Packet
          </h2>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1.5">
                <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">Preferred Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Zayn Qureshi"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  className="w-full text-xs px-4 py-3 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">Professional Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. zayn@northwestern.edu"
                  value={formEmail}
                  onChange={(e) => setFormEmail(e.target.value)}
                  className="w-full text-xs px-4 py-3 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500">Intake Narrative Summary</label>
                <textarea 
                  rows={4}
                  placeholder="Describe your education status, current profession, and core candidate values prioritized..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full text-xs px-4 py-3 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-midnight text-gold text-xs uppercase tracking-widest font-bold hover:bg-slate-900 transition-colors flex items-center justify-center gap-2 rounded-none"
              >
                <span>Transmit Secure Inquiry</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="text-center py-12 space-y-4">
              <div className="p-3 bg-emerald-50 text-emerald-500 border border-emerald-100 rounded-full inline-block">
                <CheckCircle className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="serif-heading text-2xl font-light text-midnight">
                Transmission Complete
              </h3>
              <p className="text-xs text-slate-light font-light max-w-sm mx-auto leading-relaxed">
                Vetting encryptor active. Your file has been secured on our local ledger. Mrs. Ismat's personal assistant will email you in 12 hours.
              </p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
