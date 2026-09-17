import React, { useState } from 'react';
import { FileText, Send, ChevronUp, ChevronDown } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import sparklesIcon from '../../assets/images/Group 34122.svg';
import dockDecorIcon from '../../assets/images/Group 41115.svg';

export const FloatingDock = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { handleEnrich, credits, setShowUseCasesModal } = useApp();

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center select-none">
      {/* Container with pink glow border and decorative sparkles matching XD */}
      <div className="relative bg-white px-5 py-2 rounded-2xl border-2 border-[#FFD7EA] shadow-[0_4px_24px_rgba(255,215,234,0.85)] flex items-center space-x-3 transition-all duration-300">
        {/* Left & Right Decorative Sparkles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          <img
            src={dockDecorIcon}
            alt=""
            className="w-full h-full object-cover opacity-60 pointer-events-none"
          />
        </div>

        <span className="text-xs font-bold text-slate-800 relative z-10">
          Quick access:
        </span>

        {/* Use Cases Pill matching Component 40 - 1 */}
        <button
          onClick={() => setShowUseCasesModal(true)}
          className="relative z-10 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-[#FECCD5] border border-[#FF8499] text-slate-900 text-xs font-medium hover:brightness-95 transition-all cursor-pointer shadow-xs"
        >
          <FileText size={13} className="text-slate-800" />
          <span className="font-semibold">Use Cases</span>
        </button>

        {/* Send Communication Pill matching Component 41 - 1 */}
        <button
          onClick={() => alert('Send Communication workflow initialized. Campaign dispatcher ready!')}
          className="relative z-10 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-[#D9EDFF] border border-[#0B68BB] text-slate-900 text-xs font-medium hover:brightness-95 transition-all cursor-pointer shadow-xs"
        >
          <Send size={13} className="text-slate-800" />
          <span className="font-semibold">Send Communication</span>
        </button>

        {/* Enrichment Pill matching Component 42 - 1 */}
        <button
          onClick={handleEnrich}
          className="relative z-10 flex items-center space-x-1.5 px-3.5 py-1.5 rounded-md bg-[#DBFFE0] border border-[#078A52] text-slate-900 text-xs font-medium hover:brightness-95 transition-all cursor-pointer shadow-xs"
        >
          <img src={sparklesIcon} alt="" className="w-3 h-3" />
          <span className="font-semibold">Enrichment</span>
        </button>

        {/* Collapse toggle (Chevron Up in Pic 1) */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="relative z-10 w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-600 transition-colors ml-1 cursor-pointer"
        >
          {collapsed ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
        </button>
      </div>
    </div>
  );
};

