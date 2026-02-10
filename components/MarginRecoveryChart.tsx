
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface Props {
  data: { time: string; amount: number }[];
}

export const MarginRecoveryChart: React.FC<Props> = ({ data }) => {
  // Calculate domain to keep the line centered
  const minAmount = Math.min(...data.map(d => d.amount));
  const maxAmount = Math.max(...data.map(d => d.amount));
  const padding = (maxAmount - minAmount) * 0.1 || 1;

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass p-3 rounded-xl border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <p className="text-[10px] uppercase font-bold text-slate-500 tracking-widest mb-1">{payload[0].payload.time}</p>
          <p className="text-emerald-400 font-black mono text-sm">
            ${payload[0].value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full relative group">
      {/* Decorative Chart Title Overlay */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase font-black text-emerald-500 tracking-[0.4em]">Recovery Velocity Index</span>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid 
            strokeDasharray="3 3" 
            vertical={false} 
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
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#10b981"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#colorAmount)"
            animationDuration={800}
            isAnimationActive={true}
          />
        </AreaChart>
      </ResponsiveContainer>

      {/* Grid Floor Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5"></div>
    </div>
  );
};
