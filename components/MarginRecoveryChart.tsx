
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Scatter,
  ComposedChart
} from 'recharts';

interface Props {
  data: { time: string; amount: number }[];
  accentColor?: string;
}

export const MarginRecoveryChart: React.FC<Props> = ({ data, accentColor = '#10b981' }) => {
  const minAmount = Math.min(...data.map(d => d.amount));
  const maxAmount = Math.max(...data.map(d => d.amount));
  const padding = (maxAmount - minAmount) * 0.1 || 1;
  const lastValue = data.length > 0 ? data[data.length - 1].amount : 0;

  // Simulate "Win Nodes" - specific moments where profit was spiked
  const winNodes = data.filter((_, i) => i % 5 === 0).map(d => ({
    ...d,
    label: ['Rebate File', 'Traffic Save', 'Part Recapture', 'Yield Strike'][Math.floor(Math.random() * 4)],
    value: (Math.random() * 50 + 10).toFixed(2)
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const isWin = winNodes.find(w => w.time === payload[0].payload.time);
      return (
        <div className="glass p-4 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <p className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em]">{payload[0].payload.time} AUDIT</p>
          </div>
          <p className="font-black mono text-xl text-white">
            ${payload[0].value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
          {isWin && (
            <div className="mt-3 pt-3 border-t border-white/5">
              <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest block">{isWin.label}</span>
              <span className="text-xs font-bold text-emerald-500/80">Profit Delta: +${isWin.value}</span>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full relative group cursor-crosshair">
      {/* Dynamic Background Scanning Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
        <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-[marquee_5s_linear_infinite] skew-x-12"></div>
      </div>

      {/* Top Header Controls */}
      <div className="absolute top-0 left-0 right-0 z-20 flex items-start justify-between px-6 pointer-events-none">
        <div className="space-y-1">
          <span className="text-[10px] uppercase font-black tracking-[0.5em] text-emerald-500/60 block">Real-Time Recovery Matrix</span>
          <div className="flex items-center gap-3">
             <div className="flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                <span className="text-[8px] font-black text-slate-500 uppercase">Mode</span>
                <span className="text-[8px] font-black text-emerald-400 uppercase">Titan-Live</span>
             </div>
             <div className="flex items-center gap-1.5 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                <span className="text-[8px] font-black text-slate-500 uppercase">Feed</span>
                <span className="text-[8px] font-black text-sky-400 uppercase">DVP_HUB_104</span>
             </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Recapture Velocity</div>
          <div className="flex items-center gap-3 bg-slate-900/80 backdrop-blur border border-white/10 px-4 py-2 rounded-2xl shadow-2xl">
             <div className="flex flex-col items-end">
                <span className="text-[14px] font-black text-white mono leading-none">
                  ${lastValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
                <span className="text-[8px] font-black text-emerald-500 uppercase tracking-tighter mt-1">+0.04s / Growth</span>
             </div>
             <div className="w-8 h-8 rounded-full border border-emerald-500/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-500/10 animate-pulse"></div>
                <svg className="w-4 h-4 text-emerald-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
             </div>
          </div>
        </div>
      </div>

      {/* Main Composed Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 80, right: 20, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={accentColor} stopOpacity={0.4} />
              <stop offset="95%" stopColor={accentColor} stopOpacity={0} />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
               <feGaussianBlur stdDeviation="4" result="blur" />
               <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          
          <CartesianGrid 
            strokeDasharray="1 1" 
            vertical={true} 
            horizontal={true}
            stroke="#ffffff08" 
          />
          
          <XAxis 
            dataKey="time" 
            hide 
          />
          <YAxis 
            hide 
            domain={[minAmount - padding, maxAmount + padding]} 
          />
          
          <Tooltip 
            content={<CustomTooltip />} 
            cursor={{ stroke: accentColor, strokeWidth: 1, strokeDasharray: '4 4' }}
          />
          
          {/* Historical Baseline */}
          <ReferenceLine y={minAmount} stroke="#ffffff05" strokeWidth={2} />
          
          {/* Main Area Chart */}
          <Area
            type="monotone"
            dataKey="amount"
            stroke={accentColor}
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorAmount)"
            animationDuration={1500}
            isAnimationActive={true}
            filter="url(#glow)"
          />

          {/* Profit Nodes - the 'Scattered' events */}
          <Scatter 
            data={winNodes} 
            fill={accentColor} 
            shape={(props: any) => {
              const { cx, cy } = props;
              return (
                <g>
                  <circle cx={cx} cy={cy} r={4} fill={accentColor} className="animate-pulse" />
                  <circle cx={cx} cy={cy} r={8} stroke={accentColor} strokeOpacity={0.3} fill="none" />
                </g>
              );
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>

      {/* Decorative Bottom Axis Label */}
      <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center opacity-40 pointer-events-none">
        <div className="flex items-center gap-4">
          <span className="text-[8px] font-black text-slate-500 uppercase tracking-[0.4em]">Audit Timeline</span>
          <div className="h-[1px] w-24 bg-white/10"></div>
          <span className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{data[0]?.time} — {data[data.length - 1]?.time}</span>
        </div>
        <div className="flex gap-1">
           {[...Array(10)].map((_, i) => (
             <div key={i} className="w-1 h-1 bg-white/10 rounded-full"></div>
           ))}
        </div>
      </div>
    </div>
  );
};
