"use client";

import React, { useState } from "react";
import { ShieldCheck, Lock, Smartphone, Send, CheckCircle, MailWarning } from "lucide-react";
import { BiometricIcon, GateVaultIcon } from "@/components/icons";

export default function LoginPage() {
  const [emailInput, setEmailInput] = useState("");
  const [step, setStep] = useState(1); // 1 = Login credentials, 2 = OTP / MFA simulation
  const [otpInput, setOtpInput] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleSendMagicLink = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStep(2);
    }, 1500);
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpInput) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    }, 1200);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-20 animate-fade-in">
      <div className="bg-white border border-gold/30 p-8 md:p-10 max-w-md w-full shadow-2xl relative overflow-hidden rounded-none">
        
        {/* Dynamic Header */}
        <div className="text-center space-y-3 mb-6">
          <div className="w-12 h-12 rounded-full border border-gold/45 bg-gold/10 flex items-center justify-center mx-auto text-gold">
            <GateVaultIcon size={24} />
          </div>
          <h1 className="serif-heading text-2xl font-light text-midnight">
            {step === 1 ? "Secure Member Gateway" : "Multi-Factor Authentication"}
          </h1>
          <p className="text-[10px] text-slate-light tracking-widest uppercase font-mono">
            {step === 1 ? "ISMAT DISCRETION REGISTER" : "CONFIDENTIAL ID CHECK"}
          </p>
        </div>

        {/* Step 1: Magic Link Input */}
        {step === 1 && !isDone && (
          <form onSubmit={handleSendMagicLink} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[9px] tracking-wider uppercase font-semibold text-slate-500 block">
                Professional Registered Email:
              </label>
              <input 
                type="email" 
                required
                placeholder="e.g. zayn@alumni.chicago.edu"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full text-xs px-3 py-2.5 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold rounded-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-midnight text-gold hover:bg-gold hover:text-midnight text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 rounded-none"
            >
              {isSubmitting ? (
                <span>Generating Secure Magic Link...</span>
              ) : (
                <>
                  <span>Transmit Entrance Code</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
            
            <div className="flex items-center gap-2 text-[9px] text-slate-light leading-relaxed justify-center">
              <Smartphone className="w-3.5 h-3.5 text-gold" />
              <span>Magic link entry bypasses passwords for absolute security.</span>
            </div>
          </form>
        )}

        {/* Step 2: Simulated MFA code verification */}
        {step === 2 && !isDone && (
          <form onSubmit={handleVerifyOTP} className="space-y-6">
            <div className="space-y-1.5">
              <div className="flex items-start gap-2.5 text-[9px] text-slate-light bg-slate-50 p-3 border border-slate-100 leading-relaxed mb-2">
                <Smartphone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>We sent a 6-digit One-Time verification code to <strong>{emailInput}</strong>. Please enter the pass code to authenticate.</span>
              </div>
              
              <label className="text-[9px] tracking-wider uppercase font-semibold text-slate-500 block">
                6-Digit Security Code:
              </label>
              <input 
                type="text" 
                maxLength={6}
                required
                placeholder="e.g. 582103"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value)}
                className="w-full text-center text-lg font-mono tracking-[0.4em] py-2.5 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold rounded-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 bg-midnight text-gold hover:bg-gold hover:text-midnight text-xs font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 rounded-none"
            >
              {isSubmitting ? (
                <span>Authenticating Credentials...</span>
              ) : (
                <>
                  <span>Verify Passcode & Enter</span>
                  <ShieldCheck className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full text-center text-[10px] text-slate-light hover:text-gold uppercase tracking-wider font-semibold"
            >
              Back to Email Entrance
            </button>
          </form>
        )}

        {/* Auth Done state */}
        {isDone && (
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="serif-heading text-xl text-midnight font-bold">
              Access Granted
            </h3>
            <p className="text-[10px] text-slate-light font-mono uppercase">AUTHENTICATION SUCCESSFUL</p>
          </div>
        )}

      </div>
    </div>
  );
}
