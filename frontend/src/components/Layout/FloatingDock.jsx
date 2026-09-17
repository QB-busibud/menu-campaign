import React, { useState } from 'react';
import { FileText, Send, Sparkles, ChevronUp, ChevronDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FloatingDock = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { handleEnrich, credits, setShowUseCasesModal } = useApp();

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center">
      <div className="bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-xl border border-pink-200/80 flex items-center space-x-3 transition-all duration-300">
        <span className="text-xs font-semibold text-slate-700 select-none">
          Quick access:
        </span>

       
        <button
          onClick={() => setShowUseCasesModal(true)}
          className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#FFD6DC] text-slate-800 text-xs font-medium hover:brightness-95 transition-all shadow-sm active:scale-95"
        >
          <FileText size={14} className="text-slate-700" />
          <span>Use Cases</span>
        </button>

        
        <button
          onClick={() => alert('Send Communication workflow initialized. Campaign dispatcher ready!')}
          className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#D7E9FD] text-slate-800 text-xs font-medium hover:brightness-95 transition-all shadow-sm active:scale-95"
        >
          <Send size={14} className="text-brand-blue" />
          <span>Send Communication</span>
        </button>

        
        <button
          onClick={handleEnrich}
          className="flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#D1F2D9] text-slate-800 text-xs font-medium hover:brightness-95 transition-all shadow-sm active:scale-95 group"
        >
          <Sparkles size={14} className="text-emerald-700 group-hover:rotate-12 transition-transform" />
          <span>Enrichment</span>
          <span className="ml-1 text-[10px] bg-emerald-700 text-white rounded-full px-1.5 py-0.2">
            {credits}
          </span>
        </button>

        
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-6 h-6 rounded-full hover:bg-pink-50 flex items-center justify-center text-slate-400 hover:text-slate-700 transition-colors ml-1"
        >
          {collapsed ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
    </div>
  );
};
