import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, FileText } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WorksheetListDrawer = () => {
  const {
    activeWorksheetName,
    selectWorksheet,
    searchQuery,
    setSearchQuery,
    setSelectedRecipient
  } = useApp();

  const [expandedSections, setExpandedSections] = useState({
    today: true,
    yesterday: true,
    thisWeek: false,
    thisMonth: false
  });

  const toggleSection = (sec) => {
    setExpandedSections(prev => ({ ...prev, [sec]: !prev[sec] }));
  };

  const allWorksheetCards = [
    { id: 'ws-1', title: 'Default Worksheet', category: 'today', status: 'Sent: 48', email: 'Google: gmail.com', user: 'Admin' },
    { id: 'ws-2', title: 'Untitled Worksheet 06', category: 'yesterday', status: 'Sent: 124', email: 'Google: gmail.com', user: 'John' },
    { id: 'ws-3', title: 'Untitled Worksheet 04', category: 'yesterday', status: 'Sent: 124', email: 'Google: gmail.com', user: 'John 1' },
    { id: 'ws-4', title: 'Untitled Worksheet 05', category: 'yesterday', status: 'Sent: 82', email: 'Google: gmail.com', user: 'Doe' },
    { id: 'ws-5', title: 'Untitled Worksheet 03', category: 'yesterday', status: 'Sent: 96', email: 'Google: gmail.com', user: 'Alexis' },
    { id: 'ws-6', title: 'Sale campaign 01', category: 'thisWeek', status: 'Sent: 240', email: 'Google: gmail.com', user: 'John Doe' },
    { id: 'ws-7', title: 'Untitled Worksheet 15', category: 'thisMonth', status: 'Sent: 310', email: 'Google: gmail.com', user: 'Micro' }
  ];

  const filteredCards = searchQuery.trim()
    ? allWorksheetCards.filter(c =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : allWorksheetCards;

  const renderCard = (card) => {
    const isActive = activeWorksheetName === card.title;
    return (
      <div
        key={card.id}
        onClick={() => selectWorksheet(card.title)}
        className={`p-3 rounded-lg border transition-all cursor-pointer select-none ${
          isActive
            ? 'bg-[#EFF6FF] border-[#0066FF] shadow-2xs'
            : 'bg-white border-[#E5E7EB] hover:border-slate-300 hover:bg-[#F9FAFB]'
        }`}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-semibold text-[#111827]">
            {card.title}
          </h4>
          <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-[#F3F4F6] text-[#374151]">
            {card.status}
          </span>
        </div>
        <div className="mt-1 text-[11px] text-[#6B7280] flex items-center justify-between">
          <span>Assigned: {card.user}</span>
          <span className="text-[10px] text-[#9CA3AF]">{card.email}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-3.5 space-y-4 select-none">
      {/* Search Input ("Search by name, email or campaign", Height: 38px, rounded: 8px) */}
      <div className="relative flex items-center">
        <Search size={15} className="absolute left-3 text-[#9CA3AF]" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by name, email or campaign"
          className="w-full h-[38px] pl-9 pr-3 bg-white border border-[#E5E7EB] rounded-lg text-xs placeholder-[#9CA3AF] text-[#111827] focus:outline-none focus:border-[#0066FF] transition-colors"
        />
      </div>

      {/* Grouped Folders: TODAY, YESTERDAY, THIS WEEK, THIS MONTH */}
      <div className="space-y-3">
        {/* TODAY */}
        <div className="space-y-1.5">
          <div
            onClick={() => toggleSection('today')}
            className="flex items-center justify-between px-1.5 py-1 text-[11px] font-bold text-[#6B7280] tracking-wider uppercase cursor-pointer hover:text-[#111827]"
          >
            <span>TODAY</span>
            {expandedSections.today ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
          </div>
          {expandedSections.today && (
            <div className="space-y-2">
              {filteredCards.filter(c => c.category === 'today').map(renderCard)}
            </div>
          )}
        </div>

        {/* YESTERDAY */}
        <div className="space-y-1.5">
          <div
            onClick={() => toggleSection('yesterday')}
            className="flex items-center justify-between px-1.5 py-1 text-[11px] font-bold text-[#6B7280] tracking-wider uppercase cursor-pointer hover:text-[#111827]"
          >
            <span>YESTERDAY</span>
            {expandedSections.yesterday ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
          </div>
          {expandedSections.yesterday && (
            <div className="space-y-2">
              {filteredCards.filter(c => c.category === 'yesterday').map(renderCard)}
            </div>
          )}
        </div>

        {/* THIS WEEK */}
        <div className="space-y-1.5">
          <div
            onClick={() => toggleSection('thisWeek')}
            className="flex items-center justify-between px-1.5 py-1 text-[11px] font-bold text-[#6B7280] tracking-wider uppercase cursor-pointer hover:text-[#111827]"
          >
            <span>THIS WEEK</span>
            {expandedSections.thisWeek ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
          </div>
          {expandedSections.thisWeek && (
            <div className="space-y-2">
              {filteredCards.filter(c => c.category === 'thisWeek').map(renderCard)}
            </div>
          )}
        </div>

        {/* THIS MONTH */}
        <div className="space-y-1.5">
          <div
            onClick={() => toggleSection('thisMonth')}
            className="flex items-center justify-between px-1.5 py-1 text-[11px] font-bold text-[#6B7280] tracking-wider uppercase cursor-pointer hover:text-[#111827]"
          >
            <span>THIS MONTH</span>
            {expandedSections.thisMonth ? <ChevronDown size={13} /> : <ChevronRight size={13} />}
          </div>
          {expandedSections.thisMonth && (
            <div className="space-y-2">
              {filteredCards.filter(c => c.category === 'thisMonth').map(renderCard)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
