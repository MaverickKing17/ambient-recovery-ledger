
import React from 'react';

export const BloombergTicker: React.FC = () => {
  const stats = [
    { label: "IESO SPOT", value: "$0.142/kWh", change: "▲ 2.1%", color: "text-emerald-400" },
    { label: "ONTARIO GRID LOAD", value: "21.4 GW", change: "STABLE", color: "text-sky-400" },
    { label: "ECOSYSTEM RECOVERY", value: "$1.24M", change: "▲ 4.8%", color: "text-emerald-400" },
    { label: "REBATE QUEUE", value: "142 FILINGS", change: "ACTIVE", color: "text-orange-400" },
    { label: "TRAFFIC TAX AVG", value: "$2.48/MIN", change: "▼ 1.2%", color: "text-emerald-400" },
    { label: "TSSA DRIFT INDEX", value: "0.002", change: "OPTIMAL", color: "text-emerald-500" },
  ];

  // Fix: Explicitly type TickerItem as React.FC to allow the standard 'key' prop when mapping
  const TickerItem: React.FC<{ stat: typeof stats[0] }> = ({ stat }) => (
    <div className="inline-flex items-center gap-2 px-8 border-r border-white/10 h-10">
      <span className="text-[10px] font-black uppercase text-slate-500 tracking-tighter">{stat.label}:</span>
      <span className="text-[11px] font-bold text-white mono">{stat.value}</span>
      <span className={`text-[9px] font-black mono ${stat.color}`}>{stat.change}</span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full bg-black border-b border-white/10 z-[100] overflow-hidden select-none shadow-2xl">
      <div className="flex animate-marquee">
        {/* Render twice for seamless loop */}
        <div className="flex shrink-0">
          {stats.map((s, i) => <TickerItem key={i} stat={s} />)}
        </div>
        <div className="flex shrink-0">
          {stats.map((s, i) => <TickerItem key={`repeat-${i}`} stat={s} />)}
        </div>
      </div>
    </div>
  );
};
