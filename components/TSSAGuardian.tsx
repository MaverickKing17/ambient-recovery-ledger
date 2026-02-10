
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
    <div className="glass rounded-[40px] p-10 border border-white/10 relative overflow-hidden h-full shadow-2xl flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-lg">
              <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-extrabold uppercase tracking-tighter text-white">TSSA Guardian</h3>
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">Liability Drift Monitoring</p>
            </div>
          </div>
          <div className="w-3 h-3 bg-emerald-500 rounded-full pulse-indicator"></div>
        </div>

        <div className="space-y-4">
          {techs.map((tech, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
              <div className="flex items-center gap-4">
                 <div className={`w-2 h-2 rounded-full ${tech.status === 'valid' ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]' : 'bg-amber-500 pulse-red shadow-[0_0_10px_rgba(245,158,11,0.5)]'}`}></div>
                 <div>
                    <div className="text-sm font-bold text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">{tech.name}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{tech.license}</div>
                 </div>
              </div>
              <div className="text-right">
                 <div className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Expires</div>
                 <div className={`text-xs font-black mono tracking-tighter ${tech.status === 'warning' ? 'text-amber-500' : 'text-slate-300'}`}>{tech.expiry}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 flex items-center justify-between p-6 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 shadow-inner">
         <span className="text-[11px] font-black uppercase tracking-[0.2em] text-emerald-500">Legal Operational Readiness</span>
         <span className="text-2xl font-black text-emerald-400 mono tracking-tighter">100%</span>
      </div>
    </div>
  );
};
