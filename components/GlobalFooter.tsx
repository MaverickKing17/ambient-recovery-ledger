
import React from 'react';

export const GlobalFooter: React.FC = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-white/5 pt-24 pb-48 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-2xl font-black tracking-tighter uppercase">Ambient Twin</h3>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
            Precision margin recovery for high-volume HVAC contractors across the Greater Toronto Area. 
            Real-time synchronization for Titan-class operations.
          </p>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-white/5 hover:border-emerald-500/50 cursor-pointer transition-all">
              <span className="text-[10px] font-black">X</span>
            </div>
            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center border border-white/5 hover:border-emerald-500/50 cursor-pointer transition-all">
              <span className="text-[10px] font-black">LN</span>
            </div>
          </div>
        </div>

        {/* Product Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Solutions</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Margin Recovery Ledger</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Technical Vital Signs</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Ontario Rebate Engine</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Carbon Arbitrage Sync</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Fleet Traffic Audit</a></li>
          </ul>
        </div>

        {/* Regions Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-sky-500">GTA Service Hubs</h4>
          <ul className="space-y-4">
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Toronto (Downtown/East)</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Mississauga (West Hub)</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Vaughan (North HQ)</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Oakville & Burlington</a></li>
            <li><a href="#" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">Markham Digital Sync</a></li>
          </ul>
        </div>

        {/* Industry/Legal Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Compliance & Trust</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 group cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-medium">TSSA Certified Data Integration</span>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-medium">Ontario HRS Rebate Audited</span>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500"></div>
              <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-medium">Privacy Policy (PIPEDIA)</span>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-medium">SOC2 Type II Managed</span>
            </li>
          </ul>
          
          <div className="pt-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-1">Status</span>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-emerald-500 pulse-indicator"></div>
                 <span className="text-xs font-bold text-slate-300">All Nodes Functional</span>
               </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
        <span className="text-xs font-medium uppercase tracking-[0.2em]">&copy; 2025 AMBIENT TWIN INC. TORONTO, CA.</span>
        <div className="flex gap-8">
           <span className="text-xs font-bold uppercase tracking-widest">HRAI Member</span>
           <span className="text-xs font-bold uppercase tracking-widest">CleanTech Council</span>
        </div>
      </div>
    </footer>
  );
};
