import React from 'react';
import { X } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import searchIcon from '../../assets/images/ios-search.svg';

export const MetricDrillDownList = () => {
  const {
    searchQuery,
    setSearchQuery,
    sidebarLoading,
    setAnalyticsView,
    openTicketsList
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

  const highlightMatch = (text, query) => {
    if (!query || !query.trim()) return text;
    const q = query.trim();
    const parts = text.split(new RegExp(`(${q})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === q.toLowerCase() ? (
        <span key={i} className="bg-[#FEF08A] text-slate-900 font-bold px-0.5 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3.5 select-none">
      {/* Breadcrumb Header */}
      <div>
        <div className="flex items-center text-xs font-bold text-slate-800 tracking-tight">
          <span
            onClick={() => setAnalyticsView('overview')}
            className="cursor-pointer hover:text-[#0B68BB] hover:underline"
          >
            ALL CAMPAIGNS ANALYTICS (600)
          </span>
          <span className="mx-1 text-slate-400">&gt;</span>
          <span className="text-[#0B68BB]">OPENED</span>
        </div>
      </div>

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
          {/* Subheader: Opened 500 */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-[#0B68BB]">Opened</span>
            <span className="text-xs font-semibold text-slate-500">500</span>
          </div>

          {/* Search Input matching Screenshot 7 and 8 */}
          <div className="relative flex items-center">
            <img src={searchIcon} alt="Search" className="absolute left-2.5 w-[12px] h-[12px] opacity-60" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, email or campaign"
              className="w-full pl-8 pr-7 py-2 bg-white border border-[#DCDCDC] rounded-lg text-xs font-medium placeholder-slate-400 focus:outline-none focus:border-[#0B68BB] shadow-2xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={13} />
              </button>
            )}
          </div>

          {/* List items matching Screenshot 6 and 8 */}
          <div className="space-y-2 pt-1">
            {filteredList.map((item) => (
              <div
                key={item.id}
                onClick={() => openTicketsList(item.wsId)}
                className="p-3 rounded-xl border bg-white border-[#E5E7EB] hover:border-[#0B68BB]/70 hover:shadow-xs transition-all cursor-pointer shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#0B68BB] underline decoration-[#0B68BB]">
                    {highlightMatch(item.name, searchQuery)}
                  </span>
                  <span className="text-[11px] font-medium text-slate-500">
                    Sent: {item.sent}
                  </span>
                </div>

                <div className="mt-1 space-y-0.5 text-[11px] text-slate-600">
                  <div>
                    <span className="text-slate-500">User name: </span>
                    <span className="font-semibold text-slate-800">
                      {highlightMatch(item.user, searchQuery)}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-500">Email: </span>
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

