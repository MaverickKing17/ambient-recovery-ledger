
import React from 'react';

interface Props {
  tenantColor?: string;
}

export const NetZeroFooter: React.FC<Props> = ({ tenantColor = '#10b981' }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#050505]/80 backdrop-blur-md border-t border-white/10 py-6 px-8 z-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 rounded-full flex items-center justify-center border border-white/10" style={{ backgroundColor: `${tenantColor}22`, color: tenantColor }}>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
           </div>
           <div>
              <h4 className="text-sm font-bold uppercase tracking-widest" style={{ color: tenantColor }}>Net-Zero Implementation Active</h4>
              <p className="text-[10px] text-slate-500 uppercase font-medium tracking-tighter">Verified by Ontario Clean Tech Council</p>
           </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
           <div className="text-center">
              <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Setup Fee</span>
              <span className="text-slate-400 line-through font-bold">$1,500</span>
           </div>
           <div className="text-center">
              <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Pilot Credit</span>
              <span className="text-red-400 font-bold">-$1,500</span>
           </div>
           <div className="text-center">
              <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">Due Today</span>
              <span className="text-2xl font-black glow-emerald mono tracking-tighter" style={{ color: tenantColor }}>$0.00</span>
           </div>
        </div>

        <div className="bg-white/5 px-6 py-3 rounded-xl border border-white/5 text-center">
           <div className="flex items-baseline gap-2">
              <span className="text-[10px] uppercase font-bold text-slate-500">Subscription:</span>
              <span className="text-sm font-bold">$1,499/mo</span>
              <span className="text-[10px] text-slate-600 px-2">|</span>
              <span className="text-[10px] uppercase font-bold" style={{ color: tenantColor }}>Potential Recovery:</span>
              <span className="text-sm font-black mono" style={{ color: tenantColor }}>$10,751/mo</span>
           </div>
        </div>
      </div>
    </footer>
  );
};
