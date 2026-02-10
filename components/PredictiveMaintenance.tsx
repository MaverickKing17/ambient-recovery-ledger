
import React from 'react';
import { PredictionNode } from '../types';

interface Props {
  onSchedule: (unitId: string) => void;
}

export const PredictiveMaintenance: React.FC<Props> = ({ onSchedule }) => {
  const predictions: PredictionNode[] = [
    { 
      unitId: '1042', 
      location: 'Vaughan - Commercial Bay 4', 
      failureRisk: 88, 
      daysToFailure: 4, 
      predictedIssue: 'Blower Motor Amperage Spike', 
      recommendation: 'Replace Capacitor & Inspect Bearings' 
    },
    { 
      unitId: '3921', 
      location: 'Scarborough - Residential Hub', 
      failureRisk: 62, 
      daysToFailure: 14, 
      predictedIssue: 'Secondary Heat Exchanger Clog', 
      recommendation: 'Chemical Flush Required' 
    }
  ];

  return (
    <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden h-full shadow-2xl bg-gradient-to-br from-slate-900/40 to-transparent">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center border border-red-500/20">
            <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-black uppercase tracking-tighter text-white">Failure Forecast</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ambient AI Predictive Engine</p>
          </div>
        </div>
        <div className="text-[9px] font-black uppercase tracking-[0.2em] text-red-500 flex items-center gap-1.5">
           <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
           Critical Drift Detected
        </div>
      </div>

      <div className="space-y-6">
        {predictions.map((p) => (
          <div key={p.unitId} className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:border-red-500/30 transition-all group">
            <div className="flex justify-between items-start mb-4">
               <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Unit #{p.unitId} — {p.location}</div>
                  <div className="text-sm font-black text-white uppercase">{p.predictedIssue}</div>
               </div>
               <div className="text-right">
                  <div className="text-2xl font-black text-red-500 mono">{p.failureRisk}%</div>
                  <div className="text-[9px] font-bold text-slate-500 uppercase">Risk Level</div>
               </div>
            </div>

            <div className="flex items-center gap-6 mb-6">
               <div className="flex-1">
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-red-500 transition-all duration-1000" style={{ width: `${p.failureRisk}%` }}></div>
                  </div>
               </div>
               <div className="flex flex-col items-center justify-center bg-slate-900 px-4 py-1 rounded-lg border border-white/5">
                  <span className="text-[18px] font-black text-white mono">{p.daysToFailure}</span>
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">Days Left</span>
               </div>
            </div>

            <div className="p-3 bg-red-500/5 rounded-xl border border-red-500/10 mb-4">
               <p className="text-[10px] font-medium text-slate-400 leading-relaxed italic">
                 <span className="font-black text-red-400 uppercase">Action:</span> {p.recommendation}
               </p>
            </div>

            <button 
              onClick={() => onSchedule(p.unitId)}
              className="w-full py-3 bg-red-500 hover:bg-red-400 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl shadow-[0_0_20px_rgba(239,68,68,0.2)] transition-all active:scale-95"
            >
              Dispatch Proactive Maintenance
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-50">
         <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">ServiceTitan Auto-Sync</span>
         <span className="text-[9px] font-black text-emerald-500 uppercase">Queue Clear</span>
      </div>
    </div>
  );
};
