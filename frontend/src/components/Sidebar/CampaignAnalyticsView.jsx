import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CampaignAnalyticsView = () => {
  const {
    timeframe,
    setTimeframe,
    isDropdownOpen,
    setIsDropdownOpen,
    openOpenedDrilldown,
    sidebarLoading,
    metricsData
  } = useApp();

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3.5 text-slate-800 select-none">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-xs font-bold text-slate-800 uppercase tracking-tight">
          {metricsData.title}
        </h2>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Combined performance across all campaigns
        </p>
      </div>

      {/* Timeframe Dropdown (Screenshot 1, 2, 3, 5) */}
      <div className="relative">
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-3 py-2 bg-white border border-[#DCDCDC] rounded-lg text-xs font-medium text-slate-700 cursor-pointer hover:border-[#0B68BB] transition-colors shadow-2xs"
        >
          <span>{timeframe}</span>
          <ChevronDown size={14} className="text-slate-400" />
        </div>

        {/* Dropdown Options Menu (Screenshot 3) */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-30 py-1 text-xs font-medium">
            {['All time', 'Last 30 days', 'Last 7 days'].map(opt => (
              <div
                key={opt}
                onClick={() => setTimeframe(opt)}
                className={`px-3 py-2 cursor-pointer transition-colors ${
                  timeframe === opt
                    ? 'bg-slate-100 text-[#0B68BB] font-semibold'
                    : 'hover:bg-slate-50 text-slate-700'
                }`}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Loading state (Screenshot 4: 5-bar animated equalizer wave) */}
      {sidebarLoading ? (
        <div className="py-24 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-1.5 h-7">
            <span className="wave-bar" />
            <span className="wave-bar" />
            <span className="wave-bar" />
            <span className="wave-bar" />
            <span className="wave-bar" />
          </div>
        </div>
      ) : (
        <>
          {/* Top Primary Reply percentage card (Screenshot 2, 5) */}
          <div className="p-3.5 rounded-xl bg-[#EAF3FD] border border-blue-100 space-y-1">
            <div className="text-xs font-bold text-[#0B68BB]">
              Reply percentage
            </div>
            <div className="text-[22px] font-extrabold text-slate-900 tracking-tight">
              {metricsData.replyRate}
            </div>
            <div className="text-[11px] text-slate-500">
              {metricsData.replyDetail}
            </div>
          </div>

          {/* Metric Cards Grid: All time (Screen 2: 4 cards, no View tab) vs Last 30 days (Screen 5: 7 cards with View tab) */}
          {timeframe === 'All time' ? (
            <div className="grid grid-cols-2 gap-2">
              {/* Open percentage */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Open percentage</div>
                <div className="text-sm font-bold text-slate-900">{metricsData.openRate}</div>
              </div>

              {/* Opened */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Opened</div>
                <div className="text-sm font-bold text-slate-900">{metricsData.opened}</div>
              </div>

              {/* Unsubscribed */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Unsubscribed</div>
                <div className="text-sm font-bold text-slate-900">{metricsData.unsubscribed}</div>
              </div>

              {/* Bounced */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Bounced</div>
                <div className="text-sm font-bold text-slate-900">{metricsData.bounced}</div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2">
              {/* Opened */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Opened</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{metricsData.opened}</span>
                  <button
                    onClick={openOpenedDrilldown}
                    className="inline-flex items-center space-x-0.5 text-[10px] font-medium text-slate-800 bg-[#EFEFEF] hover:bg-slate-200 px-1.5 py-0.5 rounded border border-[#DCDCDC] transition-colors cursor-pointer"
                  >
                    <span>View</span>
                    <span className="text-[10px] ml-0.5">→</span>
                  </button>
                </div>
              </div>

              {/* Open percentage */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Open percentage</div>
                <div className="text-sm font-bold text-slate-900">{metricsData.openRate}</div>
              </div>

              {/* Sent */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Sent</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{metricsData.sent || 200}</span>
                  <button
                    onClick={openOpenedDrilldown}
                    className="inline-flex items-center space-x-0.5 text-[10px] font-medium text-slate-800 bg-[#EFEFEF] hover:bg-slate-200 px-1.5 py-0.5 rounded border border-[#DCDCDC] transition-colors cursor-pointer"
                  >
                    <span>View</span>
                    <span className="text-[10px] ml-0.5">→</span>
                  </button>
                </div>
              </div>

              {/* Replied */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Replied</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{metricsData.replied || 250}</span>
                  <button
                    onClick={openOpenedDrilldown}
                    className="inline-flex items-center space-x-0.5 text-[10px] font-medium text-slate-800 bg-[#EFEFEF] hover:bg-slate-200 px-1.5 py-0.5 rounded border border-[#DCDCDC] transition-colors cursor-pointer"
                  >
                    <span>View</span>
                    <span className="text-[10px] ml-0.5">→</span>
                  </button>
                </div>
              </div>

              {/* Bounced */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Bounced</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{metricsData.bounced}</span>
                  <button
                    onClick={openOpenedDrilldown}
                    className="inline-flex items-center space-x-0.5 text-[10px] font-medium text-slate-800 bg-[#EFEFEF] hover:bg-slate-200 px-1.5 py-0.5 rounded border border-[#DCDCDC] transition-colors cursor-pointer"
                  >
                    <span>View</span>
                    <span className="text-[10px] ml-0.5">→</span>
                  </button>
                </div>
              </div>

              {/* Website visited */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Website visited</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{metricsData.websiteVisited || 200}</span>
                  <button
                    onClick={openOpenedDrilldown}
                    className="inline-flex items-center space-x-0.5 text-[10px] font-medium text-slate-800 bg-[#EFEFEF] hover:bg-slate-200 px-1.5 py-0.5 rounded border border-[#DCDCDC] transition-colors cursor-pointer"
                  >
                    <span>View</span>
                    <span className="text-[10px] ml-0.5">→</span>
                  </button>
                </div>
              </div>

              {/* Unsubscribed */}
              <div className="p-2.5 rounded-lg bg-white border border-[#E5E7EB] shadow-2xs flex flex-col justify-between h-[58px]">
                <div className="text-[11px] font-medium text-[#0B68BB]">Unsubscribed</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{metricsData.unsubscribed}</span>
                  <button
                    onClick={openOpenedDrilldown}
                    className="inline-flex items-center space-x-0.5 text-[10px] font-medium text-slate-800 bg-[#EFEFEF] hover:bg-slate-200 px-1.5 py-0.5 rounded border border-[#DCDCDC] transition-colors cursor-pointer"
                  >
                    <span>View</span>
                    <span className="text-[10px] ml-0.5">→</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

