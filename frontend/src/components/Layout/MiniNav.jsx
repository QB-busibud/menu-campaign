import React from 'react';
import { Table, Volume2, Settings } from 'lucide-react';

export const MiniNav = () => {
  return (
    <div className="w-14 bg-white border-r border-slate-200 flex flex-col items-center justify-between py-4 select-none shrink-0 z-20">
      
      <div className="flex flex-col items-center space-y-6">
        
        <div className="w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center cursor-pointer hover:border-brand-blue transition-colors group">
          <div className="w-4 h-4 rounded-full border-2 border-slate-400 group-hover:border-brand-blue transform rotate-45" />
        </div>

        <div className="relative group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-brand-pink-light border border-brand-pink/30 flex items-center justify-center text-brand-pink shadow-sm">
            <Table size={20} className="stroke-[2.2]" />
          </div>
          <span className="absolute left-14 top-2 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Worksheet Grid
          </span>
        </div>

        
        <div className="relative group cursor-pointer">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
            <Volume2 size={20} />
          </div>
          <span className="absolute left-14 top-2 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Campaign Broadcasts
          </span>
        </div>

      
        <div className="relative group cursor-pointer">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors">
            <Settings size={20} />
          </div>
          <span className="absolute left-14 top-2 bg-slate-800 text-white text-xs px-2 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
            Platform Settings
          </span>
        </div>
      </div>

      
      <div className="relative cursor-pointer group">
        <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
      </div>
    </div>
  );
};
