import React from 'react';
import { X, Send, User, CheckCheck, Clock } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ConversationModal = () => {
  const { activeTicket, setActiveTicket } = useApp();

  if (!activeTicket) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-xl overflow-hidden flex flex-col max-h-[85vh]">
       
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-sm font-bold text-slate-900">
                Ticket: {activeTicket.ticketNumber || 'TICK-8021'}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-100 text-brand-blue">
                Open
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              User: <span className="font-semibold text-slate-800">{activeTicket.user}</span> ({activeTicket.email})
            </p>
          </div>
          <button
            onClick={() => setActiveTicket(null)}
            className="w-7 h-7 rounded-full hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

      
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/30 text-xs">
          {/* Outbound campaign message */}
          <div className="flex space-x-3">
            <div className="w-7 h-7 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-xs shrink-0">
              C
            </div>
            <div className="space-y-1 max-w-[85%]">
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-slate-800">Campaign Outreach Bot</span>
                <span className="text-[10px] text-slate-400">March 17, 2025 at 5:11 PM</span>
              </div>
              <div className="p-3 bg-white rounded-xl rounded-tl-none border border-slate-200 text-slate-700 shadow-2xs">
                Hi {activeTicket.user}, I noticed your impressive background in tech leadership and scaling distributed architecture. Would love to share our latest case studies!
              </div>
            </div>
          </div>

          
          <div className="flex space-x-3 flex-row-reverse space-x-reverse">
            <div className="w-7 h-7 rounded-full bg-brand-pink/20 text-brand-pink flex items-center justify-center font-bold text-xs shrink-0">
              {activeTicket.user[0]}
            </div>
            <div className="space-y-1 max-w-[85%] text-right">
              <div className="flex items-center space-x-2 justify-end">
                <span className="text-[10px] text-slate-400">10:14 AM</span>
                <span className="font-semibold text-slate-800">{activeTicket.user}</span>
              </div>
              <div className="p-3 bg-brand-blue text-white rounded-xl rounded-tr-none text-left shadow-xs">
                {activeTicket.snippet || 'Hello, confirming receipt of your message. Looking forward to connecting!'}
              </div>
              <div className="flex items-center justify-end space-x-1 text-[10px] text-slate-400 pt-0.5">
                <span>Delivered</span>
                <CheckCheck size={12} className="text-brand-blue" />
              </div>
            </div>
          </div>
        </div>

      
        <div className="p-3 border-t border-slate-200 bg-white flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type a reply to continue this conversation..."
            className="flex-1 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-brand-blue"
          />
          <button
            onClick={() => alert('Reply sent to prospect!')}
            className="px-4 py-2 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl text-xs font-semibold flex items-center space-x-1 transition-colors shadow-xs"
          >
            <span>Send</span>
            <Send size={12} />
          </button>
        </div>
      </div>
    </div>
  );
};
