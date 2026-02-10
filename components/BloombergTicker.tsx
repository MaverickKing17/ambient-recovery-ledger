
import React from 'react';

export const BloombergTicker: React.FC = () => {
  const stats = [
    { label: "IESO SPOT", value: "$0.142/kWh", change: "▲ 2.1%", color: "text-emerald-400" },
    { label: "ONTARIO GRID LOAD", value: "21.4 GW", change: "STABLE", color: "text-sky-400" },
    { label: "ECOSYSTEM RECOVERY", value: "$1,245,880", change: "▲ 4.8%", color: "text-emerald-400" },
    { label: "REBATE QUEUE", value: "142 FILINGS", change: "ACTIVE", color: "text-orange-400" },
    { label: "TECH VELOCITY", value: "88.4%", change: "▲ 1.2%", color: "text-emerald-400" },
    { label: "TRAFFIC TAX AVG", value: "$2.48/MIN", change: "▼ 0.4%", color: "text-emerald-400" },
    { label: "TSSA DRIFT INDEX", value: "0.002", change: "OPTIMAL", color: "text-emerald-500" },
    { label: "GTA MARKET SENTIMENT", value: "BULLISH", change: "▲ 0.8%", color: "text-sky-500" },
  ];

  const TickerItem: React.FC<{ stat: typeof stats[0] }> = ({ stat }) => (
    <div className="inline-flex items-center gap-4 px-12 border-r border-white/10 h-14">
      <span className="text-[11px] font-black uppercase text-slate-500 tracking-[0.15em]">{stat.label}</span>
      <span className="text-lg font-black text-white mono tracking-tighter">{stat.value}</span>
      <span className={`text-[10px] font-black mono px-2 py-0.5 rounded bg-white/5 border border-white/10 ${stat.color}`}>{stat.change}</span>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full bg-[#050505] border-b border-white/10 z-[100] overflow-hidden select-none shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-emerald-500/30"></div>
      <div className="flex animate-marquee py-1">
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
