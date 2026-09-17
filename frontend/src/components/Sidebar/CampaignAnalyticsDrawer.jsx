import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CampaignAnalyticsDrawer = () => {
  const { timeframe, setTimeframe, metricsData } = useApp();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [expandedCard, setExpandedCard] = useState(null);

  const timeRanges = ['All time', 'Today', 'Last 7 days', 'Last 30 days'];

  const toggleAccordion = (cardKey) => {
    setExpandedCard(prev => prev === cardKey ? null : cardKey);
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 select-none">
      {/* Time Range Dropdown Selector (Height: 36px, rounded: 6px) */}
      <div className="relative">
        <label className="text-[11px] font-semibold text-[#6B7280] uppercase tracking-wider block mb-1">
          Timeframe Range
        </label>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="w-full h-9 px-3 bg-white border border-[#E5E7EB] rounded-md text-xs font-medium text-[#111827] flex items-center justify-between shadow-2xs hover:border-[#0066FF] transition-colors"
        >
          <span>{timeframe}</span>
          <ChevronDown size={14} className="text-[#6B7280]" />
        </button>

        {dropdownOpen && (
          <div className="absolute left-0 right-0 top-full mt-1 bg-white border border-[#E5E7EB] rounded-md shadow-lg py-1 z-30 text-xs font-medium">
            {timeRanges.map(t => (
              <div
                key={t}
                onClick={() => { setTimeframe(t); setDropdownOpen(false); }}
                className={`px-3 py-2 cursor-pointer transition-colors ${
                  timeframe === t ? 'bg-[#EFF6FF] text-[#0066FF] font-semibold' : 'hover:bg-[#F9FAFB] text-[#374151]'
                }`}
              >
                {t}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Top Reply Percentage Card */}
      <div className="p-3.5 rounded-lg border border-[#E5E7EB] bg-[#EFF6FF] space-y-1">
        <div className="text-[12px] font-medium text-[#0066FF] uppercase tracking-wider">
          Reply percentage
        </div>
        <div className="text-2xl font-bold text-[#111827] tracking-tight">
          {metricsData.replyRate}
        </div>
        <div className="text-[11px] text-[#6B7280]">
          {metricsData.replyDetail}
        </div>
      </div>

      {/* Macro Metric Cards Grid (2 Columns, padding: 12px, border: 1px solid #E5E7EB, rounded: 8px) */}
      <div className="grid grid-cols-2 gap-2.5">
        {[
          { key: 'open', label: 'Open percentage', val: metricsData.openRate },
          { key: 'sent', label: 'Sent', val: metricsData.sent },
          { key: 'opened', label: 'Opened', val: metricsData.opened },
          { key: 'replied', label: 'Replied', val: metricsData.replied },
          { key: 'website', label: 'Website clicked', val: metricsData.websiteClicked },
          { key: 'unsubscribed', label: 'Unsubscribed', val: metricsData.unsubscribed },
          { key: 'bounced', label: 'Bounced', val: metricsData.bounced }
        ].map(item => {
          const isExpanded = expandedCard === item.key;
          return (
            <div
              key={item.key}
              className="p-3 rounded-lg border border-[#E5E7EB] bg-white shadow-2xs space-y-1.5 flex flex-col justify-between"
            >
              <div className="text-[11px] font-medium uppercase tracking-wider text-[#6B7280]">
                {item.label}
              </div>
              <div className="text-xl font-bold text-[#111827]">
                {item.val}
              </div>

              {/* Accordion Expander: View v */}
              <div className="pt-1 border-t border-slate-100">
                <button
                  onClick={() => toggleAccordion(item.key)}
                  className="w-full flex items-center justify-between text-[10px] font-semibold text-[#0066FF] hover:text-[#1877F2] py-0.5"
                >
                  <span>View</span>
                  {isExpanded ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
                </button>

                {isExpanded && (
                  <div className="mt-2 pt-2 border-t border-dashed border-[#E5E7EB] space-y-1 text-[10px] text-[#374151]">
                    {metricsData.attribution.map((attr, idx) => (
                      <div key={idx} className="flex justify-between">
                        <span className="truncate max-w-[85px] text-[#6B7280]">{attr.campaign}</span>
                        <span className="font-semibold text-[#111827]">{attr.rate}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
