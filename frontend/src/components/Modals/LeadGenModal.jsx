import React from 'react';
import { X, Check } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const LeadGenModal = () => {
  const { showSettingsModal, setShowSettingsModal, showUseCasesModal, setShowUseCasesModal } = useApp();

  if (!showSettingsModal && !showUseCasesModal) return null;

  const isSettings = showSettingsModal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 backdrop-blur-xs p-4 animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-md p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-900">
            {isSettings ? 'Lead Generation Settings' : 'Use Cases & Templates'}
          </h3>
          <button
            onClick={() => { setShowSettingsModal(false); setShowUseCasesModal(false); }}
            className="w-6 h-6 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-400"
          >
            <X size={15} />
          </button>
        </div>

        {isSettings ? (
          <div className="space-y-3 text-xs text-slate-600">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-brand-blue" />
              <span>Auto-verify work email addresses during enrichment</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-brand-blue" />
              <span>Prioritize 1st & 2nd degree LinkedIn network connections</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-brand-blue" />
              <span>Sync newly enrolled leads directly to active sales campaigns</span>
            </label>
          </div>
        ) : (
          <div className="space-y-2 text-xs">
            {['SaaS B2B Outbound Cadence', 'VC & Angel Investor Outreach', 'Talent Recruitment Pipeline'].map((uc, i) => (
              <div key={i} className="p-2.5 rounded-lg border border-slate-200 hover:border-brand-blue cursor-pointer transition-colors flex items-center justify-between">
                <span className="font-medium text-slate-800">{uc}</span>
                <span className="text-[10px] text-brand-blue font-semibold">Use Template</span>
              </div>
            ))}
          </div>
        )}

        <div className="pt-2 flex justify-end space-x-2">
          <button
            onClick={() => { setShowSettingsModal(false); setShowUseCasesModal(false); }}
            className="px-4 py-1.5 rounded-lg bg-brand-blue text-white text-xs font-semibold shadow-xs"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};
