import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const UserTicketsList = () => {
  const {
    sidebarLoading,
    setAnalyticsView,
    selectedTicketId,
    setSelectedTicketId,
    setActiveTicket,
    activeWorksheetName
  } = useApp();

  // Cards matching Adobe XD Screen 9 (Web 1280 - 144)
  const tickets = [
    {
      id: 1,
      user: 'John',
      email: 'John@gmail.com',
      campaignName: 'Sales campaign',
      status: 'Active',
      connections: '500+'
    },
    {
      id: 2,
      user: 'Johnl',
      email: 'Johndoe@gmail.com',
      campaignName: 'Sales campaign',
      status: 'Active',
      connections: '380'
    },
    {
      id: 3,
      user: 'user name',
      email: 'Username@gmail.com',
      campaignName: 'Outreach 04',
      status: 'Active',
      connections: '290'
    },
    {
      id: 4,
      user: 'Doe',
      email: 'Doe@gmail.com',
      campaignName: 'Sales campaign',
      status: 'Active',
      connections: '420'
    },
    {
      id: 5,
      user: 'John',
      email: 'John@gmail.com',
      campaignName: 'Finance Outreach',
      status: 'Active',
      connections: '330'
    },
    {
      id: 6,
      user: 'Johnl',
      email: 'Johndoe@gmail.com',
      campaignName: 'Sales campaign',
      status: 'Active',
      connections: '410'
    }
  ];

  const handleViewConversation = (t) => {
    setSelectedTicketId(t.id);
    setActiveTicket(t);
  };

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-3 select-none">
      {/* Header: Back & Worksheet Title */}
      <div className="space-y-1">
        <button
          onClick={() => setAnalyticsView('drilldown')}
          className="flex items-center space-x-1 text-xs font-bold text-[#0B68BB] hover:underline cursor-pointer"
        >
          <ArrowLeft size={13} />
          <span>Back</span>
        </button>

        <h2 className="text-xs font-bold text-slate-800 uppercase tracking-tight">
          {activeWorksheetName}
        </h2>
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
          <div className="flex items-center justify-between pt-1">
            <span className="text-sm font-bold text-[#0B68BB]">Opened</span>
            <span className="text-xs font-semibold text-slate-500">17</span>
          </div>

          {/* User Cards */}
          <div className="space-y-2">
            {tickets.map((t) => {
              const isSelected = selectedTicketId === t.id;
              return (
                <div
                  key={t.id}
                  className="p-3 rounded-xl bg-white border border-[#E5E7EB] shadow-2xs space-y-2 hover:border-[#0B68BB]/50 transition-colors"
                >
                  <div className="space-y-0.5 text-xs">
                    <div>
                      <span className="text-slate-500 text-[11px]">User name: </span>
                      <span className="font-semibold text-slate-900 underline cursor-pointer decoration-slate-400">
                        {t.user}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-500 text-[11px]">Email: </span>
                      <span className="font-medium text-slate-700">{t.email}</span>
                    </div>
                  </div>

                  {/* Exact Adobe XD View Conversation Pill Button */}
                  <div>
                    <button
                      onClick={() => handleViewConversation(t)}
                      className="inline-flex items-center justify-center h-[22px] px-3.5 rounded-full text-[10px] font-medium transition-all cursor-pointer shadow-2xs bg-white border border-[#0B68BB] text-[#0B68BB] hover:bg-[#0B68BB] hover:text-white"
                    >
                      View conversation
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

