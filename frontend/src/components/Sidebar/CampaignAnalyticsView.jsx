import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CampaignAnalyticsView = () => {
  const {
    timeframe,
    setTimeframe,
    isDropdownOpen,
    setIsDropdownOpen,
    openDrillDown,
    sidebarLoading
  } = useApp();

  const is30Days = timeframe === 'last_30_days';

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 text-slate-800 select-none">
      {/* Title & Subtitle */}
      <div>
        <h2 className="text-xs font-bold text-slate-800 uppercase tracking-tight">
          {is30Days ? 'ALL CAMPAIGNS ANALYTICS (600)' : 'ALL CAMPAIGNS ANALYTICS (1200)'}
        </h2>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Combined performance across all campaigns
        </p>
      </div>

      {/* Timeframe Selector Dropdown */}
      <div className="relative">
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 cursor-pointer hover:border-brand-blue transition-colors shadow-2xs"
        >
          <span>
            {timeframe === 'last_30_days' ? 'Last 30 days' : timeframe === 'last_7_days' ? 'Last 7 days' : 'All time'}
          </span>
          <ChevronDown size={14} className="text-slate-400" />
        </div>

        {/* Dropdown Options */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-slate-200 rounded-lg shadow-lg z-30 py-1 text-xs font-medium">
            <div
              onClick={() => setTimeframe('all_time')}
              className={`px-3 py-1.5 cursor-pointer ${timeframe === 'all_time' ? 'bg-slate-100 text-brand-blue font-semibold' : 'hover:bg-slate-50 text-slate-700'}`}
            >
              All time
            </div>
            <div
              onClick={() => setTimeframe('last_30_days')}
              className={`px-3 py-1.5 cursor-pointer ${timeframe === 'last_30_days' ? 'bg-slate-100 text-brand-blue font-semibold' : 'hover:bg-slate-50 text-slate-700'}`}
            >
              Last 30 days
            </div>
            <div
              onClick={() => setTimeframe('last_7_days')}
              className={`px-3 py-1.5 cursor-pointer ${timeframe === 'last_7_days' ? 'bg-slate-100 text-brand-blue font-semibold' : 'hover:bg-slate-50 text-slate-700'}`}
            >
              Last 7 days
            </div>
          </div>
        )}
      </div>

      {/* Loading state */}
      {sidebarLoading ? (
        <div className="py-16 flex flex-col items-center justify-center space-y-3">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 loader-dot" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 loader-dot" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 loader-dot" />
          </div>
          <span className="text-xs text-slate-400">Loading campaign analytics...</span>
        </div>
      ) : (
        <>
          {/* Top Reply Percentage Card */}
          <div className="p-3.5 rounded-xl bg-[#EAF3FD] border border-blue-100 space-y-1">
            <div className="text-xs font-semibold text-brand-blue">
              Reply percentage
            </div>
            <div className="text-xl font-bold text-slate-900 tracking-tight">
              16.9 %
            </div>
            <div className="text-[11px] text-slate-500">
              298 replies from 1,842 sent
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-2 gap-2.5">
            {/* Opened: 500 [ View -> ] */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="text-[11px] font-semibold text-brand-blue">Opened</div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">500</span>
                <button
                  onClick={() => openDrillDown('opened')}
                  className="flex items-center space-x-0.5 text-[10px] font-semibold text-slate-700 hover:text-brand-blue px-2 py-0.5 rounded border border-slate-200 hover:border-brand-blue transition-colors"
                >
                  <span>View</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </div>

            {/* Open percentage: 68% */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="text-[11px] font-semibold text-brand-blue">Open percentage</div>
              <div className="text-base font-bold text-slate-900">68%</div>
            </div>

            {/* Sent: 200 */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="text-[11px] font-semibold text-brand-blue">Sent</div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">200</span>
                <button
                  onClick={() => openDrillDown('sent')}
                  className="flex items-center space-x-0.5 text-[10px] font-semibold text-slate-700 hover:text-brand-blue px-2 py-0.5 rounded border border-slate-200 hover:border-brand-blue transition-colors"
                >
                  <span>View</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </div>

            {/* Replied: 250 */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="text-[11px] font-semibold text-brand-blue">Replied</div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">250</span>
                <button
                  onClick={() => openDrillDown('replied')}
                  className="flex items-center space-x-0.5 text-[10px] font-semibold text-slate-700 hover:text-brand-blue px-2 py-0.5 rounded border border-slate-200 hover:border-brand-blue transition-colors"
                >
                  <span>View</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </div>

            {/* Bounced: 250 */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="text-[11px] font-semibold text-brand-blue">Bounced</div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">250</span>
                <button
                  onClick={() => openDrillDown('bounced')}
                  className="flex items-center space-x-0.5 text-[10px] font-semibold text-slate-700 hover:text-brand-blue px-2 py-0.5 rounded border border-slate-200 hover:border-brand-blue transition-colors"
                >
                  <span>View</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </div>

            {/* Website visited: 200 */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5">
              <div className="text-[11px] font-semibold text-brand-blue">Website visited</div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">200</span>
                <button
                  onClick={() => openDrillDown('website_visited')}
                  className="flex items-center space-x-0.5 text-[10px] font-semibold text-slate-700 hover:text-brand-blue px-2 py-0.5 rounded border border-slate-200 hover:border-brand-blue transition-colors"
                >
                  <span>View</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </div>

            {/* Unsubscribed: 250 */}
            <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 col-span-1">
              <div className="text-[11px] font-semibold text-brand-blue">Unsubscribed</div>
              <div className="flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">250</span>
                <button
                  onClick={() => openDrillDown('unsubscribed')}
                  className="flex items-center space-x-0.5 text-[10px] font-semibold text-slate-700 hover:text-brand-blue px-2 py-0.5 rounded border border-slate-200 hover:border-brand-blue transition-colors"
                >
                  <span>View</span>
                  <ArrowRight size={10} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
