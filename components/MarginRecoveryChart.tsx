
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine
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

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass p-3 rounded-xl border border-white/10 shadow-2xl">
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">{payload[0].payload.time}</p>
          <p className="font-black mono text-sm" style={{ color: accentColor }}>
            ${payload[0].value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full relative group">
      {/* Financial Callout Pill */}
      <div className="absolute top-0 right-4 z-20 flex flex-col items-end pointer-events-none">
        <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Current Recovery Velocity</div>
        <div className="flex items-center gap-2 bg-slate-900 border border-white/10 px-3 py-1.5 rounded-lg shadow-2xl">
           <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
           <span className="text-sm font-black mono text-white">
             ${lastValue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
           </span>
        </div>
      </div>

      <div className="absolute top-4 left-4 z-10 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-black tracking-[0.4em]" style={{ color: accentColor }}>Real-Time Recovery Matrix</span>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={accentColor} stopOpacity={0.25} />
              <stop offset="95%" stopColor={accentColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="4 4" 
            vertical={true} 
            stroke="#ffffff05" 
          />
          <XAxis 
            dataKey="time" 
            hide 
          />
          <YAxis 
            hide 
            domain={[minAmount - padding, maxAmount + padding]} 
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Target Baseline */}
          <ReferenceLine y={minAmount + padding} stroke="#ffffff10" strokeDasharray="3 3" />
          
          <Area
            type="monotone"
            dataKey="amount"
            stroke={accentColor}
            strokeWidth={2.5}
            fillOpacity={1}
            fill="url(#colorAmount)"
            animationDuration={800}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5"></div>
    </div>
  );
};
