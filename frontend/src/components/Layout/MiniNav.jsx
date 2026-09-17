import React from 'react';
import { Table, Volume2, Settings } from 'lucide-react';
import logoImg from '../../assets/images/Mask Group 20@2x.png';

export const MiniNav = () => {
  return (
    <div className="w-[50px] bg-white border-r border-slate-200 flex flex-col items-center justify-between py-4 select-none shrink-0 z-20">
      {/* Top Icons */}
      <div className="flex flex-col items-center space-y-4">
        {/* App Logo */}
        <div className="w-8 h-8 flex items-center justify-center cursor-pointer transition-transform hover:scale-105">
          <img
            src={logoImg}
            alt="Logo"
            className="w-7 h-7 object-contain opacity-90 hover:opacity-100"
          />
        </div>

        {/* View Switcher: Table View (Active Pink Card in XD) */}
        <div className="relative group cursor-pointer">
          <div className="w-8 h-8 rounded-lg bg-[#FFE7EB] border border-[#FFCCD5] flex items-center justify-center text-[#FF4D6D] shadow-xs">
            <Table size={16} className="stroke-[2.2]" />
          </div>
          <span className="absolute left-12 top-1.5 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Worksheet Grid
          </span>
        </div>

        {/* Megaphone / Speaker Icon */}
        <div className="relative group cursor-pointer">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
            <Volume2 size={16} />
          </div>
          <span className="absolute left-12 top-1.5 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Campaign Broadcasts
          </span>
        </div>

        {/* Settings Gear */}
        <div className="relative group cursor-pointer">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
            <Settings size={16} />
          </div>
          <span className="absolute left-12 top-1.5 bg-slate-800 text-white text-[10px] px-2 py-0.5 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Settings
          </span>
        </div>
      </div>

      {/* User Avatar with Green Online status */}
      <div className="relative cursor-pointer group">
        <div className="w-7 h-7 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-[#10B981] rounded-full border-2 border-white" />
      </div>
    </div>
  );
};

