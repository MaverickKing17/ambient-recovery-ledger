
import React, { useState, useEffect } from 'react';
import { PredictionNode } from '../types';

interface Props {
  onSchedule: (unitId: string) => void;
}

export const PredictiveMaintenance: React.FC<Props> = ({ onSchedule }) => {
  const [jitter, setJitter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setJitter(Math.random() * 0.5);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const predictions: PredictionNode[] = [
    { 
      unitId: '1042', 
      location: 'Vaughan - Commercial Bay 4', 
      failureRisk: 88.4, 
      daysToFailure: 4, 
      predictedIssue: 'Blower Motor Amperage Spike', 
      recommendation: 'Replace Capacitor & Inspect Bearings',
      lossAvoidanceValue: 4200 
    },
    { 
      unitId: '3921', 
      location: 'Scarborough - Residential Hub', 
      failureRisk: 62.1, 
      daysToFailure: 14, 
      predictedIssue: 'Secondary Heat Exchanger Clog', 
      recommendation: 'Chemical Flush Required',
      lossAvoidanceValue: 1850 
    }
  ];

  return (
    <div className="glass rounded-[40px] p-8 border border-white/10 relative overflow-hidden h-full shadow-2xl bg-gradient-to-br from-slate-900/40 to-transparent flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Failure Forecast</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Live Drift Analysis • Loss Mitigation</p>
          </div>
        </div>
        <div className="text-right">
             <div className="text-[9px] font-black uppercase text-red-500 flex items-center gap-1.5 justify-end mb-1">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
                Critical Detect
             </div>
             <div className="text-[18px] font-black text-white mono">${predictions.reduce((acc, p) => acc + p.lossAvoidanceValue, 0).toLocaleString()} <span className="text-[10px] text-slate-500">AT RISK</span></div>
        </div>
      </div>

      <div className="space-y-6 flex-1">
        {predictions.map((p) => (
          <div key={p.unitId} className="bg-white/5 border border-white/5 rounded-[24px] p-6 hover:border-red-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="flex justify-between items-start mb-4 relative z-10">
               <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">Unit ID: {p.unitId} // {p.location}</div>
                  <div className="text-lg font-black text-white uppercase tracking-tight">{p.predictedIssue}</div>
               </div>
               <div className="text-right">
                  <div className="text-2xl font-black text-red-500 mono leading-none">{(p.failureRisk + jitter).toFixed(1)}%</div>
                  <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1">Risk Index</div>
               </div>
            </div>

            <div className="flex items-center gap-6 mb-4 relative z-10">
               <div className="flex-1">
                  <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                     <div className="h-full bg-gradient-to-r from-amber-500 to-red-500 transition-all duration-1000 shadow-[0_0_10px_rgba(239,68,68,0.5)]" style={{ width: `${p.failureRisk}%` }}></div>
                  </div>
               </div>
               <div className="flex gap-4">
                  <div className="bg-black/40 px-3 py-1.5 rounded-xl border border-white/10 text-center min-w-[60px]">
                     <span className="text-lg font-black text-white mono block leading-none">{p.daysToFailure}</span>
                     <span className="text-[7px] font-black text-slate-500 uppercase tracking-widest">Days Left</span>
                  </div>
                  <div className="bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 text-center min-w-[80px]">
                     <span className="text-lg font-black text-emerald-400 mono block leading-none">${p.lossAvoidanceValue}</span>
                     <span className="text-[7px] font-black text-emerald-500 uppercase tracking-widest">Avoidance</span>
                  </div>
               </div>
            </div>

            <button 
              onClick={() => onSchedule(p.unitId)}
              className="w-full py-3.5 bg-red-600 hover:bg-red-500 text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-xl shadow-[0_10px_20px_rgba(239,68,68,0.3)] transition-all active:scale-95 flex items-center justify-center gap-3 group/btn"
            >
              <span>Dispatch Yield Protection</span>
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-50">
         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Consolidated Field Telemetry</span>
         <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">99.4% Forecast Reliability</span>
      </div>
    </div>
  );
};
