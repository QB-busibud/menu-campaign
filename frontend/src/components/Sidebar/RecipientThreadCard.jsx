import React from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RecipientThreadCard = () => {
  const { selectedRecipient, setSelectedRecipient, setActiveConversationModal } = useApp();

  if (!selectedRecipient) return null;

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 select-none animate-in fade-in duration-150">
      {/* Back Button */}
      <button
        onClick={() => setSelectedRecipient(null)}
        className="flex items-center space-x-1.5 text-xs font-semibold text-[#0066FF] hover:underline"
      >
        <ArrowLeft size={14} />
        <span>Back to list</span>
      </button>

      {/* Recipient Details Card */}
      <div className="p-4 rounded-xl border border-[#E5E7EB] bg-white shadow-2xs space-y-3">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-blue-100 text-[#0066FF] flex items-center justify-center font-bold text-xs">
              {selectedRecipient.userName?.[0] || 'U'}
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#111827]">
                User name: <span className="underline">{selectedRecipient.userName}</span>
              </h3>
              <p className="text-[11px] text-[#6B7280]">
                {selectedRecipient.email}
              </p>
            </div>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#ECFDF5] text-[#065F46] border border-emerald-200">
            {selectedRecipient.status || 'Active'}
          </span>
        </div>

        <div className="space-y-1.5 text-xs text-[#374151]">
          <div className="flex justify-between">
            <span className="text-[#6B7280]">Campaign name:</span>
            <span className="font-medium text-[#111827]">{selectedRecipient.campaignName || 'Sales campaign'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B7280]">Connections:</span>
            <span className="font-medium text-[#111827]">{selectedRecipient.connections || '500+'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#6B7280]">Last contact:</span>
            <span className="font-medium text-[#111827]">March 17, 2025 at 5:11 PM</span>
          </div>
        </div>

        {/* Exact Adobe XD Pill Button (Height: 22px, rounded-full, font 10px/16px) */}
        <div className="pt-1">
          <button
            onClick={() => setActiveConversationModal(selectedRecipient)}
            className="inline-flex items-center justify-center h-[22px] px-3.5 rounded-full bg-[#0066FF] border border-[#0066FF] text-white text-[10px] font-medium leading-[16px] hover:bg-[#1877F2] transition-colors shadow-2xs cursor-pointer"
          >
            View conversation
          </button>
        </div>
      </div>

      {/* Outreach Timeline */}
      <div className="p-3.5 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] space-y-2">
        <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#6B7280]">
          Outreach Timeline
        </h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-start space-x-2">
            <CheckCircle2 size={13} className="text-[#10B981] mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-[#111827]">Email opened by prospect</p>
              <p className="text-[10px] text-[#6B7280]">Today at 10:14 AM</p>
            </div>
          </div>
          <div className="flex items-start space-x-2">
            <CheckCircle2 size={13} className="text-[#0066FF] mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-[#111827]">Initial cold outreach sent</p>
              <p className="text-[10px] text-[#6B7280]">March 17, 2025 at 5:11 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
