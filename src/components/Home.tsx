import React from 'react';
import { Creator } from '../types';
import CreatorCard from './CreatorCard';
import { 
  ShieldCheck, ShieldAlert, Lock, HeartHandshake, Users, 
  Sparkles, Star, ArrowRight, Shield, Award, CalendarClock, CreditCard
} from 'lucide-react';

interface HomeProps {
  creators: Creator[];
  setActiveTab: (tab: string) => void;
  setPreselectedCreatorId: (id: string) => void;
  onViewRules: (creator: Creator) => void;
}

export default function Home({ creators, setActiveTab, setPreselectedCreatorId, onViewRules }: HomeProps) {
  const handleBookCreator = (creatorId: string) => {
    setPreselectedCreatorId(creatorId);
    setActiveTab('book');
  };

  const steps = [
    {
      icon: Users,
      title: '1. Select Creator',
      desc: 'Browse our roster of elite, verified adult creators and select who you would love to meet.'
    },
    {
      icon: ShieldAlert,
      title: '2. Submit Safety Profile',
      desc: 'Fill out our secure form including your name, age, location, reason to meet, and ID verification.'
    },
    {
      icon: Lock,
      title: '3. Pass Vetting',
      desc: 'Our security team conducts a standard background check and verifies your 18+ legal status.'
    },
    {
      icon: CalendarClock,
      title: '4. Secure Escrow & Meet',
      desc: 'Once approved, deposit funds into escrow. Meet safely with professional security nearby.'
    }
  ];

  return (
    <div className="space-y-20 text-left">
      {/* Hero Section */}
      <div className="relative py-12 md:py-24 overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-zinc-900/40 to-zinc-950 border border-zinc-900">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 h-72 w-72 rounded-full bg-rose-500/10 blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-500">
            <Sparkles className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: '8s' }} />
            The Gold Standard in Creator-Fan Meetups
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-serif font-black tracking-tight text-white leading-[1.15]">
            Meet Your Favorite Creators,{' '}
            <span className="bg-gradient-to-r from-amber-400 via-rose-500 to-purple-500 bg-clip-text text-transparent">
              Safely & Securely
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Aura VIP provides an ultra-secure, encrypted booking platform for high-profile adult film stars and content creators to meet their top supporters. Featuring mandatory 18+ ID check, full background screening, escrow protection, and physical security.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => {
                setPreselectedCreatorId(creators.length > 0 ? creators[0].id : '');
                setActiveTab('book');
              }}
              className="bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white font-bold text-sm py-3.5 px-8 rounded-xl hover:opacity-95 transition flex items-center justify-center gap-2 shadow-lg shadow-rose-500/15"
            >
              Book VIP Meetup
              <ArrowRight className="h-4 w-4 stroke-[2.5]" />
            </button>
            <button
              onClick={() => setActiveTab('tracker')}
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-bold text-sm py-3.5 px-8 rounded-xl border border-zinc-800 transition flex items-center justify-center gap-2"
            >
              <Shield className="h-4 w-4 text-amber-500" />
              Track Booking Status
            </button>
          </div>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 border-t border-zinc-900/60 text-xs">
            <div className="flex items-center justify-center gap-2 text-zinc-400">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>18+ ID Verified</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-400">
              <Lock className="h-4 w-4 text-amber-500" />
              <span>Encrypted Data</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-400">
              <CreditCard className="h-4 w-4 text-rose-500" />
              <span>Escrow Security</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-zinc-400">
              <Award className="h-4 w-4 text-purple-500" />
              <span>Vetted Security</span>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Stars Section */}
      <div id="creators" className="space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-3xl font-serif font-black text-white tracking-wide">Featured Creator Roster</h2>
          <p className="text-xs text-zinc-400">
            Select a creator below to view their biography, specialties, rates, specific boundary guidelines, and request a meeting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creators.map((creator) => (
            <CreatorCard
              key={creator.id}
              creator={creator}
              onBook={handleBookCreator}
              onViewRules={onViewRules}
            />
          ))}
        </div>
      </div>

      {/* How it Works Section */}
      <div className="bg-zinc-900/20 rounded-2xl border border-zinc-850 p-8 md:p-12 space-y-10">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h2 className="text-2xl font-serif font-black text-white">How the Booking Process Works</h2>
          <p className="text-xs text-zinc-400">
            We operate with the highest standards of safety, discretion, and legal compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-zinc-950/40 border border-zinc-900 p-5 rounded-xl space-y-3">
                <div className="p-2.5 bg-zinc-900 border border-zinc-800 text-amber-400 rounded-lg inline-block">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-sm text-white">{step.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Creator Testimonial Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-amber-500/5 to-rose-500/5 border border-zinc-900 p-8 rounded-2xl">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-500 text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
            <Star className="h-3 w-3 fill-amber-500" />
            Creator Endorsement
          </div>
          <h3 className="text-2xl font-serif font-black text-white">"Aura completely changed how I interact with my fans."</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            "Before Aura, meeting fans at conventions or arranging business dinners was stressful and felt unsafe. The ID vetting and background check system weeds out bad actors immediately. The security escorts and escrow protection give me total peace of mind so I can focus on building genuine connections."
          </p>
          <div>
            <span className="text-xs font-bold text-white block">Amara Vance</span>
            <span className="text-[10px] text-zinc-500">Premium Content Creator & Multi-Award Winner</span>
          </div>
        </div>

        <div className="relative aspect-video rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center">
          <img 
            src="/images/creator1.png" 
            alt="Amara Vance" 
            className="w-full h-full object-cover opacity-60"
            onError={(e) => {
              (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 backdrop-blur-md border border-zinc-800 px-3 py-1.5 rounded-lg text-[10px] font-bold text-emerald-400">
            <ShieldCheck className="h-4 w-4 fill-emerald-400 text-zinc-950" />
            Aura Safety Certified Profile
          </div>
        </div>
      </div>
    </div>
  );
}
