
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts';

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
    <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden h-full shadow-2xl">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-emerald-500"></div>
      
      <div className="flex justify-between items-start mb-8">
        <div>
          <h3 className="text-xl font-black uppercase tracking-tighter text-white">Grid-Edge Arbitrage</h3>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Ontario Global Adjustment Optimizer</p>
        </div>
        <div className="text-right">
          <span className="text-[9px] bg-sky-500/20 text-sky-400 px-2 py-1 rounded-full border border-sky-500/30 font-black uppercase tracking-widest">Peak Shaving Active</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
          <span className="text-[9px] uppercase font-black text-slate-500 tracking-widest block mb-1">Current Grid Load</span>
          <div className="text-2xl font-black text-white mono">21.4 GW</div>
          <div className="text-[10px] text-amber-500 font-bold mt-1 uppercase">HEST PEAK DETECTED</div>
        </div>
        <div className="bg-slate-900/60 p-4 rounded-2xl border border-white/5">
          <span className="text-[9px] uppercase font-black text-slate-500 tracking-widest block mb-1">C-Suite Savings</span>
          <div className="text-2xl font-black text-emerald-400 mono">+$14.2k</div>
          <div className="text-[10px] text-slate-500 font-bold mt-1 uppercase">Today's Arbitrage</div>
        </div>
      </div>

      <div className="h-32 w-full opacity-60">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockGridData}>
            <YAxis hide domain={['auto', 'auto']} />
            <Area type="monotone" dataKey="load" stroke="#0ea5e9" fill="#0ea5e933" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 pt-6 border-t border-white/5 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">IESO Data Sync</span>
          <span className="text-[10px] font-bold text-emerald-500 mono">LIVE</span>
        </div>
        <p className="text-[10px] text-slate-500 leading-tight">
          Automatically modulating 4,200 connected Daikin & Mitsubishi units across Mississauga to avoid tier-3 pricing.
        </p>
      </div>
    </div>
  );
};
