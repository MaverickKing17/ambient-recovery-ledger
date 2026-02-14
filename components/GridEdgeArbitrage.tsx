
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

const mockGridData = [
  { time: '12pm', load: 15400, cost: 0.12 },
  { time: '1pm', load: 16200, cost: 0.14 },
  { time: '2pm', load: 18500, cost: 0.28 },
  { time: '3pm', load: 21000, cost: 0.45 },
  { time: '4pm', load: 19800, cost: 0.38 },
  { time: '5pm', load: 17500, cost: 0.22 },
];

export const GridEdgeArbitrage: React.FC = () => {
  return (
    <div className="glass rounded-[40px] p-10 border border-white/10 relative overflow-hidden h-full shadow-2xl bg-gradient-to-br from-[#001d44]/30 to-transparent">
      {/* High-Contrast Accent Bar */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-sky-500 via-sky-300 to-sky-500 shadow-[0_0_20px_rgba(14,165,233,0.5)]"></div>
      
      <div className="flex justify-between items-start mb-12">
        <div>
          <h3 className="text-3xl font-black uppercase tracking-tighter text-white italic">Carbon Arbitrage Sync</h3>
          <p className="text-[10px] text-sky-400 font-black uppercase tracking-[0.3em] mt-1">IESO Global Adjustment Yield Strategy</p>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-[9px] bg-sky-500/10 text-sky-300 px-3 py-1 rounded-full border border-sky-500/20 font-black uppercase tracking-widest flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></div>
            Market Delta Sync
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-10">
        <div className="bg-black/40 p-6 rounded-3xl border border-white/5 relative group hover:border-sky-500/30 transition-all">
          <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest block mb-1">Credits Minted (24h)</span>
          <div className="text-4xl font-black text-white mono leading-tight">142.4<span className="text-sm ml-1 text-slate-600">t</span></div>
          <div className="mt-4 h-1 w-full bg-slate-800 rounded-full overflow-hidden">
             <div className="h-full bg-sky-500 w-[68%] animate-pulse"></div>
          </div>
        </div>
        <div className="bg-black/40 p-6 rounded-3xl border border-white/5 relative group hover:border-emerald-500/30 transition-all">
          <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest block mb-1">EBITDA Dividend Est.</span>
          <div className="text-4xl font-black text-emerald-400 mono leading-tight">$32,440</div>
          <div className="mt-4 flex items-center gap-2">
             <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
             <span className="text-[9px] text-emerald-500 font-black uppercase tracking-widest">▲ 14.2% Growth</span>
          </div>
        </div>
      </div>

      <div className="h-44 w-full relative mb-10">
        <div className="absolute top-2 left-4 z-10">
           <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest bg-black/40 px-2 py-1 rounded">Grid Frequency (Hz)</span>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockGridData}>
            <defs>
              <linearGradient id="gridGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <YAxis hide domain={['auto', 'auto']} />
            <Tooltip 
              contentStyle={{ background: '#0f172a', border: '1px solid #ffffff10', borderRadius: '12px' }}
              labelStyle={{ fontSize: '10px', color: '#64748b' }}
            />
            <Area type="monotone" dataKey="load" stroke="#0ea5e9" fill="url(#gridGrad)" strokeWidth={3} animationDuration={2000} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-sky-500/5 border border-sky-500/20 p-6 rounded-3xl space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-black uppercase tracking-[0.2em] text-sky-400">Autonomous Peak Shaving</span>
          <span className="text-[11px] font-black text-emerald-400 mono">DEPLOYED</span>
        </div>
        <p className="text-[11px] text-slate-400 leading-relaxed font-medium">
          Dashboard AI is currently modulating setpoints across <span className="text-white font-black">4,280 Daikin units</span> in Mississauga to bypass Tier-3 peak pricing and maximize offset credits.
        </p>
      </div>
    </div>
  );
};
