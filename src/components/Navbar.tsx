import React, { useState } from 'react';
import { Shield, Menu, X, User, Settings, Sparkles, Heart, ShieldAlert, UserCheck } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  userRole: 'fan' | 'admin' | 'creator';
  setUserRole: (role: 'fan' | 'admin' | 'creator') => void;
  hasProfile: boolean;
}

export default function Navbar({ activeTab, setActiveTab, userRole, setUserRole, hasProfile }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'creators', label: 'Creators' },
    { id: 'book', label: 'Book a Meeting' },
    { id: 'tracker', label: 'Track Booking' },
    { id: 'profile', label: hasProfile ? 'My Fan Profile' : 'Create Fan Profile' },
    { id: 'safety', label: 'Safety & Rules' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="relative mr-3 bg-red-600 p-2.5 rounded-xl shadow-lg shadow-red-500/10">
              <Shield className="h-6 w-6 text-white stroke-[2.5]" />
              <div className="absolute -top-1 -right-1 bg-white text-[9px] font-bold text-black px-1 rounded-full animate-pulse flex items-center gap-0.5">
                18<span className="text-[7px]">+</span>
              </div>
            </div>
            <div>
              <span className="text-2xl font-black tracking-wider bg-gradient-to-r from-white via-zinc-200 to-red-500 bg-clip-text text-transparent font-serif">
                AURA
              </span>
              <span className="text-xs font-bold tracking-[0.2em] text-red-500 block -mt-1">
                18+ VIP PORTAL
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-all duration-300 ${
                  activeTab === item.id
                    ? 'text-red-500 bg-red-500/10 border border-red-500/20'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Role Switcher Controls */}
          <div className="hidden lg:flex items-center space-x-3 bg-zinc-900/60 p-1.5 rounded-xl border border-zinc-800">
            <button
              onClick={() => {
                setUserRole('fan');
                setActiveTab('home');
              }}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition ${
                userRole === 'fan'
                  ? 'bg-red-600 text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Fan Mode
            </button>
            <button
              onClick={() => {
                setUserRole('admin');
                setActiveTab('admin');
              }}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition flex items-center gap-1 ${
                userRole === 'admin'
                  ? 'bg-red-600 text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <ShieldAlert className="h-3 w-3" />
              Admin Mode
            </button>
            <button
              onClick={() => {
                setUserRole('creator');
                setActiveTab('dashboard');
              }}
              className={`px-3 py-1.5 rounded-lg text-[10px] font-extrabold uppercase tracking-wider transition flex items-center gap-1 ${
                userRole === 'creator'
                  ? 'bg-red-600 text-white shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Settings className="h-3 w-3" />
              Creator
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => {
                setUserRole('admin');
                setActiveTab('admin');
              }}
              className={`p-2 rounded-lg ${activeTab === 'admin' ? 'bg-red-600/15 text-red-500' : 'bg-zinc-900 text-zinc-400'}`}
              title="Admin Mode"
            >
              <ShieldAlert className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-900 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                  activeTab === item.id
                    ? 'text-red-500 bg-red-500/10 border-l-4 border-red-500'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Mobile Role Switcher */}
            <div className="pt-4 border-t border-zinc-900 mt-2 px-4 space-y-2">
              <span className="text-[10px] font-extrabold tracking-wider text-zinc-500 uppercase block mb-1">Switch Role View</span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => {
                    setUserRole('fan');
                    setActiveTab('home');
                    setIsOpen(false);
                  }}
                  className={`py-2 text-center text-xs font-bold rounded-lg ${userRole === 'fan' ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400'}`}
                >
                  Fan
                </button>
                <button
                  onClick={() => {
                    setUserRole('admin');
                    setActiveTab('admin');
                    setIsOpen(false);
                  }}
                  className={`py-2 text-center text-xs font-bold rounded-lg flex items-center justify-center gap-1 ${userRole === 'admin' ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400'}`}
                >
                  <ShieldAlert className="h-3.5 w-3.5" />
                  Admin
                </button>
                <button
                  onClick={() => {
                    setUserRole('creator');
                    setActiveTab('dashboard');
                    setIsOpen(false);
                  }}
                  className={`py-2 text-center text-xs font-bold rounded-lg flex items-center justify-center gap-1 ${userRole === 'creator' ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400'}`}
                >
                  <Settings className="h-3.5 w-3.5" />
                  Creator
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
