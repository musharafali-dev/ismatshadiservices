"use client";

import React, { useState } from "react";
import { CalendarDays, MapPin, Ticket, X, ShieldCheck, Download, CheckCircle } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  metro: string;
  price: string;
  description: string;
  slotsRemaining: number;
}

const UPCOMING_EVENTS: Event[] = [
  {
    id: "e1",
    title: "Manhattan Muslim Professional Social Dinner",
    date: "June 25, 2026",
    time: "7:00 PM - 10:00 PM EST",
    location: "Lexington Ave Private Executive Room, NY",
    metro: "NY Tri-State",
    price: "$75",
    description: "An invite-only, formal catered dinner engineered for physicians, lawyers, and corporate directors in the Tri-State area to connect in a dignified atmosphere.",
    slotsRemaining: 8
  },
  {
    id: "e2",
    title: "Chicagoland Ivy Matchmaking Seminar",
    date: "July 12, 2026",
    time: "6:30 PM - 9:30 PM CST",
    location: "Michigan Ave Sky Lounge, Chicago",
    metro: "Chicagoland",
    price: "$90",
    description: "Strictly limited to Ivy League and post-graduate alumni. A private mixer designed to bridge cultural values with executive schedules.",
    slotsRemaining: 12
  },
  {
    id: "e3",
    title: "Bay Area Founders & Engineers Matching Mixer",
    date: "August 04, 2026",
    time: "6:00 PM - 9:00 PM PST",
    location: "Sand Hill Road Club Room, Menlo Park",
    metro: "Bay Area",
    price: "$85",
    description: "A private evening in Silicon Valley, curating matches for software leads, tech executives, biotech directors, and venture capital partners.",
    slotsRemaining: 14
  }
];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [bookingName, setBookingName] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookedTicket, setBookedTicket] = useState<{ event: Event; ticketId: string } | null>(null);

  const handleBook = (event: Event) => {
    setSelectedEvent(event);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingEmail || !selectedEvent) return;

    const mockTicketId = "ISM-" + Math.floor(100000 + Math.random() * 900000);
    setBookedTicket({
      event: selectedEvent,
      ticketId: mockTicketId
    });
    setSelectedEvent(null);
  };

  const handleClose = () => {
    setSelectedEvent(null);
    setBookedTicket(null);
    setBookingName("");
    setBookingEmail("");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-20 space-y-16 animate-fade-in">
      
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-[10px] tracking-[0.35em] font-bold uppercase text-gold">
          Private Assemblies
        </span>
        <h1 className="serif-heading text-4xl lg:text-5xl font-light text-midnight leading-tight">
          Elite Private Matchmaking Events
        </h1>
        <p className="text-xs font-light text-slate-light leading-relaxed">
          Our events represent highly respectful, dignified matching socials held exclusively in corporate sky-lounges and private fine-dining rooms.
        </p>
        <div className="h-[0.5px] w-24 bg-gold mx-auto mt-4"></div>
      </div>

      {/* Events List */}
      <div className="space-y-8">
        {UPCOMING_EVENTS.map((event) => (
          <div 
            key={event.id}
            className="bg-white border border-slate-200 hover:border-gold transition-all duration-300 p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-sm"
          >
            {/* Date Badge */}
            <div className="lg:col-span-3 space-y-2">
              <div className="flex items-center gap-2 text-gold font-mono tracking-widest text-xs uppercase font-semibold">
                <CalendarDays className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <p className="text-[10px] text-slate-light font-mono uppercase">{event.time}</p>
            </div>

            {/* Description Details */}
            <div className="lg:col-span-6 space-y-3">
              <h3 className="serif-heading text-xl text-midnight font-bold">
                {event.title}
              </h3>
              <p className="text-xs font-light text-slate-custom leading-relaxed">
                {event.description}
              </p>
              <div className="flex items-center gap-1 text-[10px] text-slate-light">
                <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{event.location}</span>
              </div>
            </div>

            {/* Price & Booking Button */}
            <div className="lg:col-span-3 text-right space-y-3 flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center gap-4">
              <div className="text-right">
                <span className="text-lg font-bold text-midnight">{event.price}</span>
                <p className="text-[9px] text-emerald-500 font-bold uppercase tracking-wider">{event.slotsRemaining} SLOTS LEFT</p>
              </div>
              
              <button
                onClick={() => handleBook(event)}
                className="px-5 py-3 bg-midnight text-gold hover:bg-gold hover:text-midnight text-[10px] font-bold tracking-widest uppercase transition-colors rounded-none"
              >
                Book Secure Pass
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Ticket Booking Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-gold p-8 max-w-md w-full relative space-y-5 rounded-none">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="serif-heading text-lg text-midnight font-bold uppercase tracking-wider">
                Event Ticket Registry
              </h3>
              <button onClick={handleClose} className="text-slate-custom hover:text-midnight p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <p className="text-[10px] text-gold font-bold tracking-widest uppercase">Target Event:</p>
              <h4 className="serif-heading text-base font-semibold text-midnight leading-snug">{selectedEvent.title}</h4>
              <p className="text-[10px] text-slate-light font-mono">{selectedEvent.date} • {selectedEvent.time}</p>
            </div>

            <form onSubmit={handleConfirmBooking} className="space-y-4 pt-2">
              <div className="space-y-1">
                <label className="text-[9px] tracking-wider uppercase font-semibold text-slate-500 block">Preferred Legal Name:</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Zayn Qureshi"
                  value={bookingName}
                  onChange={(e) => setBookingName(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold rounded-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] tracking-wider uppercase font-semibold text-slate-500 block">Professional Email:</label>
                <input 
                  type="email" 
                  required
                  placeholder="e.g. zayn@northwestern.edu"
                  value={bookingEmail}
                  onChange={(e) => setBookingEmail(e.target.value)}
                  className="w-full text-xs px-3 py-2 bg-slate-50 border-b border-slate-200 focus:outline-none focus:border-gold rounded-none"
                />
              </div>

              <div className="flex items-start gap-2.5 text-[9px] text-slate-light bg-slate-50 p-3 border border-slate-100 leading-relaxed">
                <ShieldCheck className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>Your ticket pass will remain private. Admission requires presenting valid ID matching your registration details at the door.</span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-midnight text-gold hover:bg-gold hover:text-midnight text-xs font-bold tracking-widest uppercase transition-colors rounded-none mt-2"
              >
                Confirm Secure Booking
              </button>
            </form>

          </div>
        </div>
      )}

      {/* Booked Ticket Receipt Display Overlay */}
      {bookedTicket && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border-2 border-gold p-8 max-w-md w-full relative space-y-6 rounded-none shadow-2xl">
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto border border-emerald-100">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="serif-heading text-xl text-midnight font-bold uppercase tracking-wider">
                Booking Complete
              </h3>
              <p className="text-[10px] text-slate-light font-mono uppercase">TRANSMISSION HASH: {bookedTicket.ticketId}</p>
            </div>

            {/* Custom downloadable Ticket Representation */}
            <div className="border border-dashed border-gold/60 p-5 bg-midnight text-white space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-gold/10 pointer-events-none transform rotate-45"></div>
              
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <span className="text-[8px] text-gold font-bold tracking-widest uppercase">ISMAT SECURE ASSEMBLY PASS</span>
                  <h4 className="serif-heading text-sm text-gold leading-tight">{bookedTicket.event.title}</h4>
                </div>
                <Ticket className="w-6 h-6 text-gold flex-shrink-0" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-[9px] font-mono text-white/70 pt-2 border-t border-white/10">
                <div>
                  <p className="text-white/40">HOLDER NAME</p>
                  <p className="font-bold text-white truncate">{bookingName}</p>
                </div>
                <div>
                  <p className="text-white/40">REGISTERED EMAIL</p>
                  <p className="font-bold text-white truncate">{bookingEmail}</p>
                </div>
                <div>
                  <p className="text-white/40">DATE & TIME</p>
                  <p className="font-bold text-white">{bookedTicket.event.date}</p>
                </div>
                <div>
                  <p className="text-white/40">ENTRY TICKET ID</p>
                  <p className="font-bold text-gold">{bookedTicket.ticketId}</p>
                </div>
              </div>
              
              <div className="text-[7px] text-white/40 font-light border-t border-white/10 pt-2">
                *Present this pass alongside a matching state ID or credentials for admission at the door. Non-transferable.
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <button
                onClick={() => {
                  alert("CONFIDENTIAL DOWNLOADING: Encrypted registry pass secured to local storage.");
                  handleClose();
                }}
                className="flex-1 py-3 border border-midnight text-midnight hover:bg-slate-50 text-[10px] font-bold tracking-widest uppercase transition-colors flex items-center justify-center gap-2 rounded-none"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Pass</span>
              </button>
              <button
                onClick={handleClose}
                className="flex-1 py-3 bg-midnight text-gold hover:bg-gold hover:text-midnight text-[10px] font-bold tracking-widest uppercase transition-colors rounded-none"
              >
                Close Receipt
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
