
import React, { useState, useEffect } from 'react';

export const TrafficTaxClock: React.FC = () => {
  const [tax, setTax] = useState(2.48);

  useEffect(() => {
    const interval = setInterval(() => {
      // $2.48/min = $0.04133 per second
      setTax(prev => prev + 0.04133);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass px-10 py-6 rounded-2xl border border-white/5 relative group overflow-hidden">
      <div className="absolute top-0 right-0 p-3">
        <div className="flex items-center gap-1.5">
           <div className="w-2 h-2 bg-red-500 rounded-full pulse-red"></div>
           <span className="text-[10px] uppercase font-bold text-red-500 tracking-tighter">Live</span>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <span className="text-xs text-slate-500 uppercase font-bold tracking-[0.3em] mb-1">Live Traffic Tax</span>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-amber-500 mono">
            ${tax.toFixed(2)}
          </span>
          <svg className="w-5 h-5 text-amber-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        </div>
        <span className="text-[10px] text-slate-500 mt-2 uppercase tracking-widest font-medium">Unbillable Labor Leak (401/DVP/407)</span>
      </div>
    </div>
  );
};
