"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldAlert, ShieldCheck } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-midnight/90 backdrop-blur-md border-b border-gold/20 px-6 lg:px-16 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo - Playfair Editorial Serif */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="serif-heading text-2xl lg:text-3xl text-gold font-light tracking-wide transition-all group-hover:opacity-90">
            ISMAT
          </span>
          <div className="h-6 w-[0.5px] bg-gold/40"></div>
          <span className="text-[10px] tracking-[0.3em] font-semibold text-white/80 uppercase mt-1">
            SHAADI SERVICES
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 text-xs font-light tracking-widest text-white/80 uppercase">
          <Link href="/about" className="hover:text-gold transition-colors py-1">
            About the Bureau
          </Link>
          <Link href="/profiles" className="hover:text-gold transition-colors py-1">
            Private Showroom
          </Link>
          <Link href="/services" className="hover:text-gold transition-colors py-1">
            Life Concierge
          </Link>
          <Link href="/events" className="hover:text-gold transition-colors py-1">
            Private Events
          </Link>
          <Link href="/blog" className="hover:text-gold transition-colors py-1">
            Insights
          </Link>
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <Link 
            href="/auth/login" 
            className="text-xs font-light tracking-wider text-gold hover:text-gold-hover transition-colors uppercase"
          >
            Secure Login
          </Link>
          <Link 
            href="/apply/onboarding" 
            className="px-5 py-2.5 bg-transparent border border-gold text-gold hover:bg-gold hover:text-midnight text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-none"
          >
            Apply for Membership
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-gold p-1"
          onClick={() => setMobileMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-midnight border-b border-gold/20 py-8 px-6 space-y-6 flex flex-col items-center animate-fade-in shadow-2xl">
          <nav className="flex flex-col gap-4 text-center text-xs tracking-widest text-white/80 uppercase font-light w-full">
            <Link 
              href="/about" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-gold transition-colors border-b border-white/5"
            >
              About the Bureau
            </Link>
            <Link 
              href="/profiles" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-gold transition-colors border-b border-white/5"
            >
              Private Showroom
            </Link>
            <Link 
              href="/services" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-gold transition-colors border-b border-white/5"
            >
              Life Concierge
            </Link>
            <Link 
              href="/events" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-gold transition-colors border-b border-white/5"
            >
              Private Events
            </Link>
            <Link 
              href="/blog" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-gold transition-colors"
            >
              Insights
            </Link>
          </nav>
          
          <div className="flex flex-col gap-4 w-full items-center pt-4">
            <Link 
              href="/auth/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-light text-gold tracking-widest uppercase hover:underline"
            >
              Secure Login
            </Link>
            <Link 
              href="/apply/onboarding"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 bg-gold text-midnight hover:bg-gold-hover text-xs font-bold tracking-widest uppercase transition-colors"
            >
              Apply for Membership
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
