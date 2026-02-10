
import React from 'react';
import { RebateLead } from '../types';

interface Props {
  onClaim: () => void;
}

export const RebateEngine: React.FC<Props> = ({ onClaim }) => {
  const leads: RebateLead[] = [
    { id: '1042', location: 'Vaughan', reason: 'Pre-Failure State Detected', rebateAmount: 6500, status: 'Verified' },
    { id: '4789', location: 'Markham', reason: 'Efficiency Drift (Critical)', rebateAmount: 6500, status: 'Verified' },
    { id: '5234', location: 'Richmond Hill', reason: 'System Degradation > 22%', rebateAmount: 6500, status: 'Verified' },
  ];

  return (
    <div className="glass rounded-2xl p-8 border border-white/10 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-8">
        <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h2 className="text-xl font-bold uppercase tracking-widest">$6,500 Rebate Engine</h2>
      </div>

      <div className="space-y-4 flex-1">
        {leads.map(lead => (
          <div key={lead.id} className="bg-slate-900/40 rounded-xl p-5 border border-white/5 flex items-center justify-between group hover:border-emerald-500/30 transition-all">
            <div className="space-y-1">
               <div className="flex items-center gap-2">
                 <svg className="w-4 h-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                 </svg>
                 <h5 className="font-bold">Unit #{lead.id} ({lead.location})</h5>
               </div>
               <p className="text-xs text-slate-500 uppercase tracking-wider">{lead.reason}</p>
               <span className="text-xs text-emerald-400 font-bold block mt-1">Qualified for $6,500 Ontario HRS Rebate</span>
            </div>
            <button 
              onClick={onClaim}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 px-6 py-3 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95"
            >
              Create Quote
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium uppercase tracking-[0.2em]">Verified Carbon Eligibility 100%</span>
        <div className="flex gap-1">
          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
          <div className="w-1 h-1 bg-emerald-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
