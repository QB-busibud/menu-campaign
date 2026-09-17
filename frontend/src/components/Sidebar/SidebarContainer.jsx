import React from 'react';
import { Plus, Filter, Search, ChevronLeft } from 'lucide-react';
import { WorksheetListTree } from './WorksheetListTree';
import { CampaignAnalyticsView } from './CampaignAnalyticsView';
import { MetricDrillDownList } from './MetricDrillDownList';
import { UserTicketsList } from './UserTicketsList';
import { useApp } from '../../context/AppContext';

export const SidebarContainer = () => {
  const { activeTab, setActiveTab, analyticsView } = useApp();

  return (
    <div className="w-72 bg-white border-r border-slate-200 flex flex-col h-full shrink-0 relative select-none">
    
      <div className="p-3 border-b border-slate-100 flex items-center justify-between">
        <h1 className="text-sm font-bold text-slate-800 tracking-tight">
          Worksheet
        </h1>
        <div className="flex items-center space-x-1.5">
          <button
            onClick={() => alert('New Worksheet created!')}
            className="w-6 h-6 rounded-md bg-brand-blue hover:bg-brand-blue/90 text-white flex items-center justify-center transition-colors shadow-xs"
            title="Add Worksheet"
          >
            <Plus size={15} className="stroke-[2.5]" />
          </button>
          <button
            className="w-6 h-6 rounded-md hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors"
            title="Filter Worksheets"
          >
            <Filter size={13} />
          </button>
          <button
            className="w-6 h-6 rounded-md hover:bg-slate-100 text-slate-500 flex items-center justify-center transition-colors"
            title="Search Worksheets"
          >
            <Search size={13} />
          </button>
        </div>
      </div>

     
      <div className="px-3 pt-3 pb-1">
        <div className="bg-slate-100 p-1 rounded-xl flex items-center text-xs font-semibold">
          <button
            onClick={() => setActiveTab('worksheet_list')}
            className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
              activeTab === 'worksheet_list'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Worksheet List
          </button>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`flex-1 py-1.5 rounded-lg text-center transition-all ${
              activeTab === 'analytics'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            All campaigns analytics
          </button>
        </div>
      </div>

      
      {activeTab === 'worksheet_list' ? (
        <WorksheetListTree />
      ) : analyticsView === 'tickets' ? (
        <UserTicketsList />
      ) : analyticsView === 'drilldown' ? (
        <MetricDrillDownList />
      ) : (
        <CampaignAnalyticsView />
      )}

     
      <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-white border border-slate-200 rounded-full shadow-md flex items-center justify-center cursor-pointer text-slate-400 hover:text-slate-700 z-10">
        <ChevronLeft size={13} />
      </div>
    </div>
  );
};
