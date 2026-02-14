
import React, { useState } from 'react';
import { RebateLead } from '../types';

interface Props {
  onClaim: (ids: string[]) => void;
}

export const RebateEngine: React.FC<Props> = ({ onClaim }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const leads: RebateLead[] = [
    { id: '1042', location: 'Vaughan Hub', reason: 'AHRI 205843192 Match', rebateAmount: 6500, status: 'Verified', cashImpact: 'Immediate' },
    { id: '4789', location: 'Markham North', reason: 'Heat Pump Hybrid Sync', rebateAmount: 6500, status: 'Verified', cashImpact: '30-Day' },
    { id: '5234', location: 'Richmond Hill East', reason: 'Tier-1 Efficiency Delta', rebateAmount: 6500, status: 'Verified', cashImpact: 'Immediate' },
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

  const handleClaim = () => {
    if (selectedIds.size === 0) return;
    onClaim(Array.from(selectedIds));
    setSelectedIds(new Set());
  };

  const totalValue = Array.from(selectedIds).length * 6500;

  return (
    <div className="glass rounded-[40px] p-10 border border-white/10 flex flex-col h-full shadow-2xl relative overflow-hidden bg-gradient-to-b from-slate-900/60 to-transparent">
      {/* Decorative Branding */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>
      
      <div className="flex items-center justify-between mb-10">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white italic leading-tight">Ontario Rebate Engine</h2>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Active Audit Mode</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Enbridge HER+ Protocol</span>
          </div>
        </div>
        <div className="text-right">
          <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Pipeline Yield</div>
          <div className="text-2xl font-black text-white mono">${(leads.length * 6500).toLocaleString()}</div>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        {leads.map(lead => {
          const isSelected = selectedIds.has(lead.id);
          return (
            <div 
              key={lead.id} 
              onClick={() => toggleLead(lead.id)}
              className={`group relative rounded-[28px] p-6 border transition-all duration-500 cursor-pointer overflow-hidden ${
                isSelected 
                  ? 'bg-emerald-500/10 border-emerald-500 shadow-[0_0_40px_rgba(16,185,129,0.15)] ring-1 ring-emerald-500/50' 
                  : 'bg-black/40 border-white/5 hover:border-emerald-500/30'
              }`}
            >
              {/* Animated selection glow for C-Suite polish */}
              {isSelected && (
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-transparent animate-pulse pointer-events-none"></div>
              )}
              
              <div className="flex justify-between items-start relative z-10">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all duration-300 ${
                      isSelected ? 'bg-emerald-500 border-emerald-500 scale-110' : 'border-white/20'
                    }`}>
                      {isSelected ? (
                        <svg className="w-4 h-4 text-slate-950 animate-in zoom-in duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                         <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                      )}
                    </div>
                    <span className={`text-sm font-black tracking-tight uppercase italic transition-colors ${isSelected ? 'text-emerald-400' : 'text-white'}`}>
                      {lead.location}
                    </span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{lead.reason}</p>
                  <div className="flex gap-2">
                    <span className="text-[8px] bg-black/50 px-2 py-0.5 rounded text-emerald-400 font-black uppercase tracking-tighter">98% Confidence Score</span>
                    <span className="text-[8px] bg-black/50 px-2 py-0.5 rounded text-sky-400 font-black uppercase tracking-tighter">Verified AHRI Match</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-xl font-black mono leading-none transition-colors ${isSelected ? 'text-white' : 'text-emerald-400'}`}>
                    ${lead.rebateAmount.toLocaleString()}
                  </div>
                  <div className="text-[9px] font-black text-slate-600 uppercase tracking-widest mt-1">Cash Value</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-10 pt-8 border-t border-white/5 flex flex-col gap-4">
        <div className="flex justify-between items-center mb-2 px-2">
          <span className="text-[11px] font-black uppercase text-slate-500 tracking-[0.3em]">Total Recapture Target</span>
          <span className="text-xl font-black text-white mono tracking-tighter tabular-nums">${totalValue.toLocaleString()}</span>
        </div>
        <button 
          onClick={handleClaim}
          disabled={selectedIds.size === 0}
          className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all relative overflow-hidden group ${
            selectedIds.size > 0 
              ? 'bg-emerald-500 text-slate-950 shadow-[0_20px_40px_rgba(16,185,129,0.3)] hover:scale-[1.02] active:scale-95 cursor-pointer' 
              : 'bg-slate-800 text-slate-600 cursor-not-allowed opacity-50'
          }`}
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <span className="relative z-10">
            {selectedIds.size > 0 ? `Initialize Bulk Filing Protocol (${selectedIds.size})` : 'Select Claims for Injection'}
          </span>
        </button>
      </div>
    </div>
  );
};
