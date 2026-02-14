
import React, { useState } from 'react';
import { RebateLead } from '../types';

interface Props {
  onClaim: (ids: string[]) => void;
}

export const RebateEngine: React.FC<Props> = ({ onClaim }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  // Added missing cashImpact property to comply with RebateLead interface
  const leads: RebateLead[] = [
    { id: '1042', location: 'Vaughan', reason: 'Pre-Failure State Detected', rebateAmount: 6500, status: 'Verified', cashImpact: 'Immediate' },
    { id: '4789', location: 'Markham', reason: 'Efficiency Drift (Critical)', rebateAmount: 6500, status: 'Verified', cashImpact: '30-Day' },
    { id: '5234', location: 'Richmond Hill', reason: 'System Degradation > 22%', rebateAmount: 6500, status: 'Verified', cashImpact: 'Immediate' },
  ];

  const toggleLead = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setSelectedIds(next);
  };

  const selectAll = () => {
    if (selectedIds.size === leads.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(leads.map(l => l.id)));
    }
  };

  const handleClaim = () => {
    if (selectedIds.size === 0) return;
    onClaim(Array.from(selectedIds));
    setSelectedIds(new Set());
  };

  return (
    <div className="glass rounded-2xl p-8 border border-white/10 flex flex-col h-full shadow-xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h2 className="text-xl font-black uppercase tracking-widest text-white">$6,500 REBATE ENGINE</h2>
        </div>
        <button 
          onClick={selectAll}
          className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-emerald-400 transition-colors"
        >
          {selectedIds.size === leads.length ? 'Deselect All' : 'Select All'}
        </button>
      </div>

      <div className="space-y-4 flex-1">
        {leads.map(lead => {
          const isSelected = selectedIds.has(lead.id);
          return (
            <div 
              key={lead.id} 
              onClick={() => toggleLead(lead.id)}
              className={`bg-slate-900/40 rounded-xl p-5 border cursor-pointer flex items-center gap-4 transition-all duration-300 ${
                isSelected ? 'border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'border-white/5 hover:border-white/20'
              }`}
            >
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${
                isSelected ? 'bg-emerald-500 border-emerald-500' : 'bg-slate-800 border-white/10'
              }`}>
                {isSelected && (
                  <svg className="w-3.5 h-3.5 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>

              <div className="space-y-1 flex-1">
                 <div className="flex items-center gap-3">
                   <h5 className="font-black text-slate-100 tracking-tight">Unit #{lead.id} — {lead.location}</h5>
                   {lead.status === 'Verified' && (
                     <div className="flex items-center gap-1 bg-emerald-500 text-slate-950 text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-widest shadow-[0_0_10px_rgba(16,185,129,0.4)]">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                        </svg>
                        Verified
                     </div>
                   )}
                 </div>
                 <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{lead.reason}</p>
                 <div className="flex items-center gap-4 mt-1">
                   <span className="text-[10px] text-emerald-400 font-black uppercase tracking-widest">Qualified for Ontario HRS Credit</span>
                   <span className={`text-[9px] px-1.5 py-0.5 rounded border font-black uppercase tracking-tighter ${lead.cashImpact === 'Immediate' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-slate-800 border-white/10 text-slate-400'}`}>
                     {lead.cashImpact} Impact
                   </span>
                 </div>
              </div>
              
              <div className="text-right">
                <span className="text-sm font-black mono text-emerald-400">$6,500</span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/5">
        <button 
          onClick={handleClaim}
          disabled={selectedIds.size === 0}
          className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
            selectedIds.size > 0 
              ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-900 shadow-[0_0_20px_rgba(16,185,129,0.4)] active:scale-95' 
              : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
          }`}
        >
          {selectedIds.size > 0 
            ? `Claim Selected (${selectedIds.size})` 
            : 'Select Leads to Claim'}
        </button>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[9px] text-slate-600 font-black uppercase tracking-[0.3em]">Audited by CleanTech Matrix</span>
          <div className="flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-emerald-500/30 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-emerald-500/60 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full pulse-indicator"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
