
import React from 'react';

interface Props {
  tenantColor?: string;
}

export const NetZeroFooter: React.FC<Props> = ({ tenantColor = '#10b981' }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#001d44] via-[#003e92] to-[#001d44] border-t border-sky-400/30 py-4 px-8 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/20 bg-white/10 shadow-lg">
              <svg className="w-5 h-5 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
           </div>
           <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white leading-none">Net-Zero Asset Marketplace</h4>
              <p className="text-[9px] text-sky-200/60 uppercase font-bold tracking-tighter mt-1">Monetizing Enterprise Efficiency Credits</p>
           </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-12">
           <div className="text-center">
              <span className="text-[9px] text-sky-200/50 uppercase font-black block mb-0.5">Total Offsets</span>
              <span className="text-xl font-black text-white mono">142.4<span className="text-[10px] ml-1 opacity-50">TONS</span></span>
           </div>
           <div className="h-8 w-[1px] bg-white/10 hidden md:block"></div>
           <div className="text-center">
              <span className="text-[9px] text-sky-200/50 uppercase font-black block mb-0.5">Market Value</span>
              <span className="text-xl font-black text-emerald-400 mono glow-emerald">$32,440.00</span>
           </div>
        </div>

        <div className="bg-black/40 px-6 py-2 rounded-2xl border border-white/10 text-center shadow-inner flex items-center gap-4">
           <div className="text-right">
              <span className="text-[8px] uppercase font-black text-white/40 block">Est. Resale Dividend</span>
              <span className="text-lg font-black text-emerald-400 mono tracking-tighter">+$4,250</span>
           </div>
           <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-900 text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-xl transition-all active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              Liquidity Exit
           </button>
        </div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </footer>
  );
};
