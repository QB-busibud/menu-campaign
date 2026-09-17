import React from 'react';
import { Search, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const MetricDrillDownList = () => {
  const {
    searchQuery,
    setSearchQuery,
    sidebarLoading,
    setActiveWorksheetId,
    setAnalyticsView,
    openTickets
  } = useApp();

  const campaignItems = [
    { id: '1', wsId: 'ws-04', name: 'Untitled Worksheet 04', sent: 124, user: 'John', email: 'John@gmail.com' },
    { id: '2', wsId: 'ws-15', name: 'Untitled Worksheet 15', sent: 124, user: 'Doe', email: 'Doe@gmail.com' },
    { id: '3', wsId: 'ws-04', name: 'Untitled Worksheet 04', sent: 124, user: 'John 1', email: 'John@gmail.com' },
    { id: '4', wsId: 'sale-01', name: 'Sale campaign 01', sent: 124, user: 'Doe', email: 'Doe@gmail.com' },
    { id: '5', wsId: 'ws-04', name: 'Untitled Worksheet 04', sent: 124, user: 'John1 doe', email: 'Doe@gmail.com' },
    { id: '6', wsId: 'ws-04', name: 'Untitled Worksheet 04', sent: 124, user: 'John1john D', email: 'John@gmail.com' },
    { id: '7', wsId: 'ws-15', name: 'Untitled Worksheet 15', sent: 124, user: 'John 1', email: 'John@gmail.com' }
  ];

  const filteredList = searchQuery.trim()
    ? campaignItems.filter(i =>
        i.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        i.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : campaignItems;

  const handleCardClick = (item) => {
    setActiveWorksheetId(item.wsId, 3);
    openTickets(item.wsId);
  };

  const highlightMatch = (text, query) => {
    if (!query || !query.trim()) return text;
    const q = query.trim();
    const parts = text.split(new RegExp(`(${q})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <span key={i} className="bg-yellow-200 text-slate-900 font-bold px-0.5 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 select-none">
      {/* Breadcrumb Header */}
      <div>
        <div className="flex items-center text-xs font-bold text-slate-800 tracking-tight">
          <span
            onClick={() => setAnalyticsView('overview')}
            className="cursor-pointer hover:text-brand-blue hover:underline"
          >
            ALL CAMPAIGNS ANALYTICS (600)
          </span>
          <span className="mx-1 text-slate-400">&gt;</span>
          <span className="text-brand-blue">OPENED</span>
        </div>
      </div>

      {sidebarLoading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-3">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 loader-dot" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 loader-dot" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 loader-dot" />
          </div>
          <span className="text-xs text-slate-400">Loading drill-down details...</span>
        </div>
      ) : (
        <>
          {/* Subheader */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-brand-blue">Opened</span>
            <span className="text-xs font-semibold text-slate-500">500</span>
          </div>

          {/* Search Input with Clear Button */}
          <div className="relative flex items-center">
            <Search size={14} className="absolute left-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email or campaign"
              className="w-full pl-8 pr-7 py-2 bg-white border border-slate-200 rounded-lg text-xs font-medium placeholder-slate-400 focus:outline-none focus:border-brand-blue shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 text-slate-400 hover:text-slate-600"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* Campaign / Worksheet Items List */}
          <div className="space-y-2.5 pt-1">
            {filteredList.map((item) => (
              <div
                key={item.id}
                onClick={() => handleCardClick(item)}
                className="p-3 rounded-xl border bg-white border-slate-200 hover:border-brand-blue/60 hover:shadow-xs transition-all cursor-pointer shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900 hover:underline">
                    {highlightMatch(item.name, searchQuery)}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    Sent: {item.sent}
                  </span>
                </div>

                <div className="mt-1 space-y-0.5 text-[11px] text-slate-600">
                  <div>
                    <span className="text-slate-400">User name: </span>
                    <span className="font-medium text-slate-800">
                      {highlightMatch(item.user, searchQuery)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400">Email: </span>
                    <span className="font-medium text-slate-700">
                      {highlightMatch(item.email, searchQuery)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
