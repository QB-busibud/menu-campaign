import React, { useState } from 'react';
import { SlidersHorizontal, ArrowUpDown, ExternalLink } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const WorksheetGrid = () => {
  const {
    activeWorksheetName,
    selectedRecipient,
    setSelectedRecipient,
    tableLoading
  } = useApp();

  // 14 Table Rows matching the Adobe XD screen specifications
  const [rows, setRows] = useState([
    { id: 1, firstName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'John', email: 'john@gmail.com', campaignName: 'Sales campaign', status: 'Active', connections: '500+' },
    { id: 2, firstName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'Doe', email: 'doe@gmail.com', campaignName: 'Sales campaign', status: 'Active', connections: '420' },
    { id: 3, firstName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'Doe 1', email: 'doe1@gmail.com', campaignName: 'Inbound Q1', status: 'Draft', connections: '650' },
    { id: 4, firstName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'John 1', email: 'john1@gmail.com', campaignName: 'Sales campaign', status: 'Active', connections: '380' },
    { id: 5, firstName: 'Alexis', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'Alexis', email: 'alexis@founder.ai', campaignName: 'Executive Outreach', status: 'Active', connections: '520' },
    { id: 6, firstName: 'John 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'John 1', email: 'j1@domain.com', campaignName: 'Sales campaign', status: 'Active', connections: '410' },
    { id: 7, firstName: 'name 3', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'name 3', email: 'name3@corp.com', campaignName: 'Outreach 03', status: 'Active', connections: '310' },
    { id: 8, firstName: 'name 4', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'name 4', email: 'name4@corp.com', campaignName: 'Outreach 04', status: 'Draft', connections: '290' },
    { id: 9, firstName: 'Micro', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'Micro', email: 'micro@tech.io', campaignName: 'Tech Lead Nurture', status: 'Active', connections: '800' },
    { id: 10, firstName: 'Name 5', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'Name 5', email: 'name5@domain.com', campaignName: 'Sales campaign', status: 'Active', connections: '450' },
    { id: 11, firstName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'John', email: 'john.fin@corp.com', campaignName: 'Finance Outreach', status: 'Active', connections: '330' },
    { id: 12, firstName: 'Doe', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'Doe', email: 'doe.ca@canada.com', campaignName: 'Canada Enterprise', status: 'Active', connections: '520' },
    { id: 13, firstName: 'Doe 1', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'Doe 1', email: 'doe.van@van.com', campaignName: 'Canada Enterprise', status: 'Active', connections: '480' },
    { id: 14, firstName: 'John', createdAt: 'March 17, 2025 at 5:11 PM', updatedAt: 'March 17, 2025 at 5:11 PM', lastName: 'John', email: 'john.uk@london.co.uk', campaignName: 'EMEA Expansion', status: 'Active', connections: '620' },
  ]);

  const [selectedIds, setSelectedIds] = useState(new Set());

  const handleSelectAll = (checked) => {
    if (checked) setSelectedIds(new Set(rows.map(r => r.id)));
    else setSelectedIds(new Set());
  };

  const toggleRow = (id, e) => {
    e?.stopPropagation();
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const handleRowClick = (row) => {
    setSelectedRecipient({
      userName: row.firstName,
      email: row.email,
      campaignName: row.campaignName,
      status: row.status,
      connections: row.connections
    });
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#F8F9FA] overflow-hidden select-none">
      {/* Header Stats Bar (Columns: 0/3, Rows: 0/0, Filter/Sort) */}
      <div className="h-10 bg-white border-b border-[#E5E7EB] px-5 flex items-center justify-between shrink-0 text-xs text-[#6B7280]">
        <div className="flex items-center space-x-4">
          <span className="font-medium text-[#111827]">
            Columns: <span className="text-[#6B7280]">0/3</span>
          </span>
          <span>•</span>
          <span className="font-medium text-[#111827]">
            Rows: <span className="text-[#6B7280]">{selectedIds.size}/{rows.length}</span>
          </span>
        </div>

        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-1 hover:text-[#111827] transition-colors">
            <SlidersHorizontal size={13} />
            <span>Filter</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-[#111827] transition-colors">
            <ArrowUpDown size={13} />
            <span>Sort</span>
          </button>
        </div>
      </div>

      {/* Grid Container */}
      <div className="flex-1 overflow-auto relative">
        {tableLoading ? (
          /* Centered Linear Loader & Skeleton Rows */
          <div className="p-6 space-y-3">
            <div className="h-1 w-full bg-blue-100 overflow-hidden rounded">
              <div className="w-1/3 h-full bg-[#0066FF] animate-pulse" />
            </div>
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-10 bg-white rounded-md border border-[#E5E7EB] flex items-center px-4 space-x-4 animate-pulse">
                <div className="w-4 h-4 bg-slate-200 rounded" />
                <div className="w-28 h-3 bg-slate-200 rounded" />
                <div className="w-40 h-3 bg-slate-200 rounded" />
                <div className="w-40 h-3 bg-slate-200 rounded" />
                <div className="w-24 h-3 bg-slate-200 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="h-10 bg-[#F8F9FA] border-b border-[#E5E7EB] text-[12px] font-medium text-[#6B7280] uppercase tracking-wider">
                <th className="w-12 px-4 text-center border-r border-[#E5E7EB]">
                  <input
                    type="checkbox"
                    checked={selectedIds.size === rows.length}
                    onChange={(e) => handleSelectAll(e.target.checked)}
                    className="w-4 h-4 rounded text-[#0066FF] focus:ring-0 cursor-pointer"
                  />
                </th>
                <th className="px-4 border-r border-[#E5E7EB]">First name</th>
                <th className="px-4 border-r border-[#E5E7EB]">Created at</th>
                <th className="px-4 border-r border-[#E5E7EB]">Updated at</th>
                <th className="px-4">Last name</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB] bg-white text-[13px] text-[#111827]">
              {rows.map((row) => {
                const isSelected = selectedIds.has(row.id);
                const isRecipientActive = selectedRecipient?.userName === row.firstName;

                return (
                  <tr
                    key={row.id}
                    onClick={() => handleRowClick(row)}
                    className={`h-11 cursor-pointer transition-colors ${
                      isRecipientActive
                        ? 'bg-[#EFF6FF] border-l-4 border-l-[#0066FF]'
                        : isSelected
                        ? 'bg-[#F3F4F6]'
                        : 'hover:bg-[#F9FAFB]'
                    }`}
                  >
                    <td className="w-12 px-4 text-center border-r border-[#E5E7EB]">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={(e) => toggleRow(row.id, e)}
                        className="w-4 h-4 rounded text-[#0066FF] focus:ring-0 cursor-pointer"
                      />
                    </td>
                    <td className="px-4 font-medium border-r border-[#E5E7EB]">
                      {row.firstName}
                    </td>
                    <td className="px-4 text-[#6B7280] border-r border-[#E5E7EB]">
                      {row.createdAt}
                    </td>
                    <td className="px-4 text-[#6B7280] border-r border-[#E5E7EB]">
                      {row.updatedAt}
                    </td>
                    <td className="px-4 text-[#374151]">
                      {row.lastName}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
