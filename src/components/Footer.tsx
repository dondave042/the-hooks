import React from 'react';
import { Shield, Heart, HelpCircle, FileLock2 } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 mt-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="relative mr-3 bg-gradient-to-tr from-amber-500 to-rose-500 p-2 rounded-lg">
                <Shield className="h-5 w-5 text-black stroke-[2.5]" />
              </div>
              <div>
                <span className="text-xl font-black tracking-wider text-white font-serif">
                  AURA
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] text-amber-500 block -mt-1">
                  VIP MEETUPS
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-sm">
              Aura VIP is a secure, premium booking agency and safety protocol platform facilitating verified meetups between fans and content creators. We provide absolute privacy, secure escrow, and professional physical security details.
            </p>
            <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-bold bg-zinc-900 py-1.5 px-3 rounded-lg inline-block border border-zinc-800">
              <FileLock2 className="h-3.5 w-3.5 text-amber-500" />
              Fully compliant with 18 U.S.C. § 2257 Record-Keeping Requirements.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <button onClick={() => setActiveTab('home')} className="hover:text-amber-400 transition text-left">
                  Home / Explore
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('creators')} className="hover:text-amber-400 transition text-left">
                  Creator Roster
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('book')} className="hover:text-amber-400 transition text-left">
                  Book a Meeting
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('tracker')} className="hover:text-amber-400 transition text-left">
                  Status Tracker
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('safety')} className="hover:text-amber-400 transition text-left">
                  Safety & Conduct
                </button>
              </li>
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Safety & Compliance</h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li className="flex items-center gap-1.5 text-rose-500 font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                Strictly 18+ Only
              </li>
              <li>
                <span className="text-zinc-500 block">Vetting Partner:</span>
                <span className="text-white font-semibold">Aegis Security Group</span>
              </li>
              <li>
                <span className="text-zinc-500 block">Payment Escrow:</span>
                <span className="text-white font-semibold">Aura Verified Trust</span>
              </li>
              <li className="text-[10px] text-zinc-500 leading-relaxed pt-2">
                All creators on Aura operate as independent contractors. Aura coordinates security, identity vetting, and escrow services.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} Aura VIP Meetups. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 text-[10px]">
            Designed with
            <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
            for creator safety & peace of mind.
          </div>
        </div>
      </div>
    </footer>
  );
}
