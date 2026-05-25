"use client";

import React, { useState, useMemo } from "react";
import { 
  ShieldCheck, 
  MapPin, 
  GraduationCap, 
  Lock, 
  UserCheck2,
  Filter,
  CheckCircle,
  HelpCircle,
  Users
} from "lucide-react";
import { VerifiedSealIcon } from "./icons";

interface Profile {
  id: string;
  codename: string;
  age: number;
  gender: "Male" | "Female";
  location: string;
  region: "NY Tri-State" | "Chicagoland" | "Bay Area" | "Texas Triangle";
  education: string;
  profession: string;
  observanceLevel: "Highly Observant" | "Moderately Practicing" | "Culturally Practicing";
  origin: string;
  familyLiaison: boolean;
  matchScore: number;
  unlocked: boolean;
}

const SAMPLE_DATA: Profile[] = [
  {
    id: "p1",
    codename: "MD — Pediatric Fellow",
    age: 28,
    gender: "Female",
    location: "Manhattan, NY",
    region: "NY Tri-State",
    education: "MD, NYU Grossman School of Medicine",
    profession: "Pediatric Subspecialty Fellow",
    observanceLevel: "Moderately Practicing",
    origin: "Deccani Hyderabad Roots",
    familyLiaison: true,
    matchScore: 98,
    unlocked: false
  },
  {
    id: "p2",
    codename: "MS — Artificial Intelligence Director",
    age: 31,
    gender: "Male",
    location: "San Jose, CA",
    region: "Bay Area",
    education: "MS in Computer Science, Stanford",
    profession: "Director of AI Research",
    observanceLevel: "Highly Observant",
    origin: "Levantine Roots",
    familyLiaison: true,
    matchScore: 95,
    unlocked: false
  },
  {
    id: "p3",
    codename: "JD — M&A Corporate Associate",
    age: 29,
    gender: "Male",
    location: "Chicago, IL",
    region: "Chicagoland",
    education: "JD, Northwestern Pritzker School of Law",
    profession: "Corporate Mergers Attorney",
    observanceLevel: "Moderately Practicing",
    origin: "Karachi / Punjab Roots",
    familyLiaison: false,
    matchScore: 92,
    unlocked: false
  },
  {
    id: "p4",
    codename: "MBA — Venture Capital Principal",
    age: 27,
    gender: "Female",
    location: "Austin, TX",
    region: "Texas Triangle",
    education: "MBA, Wharton School",
    profession: "Principal Venture Investor",
    observanceLevel: "Moderately Practicing",
    origin: "Houston raised, Lahore roots",
    familyLiaison: true,
    matchScore: 94,
    unlocked: false
  },
  {
    id: "p5",
    codename: "PhD — Bioengineering Researcher",
    age: 29,
    gender: "Female",
    location: "Oakland, CA",
    region: "Bay Area",
    education: "PhD, UC Berkeley",
    profession: "Senior Bioengineer",
    observanceLevel: "Highly Observant",
    origin: "North African Roots",
    familyLiaison: true,
    matchScore: 96,
    unlocked: false
  },
  {
    id: "p6",
    codename: "JD/MBA — Real Estate Executive",
    age: 33,
    gender: "Male",
    location: "Dallas, TX",
    region: "Texas Triangle",
    education: "JD/MBA, Harvard Business School",
    profession: "VP Real Estate Acquisitions",
    observanceLevel: "Culturally Practicing",
    origin: "Lahori roots",
    familyLiaison: true,
    matchScore: 91,
    unlocked: false
  }
];

interface ProfileDashboardProps {
  initialSeeking: string;
  initialRegion: string;
  activeSearchDefault: boolean;
}

export default function ProfileDashboard({ 
  initialSeeking, 
  initialRegion, 
  activeSearchDefault 
}: ProfileDashboardProps) {
  
  // States
  const [genderFilter, setGenderFilter] = useState<string>(initialSeeking || "Female");
  const [regionFilter, setRegionFilter] = useState<string>("All");
  const [educationFilter, setEducationFilter] = useState<string>("All");
  
  // Interactive Verification modal state
  const [selectedVerificationProfile, setSelectedVerificationProfile] = useState<Profile | null>(null);
  
  // Interactive unlock list
  const [unlockedProfiles, setUnlockedProfiles] = useState<Record<string, boolean>>({});
  const [visibilityRequestEmail, setVisibilityRequestEmail] = useState("");
  const [visiblyPendingProfileId, setVisiblyPendingProfileId] = useState<string | null>(null);

  // Sync initial query regions on trigger
  React.useEffect(() => {
    if (activeSearchDefault && initialRegion) {
      setRegionFilter(initialRegion);
    }
  }, [activeSearchDefault, initialRegion]);

  // Filters calculation
  const filteredProfiles = useMemo(() => {
    return SAMPLE_DATA.filter(p => {
      const matchGender = p.gender === genderFilter;
      const matchRegion = regionFilter === "All" || p.region === regionFilter;
      const matchEducation = educationFilter === "All" 
        || (educationFilter === "Doctorate" && (p.codename.includes("MD") || p.codename.includes("PhD") || p.codename.includes("JD")))
        || (educationFilter === "Master's" && p.codename.includes("MBA"));
      return matchGender && matchRegion && matchEducation;
    });
  }, [genderFilter, regionFilter, educationFilter]);

  const handleRequestVisibility = (profileId: string) => {
    setVisiblyPendingProfileId(profileId);
  };

  const handleConfirmVisibilityRequest = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    if (!visibilityRequestEmail) return;
    setUnlockedProfiles(prev => ({ ...prev, [id]: true }));
    setVisiblyPendingProfileId(null);
    setVisibilityRequestEmail("");
  };

  return (
    <div className="space-y-8">
      
      {/* Filtering Header Panel */}
      <div className="bg-alabaster border border-gold/20 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-wrap items-center gap-4 text-xs font-light">
          <div className="flex items-center gap-1 text-gold tracking-widest uppercase font-semibold">
            <Filter className="w-3.5 h-3.5" />
            <span>Showroom Filters:</span>
          </div>

          {/* Gender filter toggle */}
          <div className="flex bg-midnight/5 p-0.5 border border-slate-200">
            <button
              onClick={() => setGenderFilter("Female")}
              className={`px-3 py-1.5 uppercase tracking-wider text-[10px] font-semibold transition-colors ${
                genderFilter === "Female" ? "bg-midnight text-gold" : "text-slate-custom hover:text-midnight"
              }`}
            >
              Seeking Female
            </button>
            <button
              onClick={() => setGenderFilter("Male")}
              className={`px-3 py-1.5 uppercase tracking-wider text-[10px] font-semibold transition-colors ${
                genderFilter === "Male" ? "bg-midnight text-gold" : "text-slate-custom hover:text-midnight"
              }`}
            >
              Seeking Male
            </button>
          </div>

          {/* Metro region dropdown */}
          <select
            value={regionFilter}
            onChange={(e) => setRegionFilter(e.target.value)}
            className="bg-white border border-slate-200 text-xs px-3 py-2 text-slate-custom focus:outline-none focus:border-gold"
          >
            <option value="All">All US Metropolitan Regions</option>
            <option value="NY Tri-State">NY Tri-State</option>
            <option value="Chicagoland">Chicagoland</option>
            <option value="Bay Area">Bay Area</option>
            <option value="Texas Triangle">Texas Triangle</option>
          </select>

          {/* Education tier dropdown */}
          <select
            value={educationFilter}
            onChange={(e) => setEducationFilter(e.target.value)}
            className="bg-white border border-slate-200 text-xs px-3 py-2 text-slate-custom focus:outline-none focus:border-gold"
          >
            <option value="All">All Professional Degree Levels</option>
            <option value="Doctorate">Doctorates (MD, JD, PhD)</option>
            <option value="Master's">Master's Tiers (MBA, MS)</option>
          </select>
        </div>

        <div className="text-[10px] text-slate-light font-mono tracking-widest">
          {filteredProfiles.length} CANDIDATE(S) MATCHED
        </div>

      </div>

      {/* Grid of Profile Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {filteredProfiles.length === 0 ? (
          <div className="col-span-full border border-gold/30 bg-midnight p-12 text-center space-y-6 max-w-lg mx-auto animate-fade-in my-8">
            <div className="w-12 h-12 rounded-full border border-gold/45 bg-gold/10 flex items-center justify-center mx-auto text-gold">
              <Users className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="serif-heading text-xl text-gold font-light tracking-wide">
                No Matching Candidates
              </h3>
              <p className="text-[11px] font-light text-white/50 leading-relaxed">
                Our elite registry is highly curated and selective. We are currently reviewing new applications daily. Would you prefer to register an off-market custom search request with our matching bureau?
              </p>
            </div>
            <button
              onClick={() => {
                window.location.href = "/apply/onboarding";
              }}
              className="px-6 py-2.5 bg-gold text-midnight hover:bg-gold-hover text-[10px] font-bold tracking-widest uppercase transition-colors rounded-none"
            >
              Initiate Off-Market Registry Request
            </button>
          </div>
        ) : (
          filteredProfiles.map((profile) => {
            const isUnlocked = unlockedProfiles[profile.id];
            return (
              <div 
                key={profile.id} 
                className="bg-white border border-slate-200 hover:border-gold transition-all duration-300 flex flex-col relative shadow-sm group h-full justify-between"
              >
                
                {/* Photo representation vault layer */}
                <div className="relative h-60 w-full bg-slate-100 overflow-hidden flex items-center justify-center border-b border-slate-100 flex-shrink-0">
                  
                  {/* Photo Blur Overlay */}
                  <div className={`absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ${
                    isUnlocked 
                      ? "bg-slate-100/10 backdrop-blur-none" 
                      : "bg-midnight/90 backdrop-blur-md"
                  }`}>
                    
                    {/* Frosted vault content if not unlocked */}
                    {!isUnlocked ? (
                      <div className="space-y-4 max-w-xs animate-fade-in">
                        <div className="w-12 h-12 rounded-full border border-gold/45 bg-gold/10 flex items-center justify-center mx-auto text-gold">
                          <Lock className="w-5 h-5" />
                        </div>
                        <h4 className="serif-heading text-sm text-gold tracking-widest uppercase">
                          Encrypted Candidate photo
                        </h4>
                        <p className="text-[9px] text-white/50 leading-relaxed font-light">
                          Photos are securely encrypted. Mutual visibilty is only shared upon matching approval.
                        </p>
                        
                        {visiblyPendingProfileId !== profile.id ? (
                          <button
                            onClick={() => handleRequestVisibility(profile.id)}
                            className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-midnight text-[9px] font-bold tracking-widest uppercase transition-colors rounded-none"
                          >
                            Request Visibility Access
                          </button>
                        ) : (
                          <form 
                            onSubmit={(e) => handleConfirmVisibilityRequest(e, profile.id)}
                            className="space-y-2 mt-2"
                          >
                            <input 
                              type="email" 
                              required
                              placeholder="Enter matching email..."
                              value={visibilityRequestEmail}
                              onChange={(e) => setVisibilityRequestEmail(e.target.value)}
                              className="w-full text-[10px] px-2 py-1 bg-white/10 text-white placeholder-white/40 border border-white/20 focus:outline-none focus:border-gold rounded-none"
                            />
                            <button
                              type="submit"
                              className="w-full py-1 bg-gold text-midnight text-[9px] font-bold tracking-widest uppercase transition-colors rounded-none"
                            >
                              Submit Access Request
                            </button>
                          </form>
                        )}

                      </div>
                    ) : (
                      // When unlocked, render mock avatar representation
                      <div className="text-center space-y-3">
                        <div className="w-20 h-20 rounded-full border border-gold bg-gold/10 flex items-center justify-center mx-auto text-gold text-2xl font-light serif-heading">
                          {profile.codename.substring(0, 2)}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-bold bg-midnight/80 px-3 py-1">
                          <CheckCircle className="w-4 h-4" />
                          <span>VISIBILITY PERMISSION GRANTED</span>
                        </div>
                      </div>
                    )}

                  </div>

                  {/* Simulated geometric print design lines */}
                  <div className="absolute inset-4 border border-slate-200/40 pointer-events-none"></div>

                </div>

                {/* Card Metadata Details */}
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  
                  <div className="space-y-3">
                    {/* Codename and Match Score badge */}
                    <div className="flex items-center justify-between">
                      <h3 className="serif-heading text-base text-midnight font-bold tracking-wide">
                        {profile.codename}
                      </h3>
                      <div className="px-2 py-0.5 bg-gold/10 text-gold text-[9px] font-mono tracking-widest border border-gold/30 flex-shrink-0">
                        {profile.matchScore}% SmartMatch
                      </div>
                    </div>

                    {/* Vetting Gold seal */}
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setSelectedVerificationProfile(profile)}
                        className="flex items-center gap-2 text-[10px] text-gold font-bold uppercase tracking-wider group-hover:underline"
                      >
                        <VerifiedSealIcon size={20} />
                        <span>Verified by Ismat</span>
                      </button>

                      {profile.familyLiaison && (
                        <div className="flex items-center gap-1.5 text-[9px] text-slate-light font-mono tracking-widest">
                          <Users className="w-3.5 h-3.5 text-gold" />
                          <span>FAMILY CONNECTED</span>
                        </div>
                      )}
                    </div>

                    {/* Bullet Criteria parameters */}
                    <div className="space-y-2 pt-2 text-xs font-light text-slate-custom">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{profile.location} ({profile.region})</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span className="truncate block max-w-[200px]">{profile.education}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <UserCheck2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>Practice Level: <strong>{profile.observanceLevel}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Direct membership link */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-light font-mono tracking-widest uppercase mt-auto">
                    <span>Origin: {profile.origin}</span>
                    <span>Age: {profile.age}</span>
                  </div>

                </div>

              </div>
            );
          })
        )}
      </div>

      {/* Verification Audit Logs Modal Overlay */}
      {selectedVerificationProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-midnight/80 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-gold p-8 max-w-md w-full relative space-y-6 rounded-none">
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto border border-gold">
                <VerifiedSealIcon size={36} color="#D4AF37" />
              </div>
              <h3 className="serif-heading text-xl text-midnight font-bold uppercase tracking-widest">
                VERIFICATION REGISTER
              </h3>
              <p className="text-[10px] font-mono text-gold tracking-widest uppercase">
                {selectedVerificationProfile.codename}
              </p>
            </div>

            <div className="h-[0.5px] w-full bg-slate-200"></div>

            <div className="space-y-4 text-xs font-light text-slate-custom">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-midnight">Government-Issued ID Audited</h4>
                  <p className="text-[10px] text-slate-light">Matching birth dates, legal state residency coordinates, and full legal name validated.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-midnight">Professional Registry Validation</h4>
                  <p className="text-[10px] text-slate-light">Medical license boards, LexisNexis Bar Registry, or active business executive checks matching employer credentials.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-midnight">Direct Matchmaker Video Interview</h4>
                  <p className="text-[10px] text-slate-light">Private 1-on-1 Zoom interview validating single status, marital intent, and custom core religious/lifestyle preferences.</p>
                </div>
              </div>

              {selectedVerificationProfile.familyLiaison && (
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-midnight">Active Family Liaison Configured</h4>
                    <p className="text-[10px] text-slate-light">Parent/guardian email has been validated and authorized to overview matches and coordinate family calls.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4">
              <button
                onClick={() => setSelectedVerificationProfile(null)}
                className="w-full py-3 bg-midnight text-gold hover:bg-gold hover:text-midnight text-xs font-bold tracking-widest uppercase transition-colors rounded-none"
              >
                Close Verification Log
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
