
import React from 'react';

export const StormSurgePredictor: React.FC = () => {
  return (
    <div className="glass rounded-[40px] p-10 border border-white/10 relative overflow-hidden h-full shadow-2xl bg-gradient-to-br from-slate-900/40 to-transparent flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center border border-sky-500/20 shadow-lg">
            <svg className="w-7 h-7 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold uppercase tracking-tighter text-white leading-none">Storm-Surge Intelligence</h3>
            <p className="text-[11px] text-slate-500 font-bold uppercase tracking-widest mt-1">Predictive Demand Forecast</p>
          </div>
        </div>

        <div className="space-y-8">
          <div className="relative p-8 bg-red-500/10 border border-red-500/20 rounded-3xl overflow-hidden group">
            <div className="absolute top-0 right-0 p-4">
               <div className="text-[10px] font-black uppercase text-red-500 pulse-red tracking-widest">Extreme Alert</div>
            </div>
            <div className="text-[11px] font-bold uppercase text-slate-500 mb-2">Forecast Event (48h)</div>
            <div className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">-22°C Polar Vortex</div>
            <div className="flex items-center gap-4">
               <div className="flex-1">
                  <div className="flex justify-between text-[11px] font-bold uppercase text-slate-400 mb-2">
                     <span>Est. Call Surge</span>
                     <span className="text-red-400 text-sm font-black">+312%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden border border-white/5">
                     <div className="h-full bg-red-500 w-[85%] shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
                  </div>
               </div>
            </div>
          </div>

          {/* New Telemetry Section to fill space */}
          <div className="py-6 border-y border-white/5 flex flex-col gap-4">
             <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Atmospheric Pressure Drift</span>
                <span className="text-[10px] font-bold text-sky-400 mono">982 hPa (STABLE)</span>
             </div>
             <div className="h-12 w-full flex items-center gap-1.5 px-2">
                {[...Array(20)].map((_, i) => (
                   <div 
                      key={i} 
                      className={`flex-1 rounded-full transition-all duration-1000 ${i > 15 ? 'bg-red-500' : 'bg-sky-500/30'}`}
                      style={{ height: `${20 + Math.random() * 80}%`, animationDelay: `${i * 50}ms` }}
                   ></div>
                ))}
             </div>
             <p className="text-[9px] text-slate-600 font-bold uppercase tracking-widest text-center italic">Live Radar: Vaughan / Richmond Hill Corridor</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="text-center">
               <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Dispatch Recomm.</span>
               <span className="text-lg font-black text-white mono">LVL 4</span>
            </div>
            <div className="text-center">
               <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Fleet Readiness</span>
               <span className="text-lg font-black text-emerald-400 mono">94%</span>
            </div>
            <div className="text-center">
               <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">Inventory Risk</span>
               <span className="text-lg font-black text-amber-500 mono">LOW</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
         <button className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[11px] font-black uppercase tracking-widest text-slate-300 transition-all active:scale-95 shadow-xl hover:text-white">
            Pre-Authorize Emergency OT
         </button>
      </div>
    </div>
  );
};
