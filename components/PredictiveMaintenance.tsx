
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
      recommendation: 'Replace Capacitor & Inspect Bearings' 
    },
    { 
      unitId: '3921', 
      location: 'Scarborough - Residential Hub', 
      failureRisk: 62.1, 
      daysToFailure: 14, 
      predictedIssue: 'Secondary Heat Exchanger Clog', 
      recommendation: 'Chemical Flush Required' 
    }
  ];

  return (
    <div className="glass rounded-[32px] p-8 border border-white/10 relative overflow-hidden h-full shadow-2xl bg-gradient-to-br from-slate-900/40 to-transparent">
      <div className="flex items-center justify-between mb-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-red-500/20 rounded-2xl flex items-center justify-center border border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
            <svg className="w-7 h-7 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Failure Forecast</h3>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Ambient AI Predictive Engine • Live Drift Analysis</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
             <div className="text-[9px] font-black uppercase text-red-500 flex items-center gap-1.5 justify-end mb-1">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
                Critical Drift Detect
             </div>
             <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Scanning Grid: Active</div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        {predictions.map((p) => (
          <div key={p.unitId} className="bg-white/5 border border-white/5 rounded-[24px] p-6 hover:border-red-500/30 transition-all duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-red-500/5 to-transparent"></div>
            
            <div className="flex justify-between items-start mb-6 relative z-10">
               <div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-2">Unit ID: {p.unitId} // {p.location}</div>
                  <div className="text-lg font-black text-white uppercase tracking-tight">{p.predictedIssue}</div>
               </div>
               <div className="text-right">
                  <div className="text-3xl font-black text-red-500 mono leading-none">{(p.failureRisk + jitter).toFixed(1)}%</div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mt-1">Failure Probability</div>
               </div>
            </div>

            {/* Simulated Technical Drift Map */}
            <div className="h-16 w-full flex items-end gap-1 mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
               {[...Array(24)].map((_, i) => (
                 <div 
                   key={i} 
                   className="flex-1 bg-red-500/50 rounded-full transition-all duration-700"
                   style={{ 
                     height: `${20 + (Math.sin(i * 0.5) * 30) + (Math.random() * 40)}%`,
                     opacity: i > 18 ? 1 : 0.3
                   }}
                 ></div>
               ))}
            </div>

            <div className="flex items-center gap-8 mb-6 relative z-10">
               <div className="flex-1">
                  <div className="h-2 w-full bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                     <div className="h-full bg-gradient-to-r from-amber-500 to-red-500 transition-all duration-1000 shadow-[0_0_10px_rgba(239,68,68,0.5)]" style={{ width: `${p.failureRisk}%` }}></div>
                  </div>
               </div>
               <div className="flex flex-col items-center justify-center bg-black/40 px-5 py-2 rounded-2xl border border-white/10 shadow-xl">
                  <span className="text-2xl font-black text-white mono leading-none">{p.daysToFailure}</span>
                  <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest mt-1">Days Left</span>
               </div>
            </div>

            <div className="p-4 bg-red-500/5 rounded-2xl border border-red-500/10 mb-6 group-hover:bg-red-500/10 transition-colors">
               <div className="flex items-center gap-2 mb-1">
                  <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <span className="text-[10px] font-black text-red-400 uppercase tracking-[0.2em]">C-Suite Recommendation</span>
               </div>
               <p className="text-[11px] font-bold text-slate-400 leading-relaxed uppercase tracking-tight italic">
                 {p.recommendation}
               </p>
            </div>

            <button 
              onClick={() => onSchedule(p.unitId)}
              className="w-full py-4 bg-red-600 hover:bg-red-500 text-white text-[11px] font-black uppercase tracking-[0.3em] rounded-2xl shadow-[0_10px_20px_rgba(239,68,68,0.3)] transition-all active:scale-95 flex items-center justify-center gap-3 group/btn"
            >
              <span>Dispatch Enterprise Response</span>
              <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-50">
         <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">Node Sync: 401 Field Units</span>
         <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Prediction Accuracy 99.4%</span>
      </div>
    </div>
  );
};
