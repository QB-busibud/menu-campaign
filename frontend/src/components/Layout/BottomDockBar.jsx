import React from 'react';
import { Plus, ChevronDown, FileText, Send, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const BottomDockBar = () => {
  const {
    credits,
    deductCredit,
    setPendingJobsDrawerOpen,
    setUseCasesModalOpen
  } = useApp();

  return (
    <div className="h-[52px] bg-white border-t border-[#E5E7EB] px-5 flex items-center justify-between shrink-0 select-none z-20">
      {/* Left: Docked Sub-Sheet Tabs */}
      <div className="flex items-center space-x-2">
        <div className="h-8 px-4 bg-[#EFF6FF] border-t-2 border-t-[#0066FF] border-x border-[#E5E7EB] text-xs font-semibold text-[#0066FF] flex items-center rounded-t-md cursor-pointer">
          Sheet 1
        </div>

        <button
          onClick={() => alert('New sub-sheet tab created!')}
          className="h-8 px-2.5 hover:bg-[#F3F4F6] text-[#6B7280] hover:text-[#111827] text-xs font-medium flex items-center space-x-1 rounded-t-md transition-colors"
        >
          <span>+ Add</span>
          <ChevronDown size={13} />
        </button>

        <span className="text-[#E5E7EB] mx-1">|</span>

        {/* View Pending Jobs Link */}
        <button
          onClick={() => setPendingJobsDrawerOpen(true)}
          className="text-xs font-medium text-[#6B7280] hover:text-[#0066FF] hover:underline"
        >
          View pending jobs
        </button>
      </div>

      {/* Right: Floating Action Footer */}
      <div className="flex items-center space-x-2.5">
        <span className="text-xs font-semibold text-[#111827]">
          Quick access:
        </span>

        {/* Use Cases Pill */}
        <button
          onClick={() => setUseCasesModalOpen(true)}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#FFE4E6] text-[#9F1239] text-xs font-medium hover:brightness-95 transition-all shadow-2xs active:scale-95"
        >
          <FileText size={13} />
          <span>Use Cases</span>
        </button>

        {/* Send Communication Pill */}
        <button
          onClick={() => alert('Send Communication campaign trigger initialized!')}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#DBEAFE] text-[#1E40AF] text-xs font-medium hover:brightness-95 transition-all shadow-2xs active:scale-95"
        >
          <Send size={13} />
          <span>Send Communication</span>
        </button>

        {/* Enrichment Pill */}
        <button
          onClick={deductCredit}
          className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] text-[#166534] text-xs font-medium hover:brightness-95 transition-all shadow-2xs active:scale-95 group"
        >
          <Sparkles size={13} className="text-[#166534] group-hover:rotate-12 transition-transform" />
          <span>Enrichment</span>
          <span className="ml-1 text-[10px] bg-[#166534] text-white rounded-full px-1.5 py-0.2">
            {credits}
          </span>
        </button>
      </div>
    </div>
  );
};
