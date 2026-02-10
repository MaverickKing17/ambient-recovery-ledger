
import React from 'react';

export const BloombergTicker: React.FC = () => {
  const stats = [
    { label: "IESO SPOT", value: "$0.142/kWh", change: "▲ 2.1%", color: "text-emerald-400", glow: "shadow-[0_0_15px_rgba(52,211,153,0.3)]" },
    { label: "ONTARIO GRID LOAD", value: "21.4 GW", change: "STABLE", color: "text-sky-300", glow: "shadow-[0_0_15px_rgba(125,211,252,0.3)]" },
    { label: "ECOSYSTEM RECOVERY", value: "$1,245,880", change: "▲ 4.8%", color: "text-emerald-400", glow: "shadow-[0_0_15px_rgba(52,211,153,0.3)]" },
    { label: "REBATE QUEUE", value: "142 FILINGS", change: "ACTIVE", color: "text-orange-400", glow: "shadow-[0_0_15px_rgba(249,115,22,0.3)]" },
    { label: "TECH VELOCITY", value: "88.4%", change: "▲ 1.2%", color: "text-emerald-400", glow: "shadow-[0_0_15px_rgba(52,211,153,0.3)]" },
    { label: "TRAFFIC TAX AVG", value: "$2.48/MIN", change: "▼ 0.4%", color: "text-emerald-400", glow: "shadow-[0_0_15px_rgba(52,211,153,0.3)]" },
    { label: "TSSA DRIFT INDEX", value: "0.002", change: "OPTIMAL", color: "text-emerald-500", glow: "shadow-[0_0_15px_rgba(16,185,129,0.3)]" },
    { label: "GTA MARKET SENTIMENT", value: "BULLISH", change: "▲ 0.8%", color: "text-sky-400", glow: "shadow-[0_0_15px_rgba(14,165,233,0.3)]" },
  ];

  const TickerItem: React.FC<{ stat: typeof stats[0] }> = ({ stat }) => (
    <div className="inline-flex items-center gap-5 px-14 border-r border-white/10 h-16 group relative overflow-hidden">
      {/* Subtle hover background highlight */}
      <div className="absolute inset-0 bg-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="flex flex-col justify-center relative z-10">
        <span className="text-[9px] font-black uppercase text-white/50 tracking-[0.25em] mb-0.5">{stat.label}</span>
        <div className="flex items-center gap-3">
          <span className="text-xl font-extrabold text-white mono tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
            {stat.value}
          </span>
          <span className={`text-[10px] font-black mono px-2 py-0.5 rounded-md bg-black/50 border border-white/10 ${stat.color} ${stat.glow}`}>
            {stat.change}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#003e92] to-[#001d44] border-b border-white/20 z-[100] overflow-hidden select-none shadow-[0_10px_40px_rgba(0,0,0,0.6)]">
      {/* Internal gloss overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      
      {/* Bright scanning light effect that moves across the bar */}
      <div className="absolute top-0 left-0 w-1/3 h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-[marquee_8s_linear_infinite] opacity-60"></div>
      
      {/* High-contrast top accent line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20"></div>
      
      {/* Bottom high-visibility illumination line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-sky-500/80 shadow-[0_-4px_20px_rgba(14,165,233,0.6)]"></div>
      
      <div className="flex animate-marquee py-0 relative z-10">
        <div className="flex shrink-0">
          {stats.map((s, i) => <TickerItem key={i} stat={s} />)}
        </div>
        <div className="flex shrink-0">
          {stats.map((s, i) => <TickerItem key={`repeat-${i}`} stat={s} />)}
        </div>
      </div>
      
      {/* Subtle grain/overlay for texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
};
