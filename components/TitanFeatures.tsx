
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

export const TitanFeatures: React.FC = () => {
  const data = [
    { name: 'Mississauga', value: 88, avg: 72 },
    { name: 'Oakville', value: 92, avg: 74 },
    { name: 'Vaughan', value: 62, avg: 70 },
    { name: 'Brampton', value: 71, avg: 68 },
  ];

  return (
    <div className="space-y-10 flex flex-col h-full">
      {/* Titan 1: Community Benchmark */}
      <div className="glass rounded-2xl p-8 border border-white/10 flex-1">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h2 className="text-xl font-bold uppercase tracking-widest">Community Benchmark</h2>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
            <span className="text-[10px] font-black uppercase text-emerald-400 tracking-tighter">Market Grade</span>
            <span className="text-lg font-black text-emerald-400">B+</span>
          </div>
        </div>
        
        <p className="text-xs text-slate-500 mb-6 font-medium uppercase tracking-widest">Comparison vs GTA Industry Average</p>
        
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#64748b" fontSize={10} axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', fontSize: '12px' }}
                itemStyle={{ color: '#10b981' }}
              />
              <Bar dataKey="value" fill="#10b981" radius={[4, 4, 0, 0]} name="Shop Performance" />
              <Bar dataKey="avg" fill="#334155" radius={[4, 4, 0, 0]} name="GTA Average" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Titan 2: Carbon Credit Arbitrage Tracker */}
      <div className="glass rounded-2xl p-8 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-sky-500"></div>
        <div className="flex items-center gap-2 mb-4">
           <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2 2 2 0 012 2v.657M16.485 3.485l.982.982m-11.414 0l.982-.982m0 0a8.001 8.001 0 1111.314 0" />
           </svg>
           <h2 className="text-xl font-bold uppercase tracking-widest">Carbon Credit Arbitrage</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-slate-900/60 p-5 rounded-xl border border-white/5">
             <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Total Offset</span>
             <div className="text-3xl font-black text-sky-400 mt-1">124.5t</div>
             <p className="text-[10px] text-slate-600 mt-2">Verified Carbon Credits for 2026 Resale</p>
          </div>
          <div className="bg-slate-900/60 p-5 rounded-xl border border-white/5">
             <span className="text-[10px] uppercase font-bold text-slate-500 tracking-widest">Est. Valuation</span>
             <div className="text-3xl font-black text-emerald-400 mt-1">$42,330</div>
             <p className="text-[10px] text-slate-600 mt-2">Open-Market Resale Projection</p>
          </div>
        </div>
      </div>
    </div>
  );
};
