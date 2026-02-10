
import React from 'react';
import { TechCompliance } from '../types';

export const TSSAGuardian: React.FC = () => {
  const techs: TechCompliance[] = [
    { name: 'Marcus R.', license: 'G1 Gasfitter', expiry: 'Jan 2026', status: 'valid' },
    { name: 'Sarah L.', license: 'OBT-1', expiry: 'Feb 2025', status: 'warning' },
    { name: 'David W.', license: '313A Refrigeration', expiry: 'Oct 2025', status: 'valid' },
    { name: 'Kevin J.', license: 'G2 Gasfitter', expiry: 'Dec 2024', status: 'valid' },
  ];

  return (
    <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden h-full shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-black uppercase tracking-tighter text-white">TSSA Guardian</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Liability Drift Monitoring</p>
          </div>
        </div>
        <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full pulse-indicator"></div>
      </div>

      <div className="space-y-3">
        {techs.map((tech, i) => (
          <div key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-3">
               <div className={`w-1.5 h-1.5 rounded-full ${tech.status === 'valid' ? 'bg-emerald-500' : 'bg-amber-500 pulse-red'}`}></div>
               <div>
                  <div className="text-xs font-black text-white uppercase">{tech.name}</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{tech.license}</div>
               </div>
            </div>
            <div className="text-right">
               <div className="text-[9px] font-black text-slate-500 uppercase">Expires</div>
               <div className={`text-[10px] font-black mono ${tech.status === 'warning' ? 'text-amber-500' : 'text-slate-300'}`}>{tech.expiry}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
         <span className="text-[9px] font-black uppercase tracking-widest text-emerald-500">Legal Operational Readiness</span>
         <span className="text-lg font-black text-emerald-400 mono">100%</span>
      </div>
    </div>
  );
};
