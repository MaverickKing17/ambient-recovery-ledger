
import React from 'react';
import { UnitVitalSigns } from '../types';

interface Props {
  onSync: (unit: string) => void;
}

export const VitalSignsGrid: React.FC<Props> = ({ onSync }) => {
  const units: UnitVitalSigns[] = [
    { id: '1042', location: 'Vaughan', heatingPower: 88, systemBreathing: 62, marketGrade: 'C', efficiency: 62, crmSynced: false, alert: 'Restricted - Call Customer' },
    { id: '2156', location: 'Mississauga', heatingPower: 95, systemBreathing: 89, marketGrade: 'A', efficiency: 92, crmSynced: true },
    { id: '3421', location: 'Brampton', heatingPower: 76, systemBreathing: 71, marketGrade: 'B', efficiency: 74, crmSynced: false, alert: 'Moderate Efficiency' },
    { id: '4789', location: 'Markham', heatingPower: 91, systemBreathing: 55, marketGrade: 'C', efficiency: 58, crmSynced: false, alert: 'Electric Amber: Critical Restriction' },
    { id: '5234', location: 'Richmond Hill', heatingPower: 82, systemBreathing: 78, marketGrade: 'B', efficiency: 80, crmSynced: true },
    { id: '6891', location: 'Oakville', heatingPower: 93, systemBreathing: 92, marketGrade: 'A', efficiency: 95, crmSynced: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {units.map(unit => (
        <div key={unit.id} className="glass rounded-2xl p-6 border border-white/10 group transition-all hover:border-emerald-500/30">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Unit #{unit.id}</span>
              <h4 className="text-xl font-bold">{unit.location}</h4>
            </div>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-black text-xl border ${
              unit.marketGrade === 'A' ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400' :
              unit.marketGrade === 'B' ? 'bg-amber-500/20 border-amber-500/50 text-amber-400' :
              'bg-red-500/20 border-red-500/50 text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]'
            }`}>
              {unit.marketGrade}
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
                <span className="text-slate-400 flex items-center gap-1">
                   <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                   Heating Power
                </span>
                <span className="text-slate-300">{unit.heatingPower}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${unit.heatingPower}%` }}></div>
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold uppercase tracking-tighter">
                <span className="text-slate-400 flex items-center gap-1">
                   <svg className="w-3 h-3 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                   </svg>
                   System Breathing
                </span>
                <span className="text-slate-300">{unit.systemBreathing}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className={`h-full rounded-full transition-all ${
                  unit.systemBreathing < 70 ? 'bg-red-500' : unit.systemBreathing < 85 ? 'bg-amber-500' : 'bg-emerald-500'
                }`} style={{ width: `${unit.systemBreathing}%` }}></div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <div className={`w-2 h-2 rounded-full ${unit.crmSynced ? 'bg-emerald-500' : 'bg-slate-600'}`}></div>
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-tighter">
                {unit.crmSynced ? 'Synced to CRM' : 'Not Synced'}
              </span>
            </div>
            {!unit.crmSynced && (
               <button 
                 onClick={() => onSync(unit.location)}
                 className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
               >
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                 </svg>
                 Sync Now
               </button>
            )}
          </div>
          
          {unit.alert && (
            <div className={`mt-3 text-[10px] uppercase font-bold tracking-widest p-1.5 rounded text-center ${
              unit.efficiency < 70 ? 'bg-red-500/20 text-red-500 border border-red-500/20 pulse-red' : 'bg-amber-500/20 text-amber-500'
            }`}>
              {unit.alert}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
