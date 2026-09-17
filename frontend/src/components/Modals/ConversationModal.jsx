import React, { useState } from 'react';
import { X, Send, CheckCheck } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ConversationModal = () => {
  const { activeTicket, setActiveTicket } = useApp();
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'Campaign Outreach Bot',
      time: 'March 17, 2025 at 5:11 PM',
      isBot: true,
      text: 'Hi John, I noticed your impressive background in tech leadership and scaling distributed architecture. Would love to share our latest case studies!'
    },
    {
      id: 2,
      sender: 'John',
      time: 'Today at 10:14 AM',
      isBot: false,
      text: 'Hi team, thanks for reaching out. Yes, we are currently auditing our enterprise enrichment pipelines. Could you share the technical documentation?'
    }
  ]);

  const [replyInput, setReplyInput] = useState('');

  if (!activeTicket) return null;

  const handleSend = () => {
    if (!replyInput.trim()) return;
    setMessages(prev => [
      ...prev,
      {
        id: Date.now(),
        sender: 'Support Agent',
        time: 'Just now',
        isBot: true,
        text: replyInput.trim()
      }
    ]);
    setReplyInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-lg overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-5 py-3.5 border-b border-slate-100 bg-slate-50/60 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Ticket: {activeTicket.ticketNumber || 'TICK-8021'}
            </h3>
            <p className="text-xs text-slate-500">
              User: <span className="font-semibold text-slate-800">{activeTicket.user}</span> ({activeTicket.email})
            </p>
          </div>
          <button
            onClick={() => setActiveTicket(null)}
            className="w-7 h-7 rounded-md hover:bg-slate-200 flex items-center justify-center text-slate-500"
          >
            <X size={16} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/30 text-xs">
          {messages.map(m => (
            <div
              key={m.id}
              className={`flex flex-col ${m.isBot ? 'items-start' : 'items-end'}`}
            >
              <div className="flex items-center space-x-1.5 mb-1 text-[11px] text-slate-400">
                <span className="font-semibold text-slate-800">{m.sender}</span>
                <span>•</span>
                <span>{m.time}</span>
              </div>
              <div
                className={`p-3 rounded-xl max-w-[85%] shadow-2xs leading-relaxed ${
                  m.isBot
                    ? 'bg-white border border-slate-200 text-slate-800'
                    : 'bg-[#0B68BB] text-white'
                }`}
              >
                {m.text}
              </div>
              {!m.isBot && (
                <div className="flex items-center space-x-1 text-[10px] text-[#0B68BB] mt-0.5">
                  <span>Delivered</span>
                  <CheckCheck size={12} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-slate-200 bg-white flex items-center space-x-2">
          <input
            type="text"
            value={replyInput}
            onChange={(e) => setReplyInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type your response to prospect..."
            className="flex-1 h-9 px-3 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-[#0B68BB]"
          />
          <button
            onClick={handleSend}
            className="h-9 px-4 bg-[#0B68BB] hover:bg-[#1877F2] text-white text-xs font-semibold rounded-lg flex items-center space-x-1 transition-colors"
          >
            <span>Send</span>
            <Send size={13} />
          </button>
        </div>
      </div>
    </div>
  );
};
