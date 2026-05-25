"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowLeft, ShieldCheck, CheckCircle, Smartphone, Lock, Users, Sparkles } from "lucide-react";
import { BiometricIcon, GateVaultIcon, RingMatrixIcon } from "@/components/icons";

export default function OnboardingPage() {
  const [stage, setStage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  // Form states
  const [fullName, setFullName] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [educationLevel, setEducationLevel] = useState("Doctorate");
  const [profession, setProfession] = useState("");
  
  const [observance, setObservance] = useState("Moderately Practicing");
  const [dietary, setDietary] = useState("Strictly Halal");
  const [metroRegion, setMetroRegion] = useState("NY Tri-State");

  const [parentConnect, setParentConnect] = useState(false);
  const [parentEmail, setParentEmail] = useState("");

  const handleNext = () => {
    if (stage < 3) {
      setStage(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (stage > 1) {
      setStage(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsCompleted(true);
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 animate-fade-in">
      
      {/* Onboarding container */}
      <div className="bg-white border border-gold/30 p-8 md:p-12 shadow-2xl relative overflow-hidden rounded-none">
        
        {/* Progress Bar indicator */}
        {!isCompleted && (
          <div className="flex items-center justify-between border-b border-slate-200 pb-6 mb-8">
            <div className="space-y-1">
              <span className="text-[9px] tracking-[0.25em] font-bold text-gold uppercase">Membership Registry Form</span>
              <h2 className="serif-heading text-2xl font-light text-midnight">Confidential Registry Onboarding</h2>
            </div>
            
            {/* Steps indicator */}
            <div className="flex items-center gap-2 font-mono text-xs text-slate-light">
              <span className={`px-2 py-1 ${stage === 1 ? "bg-midnight text-gold font-bold" : "bg-slate-100"}`}>1</span>
              <span className="text-slate-200">/</span>
              <span className={`px-2 py-1 ${stage === 2 ? "bg-midnight text-gold font-bold" : "bg-slate-100"}`}>2</span>
              <span className="text-slate-200">/</span>
              <span className={`px-2 py-1 ${stage === 3 ? "bg-midnight text-gold font-bold" : "bg-slate-100"}`}>3</span>
            </div>
          </div>
        )}

        {/* Dynamic form stages */}
        {!isCompleted && (
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Stage 1: Identity & Professional Dossier */}
            {stage === 1 && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest pb-2 border-b border-slate-100">
                  <BiometricIcon size={18} />
                  <span>Stage 01: Professional Vocation Check</span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">Full Legal Name:</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Zayn Qureshi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold rounded-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">LinkedIn Profile URL:</label>
                  <input 
                    type="url" 
                    required
                    placeholder="e.g. https://linkedin.com/in/zayn-qureshi"
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold rounded-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">Education Level:</label>
                    <select
                      value={educationLevel}
                      onChange={(e) => setEducationLevel(e.target.value)}
                      className="w-full bg-slate-50 border-b border-slate-200 text-xs px-3 py-2.5 focus:outline-none focus:border-gold rounded-none"
                    >
                      <option value="Doctorate">Doctorate (MD, JD, PhD)</option>
                      <option value="Master's">Master's (MBA, MS, MA)</option>
                      <option value="Bachelor's">Bachelor's Degree</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">Profession / Vocation:</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Cardiology Fellow"
                      value={profession}
                      onChange={(e) => setProfession(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold rounded-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Stage 2: Spiritual & Lifestyle alignment */}
            {stage === 2 && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest pb-2 border-b border-slate-100">
                  <Sparkles size={18} className="text-gold" />
                  <span>Stage 02: Spiritual & Metro Alignment</span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">Spiritual Practice Observance:</label>
                  <select
                    value={observance}
                    onChange={(e) => setObservance(e.target.value)}
                    className="w-full bg-slate-50 border-b border-slate-200 text-xs px-3 py-2.5 focus:outline-none focus:border-gold rounded-none"
                  >
                    <option value="Highly Observant">Highly Observant (Prays consistently, Shariah boundaries)</option>
                    <option value="Moderately Practicing">Moderately Practicing (Balancing tradition and modern schedules)</option>
                    <option value="Culturally Practicing">Culturally Practicing (Valuing heritage and basic guidelines)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">Dietary Values:</label>
                    <select
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value)}
                      className="w-full bg-slate-50 border-b border-slate-200 text-xs px-3 py-2.5 focus:outline-none focus:border-gold rounded-none"
                    >
                      <option value="Strictly Halal">Strictly Halal (Only Halal-certified dining)</option>
                      <option value="Halal at Home">Halal at Home (Vegetarian outside)</option>
                      <option value="Cultural / Flex">Flexible Halal parameters</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">US Metropolitan Region:</label>
                    <select
                      value={metroRegion}
                      onChange={(e) => setMetroRegion(e.target.value)}
                      className="w-full bg-slate-50 border-b border-slate-200 text-xs px-3 py-2.5 focus:outline-none focus:border-gold rounded-none"
                    >
                      <option value="NY Tri-State">NY Tri-State (NYC Area)</option>
                      <option value="Chicagoland">Chicagoland (IL Area)</option>
                      <option value="Bay Area">Bay Area (Silicon Valley)</option>
                      <option value="Texas Triangle">Texas Triangle (Dallas/Houston)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Stage 3: Family Connect settings */}
            {stage === 3 && (
              <div className="space-y-5 animate-fade-in">
                <div className="flex items-center gap-2 text-gold font-bold text-xs uppercase tracking-widest pb-2 border-b border-slate-100">
                  <RingMatrixIcon size={18} />
                  <span>Stage 03: Family Oversee Settings</span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 space-y-4">
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="parent-connect-cb"
                      checked={parentConnect}
                      onChange={(e) => setParentConnect(e.target.checked)}
                      className="mt-1 h-4 w-4 text-gold border-slate-300 focus:ring-gold"
                    />
                    <div>
                      <label htmlFor="parent-connect-cb" className="text-xs font-semibold text-midnight uppercase tracking-wider block cursor-pointer">
                        Link Parent / Guardian Representative
                      </label>
                      <p className="text-[10px] text-slate-light leading-relaxed font-light mt-0.5">
                        We highly recommend linking parent/guardian contact emails. They will be copied on matching dossiers to oversee matching communication under Shariah integrity guidelines.
                      </p>
                    </div>
                  </div>
                </div>

                {parentConnect && (
                  <div className="space-y-1.5 animate-fade-in">
                    <label className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 block">Parent / Guardian Email Address:</label>
                    <input 
                      type="email" 
                      required
                      placeholder="e.g. father@domain.com"
                      value={parentEmail}
                      onChange={(e) => setParentEmail(e.target.value)}
                      className="w-full text-xs px-3 py-2.5 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold rounded-none"
                    />
                  </div>
                )}

                <div className="flex items-start gap-2.5 text-[9px] text-slate-light bg-slate-50 p-4 border border-slate-150 leading-relaxed">
                  <Lock className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>All entered application details are fully encrypted and will never be shared without your explicit consent or mutual matching confirmation.</span>
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              {stage > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center gap-1.5 text-xs text-slate-custom font-semibold uppercase tracking-widest hover:text-gold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {stage < 3 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-6 py-3 bg-midnight text-gold hover:bg-gold hover:text-midnight text-xs font-bold uppercase tracking-widest transition-colors rounded-none"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-1.5 px-8 py-3.5 bg-gold text-midnight hover:bg-gold-hover text-xs font-bold uppercase tracking-widest transition-colors rounded-none"
                >
                  {isSubmitting ? (
                    <span>Transmitting Application...</span>
                  ) : (
                    <>
                      <span>Submit Secure Application</span>
                      <ShieldCheck className="w-4 h-4" />
                    </>
                  )}
                </button>
              )}
            </div>

          </form>
        )}

        {/* Completion Success screen */}
        {isCompleted && (
          <div className="text-center py-12 space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h2 className="serif-heading text-3xl font-light text-midnight">Application Transmitted</h2>
              <p className="text-[10px] text-slate-light font-mono tracking-widest uppercase">REGISTRY UNDER ENCRYPTED REVIEW</p>
            </div>

            <p className="text-xs font-light text-slate-custom max-w-md mx-auto leading-relaxed">
              Assalamu Alaikum, <strong>{fullName}</strong>. Your professional matrimonial dossier has been safely encrypted on our offline ledger. 
            </p>
            <p className="text-xs font-light text-slate-custom max-w-md mx-auto leading-relaxed">
              Our bureau review Matchmaker will audit your LinkedIn credentials and government ID within 48 hours, and email you to schedule your personal Zoom video interview.
            </p>

            <div className="h-[0.5px] w-24 bg-gold mx-auto my-4"></div>

            <div className="pt-2">
              <button 
                onClick={() => {
                  window.location.href = "/";
                }}
                className="px-6 py-3 bg-midnight text-gold hover:bg-gold hover:text-midnight text-[10px] font-bold tracking-widest uppercase transition-colors rounded-none"
              >
                Return to Bureau Home
              </button>
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
