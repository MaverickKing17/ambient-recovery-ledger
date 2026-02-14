
import React, { useState, useEffect } from 'react';
import { UnitVitalSigns } from '../types';

interface Props {
  onSync: (unit: string) => void;
}

export const VitalSignsGrid: React.FC<Props> = ({ onSync }) => {
  const [units, setUnits] = useState<UnitVitalSigns[]>([
    { id: '1042', location: 'Vaughan', heatingPower: 88, systemBreathing: 62, marketGrade: 'C', efficiency: 62, crmSynced: false, alert: 'Restricted - Call Customer', recurringRevOpportunity: 45.00 },
    { id: '2156', location: 'Mississauga', heatingPower: 95, systemBreathing: 89, marketGrade: 'A', efficiency: 92, crmSynced: true, recurringRevOpportunity: 0 },
    { id: '3421', location: 'Brampton', heatingPower: 76, systemBreathing: 71, marketGrade: 'B', efficiency: 74, crmSynced: false, alert: 'Moderate Efficiency', recurringRevOpportunity: 29.99 },
    { id: '4789', location: 'Markham', heatingPower: 91, systemBreathing: 55, marketGrade: 'C', efficiency: 58, crmSynced: false, alert: 'Electric Amber: Critical Restriction', recurringRevOpportunity: 85.00 },
    { id: '5234', location: 'Richmond Hill', heatingPower: 82, systemBreathing: 78, marketGrade: 'B', efficiency: 80, crmSynced: true },
    { id: '6891', location: 'Oakville', heatingPower: 93, systemBreathing: 92, marketGrade: 'A', efficiency: 95, crmSynced: true },
  ]);

  const [syncingId, setSyncingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  // Simulate real-time RMR fluctuations for "live" feel
  useEffect(() => {
    const interval = setInterval(() => {
      setUnits(prev => prev.map(unit => {
        if (unit.recurringRevOpportunity && unit.recurringRevOpportunity > 0) {
          const drift = (Math.random() - 0.5) * 0.02;
          return { ...unit, recurringRevOpportunity: Math.max(0, unit.recurringRevOpportunity + drift) };
        }
        return unit;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLocalSync = (id: string, location: string) => {
    setSyncingId(id);
    setTimeout(() => {
      setUnits(prev => prev.map(u => u.id === id ? { ...u, crmSynced: true } : u));
      setSyncingId(null);
      setSuccessId(id);
      onSync(location);
      setTimeout(() => setSuccessId(null), 3000);
    }, 1200);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
      {units.map(unit => {
        const isSyncing = syncingId === unit.id;
        const isSuccess = successId === unit.id;
        const hasRMR = !!unit.recurringRevOpportunity && unit.recurringRevOpportunity > 0;

        return (
          <div key={unit.id} className={`glass rounded-3xl p-6 border transition-all duration-500 relative overflow-hidden group flex flex-col justify-between ${
            isSuccess ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.2)] scale-[1.02]' : 
            isSyncing ? 'border-sky-500/50 bg-sky-500/5' : 
            hasRMR ? 'border-sky-500/20 shadow-[0_10px_40px_rgba(14,165,233,0.05)]' : 'border-white/10 hover:border-emerald-500/30'
          }`}>
            
            {/* RMR High-Visibility Badge */}
            {hasRMR && (
              <div className="absolute top-0 left-0 pt-2 pl-6 z-20">
                <div className="bg-sky-500 text-white text-[8px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-b-xl shadow-[0_4px_10px_rgba(14,165,233,0.4)] animate-in slide-in-from-top-4 duration-700">
                  RMR Priority Node
                </div>
              </div>
            )}

            <div className="relative z-10 pt-4">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">Unit #{unit.id}</span>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter">{unit.location}</h4>
                </div>
                <div className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center font-black border transition-all duration-500 ${
                  unit.marketGrade === 'A' ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-400' :
                  unit.marketGrade === 'B' ? 'bg-amber-500/10 border-amber-500/40 text-amber-400' :
                  'bg-red-500/10 border-red-500/40 text-red-400'
                }`}>
                  <span className="text-[8px] uppercase tracking-widest mb-0.5 opacity-50">Grade</span>
                  <span className="text-xl leading-none">{unit.marketGrade}</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-400">Heating Output</span>
                    <span className="text-slate-200 mono">{unit.heatingPower}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                    <div className="h-full bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)]" style={{ width: `${unit.heatingPower}%` }}></div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                    <span className="text-slate-400">Air Exchange Cycle</span>
                    <span className="text-slate-200 mono">{unit.systemBreathing}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                    <div className={`h-full rounded-full transition-all ${
                      unit.systemBreathing < 70 ? 'bg-red-500' : unit.systemBreathing < 85 ? 'bg-amber-500' : 'bg-emerald-500'
                    }`} style={{ width: `${unit.systemBreathing}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Prominent RMR Section with Real-Time Data Binding */}
              {hasRMR ? (
                <div className="relative group/rmr p-5 bg-sky-500/5 border border-sky-500/20 rounded-[24px] mb-6 overflow-hidden transition-all hover:bg-sky-500/10 hover:border-sky-500/40 shadow-inner">
                  {/* Subtle animated light sweep */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-400/40 to-transparent animate-[marquee_3s_linear_infinite]"></div>
                  
                  <div className="flex justify-between items-end">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></div>
                        <span className="text-[9px] font-black text-sky-400 uppercase tracking-[0.2em]">Live Recurring Opportunity</span>
                      </div>
                      <div className="text-3xl font-black text-white mono tracking-tighter leading-tight tabular-nums">
                        +${unit.recurringRevOpportunity?.toFixed(2)}<span className="text-[10px] text-slate-500 font-bold ml-1">/MO</span>
                      </div>
                    </div>
                    <div className="text-right">
                       <span className="block text-[8px] font-black text-slate-500 uppercase tracking-widest mb-1">Contract Yield</span>
                       <div className="px-2 py-0.5 bg-sky-500/10 border border-sky-500/20 rounded text-[8px] font-black text-sky-400 uppercase tracking-tighter">ELITE PLAN</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                    <p className="text-[8px] text-sky-200/40 uppercase font-black tracking-widest leading-none">Auto-Sync Protocol Active</p>
                    <div className="flex items-center gap-1">
                       <span className="text-[7px] text-sky-500 font-black">MARKET_INDEX_v2</span>
                       <svg className="w-3 h-3 text-sky-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                       </svg>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="pt-4 border-t border-white/5 relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
                  unit.crmSynced ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 
                  isSyncing ? 'bg-sky-400 animate-pulse' : 'bg-slate-700'
                }`}></div>
                <span className={`text-[9px] uppercase font-black tracking-widest ${
                  unit.crmSynced ? 'text-emerald-400' : isSyncing ? 'text-sky-400' : 'text-slate-600'
                }`}>
                  {isSyncing ? 'Syncing...' : unit.crmSynced ? 'Synced' : 'Offline'}
                </span>
              </div>

              {(!unit.crmSynced && !isSyncing) ? (
                <button onClick={() => handleLocalSync(unit.id, unit.location)} className="text-[9px] font-black uppercase tracking-widest text-emerald-500 hover:text-white transition-colors">
                  Sync Ledger
                </button>
              ) : isSuccess ? (
                 <span className="text-[9px] font-black text-emerald-500 uppercase tracking-widest animate-in fade-in slide-in-from-right-2">Verified</span>
              ) : null}
            </div>

            {unit.alert && !isSuccess && (
              <div className={`mt-3 text-[9px] uppercase font-black tracking-widest p-2 rounded-lg text-center ${
                unit.efficiency < 70 ? 'bg-red-500/20 text-red-500 border border-red-500/10' : 'bg-amber-500/10 text-amber-500 border border-amber-500/10'
              }`}>
                {unit.alert}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
