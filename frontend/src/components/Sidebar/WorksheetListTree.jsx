import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import clockIcon from '../../assets/images/clock.svg';

export const WorksheetListTree = () => {
  const { activeWorksheetId, switchWorksheet } = useApp();

  const [expanded, setExpanded] = useState({
    today: true,
    yesterday: true,
    thisWeek: false,
    thisMonth: false,
    older: false,
  });

  const toggle = (key) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-3 space-y-4 text-xs select-none">
      <div className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
        WORKSHEET LIST
      </div>

      {/* TODAY */}
      <div className="space-y-1.5">
        <div
          onClick={() => toggle('today')}
          className="flex items-center justify-between py-1 cursor-pointer text-slate-800 font-bold hover:text-[#0B68BB] transition-colors"
        >
          <div className="flex items-center space-x-2">
            <img src={clockIcon} alt="Clock" className="w-[12px] h-[12px]" />
            <span className="text-[12px] font-bold text-[#0B68BB] tracking-wide">TODAY</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
            <span className="font-semibold text-slate-500">1</span>
            {expanded.today ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>

        {expanded.today && (
          <div className="ml-2.5 pl-3 border-l-2 border-dotted border-emerald-400 space-y-1 py-0.5">
            <div
              onClick={() => switchWorksheet('ws-default')}
              className={`px-3 py-1.5 rounded-md cursor-pointer transition-all text-[12px] ${
                activeWorksheetId === 'ws-default'
                  ? 'bg-[#E5E7EB] text-slate-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Default Worksheet
            </div>
          </div>
        )}
      </div>

      {/* YESTERDAY */}
      <div className="space-y-1.5">
        <div
          onClick={() => toggle('yesterday')}
          className="flex items-center justify-between py-1 cursor-pointer text-slate-800 font-bold hover:text-[#0B68BB] transition-colors"
        >
          <div className="flex items-center space-x-2">
            <img src={clockIcon} alt="Clock" className="w-[12px] h-[12px]" />
            <span className="text-[12px] font-bold text-[#0B68BB] tracking-wide">YESTERDAY</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
            <span className="font-semibold text-slate-500">8</span>
            {expanded.yesterday ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>

        {expanded.yesterday && (
          <div className="ml-2.5 pl-3 border-l-2 border-dotted border-slate-300 space-y-1 py-0.5">
            {[
              { id: 'ws-04', name: 'Untitled Worksheet 04' },
              { id: 'ws-05', name: 'Untitled Worksheet 05' },
              { id: 'ws-06', name: 'Untitled Worksheet 06' },
              { id: 'ws-05-b', name: 'Untitled Worksheet 05' },
              { id: 'ws-03', name: 'Untitled Worksheet 03' },
              { id: 'ws-05-c', name: 'Untitled Worksheet 05' },
              { id: 'ws-03-b', name: 'Untitled Worksheet 03' },
              { id: 'ws-05-d', name: 'Untitled Worksheet 05' },
            ].map((ws, i) => {
              const isActive = activeWorksheetId === ws.id;
              return (
                <div
                  key={i}
                  onClick={() => switchWorksheet(ws.id)}
                  className={`relative px-3 py-1.5 rounded-md cursor-pointer transition-all text-[12px] flex items-center ${
                    isActive
                      ? 'bg-[#EAEAEA] text-slate-900 font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {/* Cyan / Blue Indicator Bar on active item (Screen 1) */}
                  {isActive && (
                    <span className="absolute left-0 top-1 bottom-1 w-[3.5px] bg-[#0B68BB] rounded-full" />
                  )}
                  <span className={isActive ? 'pl-1' : ''}>{ws.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* THIS WEEK */}
      <div className="space-y-1">
        <div
          onClick={() => toggle('thisWeek')}
          className="flex items-center justify-between py-1 cursor-pointer text-slate-800 font-bold hover:text-[#0B68BB] transition-colors"
        >
          <div className="flex items-center space-x-2">
            <img src={clockIcon} alt="Clock" className="w-[12px] h-[12px]" />
            <span className="text-[12px] font-bold text-[#0B68BB] tracking-wide">THIS WEEK</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
            <span className="font-semibold text-slate-500">1</span>
            {expanded.thisWeek ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>
      </div>

      {/* THIS MONTH */}
      <div className="space-y-1">
        <div
          onClick={() => toggle('thisMonth')}
          className="flex items-center justify-between py-1 cursor-pointer text-slate-800 font-bold hover:text-[#0B68BB] transition-colors"
        >
          <div className="flex items-center space-x-2">
            <img src={clockIcon} alt="Clock" className="w-[12px] h-[12px]" />
            <span className="text-[12px] font-bold text-[#0B68BB] tracking-wide">THIS MONTH</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
            <span className="font-semibold text-slate-500">5</span>
            {expanded.thisMonth ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>
      </div>

      {/* OLDER */}
      <div className="space-y-1">
        <div
          onClick={() => toggle('older')}
          className="flex items-center justify-between py-1 cursor-pointer text-slate-800 font-bold hover:text-[#0B68BB] transition-colors"
        >
          <div className="flex items-center space-x-2">
            <img src={clockIcon} alt="Clock" className="w-[12px] h-[12px]" />
            <span className="text-[12px] font-bold text-[#0B68BB] tracking-wide">OLDER</span>
          </div>
          <div className="flex items-center space-x-1.5 text-slate-400 text-[11px]">
            <span className="font-semibold text-slate-500">123</span>
            {expanded.older ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>
      </div>
    </div>
  );
};

