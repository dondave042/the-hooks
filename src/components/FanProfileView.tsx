import React, { useState } from 'react';
import { FanProfile } from '../types';
import { 
  User, MapPin, Calendar, Upload, Check, ShieldCheck, 
  Sparkles, Heart, CreditCard, Ticket, Edit3, Trash2
} from 'lucide-react';

interface FanProfileViewProps {
  userProfile: FanProfile | null;
  onSaveProfile: (profile: FanProfile) => void;
  onDeleteProfile: () => void;
  pastBookingsCount: number;
}

export default function FanProfileView({ userProfile, onSaveProfile, onDeleteProfile, pastBookingsCount }: FanProfileViewProps) {
  const [isEditing, setIsEditing] = useState(!userProfile);
  const [name, setName] = useState(userProfile?.name || '');
  const [age, setAge] = useState<number | ''>(userProfile?.age || '');
  const [country, setCountry] = useState(userProfile?.country || 'United States');
  const [state, setState] = useState(userProfile?.state || '');
  const [city, setCity] = useState(userProfile?.city || '');
  const [profilePic, setProfilePic] = useState(userProfile?.profilePicture || '');

  // Handle Profile Picture Upload (converting to Base64)
  const handlePicUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !age || !country || !state || !city || !profilePic) {
      alert("Please fill in all fields and upload a mandatory profile picture.");
      return;
    }

    if (Number(age) < 18) {
      alert("You must be 18 years or older to register.");
      return;
    }

    const profile: FanProfile = {
      name,
      age: Number(age),
      country,
      state,
      city,
      profilePicture: profilePic
    };

    onSaveProfile(profile);
    setIsEditing(false);
    alert("Fan profile saved successfully! Your details will now pre-fill the booking form.");
  };

  return (
    <div className="max-w-2xl mx-auto text-left">
      {isEditing ? (
        /* Profile Creation / Editing Form */
        <div className="bg-zinc-900/40 rounded-2xl border border-zinc-850 p-6 md:p-8 space-y-6">
          <div className="border-b border-zinc-900 pb-4">
            <h2 className="text-xl font-serif font-black text-white">Create Your Fan Profile</h2>
            <p className="text-xs text-zinc-400">A verified fan profile is required. You must upload a clear profile picture representing yourself.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Picture Upload (Mandatory) */}
            <div>
              <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
                Mandatory Profile Picture *
              </label>
              <div className="relative border border-dashed border-zinc-800 hover:border-red-500/30 rounded-xl p-6 text-center cursor-pointer transition bg-zinc-950/40">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handlePicUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                {profilePic ? (
                  <div className="space-y-2">
                    <img src={profilePic} alt="Avatar Preview" className="h-24 w-24 mx-auto rounded-full object-cover border-2 border-red-600" />
                    <span className="text-xs text-emerald-400 font-bold block flex items-center justify-center gap-1">
                      <Check className="h-4 w-4" />
                      Profile Picture Loaded!
                    </span>
                  </div>
                ) : (
                  <div className="space-y-1.5">
                    <Upload className="h-6 w-6 text-zinc-500 mx-auto" />
                    <span className="text-xs text-zinc-300 font-semibold block">Select Profile Photo</span>
                    <span className="text-[9px] text-zinc-500 block">PNG, JPG up to 10MB</span>
                  </div>
                )}
              </div>
            </div>

            {/* Name & Age */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="e.g. John Doe" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Age *</label>
                <input 
                  type="number" 
                  placeholder="Min. 18" 
                  value={age}
                  onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white"
                  required
                />
              </div>
            </div>

            {/* Country, State, City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Country *</label>
                <input 
                  type="text" 
                  placeholder="e.g. United States" 
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">State *</label>
                <input 
                  type="text" 
                  placeholder="e.g. California" 
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">City *</label>
                <input 
                  type="text" 
                  placeholder="e.g. San Jose" 
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl py-3 px-4 text-sm text-white"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end gap-3 pt-4 border-t border-zinc-900">
              {userProfile && (
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="bg-zinc-900 text-zinc-300 font-bold text-sm py-3 px-6 rounded-xl hover:bg-zinc-800 transition"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-8 rounded-xl transition shadow-lg"
              >
                Save Fan Profile
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Profile Display Passport Card */
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden relative shadow-xl">
            {/* Design accents */}
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-red-600/5 blur-2xl pointer-events-none" />
            
            {/* Main Passport Layout */}
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-center md:items-start">
              {/* Profile Image Column */}
              <div className="space-y-3 shrink-0 text-center">
                <img 
                  src={profilePic} 
                  alt={name} 
                  className="h-32 w-32 rounded-2xl object-cover border-4 border-red-600 shadow-lg"
                />
                <span className="bg-red-600/10 border border-red-500/20 text-red-500 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase block tracking-wider">
                  Verified Member
                </span>
              </div>

              {/* Bio Details Column */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div>
                  <span className="text-[10px] font-extrabold tracking-[0.2em] text-zinc-500 uppercase block">VIP FAN PASSPORT</span>
                  <h2 className="text-2xl font-serif font-black text-white mt-1">{name}</h2>
                  <div className="flex items-center justify-center md:justify-start gap-1.5 text-xs text-zinc-400 mt-1">
                    <MapPin className="h-3.5 w-3.5 text-red-500" />
                    <span>{city}, {state}, {country}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center bg-zinc-950/60 p-3.5 rounded-xl border border-zinc-900">
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-bold">Age</span>
                    <span className="text-sm font-black text-white">{age}</span>
                  </div>
                  <div className="border-x border-zinc-900">
                    <span className="text-[10px] text-zinc-500 block uppercase font-bold">Bookings</span>
                    <span className="text-sm font-black text-white">{pastBookingsCount}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-zinc-500 block uppercase font-bold">Trust Rating</span>
                    <span className="text-sm font-black text-emerald-400">A+</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-lg justify-center md:justify-start">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  <span>18+ Age & Government ID verified by Aura Security Detail.</span>
                </div>
              </div>
            </div>

            {/* Actions Footer */}
            <div className="bg-zinc-950/50 px-6 py-4 border-t border-zinc-900 flex justify-between items-center">
              <button
                onClick={() => {
                  if (confirm("Are you sure you want to delete your fan profile? This will wipe your saved details.")) {
                    onDeleteProfile();
                  }
                }}
                className="text-xs font-bold text-zinc-500 hover:text-red-500 transition flex items-center gap-1"
              >
                <Trash2 className="h-3.5 w-3.5" />
                Delete Profile
              </button>

              <button
                onClick={() => setIsEditing(true)}
                className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs font-bold py-2 px-4 rounded-xl transition flex items-center gap-1.5"
              >
                <Edit3 className="h-3.5 w-3.5" />
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
