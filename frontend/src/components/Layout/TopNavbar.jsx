import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, Check, Zap } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const TopNavbar = () => {
  const { activeWorksheetName, credits, setLeadGenModalOpen } = useApp();
  const [actionDropdownOpen, setActionDropdownOpen] = useState(false);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSaveUseCase = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  return (
    <header className="h-14 bg-white border-b border-[#E5E7EB] px-5 flex items-center justify-between shrink-0 z-30 select-none">
      {/* Left Breadcrumb Section */}
      <div className="flex items-center space-x-3">
        <button
          onClick={() => window.history.back?.()}
          className="flex items-center space-x-1.5 text-xs font-medium text-[#6B7280] hover:text-[#111827] px-2 py-1 rounded-md hover:bg-[#F3F4F6] transition-colors"
        >
          <ArrowLeft size={14} />
          <span>Back</span>
        </button>

        <span className="text-[#E5E7EB]">|</span>

        <div className="flex items-center space-x-2 text-sm font-bold text-[#111827] tracking-tight">
          <span className="text-[#6B7280] font-semibold text-xs uppercase tracking-wider">
            FLOW OVERVIEW
          </span>
          <span className="text-[#9CA3AF]">&gt;</span>
          <span className="text-[#111827] text-sm font-bold">
            {activeWorksheetName}
          </span>
        </div>
      </div>

      {/* Right Utility Section */}
      <div className="flex items-center space-x-3">
        {/* Blue Action Dropdown Button (Height: 36px, rounded: 6px, bg: #0066FF) */}
        <div className="relative">
          <button
            onClick={() => setActionDropdownOpen(!actionDropdownOpen)}
            className="h-9 px-3.5 rounded-md bg-[#0066FF] hover:bg-[#1877F2] text-white text-xs font-medium flex items-center space-x-1.5 shadow-sm transition-colors active:scale-95"
          >
            <span>Action</span>
            <ChevronDown size={14} />
          </button>

          {actionDropdownOpen && (
            <div className="absolute right-0 top-full mt-1.5 w-44 bg-white border border-[#E5E7EB] rounded-lg shadow-lg py-1 z-40 text-xs font-medium text-[#111827]">
              <div
                onClick={() => { setActionDropdownOpen(false); alert('Enriching all unverified contacts in table...'); }}
                className="px-3 py-2 hover:bg-[#F3F4F6] cursor-pointer"
              >
                Enrich Selected Rows
              </div>
              <div
                onClick={() => { setActionDropdownOpen(false); alert('Exporting worksheet to CSV/Excel...'); }}
                className="px-3 py-2 hover:bg-[#F3F4F6] cursor-pointer"
              >
                Export CSV File
              </div>
              <div
                onClick={() => { setActionDropdownOpen(false); setLeadGenModalOpen(true); }}
                className="px-3 py-2 hover:bg-[#F3F4F6] cursor-pointer border-t border-[#E5E7EB]"
              >
                Column Settings
              </div>
            </div>
          )}
        </div>

        {/* Green Save Button (Height: 36px, rounded: 6px, bg: #10B981) */}
        <button
          onClick={handleSaveUseCase}
          className="h-9 px-3.5 rounded-md bg-[#10B981] hover:bg-[#00C853] text-white text-xs font-medium flex items-center space-x-1.5 shadow-sm transition-colors active:scale-95"
        >
          {savedNotice ? (
            <>
              <Check size={14} className="stroke-[2.5]" />
              <span>Saved!</span>
            </>
          ) : (
            <span>Save use case</span>
          )}
        </button>

        {/* Credit Counter Pill */}
        <div className="h-9 px-3 rounded-md bg-[#EFF6FF] border border-[#DBEAFE] text-[#1D4ED8] text-xs font-semibold flex items-center space-x-1.5 shadow-2xs">
          <Zap size={13} className="fill-[#1D4ED8]" />
          <span>Available Credits: {credits}</span>
        </div>
      </div>
    </header>
  );
};
