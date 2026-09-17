import React, { useState } from 'react';
import { ChevronDown, ChevronRight, FileText } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WorksheetListTree = () => {
  const { activeWorksheetId, setActiveWorksheetId } = useApp();

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
    <div className="flex-1 overflow-y-auto px-3 py-2 space-y-4 text-xs font-medium text-slate-700 select-none">
      <div className="text-[11px] font-semibold text-slate-400 tracking-wider px-2">
        WORKSHEET LIST
      </div>

      
      <div className="space-y-1">
        <div
          onClick={() => toggle('today')}
          className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer text-slate-600 font-semibold text-xs"
        >
          <div className="flex items-center space-x-1.5 text-brand-blue">
            <span className="w-3.5 h-3.5 rounded-full border border-brand-blue flex items-center justify-center text-[9px] font-bold">⏱</span>
            <span className="text-slate-700 tracking-wide">TODAY</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-400 text-[11px]">
            <span>1</span>
            {expanded.today ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>

        {expanded.today && (
          <div className="ml-4 pl-2 border-l border-slate-200 space-y-1 py-0.5">
            <div
              onClick={() => setActiveWorksheetId('ws-default')}
              className={`px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${
                activeWorksheetId === 'ws-default'
                  ? 'bg-slate-200 text-slate-900 font-semibold'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Default Worksheet
            </div>
          </div>
        )}
      </div>

     
      <div className="space-y-1">
        <div
          onClick={() => toggle('yesterday')}
          className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer text-slate-600 font-semibold text-xs"
        >
          <div className="flex items-center space-x-1.5 text-brand-blue">
            <span className="w-3.5 h-3.5 rounded-full border border-brand-blue flex items-center justify-center text-[9px] font-bold">⏱</span>
            <span className="text-slate-700 tracking-wide">YESTERDAY</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-400 text-[11px]">
            <span>8</span>
            {expanded.yesterday ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>

        {expanded.yesterday && (
          <div className="ml-4 pl-2 border-l border-slate-200 space-y-1 py-0.5">
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
                  onClick={() => setActiveWorksheetId(ws.id)}
                  className={`px-3 py-1.5 rounded-lg cursor-pointer transition-colors text-xs ${
                    isActive
                      ? 'bg-slate-200/90 text-slate-900 font-semibold shadow-xs'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {ws.name}
                </div>
              );
            })}
          </div>
        )}
      </div>

      
      <div className="space-y-1">
        <div
          onClick={() => toggle('thisWeek')}
          className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer text-slate-600 font-semibold text-xs"
        >
          <div className="flex items-center space-x-1.5 text-brand-blue">
            <span className="w-3.5 h-3.5 rounded-full border border-brand-blue flex items-center justify-center text-[9px] font-bold">⏱</span>
            <span className="text-slate-700 tracking-wide">THIS WEEK</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-400 text-[11px]">
            <span>1</span>
            {expanded.thisWeek ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>
      </div>

      
      <div className="space-y-1">
        <div
          onClick={() => toggle('thisMonth')}
          className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer text-slate-600 font-semibold text-xs"
        >
          <div className="flex items-center space-x-1.5 text-brand-blue">
            <span className="w-3.5 h-3.5 rounded-full border border-brand-blue flex items-center justify-center text-[9px] font-bold">⏱</span>
            <span className="text-slate-700 tracking-wide">THIS MONTH</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-400 text-[11px]">
            <span>5</span>
            {expanded.thisMonth ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>
      </div>

    
      <div className="space-y-1">
        <div
          onClick={() => toggle('older')}
          className="flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-slate-100 cursor-pointer text-slate-600 font-semibold text-xs"
        >
          <div className="flex items-center space-x-1.5 text-brand-blue">
            <span className="w-3.5 h-3.5 rounded-full border border-brand-blue flex items-center justify-center text-[9px] font-bold">⏱</span>
            <span className="text-slate-700 tracking-wide">OLDER</span>
          </div>
          <div className="flex items-center space-x-1 text-slate-400 text-[11px]">
            <span>123</span>
            {expanded.older ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </div>
        </div>
      </div>
    </div>
  );
};
