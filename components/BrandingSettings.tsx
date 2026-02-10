
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
    <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden h-full shadow-2xl">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
          <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-black uppercase tracking-tighter text-white">Tenant Branding</h3>
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">White-Label Control Suite</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="p-6 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-6">
           <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-emerald-500/50 flex items-center justify-center overflow-hidden">
              {config.logo ? (
                <img src={config.logo} alt="Logo" className="w-full h-full object-cover" />
              ) : (
                <span className="text-xs font-black text-slate-500">LOGO</span>
              )}
           </div>
           <div>
              <div className="text-xs font-black text-white uppercase mb-1">{config.name}</div>
              <div className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">{config.region} Base</div>
           </div>
        </div>

        <div className="space-y-4">
           <div>
              <label className="text-[9px] uppercase font-black text-slate-500 tracking-widest block mb-2">Primary Enterprise Accent</label>
              <div className="flex gap-3">
                 {['#10b981', '#0ea5e9', '#f97316', '#ef4444'].map(color => (
                    <div 
                      key={color}
                      onClick={() => onUpdate({...config, primaryColor: color})}
                      className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all ${config.primaryColor === color ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100'}`}
                      style={{ backgroundColor: color }}
                    ></div>
                 ))}
              </div>
           </div>

           <button 
             onClick={mockLogoUpdate}
             className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-[10px] font-black uppercase tracking-widest text-white transition-all active:scale-95"
           >
              Reset to Titan Enterprise Template
           </button>
        </div>
      </div>

      <div className="mt-12 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10">
         <div className="text-[9px] font-black uppercase text-emerald-500 mb-2">Multi-Tenant Status</div>
         <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400">Isolated Sandbox</span>
            <span className="text-[10px] font-black text-emerald-400 uppercase">ACTIVE</span>
         </div>
      </div>
    </div>
  );
};
