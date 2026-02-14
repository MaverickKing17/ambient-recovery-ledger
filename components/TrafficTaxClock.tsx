
import React, { useState, useEffect } from 'react';

export const TrafficTaxClock: React.FC = () => {
  const [tax, setTax] = useState(2.48);
  const [recoveredOpportunity, setRecoveredOpportunity] = useState(1420);

  useEffect(() => {
    const interval = setInterval(() => {
      setTax(prev => prev + 0.04133);
      setRecoveredOpportunity(prev => prev + (Math.random() * 0.02));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass px-12 py-8 rounded-[40px] border border-white/5 relative group overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto bg-gradient-to-r from-slate-900/60 via-transparent to-slate-900/60">
      {/* Visual Identity Decor */}
      <div className="absolute top-0 right-0 p-6">
        <div className="flex items-center gap-2">
           <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
           <span className="text-[10px] uppercase font-black text-red-500 tracking-[0.4em]">EBITDA LEAKAGE ALERT</span>
        </div>
      </div>

      {/* Title / Logo Hub */}
      <div className="flex flex-col mb-8 md:mb-0">
        <h3 className="text-3xl font-black uppercase tracking-tighter text-white italic leading-none">Fleet Traffic Audit</h3>
        <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.3em] mt-2">DVP / 401 / 407 Corridor Intelligence</p>
      </div>

      <div className="h-20 w-[1px] bg-white/10 hidden md:block mx-4"></div>
      
      {/* Metric 1: Labor Leakage */}
      <div className="flex flex-col items-center md:items-start px-8">
        <span className="text-[11px] text-slate-500 uppercase font-black tracking-[0.2em] mb-2">Unbillable Labor Drain</span>
        <div className="flex items-baseline gap-3">
          <span className="text-5xl font-black text-white mono drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            ${tax.toFixed(2)}
          </span>
          <span className="text-red-500 text-[10px] font-black uppercase tracking-widest">/ HR / UNIT</span>
        </div>
        <div className="mt-3 flex gap-2">
           <span className="text-[8px] bg-red-500/10 text-red-400 px-2 py-0.5 rounded border border-red-500/20 font-black uppercase tracking-widest">Bottleneck: Don Valley</span>
        </div>
      </div>

      <div className="my-8 md:my-0 flex flex-col items-center">
         <div className="w-16 h-16 rounded-full border-2 border-sky-500/20 bg-sky-500/5 flex items-center justify-center relative">
            <div className="absolute inset-0 rounded-full border border-sky-400/30 animate-ping opacity-20"></div>
            <svg className="w-8 h-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
         </div>
         <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest mt-3">Live Fleet Matrix</span>
      </div>

      {/* Metric 2: Recovery Potential */}
      <div className="flex flex-col items-center md:items-end px-8">
        <span className="text-[11px] text-emerald-500 uppercase font-black tracking-[0.2em] mb-2">Recapturable Revenue</span>
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-black text-emerald-400 mono glow-emerald">
            ${recoveredOpportunity.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </span>
        </div>
        <div className="mt-3 flex gap-2">
           <span className="text-[8px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20 font-black uppercase tracking-widest">Reroute Optimization: Active</span>
        </div>
      </div>

      {/* Interactive Scan Line Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-sky-500/5 to-transparent skew-x-12 animate-[marquee_10s_linear_infinite]"></div>
      </div>
    </div>
  );
};
