
import React from 'react';

interface Props {
  onNavigate: (viewId: string) => void;
}

export const GlobalFooter: React.FC<Props> = ({ onNavigate }) => {
  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    onNavigate(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1120] border-t border-white/5 pt-24 pb-48 px-6 lg:px-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 relative z-10">
        {/* Brand Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 cursor-pointer group" onClick={(e) => handleNav(e, 'dashboard')}>
            <svg className="w-8 h-8 text-emerald-500 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h3 className="text-2xl font-black tracking-tighter uppercase text-white">Ambient Twin</h3>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-medium">
            The standard in margin recovery for high-volume GTA HVAC contractors. Real-time ledger synchronization for enterprise growth.
          </p>
        </div>

        {/* Product Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500">Solutions</h4>
          <ul className="space-y-4">
            <li><button onClick={(e) => handleNav(e, 'margin-recovery-ledger')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Margin Recovery Ledger</button></li>
            <li><button onClick={(e) => handleNav(e, 'technical-vital-signs')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Technical Vital Signs</button></li>
            <li><button onClick={(e) => handleNav(e, 'ontario-rebate-engine')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Ontario Rebate Engine</button></li>
            <li><button onClick={(e) => handleNav(e, 'carbon-arbitrage-sync')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Carbon Arbitrage Sync</button></li>
            <li><button onClick={(e) => handleNav(e, 'fleet-traffic-audit')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Fleet Traffic Audit</button></li>
          </ul>
        </div>

        {/* Regions Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-sky-500">GTA Service Hubs</h4>
          <ul className="space-y-4">
            <li><button onClick={(e) => handleNav(e, 'toronto-hub')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Toronto Hub</button></li>
            <li><button onClick={(e) => handleNav(e, 'mississauga-hub')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Mississauga Hub</button></li>
            <li><button onClick={(e) => handleNav(e, 'vaughan-hub')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Vaughan HQ</button></li>
            <li><button onClick={(e) => handleNav(e, 'oakville-hub')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Oakville & Burlington</button></li>
            <li><button onClick={(e) => handleNav(e, 'markham-hub')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Markham Digital Sync</button></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-orange-500">Legal & Governance</h4>
          <ul className="space-y-4">
            <li><button onClick={(e) => handleNav(e, 'privacy-policy')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Privacy Policy</button></li>
            <li><button onClick={(e) => handleNav(e, 'terms-of-service')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Terms of Service</button></li>
            <li><button onClick={(e) => handleNav(e, 'disclaimer')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Legal Disclaimer</button></li>
            <li><button onClick={(e) => handleNav(e, 'dmca-policy')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">DMCA Policy</button></li>
            <li><button onClick={(e) => handleNav(e, 'cookie-policy')} className="text-slate-400 hover:text-white transition-colors text-sm font-bold text-left">Cookie Policy</button></li>
          </ul>
        </div>

        {/* Compliance Column */}
        <div className="space-y-6">
          <h4 className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">Compliance & Trust</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2 group cursor-pointer" onClick={(e) => handleNav(e, 'tssa-compliance')}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-bold">TSSA Certified Data</span>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer" onClick={(e) => handleNav(e, 'ontario-hrs-audit')}>
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-bold">Ontario HRS Audited</span>
            </li>
            <li className="flex items-center gap-2 group cursor-pointer" onClick={(e) => handleNav(e, 'soc2-managed')}>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
              <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-bold">SOC2 Type II Managed</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">&copy; 2026 Ambient Twin, Inc. All rights Reserved</span>
        <div className="flex gap-8">
           <span className="text-[10px] font-black uppercase tracking-widest">HRAI Member</span>
           <span className="text-[10px] font-black uppercase tracking-widest">CleanTech Council</span>
        </div>
      </div>
    </footer>
  );
};
