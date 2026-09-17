import React, { useState, useEffect } from 'react';
import { Search, SlidersHorizontal, ChevronDown, Plus, Settings, Zap, ExternalLink } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const SpreadsheetTable = () => {
  const {
    activeWorksheetId,
    selectedRowIndex,
    setSelectedRowIndex,
    tableLoading,
    credits,
    setShowSettingsModal
  } = useApp();

  const isSheet04 = activeWorksheetId === 'ws-04';
  const worksheetTitle = isSheet04 ? 'UNTITLED WORKSHEET 04' : 'UNTITLED WORKSHEET 06';

  // Leads dataset matching Adobe XD
  const [leads, setLeads] = useState([
    { id: 1, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connections: '500+', linkedin: 'https://www.linkedin.com/in...', headline: 'ex-Google Gemini, Meta, Sta...' },
    { id: 2, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'New York, NY', connections: '420', linkedin: 'https://www.linkedin.com/in...', headline: 'VP of Growth & Operations' },
    { id: 3, firstName: 'John 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Austin, TX', connections: '650', linkedin: 'https://www.linkedin.com/in...', headline: 'Cloud Architect & Tech Lead' },
    { id: 4, firstName: 'John Doe', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Seattle, WA', connections: '380', linkedin: 'https://www.linkedin.com/in...', headline: 'Product Manager @ SaaS Platform' },
    { id: 5, firstName: 'Alexis', lastName: 'Alexis', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Jose, CA', connections: '520', linkedin: 'https://www.linkedin.com/in...', headline: 'Founder & CEO | AI Acceleration' },
    { id: 6, firstName: 'John 1', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Boston, MA', connections: '410', linkedin: 'https://www.linkedin.com/in...', headline: 'Director of Business Development' },
    { id: 7, firstName: 'name 3', lastName: 'name 3', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Chicago, IL', connections: '310', linkedin: 'https://www.linkedin.com/in...', headline: 'Senior Account Executive' },
    { id: 8, firstName: 'name 4', lastName: 'name 4', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Denver, CO', connections: '290', linkedin: 'https://www.linkedin.com/in...', headline: 'Customer Success Specialist' },
    { id: 9, firstName: 'Micro', lastName: 'Micro', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connections: '800', linkedin: 'https://www.linkedin.com/in...', headline: 'Principal Data Engineer' },
    { id: 10, firstName: 'Name 5', lastName: 'Name 5', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Atlanta, GA', connections: '450', linkedin: 'https://www.linkedin.com/in...', headline: 'Marketing Director' },
    { id: 11, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Miami, FL', connections: '330', linkedin: 'https://www.linkedin.com/in...', headline: 'Financial Controller' },
    { id: 12, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Toronto, Canada', connections: '520', linkedin: 'https://www.linkedin.com/in...', headline: 'Solutions Engineer' },
    { id: 13, firstName: 'Doe 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Vancouver, Canada', connections: '480', linkedin: 'https://www.linkedin.com/in...', headline: 'DevOps Lead' },
    { id: 14, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'London, UK', connections: '620', linkedin: 'https://www.linkedin.com/in...', headline: 'International Expansion Lead' },
  ]);

  const [selectedRows, setSelectedRows] = useState(new Set());
  const [columns, setColumns] = useState(['Location', 'Connections Count', 'LinkedIn URL', 'Headline']);

  const toggleSelectRow = (id) => {
    const newSet = new Set(selectedRows);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedRows(newSet);
  };

  const handleAddColumn = () => {
    const colName = prompt('Enter new column name:');
    if (colName) setColumns(prev => [...prev, colName]);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#FAFAFA] overflow-hidden select-none">
      
      <div className="px-6 py-3 bg-white border-b border-slate-200 flex items-center justify-between shrink-0">
       
        <div className="flex items-center space-x-2 text-xs font-bold tracking-tight text-slate-800">
          <span className="text-slate-500">FLOW OVERVIEW</span>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-900">{worksheetTitle}</span>
        </div>

        
        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-[#E8F2FC] border border-blue-200/70 text-brand-blue text-xs font-semibold shadow-2xs">
          <Zap size={13} className="fill-brand-blue" />
          <span>Available Credits {credits}</span>
        </div>
      </div>

      
      <div className="px-6 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowSettingsModal(true)}
            className="px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-white text-slate-700 text-xs font-medium shadow-2xs transition-colors"
          >
            Lead generation settings
          </button>
          <span className="text-xs text-slate-400 font-medium">
            Columns: {selectedRows.size}/0 &nbsp;&nbsp; Rows: {selectedRows.size}/{leads.length}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          
          <button className="w-7 h-7 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-500 transition-colors">
            <Search size={14} />
          </button>

          
          <button className="w-7 h-7 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center text-slate-500 transition-colors">
            <SlidersHorizontal size={14} />
          </button>

          
          <button className="flex items-center space-x-1 px-3.5 py-1.5 rounded-lg bg-brand-blue hover:bg-brand-blue/95 text-white text-xs font-semibold shadow-xs transition-colors">
            <span>Action</span>
            <ChevronDown size={13} />
          </button>

          
          <button
            onClick={() => alert('Worksheet layout and enrichment rules saved!')}
            className="px-3 py-1.5 rounded-lg border border-amber-300 bg-amber-50/50 hover:bg-amber-100/60 text-amber-800 text-xs font-medium transition-colors shadow-2xs"
          >
            Save use case
          </button>
        </div>
      </div>

      {/* Table Area */}
      <div className="flex-1 overflow-auto relative">
        {tableLoading ? (
          /* Screen 9 Loading State */
          <div className="w-full h-full flex flex-col items-center justify-center space-y-3 bg-white/70 backdrop-blur-xs">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-brand-blue loader-dot" />
              <div className="w-3 h-3 rounded-full bg-brand-blue loader-dot" />
              <div className="w-3 h-3 rounded-full bg-brand-blue loader-dot" />
            </div>
            <span className="text-xs font-medium text-slate-500">
              Loading {worksheetTitle}...
            </span>
          </div>
        ) : (
          <div className="min-w-max">
            {/* 1st Degree Badge on top of table header */}
            <div className="px-3 pt-2 pb-1 bg-[#EAF2FC] border-b border-blue-100 flex items-center">
              <span className="px-2 py-0.5 rounded bg-slate-900 text-white text-[10px] font-bold tracking-wider uppercase">
                1st degree
              </span>
            </div>

            
            <table className="w-full border-collapse text-xs text-left">
              <thead>
                <tr className="bg-[#EAF2FC] text-slate-800 font-semibold border-b border-blue-100 text-[11px]">
                  <th className="w-10 px-3 py-2 text-center border-r border-blue-100">
                    <input
                      type="checkbox"
                      checked={selectedRows.size === leads.length}
                      onChange={(e) => {
                        if (e.target.checked) setSelectedRows(new Set(leads.map(l => l.id)));
                        else setSelectedRows(new Set());
                      }}
                      className="rounded text-brand-blue focus:ring-0 cursor-pointer"
                    />
                  </th>
                  <th className="w-12 px-3 py-2 text-slate-500 font-medium border-r border-blue-100">#</th>
                  <th className="px-4 py-2 border-r border-blue-100 min-w-[140px]">First name</th>
                  <th className="px-4 py-2 border-r border-blue-100 min-w-[180px]">Created at</th>
                  <th className="px-4 py-2 border-r border-blue-100 min-w-[180px]">Updated at</th>
                  <th className="px-4 py-2 border-r border-blue-100 min-w-[140px]">Last name</th>
                  {columns.map((col, idx) => (
                    <th key={idx} className="px-4 py-2 border-r border-blue-100 min-w-[180px]">
                      {col}
                    </th>
                  ))}
                  <th className="px-4 py-2 text-brand-blue font-semibold cursor-pointer hover:bg-blue-100/50" onClick={handleAddColumn}>
                    + Add column
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {leads.map((row, index) => {
                  const isChecked = selectedRows.has(row.id);
                  const isHighlighted = selectedRowIndex === row.id;

                  return (
                    <tr
                      key={row.id}
                      onClick={() => setSelectedRowIndex(row.id)}
                      className={`hover:bg-slate-50 transition-colors cursor-pointer ${
                        isHighlighted
                          ? 'bg-[#F0F7FF] font-medium text-brand-blue border-l-4 border-l-brand-blue'
                          : isChecked
                          ? 'bg-slate-50'
                          : ''
                      }`}
                    >
                      <td className="px-3 py-2.5 text-center border-r border-slate-100">
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={(e) => {
                            e.stopPropagation();
                            toggleSelectRow(row.id);
                          }}
                          className="rounded text-brand-blue focus:ring-0 cursor-pointer"
                        />
                      </td>
                      <td className="px-3 py-2.5 text-slate-400 font-mono text-[11px] border-r border-slate-100">
                        {row.id}
                      </td>
                      <td className="px-4 py-2.5 font-medium text-slate-900 border-r border-slate-100">
                        {row.firstName}
                      </td>
                      <td className="px-4 py-2.5 text-slate-500 border-r border-slate-100">
                        {row.createdAt}
                      </td>
                      <td className="px-4 py-2.5 text-slate-500 border-r border-slate-100">
                        {row.updatedAt}
                      </td>
                      <td className="px-4 py-2.5 text-slate-700 border-r border-slate-100">
                        {row.lastName}
                      </td>
                      <td className="px-4 py-2.5 text-slate-600 border-r border-slate-100">
                        {row.location}
                      </td>
                      <td className="px-4 py-2.5 text-slate-600 border-r border-slate-100">
                        {row.connections}
                      </td>
                      <td className="px-4 py-2.5 text-brand-blue hover:underline border-r border-slate-100 flex items-center space-x-1">
                        <span>{row.linkedin}</span>
                        <ExternalLink size={10} className="text-slate-400" />
                      </td>
                      <td className="px-4 py-2.5 text-slate-600 border-r border-slate-100 max-w-[240px] truncate">
                        {row.headline}
                      </td>
                      <td className="px-4 py-2.5 text-slate-300">
                        -
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      
      <div className="px-4 py-2 bg-white border-t border-slate-200 flex items-center justify-between shrink-0 select-none">
        
        <div className="flex items-center space-x-3">
          <div className="relative py-1 px-3 text-xs font-semibold text-brand-blue cursor-pointer">
            <span>Sheet 1</span>
            <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-brand-blue rounded" />
          </div>

          <button
            onClick={() => alert('Added new sheet!')}
            className="flex items-center space-x-1 text-xs font-semibold text-slate-600 hover:text-slate-900 py-1 px-2 rounded hover:bg-slate-100 transition-colors"
          >
            <span>+ Add</span>
            <ChevronDown size={12} />
          </button>
        </div>

        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => alert('All background enrichment jobs completed.')}
            className="px-3 py-1 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            View pending jobs
          </button>
          <button className="p-1 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
            <Settings size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
