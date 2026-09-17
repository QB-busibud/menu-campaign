import React from 'react';
import { X, CheckCircle2, Loader2, Play } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const PendingJobsDrawer = () => {
  const { pendingJobsDrawerOpen, setPendingJobsDrawerOpen } = useApp();

  if (!pendingJobsDrawerOpen) return null;

  const jobs = [
    { id: 1, title: 'LinkedIn Profile Scraper - Untitled Worksheet 06', status: 'Running', progress: '65%', leads: '9/14' },
    { id: 2, title: 'Email Verifier Service - Domain MX Audit', status: 'Completed', progress: '100%', leads: '14/14' },
    { id: 3, title: 'Company Intelligence Enrichment API', status: 'Queued', progress: '0%', leads: '0/14' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/30 backdrop-blur-xs animate-in fade-in">
      <div className="w-80 bg-white h-full shadow-2xl border-l border-[#E5E7EB] flex flex-col p-4 select-none">
        <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
          <h3 className="text-sm font-bold text-[#111827]">
            Pending Jobs & Scrapers
          </h3>
          <button
            onClick={() => setPendingJobsDrawerOpen(false)}
            className="w-7 h-7 rounded-md hover:bg-slate-100 flex items-center justify-center text-[#6B7280]"
          >
            <X size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-3 space-y-3">
          {jobs.map(job => (
            <div key={job.id} className="p-3 rounded-lg border border-[#E5E7EB] bg-white shadow-2xs space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#111827]">{job.title}</span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#6B7280]">
                <span>Status: <strong className="text-[#111827]">{job.status}</strong></span>
                <span>{job.leads} processed</span>
              </div>
              <div className="w-full bg-[#E5E7EB] h-1.5 rounded-full overflow-hidden">
                <div
                  className={`h-full ${job.status === 'Completed' ? 'bg-[#10B981]' : job.status === 'Running' ? 'bg-[#0066FF]' : 'bg-slate-400'}`}
                  style={{ width: job.progress }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
