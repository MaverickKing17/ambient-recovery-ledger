
import React from 'react';
import { TenantConfig } from '../types';

interface Props {
  config: TenantConfig;
  onUpdate: (newConfig: TenantConfig) => void;
}

export const BrandingSettings: React.FC<Props> = ({ config, onUpdate }) => {
  const mockLogoUpdate = () => {
    onUpdate({
      ...config,
      name: 'Titan HVAC Solutions',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop&q=80',
      primaryColor: '#0ea5e9'
    });
  };

  return (
    <div className="glass rounded-[32px] p-8 border border-white/10 relative overflow-hidden h-full shadow-2xl bg-[#0a0a0a]/50">
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] pointer-events-none"></div>
      
      <div className="flex items-center gap-4 mb-10">
        <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
          <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-white">Identity Suite</h3>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Enterprise White-Label Management</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Profile Card */}
        <div className="p-8 bg-black/40 border border-white/10 rounded-[28px] flex items-center gap-8 shadow-inner">
           <div className="relative group">
              <div className="w-24 h-24 rounded-[20px] bg-slate-900 border-2 border-emerald-500/30 flex items-center justify-center overflow-hidden transition-all group-hover:border-emerald-500">
                {config.logo ? (
                  <img src={config.logo} alt="Logo" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xs font-black text-slate-500 tracking-widest">IDENTITY</span>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                  <span className="text-[8px] font-black text-white uppercase">Replace</span>
                </div>
              </div>
           </div>
           <div className="flex-1">
              <div className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em] mb-2">Tenant Status: Active</div>
              <div className="text-2xl font-black text-white uppercase tracking-tight mb-1">{config.name}</div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                 <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                 </svg>
                 {config.region} Regional Hub
              </div>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="space-y-4">
              <label className="text-[10px] uppercase font-black text-slate-500 tracking-[0.2em] block">Primary Enterprise Accent</label>
              <div className="flex gap-4">
                 {['#10b981', '#0ea5e9', '#f59e0b', '#ef4444'].map(color => (
                    <div 
                      key={color}
                      onClick={() => onUpdate({...config, primaryColor: color})}
                      className={`w-10 h-10 rounded-2xl cursor-pointer border-2 transition-all duration-300 ${config.primaryColor === color ? 'border-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.2)]' : 'border-transparent opacity-40 hover:opacity-100'}`}
                      style={{ backgroundColor: color }}
                    ></div>
                 ))}
              </div>
           </div>

           <div className="flex flex-col justify-end">
              <button 
                onClick={mockLogoUpdate}
                className="w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all active:scale-95"
              >
                 Load Enterprise Template
              </button>
           </div>
        </div>
      </div>

      <div className="mt-12 p-5 bg-emerald-500/5 rounded-[24px] border border-emerald-500/10 flex items-center justify-between">
         <div>
            <div className="text-[10px] font-black uppercase text-emerald-500 tracking-widest mb-1">Ecosystem Tenant ID</div>
            <div className="text-xs font-black text-white mono opacity-50 uppercase">TID_8842_GTX_ENTERPRISE</div>
         </div>
         <div className="text-right">
            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">Verified</span>
         </div>
      </div>
    </div>
  );
};
