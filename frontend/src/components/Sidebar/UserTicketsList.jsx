import React from 'react';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const UserTicketsList = () => {
  const {
    sidebarLoading,
    backToDrillDown,
    setActiveTicket,
    activeWorksheetId
  } = useApp();

  const tickets = [
    {
      id: 't1',
      user: 'John',
      email: 'John@gmail.com',
      ticketNumber: 'TICK-8021',
      snippet: 'Enquiry regarding enterprise credit limits and automated LinkedIn exports.'
    },
    {
      id: 't2',
      user: 'John1',
      email: 'Johndoe@gmail.com',
      ticketNumber: 'TICK-8022',
      snippet: 'Testing the webhook callback pipeline for prospect synchronization.'
    },
    {
      id: 't3',
      user: 'user name',
      email: 'Username@gmail.com',
      ticketNumber: 'TICK-8023',
      snippet: 'Scheduling product walkthrough demo for outreach team.'
    },
    {
      id: 't4',
      user: 'Doe',
      email: 'Doe@gmail.com',
      ticketNumber: 'TICK-8024',
      snippet: 'Copy Transferred Ticket - Hello this is other mail confirmation.'
    }
  ];

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 select-none">
      {/* Header: Back & Worksheet Title */}
      <div className="space-y-1">
        <button
          onClick={backToDrillDown}
          className="flex items-center space-x-1 text-xs font-bold text-brand-blue hover:underline cursor-pointer"
        >
          <ArrowLeft size={13} />
          <span>Back</span>
        </button>

        <h2 className="text-xs font-bold text-slate-800 uppercase tracking-tight">
          {activeWorksheetId === 'ws-04' ? 'UNTITLED WORKSHEET 04' : 'UNTITLED WORKSHEET 06'}
        </h2>
      </div>

      {sidebarLoading ? (
        <div className="py-20 flex flex-col items-center justify-center space-y-3">
          <div className="flex space-x-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 loader-dot" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 loader-dot" />
            <div className="w-2.5 h-2.5 rounded-full bg-slate-300 loader-dot" />
          </div>
          <span className="text-xs text-slate-400">Loading conversation tickets...</span>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between pt-1">
            <span className="text-sm font-bold text-brand-blue">Opened</span>
            <span className="text-xs font-semibold text-slate-500">17</span>
          </div>

          {/* Tickets Cards */}
          <div className="space-y-2.5">
            {tickets.map((t) => (
              <div
                key={t.id}
                className="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2 hover:border-slate-300 transition-colors"
              >
                <div className="space-y-0.5 text-xs">
                  <div>
                    <span className="text-slate-400 text-[11px]">User name: </span>
                    <span className="font-semibold text-slate-900 underline">{t.user}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px]">Email: </span>
                    <span className="font-medium text-slate-700">{t.email}</span>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTicket(t)}
                  className="w-full flex items-center justify-center space-x-1.5 py-1.5 px-3 rounded-lg border border-brand-blue/40 text-brand-blue hover:bg-brand-blue/5 text-xs font-semibold transition-colors shadow-2xs"
                >
                  <MessageSquare size={13} />
                  <span>View conversation</span>
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
