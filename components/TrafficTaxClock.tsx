
import React, { useState, useEffect } from 'react';

export const TrafficTaxClock: React.FC = () => {
  const [tax, setTax] = useState(2.48);
  const [recoveredOpportunity, setRecoveredOpportunity] = useState(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      // $2.48/min = $0.04133 per second leakage
      setTax(prev => prev + 0.04133);
      // Simulating real-time AI rerouting recovery
      setRecoveredOpportunity(prev => prev + (Math.random() * 0.02));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass px-10 py-6 rounded-[24px] border border-white/5 relative group overflow-hidden shadow-2xl flex items-center justify-between w-full max-w-4xl">
      <div className="absolute top-0 right-0 p-3">
        <div className="flex items-center gap-1.5">
           <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
           <span className="text-[9px] uppercase font-black text-red-500 tracking-widest">Grid Leakage</span>
        </div>
      </div>
      
      <div className="flex flex-col items-start border-r border-white/10 pr-12">
        <span className="text-[10px] text-slate-500 uppercase font-black tracking-[0.3em] mb-1">Unbillable Idle Cost</span>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-white mono drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            ${tax.toFixed(2)}
          </span>
          <span className="text-red-500 text-xs font-bold uppercase tracking-tighter">/ hr / van</span>
        </div>
        <span className="text-[9px] text-slate-600 mt-2 uppercase tracking-widest font-black">Live DVP/401/407 Telemetry</span>
      </div>

      <div className="flex flex-col items-center px-12">
         <div className="w-12 h-12 rounded-full border border-sky-500/30 bg-sky-500/10 flex items-center justify-center mb-1">
            <svg className="w-6 h-6 text-sky-400 animate-spin-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
         </div>
         <span className="text-[8px] font-black text-sky-400 uppercase tracking-widest">Yield AI Active</span>
      </div>

      <div className="flex flex-col items-end">
        <span className="text-[10px] text-emerald-500 uppercase font-black tracking-[0.3em] mb-1">Recapturable Revenue</span>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-black text-emerald-400 mono glow-emerald">
            ${recoveredOpportunity.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <span className="text-[9px] text-slate-600 mt-2 uppercase tracking-widest font-black text-right">Reroute Optimization Potential</span>
      </div>
    </div>
  );
};
