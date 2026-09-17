import React, { useState, useMemo } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import searchIcon from '../../assets/images/ios-search.svg';
import sortIcon from '../../assets/images/sortbysizedescending.svg';
import creditsIcon from '../../assets/images/Group 34109.svg';
import settingsIcon from '../../assets/images/Component 107 – 1.svg';

export const SpreadsheetTable = () => {
  const {
    activeWorksheetId,
    activeWorksheetName,
    selectedRowIndex,
    setSelectedRowIndex,
    tableLoading,
    credits,
    setShowSettingsModal,
    openTicketsList
  } = useApp();

  // Dynamic rows matching Adobe XD Screen 1 (ws-06) and Screen 9 (ws-04)
  const leads = useMemo(() => {
    if (activeWorksheetId === 'ws-04') {
      return [
        { id: 1, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connections: '500+', linkedin: 'https://www.linkedin.com/in...', headline: 'ex-Google Gemini, Meta, Sta...' },
        { id: 2, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'New York, NY', connections: '420', linkedin: 'https://www.linkedin.com/in...', headline: 'VP of Growth & Operations' },
        { id: 3, firstName: 'John 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Austin, TX', connections: '650', linkedin: 'https://www.linkedin.com/in...', headline: 'Cloud Architect & Tech Lead' },
        { id: 4, firstName: 'John Doe', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Seattle, WA', connections: '380', linkedin: 'https://www.linkedin.com/in...', headline: 'Product Manager @ SaaS Platform' },
        { id: 5, firstName: 'Alixis', lastName: 'Alixis', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Jose, CA', connections: '520', linkedin: 'https://www.linkedin.com/in...', headline: 'Founder & CEO | AI Acceleration' },
        { id: 6, firstName: 'John 1', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Boston, MA', connections: '410', linkedin: 'https://www.linkedin.com/in...', headline: 'Director of Business Development' },
        { id: 7, firstName: 'name 3', lastName: 'name 3', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Chicago, IL', connections: '310', linkedin: 'https://www.linkedin.com/in...', headline: 'Senior Account Executive' },
        { id: 8, firstName: 'name 4', lastName: 'name 4', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Denver, CO', connections: '290', linkedin: 'https://www.linkedin.com/in...', headline: 'Customer Success Specialist' },
        { id: 9, firstName: 'Micro', lastName: 'Micro', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connections: '800', linkedin: 'https://www.linkedin.com/in...', headline: 'Principal Data Engineer' },
        { id: 10, firstName: 'Name 5', lastName: 'Name 5', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Atlanta, GA', connections: '450', linkedin: 'https://www.linkedin.com/in...', headline: 'Marketing Director' },
        { id: 11, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Miami, FL', connections: '330', linkedin: 'https://www.linkedin.com/in...', headline: 'Financial Controller' },
        { id: 12, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Toronto, Canada', connections: '520', linkedin: 'https://www.linkedin.com/in...', headline: 'Solutions Engineer' },
        { id: 13, firstName: 'Doe 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Vancouver, Canada', connections: '480', linkedin: 'https://www.linkedin.com/in...', headline: 'DevOps Lead' },
      ];
    }
    // Default for ws-06 matching Screen 1 exactly
    return [
      { id: 1, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connections: '500+', linkedin: 'https://www.linkedin.com/in...', headline: 'ex-Google Gemini, Meta, Sta...' },
      { id: 2, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'New York, NY', connections: '420', linkedin: 'https://www.linkedin.com/in...', headline: 'VP of Growth & Operations' },
      { id: 3, firstName: 'Doe 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Austin, TX', connections: '650', linkedin: 'https://www.linkedin.com/in...', headline: 'Cloud Architect & Tech Lead' },
      { id: 4, firstName: 'John 1', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Seattle, WA', connections: '380', linkedin: 'https://www.linkedin.com/in...', headline: 'Product Manager @ SaaS Platform' },
      { id: 5, firstName: 'Alixis', lastName: 'Alixis', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Jose, CA', connections: '520', linkedin: 'https://www.linkedin.com/in...', headline: 'Founder & CEO | AI Acceleration' },
      { id: 6, firstName: 'John 1', lastName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Boston, MA', connections: '410', linkedin: 'https://www.linkedin.com/in...', headline: 'Director of Business Development' },
      { id: 7, firstName: 'name 3', lastName: 'name 3', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Chicago, IL', connections: '310', linkedin: 'https://www.linkedin.com/in...', headline: 'Senior Account Executive' },
      { id: 8, firstName: 'name 4', lastName: 'name 4', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Denver, CO', connections: '290', linkedin: 'https://www.linkedin.com/in...', headline: 'Customer Success Specialist' },
      { id: 9, firstName: 'Micro', lastName: 'Micro', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'San Francisco, CA', connections: '800', linkedin: 'https://www.linkedin.com/in...', headline: 'Principal Data Engineer' },
      { id: 10, firstName: 'Name 5', lastName: 'Name 5', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Atlanta, GA', connections: '450', linkedin: 'https://www.linkedin.com/in...', headline: 'Marketing Director' },
      { id: 11, firstName: 'John', lastName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Miami, FL', connections: '330', linkedin: 'https://www.linkedin.com/in...', headline: 'Financial Controller' },
      { id: 12, firstName: 'Doe', lastName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Toronto, Canada', connections: '520', linkedin: 'https://www.linkedin.com/in...', headline: 'Solutions Engineer' },
      { id: 13, firstName: 'Doe 1', lastName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', location: 'Vancouver, Canada', connections: '480', linkedin: 'https://www.linkedin.com/in...', headline: 'DevOps Lead' },
    ];
  }, [activeWorksheetId]);

  const [selectedRows, setSelectedRows] = useState(new Set());

  const toggleSelectRow = (id) => {
    const newSet = new Set(selectedRows);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedRows(newSet);
  };

  const handleRowClick = (id) => {
    setSelectedRowIndex(id);
    openTicketsList('ws-04');
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#FAFAFA] overflow-hidden select-none">
      {/* Top Header Bar: Breadcrumb + Available Credits Pill (Pic 1) */}
      <div className="px-6 py-2.5 bg-white border-b border-slate-200 flex items-center justify-between shrink-0">
        <div className="flex items-center text-xs tracking-tight">
          <span className="text-slate-400 font-bold uppercase tracking-wider">FLOW OVERVIEW</span>
          <span className="text-[#0B68BB] font-bold mx-2">&gt;</span>
          <span className="text-slate-900 font-extrabold uppercase">{activeWorksheetName}</span>
        </div>

        {/* Available Credits Pill (visible on all screens per Adobe XD) */}
        <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-[#D9EDFF] border border-[#93C5FD] text-[#0B68BB] text-xs font-bold shadow-2xs">
          <img src={creditsIcon} alt="Sparkles" className="w-[11px] h-[13px]" />
          <span>Available Credits {credits}</span>
        </div>
      </div>

      {/* Sub-Header Toolbar (Screen 1) */}
      <div className="px-6 py-2 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
        <div className="flex flex-col space-y-1">
          <button
            onClick={() => setShowSettingsModal(true)}
            className="self-start px-2.5 py-1 rounded-md border border-[#DCDCDC] bg-white text-slate-800 text-xs font-medium shadow-2xs hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Lead generation settings
          </button>
          <span className="text-[11px] text-slate-500 font-medium">
            Columns: 0/0 &nbsp;&nbsp;&nbsp; Rows: 0/0
          </span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Quick Search */}
          <button className="w-[28px] h-[28px] rounded border border-[#DCDCDC] bg-white hover:bg-slate-50 flex items-center justify-center transition-colors shadow-2xs cursor-pointer">
            <img src={searchIcon} alt="Search" className="w-[12px] h-[12px] opacity-75" />
          </button>

          {/* Quick Filter / Sort */}
          <button className="w-[28px] h-[28px] rounded border border-[#DCDCDC] bg-white hover:bg-slate-50 flex items-center justify-center transition-colors shadow-2xs cursor-pointer">
            <img src={sortIcon} alt="Sort" className="w-[13px] h-[13px] opacity-75" />
          </button>

          {/* Action Dropdown Button (Solid Blue) */}
          <button className="flex items-center space-x-1 px-3.5 py-1 rounded bg-[#0B68BB] hover:bg-[#09579c] text-white text-xs font-bold shadow-2xs transition-colors cursor-pointer">
            <span>Action</span>
            <ChevronDown size={13} />
          </button>

          {/* Save use case button (Cream/Yellow with Yellow border) */}
          <button
            onClick={() => alert('Worksheet layout and enrichment rules saved!')}
            className="px-3.5 py-1 rounded border border-[#F59E0B] bg-[#FEF3C7] hover:bg-[#FDE68A] text-[#92400E] text-xs font-bold transition-colors shadow-2xs cursor-pointer"
          >
            Save use case
          </button>
        </div>
      </div>

      {/* Main Table Grid Area with single, native pink scrollbar */}
      <div className="flex-1 overflow-auto relative table-pink-scrollbar">
        {tableLoading ? (
          <div className="w-full h-full flex flex-col items-center justify-center space-y-4 bg-white/80">
            <div className="flex items-center space-x-1.5 h-7">
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
              <span className="wave-bar" />
            </div>
            <span className="text-xs font-medium text-slate-500">
              Loading {activeWorksheetName}...
            </span>
          </div>
        ) : (
          <table className="w-full min-w-[1250px] border-collapse text-xs text-left">
            <thead className="sticky top-0 z-10">
              <tr className="bg-[#EAF2FC] text-slate-900 border-b border-blue-200/70 text-[11px]">
                <th className="w-12 px-3 py-1.5 text-center relative border-r border-blue-100 bg-[#EAF2FC]">
                  <span className="absolute -top-1.5 left-1/2 transform -translate-x-1/2 px-1.5 py-0.2 rounded-full bg-[#121212] text-white text-[9px] font-extrabold tracking-wider whitespace-nowrap">
                    1st degree
                  </span>
                  <div className="pt-2">
                    <input
                      type="checkbox"
                      checked={selectedRows.size === leads.length}
                      onChange={(e) => {
                        if (e.target.checked) setSelectedRows(new Set(leads.map(l => l.id)));
                        else setSelectedRows(new Set());
                      }}
                      className="rounded border-slate-300 text-[#0B68BB] focus:ring-0 cursor-pointer"
                    />
                  </div>
                </th>
                <th className="w-8 px-2 py-2 border-r border-blue-100 bg-[#EAF2FC]"></th>
                <th className="px-4 py-2 min-w-[130px] font-bold text-slate-900 border-r border-blue-100 bg-[#EAF2FC]">First name</th>
                <th className="px-4 py-2 min-w-[180px] font-bold text-slate-900 border-r border-blue-100 bg-[#EAF2FC]">Created at</th>
                <th className="px-4 py-2 min-w-[180px] font-bold text-slate-900 border-r border-blue-100 bg-[#EAF2FC]">Updated at</th>
                <th className="px-4 py-2 min-w-[130px] font-bold text-slate-900 border-r border-blue-100 bg-[#EAF2FC]">Last name</th>
                <th className="px-4 py-2 min-w-[170px] font-bold text-slate-900 border-r border-blue-100 bg-[#EAF2FC]">Location</th>
                <th className="px-4 py-2 min-w-[140px] font-bold text-slate-900 border-r border-blue-100 bg-[#EAF2FC]">Connections Count</th>
                <th className="px-4 py-2 min-w-[180px] font-bold text-slate-900 border-r border-blue-100 bg-[#EAF2FC]">LinkedIn URL</th>
                <th className="px-4 py-2 min-w-[220px] font-bold text-slate-900 bg-[#EAF2FC]">Headline</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {leads.map((row) => {
                const isChecked = selectedRows.has(row.id) || (activeWorksheetId === 'ws-04' && row.id === 3);
                const isHighlighted = (activeWorksheetId === 'ws-04' && row.id === 3) || selectedRowIndex === row.id;

                return (
                  <tr
                    key={row.id}
                    onClick={() => handleRowClick(row.id)}
                    className={`hover:bg-slate-50 transition-colors cursor-pointer ${
                      isHighlighted
                        ? 'bg-[#EBF5FF] font-semibold text-slate-900'
                        : isChecked
                        ? 'bg-[#F0F7FF]'
                        : ''
                    }`}
                  >
                    <td className="px-3 py-2 text-center border-r border-slate-100">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={(e) => {
                          e.stopPropagation();
                          toggleSelectRow(row.id);
                        }}
                        className="rounded border-slate-300 text-[#0B68BB] focus:ring-0 cursor-pointer"
                      />
                    </td>
                    <td className="px-2 py-2 text-slate-500 font-normal text-[11px] border-r border-slate-100 text-center">
                      {row.id}
                    </td>
                    <td className="px-4 py-2 text-slate-900 font-medium border-r border-slate-100">
                      {row.firstName}
                    </td>
                    <td className="px-4 py-2 text-slate-600 border-r border-slate-100 whitespace-nowrap">
                      {row.createdAt}
                    </td>
                    <td className="px-4 py-2 text-slate-600 border-r border-slate-100 whitespace-nowrap">
                      {row.updatedAt}
                    </td>
                    <td className="px-4 py-2 text-slate-800 border-r border-slate-100">
                      {row.lastName}
                    </td>
                    <td className="px-4 py-2 text-slate-600 border-r border-slate-100 whitespace-nowrap">
                      {row.location}
                    </td>
                    <td className="px-4 py-2 text-slate-600 border-r border-slate-100">
                      {row.connections}
                    </td>
                    <td className="px-4 py-2 text-[#0B68BB] hover:underline flex items-center space-x-1 border-r border-slate-100">
                      <span>{row.linkedin}</span>
                      <ExternalLink size={10} className="text-slate-400" />
                    </td>
                    <td className="px-4 py-2 text-slate-600 truncate max-w-[220px]">
                      {row.headline}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Bottom Tabs & Controls matching Screen 1 */}
      <div className="px-4 py-2 bg-white border-t border-slate-200 flex items-center justify-between shrink-0 select-none">
        {/* Left: Sheet 1 tab + Add */}
        <div className="flex items-center space-x-3">
          <div className="relative py-1 px-3 text-xs font-bold text-[#0B68BB] cursor-pointer">
            <span>Sheet 1</span>
            <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0B68BB] rounded" />
          </div>

          <button
            onClick={() => alert('Added new sheet!')}
            className="flex items-center space-x-1 text-xs font-bold text-slate-600 hover:text-slate-900 py-1 px-2 rounded hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <span>+ Add</span>
            <ChevronDown size={12} />
          </button>
        </div>

        {/* Right: View pending jobs + Settings Gear Component 107 - 1 */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => alert('All background enrichment jobs completed.')}
            className="px-3 py-1 rounded-md border border-[#DCDCDC] text-xs font-medium text-slate-700 bg-white hover:bg-slate-50 transition-colors shadow-2xs cursor-pointer"
          >
            View pending jobs
          </button>
          <button
            onClick={() => setShowSettingsModal(true)}
            className="w-[28px] h-[28px] rounded border border-[#DCDCDC] bg-white hover:bg-slate-50 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
            title="Settings"
          >
            <img src={settingsIcon} alt="Settings" className="w-[14px] h-[14px]" />
          </button>
        </div>
      </div>
    </div>
  );
};


