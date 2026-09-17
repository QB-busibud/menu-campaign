import React from 'react';
import { Plus, ChevronLeft } from 'lucide-react';
import { WorksheetListTree } from './WorksheetListTree';
import { CampaignAnalyticsView } from './CampaignAnalyticsView';
import { MetricDrillDownList } from './MetricDrillDownList';
import { UserTicketsList } from './UserTicketsList';
import { useApp } from '../../context/AppContext';
import filterIcon from '../../assets/images/Component 98 – 1.svg';
import searchIcon from '../../assets/images/ios-search.svg';

export const SidebarContainer = () => {
  const { activeTab, setActiveTab, analyticsView } = useApp();

  return (
    <div className="w-[276px] bg-white border-r border-slate-200 flex flex-col h-full shrink-0 relative select-none z-10">
      {/* Top Header: Worksheet with +, filter, search (matching XD exactly) */}
      <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
        <h1 className="text-sm font-bold text-slate-900 tracking-tight">
          Worksheet
        </h1>
        <div className="flex items-center space-x-1.5">
          {/* Blue + button */}
          <button
            onClick={() => alert('New Worksheet created!')}
            className="w-[28px] h-[28px] rounded bg-[#0B68BB] hover:bg-[#09579c] text-white flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            title="Add Worksheet"
          >
            <Plus size={15} className="stroke-[2.5]" />
          </button>

          {/* Filter button Component 98 - 1 */}
          <button
            className="w-[28px] h-[28px] rounded border border-[#DCDCDC] bg-white hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
            title="Filter Worksheets"
          >
            <img src={filterIcon} alt="Filter" className="w-[14px] h-[14px]" />
          </button>

          {/* Search button with ios-search */}
          <button
            className="w-[28px] h-[28px] rounded border border-[#DCDCDC] bg-white hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer"
            title="Search Worksheets"
          >
            <img src={searchIcon} alt="Search" className="w-[12px] h-[12px] opacity-75" />
          </button>
        </div>
      </div>

      {/* Tabs: Worksheet List | All campaigns analytics */}
      <div className="px-3 pt-3 pb-1">
        <div className="bg-[#EFEFEF] p-0.5 rounded-lg flex items-center">
          <button
            onClick={() => setActiveTab('worksheet_list')}
            className={`flex-1 py-1.5 px-2 rounded-md text-center text-[11px] transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'worksheet_list'
                ? 'bg-white text-slate-900 font-semibold shadow-xs'
                : 'text-slate-500 font-medium hover:text-slate-800'
            }`}
          >
            Worksheet List
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 py-1.5 px-2 rounded-md text-center text-[11px] transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'analytics'
                ? 'bg-white text-slate-900 font-semibold shadow-xs'
                : 'text-slate-500 font-medium hover:text-slate-800'
            }`}
          >
            All campaigns analytics
          </button>
        </div>
      </div>

      {/* Dynamic Content Body */}
      {activeTab === 'worksheet_list' ? (
        <WorksheetListTree />
      ) : analyticsView === 'tickets' ? (
        <UserTicketsList />
      ) : analyticsView === 'drilldown' ? (
        <MetricDrillDownList />
      ) : (
        <CampaignAnalyticsView />
      )}

      {/* Collapse Handle on Border */}
      <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center cursor-pointer text-slate-400 hover:text-slate-700 z-20">
        <ChevronLeft size={13} />
      </div>
    </div>
  );
};

