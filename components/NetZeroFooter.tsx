
import React from 'react';

interface Props {
  tenantColor?: string;
}

export const NetZeroFooter: React.FC<Props> = ({ tenantColor = '#10b981' }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-[#001d44] via-[#003e92] to-[#001d44] border-t border-sky-400/30 py-5 px-8 z-40 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {/* High-visibility top accent light */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent shadow-[0_0_15px_rgba(56,189,248,0.6)]"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-4">
           <div className="w-10 h-10 rounded-2xl flex items-center justify-center border border-white/20 bg-white/10 shadow-lg">
              <svg className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
           </div>
           <div>
              <h4 className="text-sm font-black uppercase tracking-widest text-white">Net-Zero Implementation Active</h4>
              <p className="text-[10px] text-sky-200/60 uppercase font-bold tracking-tighter">Verified by Ontario Clean Tech Council</p>
           </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10">
           <div className="text-center">
              <span className="text-[10px] text-sky-200/50 uppercase font-black block mb-1">Setup Fee</span>
              <span className="text-white/40 line-through font-bold text-sm">$1,500</span>
           </div>
           <div className="text-center">
              <span className="text-[10px] text-sky-200/50 uppercase font-black block mb-1">Pilot Credit</span>
              <span className="text-red-400 font-black text-sm">-$1,500</span>
           </div>
           <div className="text-center px-6 py-2 bg-black/30 rounded-2xl border border-white/10">
              <span className="text-[10px] text-emerald-400 uppercase font-black block mb-0.5">Due Today</span>
              <span className="text-3xl font-black text-emerald-400 mono tracking-tighter drop-shadow-[0_0_10px_rgba(52,211,153,0.4)]">$0.00</span>
           </div>
        </div>

        <div className="bg-white/10 px-6 py-3 rounded-2xl border border-white/20 text-center shadow-inner backdrop-blur-sm">
           <div className="flex items-center gap-3">
              <span className="text-[10px] uppercase font-black text-white/60">Subscription:</span>
              <span className="text-sm font-black text-white">$1,499/mo</span>
              <div className="h-4 w-[1px] bg-white/20"></div>
              <span className="text-[10px] uppercase font-black text-emerald-400">Recovery:</span>
              <span className="text-sm font-black text-emerald-400 mono animate-pulse">$10,751/mo</span>
           </div>
        </div>
      </div>
      
      {/* Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </footer>
  );
};
