
import React from 'react';

export const StormSurgePredictor: React.FC = () => {
  return (
    <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden h-full shadow-2xl bg-gradient-to-br from-slate-900/40 to-transparent">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center border border-sky-500/20">
          <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-black uppercase tracking-tighter text-white">Storm-Surge Intelligence</h3>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Predictive Demand Forecast</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative p-6 bg-red-500/10 border border-red-500/20 rounded-2xl overflow-hidden group">
          <div className="absolute top-0 right-0 p-3">
             <div className="text-[9px] font-black uppercase text-red-500 pulse-red">Extreme Alert</div>
          </div>
          <div className="text-[10px] font-black uppercase text-slate-500 mb-1">Forecast Event (48h)</div>
          <div className="text-2xl font-black text-white mb-2 uppercase tracking-tighter">-22°C Polar Vortex</div>
          <div className="flex items-center gap-4">
             <div className="flex-1">
                <div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 mb-1">
                   <span>Est. Call Surge</span>
                   <span className="text-red-400">+312%</span>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                   <div className="h-full bg-red-500 w-[85%]"></div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
             <span className="text-[9px] uppercase font-black text-slate-500 block">Dispatch Recomm.</span>
             <span className="text-sm font-black text-white mono">LVL 4</span>
          </div>
          <div className="text-center">
             <span className="text-[9px] uppercase font-black text-slate-500 block">Fleet Readiness</span>
             <span className="text-sm font-black text-emerald-400 mono">94%</span>
          </div>
          <div className="text-center">
             <span className="text-[9px] uppercase font-black text-slate-500 block">Inventory Risk</span>
             <span className="text-sm font-black text-amber-500 mono">LOW</span>
          </div>
        </div>
      </div>

      <div className="mt-8">
         <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-300 transition-all">
            Pre-Authorize Emergency OT
         </button>
      </div>
    </div>
  );
};
