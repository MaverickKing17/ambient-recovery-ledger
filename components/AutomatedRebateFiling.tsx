
import React, { useState, useRef } from 'react';

interface Props {
  onSuccess: (msg: string) => void;
}

type FilingState = 'idle' | 'uploading' | 'scanning' | 'review' | 'submitting';

export const AutomatedRebateFiling: React.FC<Props> = ({ onSuccess }) => {
  const [state, setState] = useState<FilingState>('idle');
  const [formData, setFormData] = useState({
    customerName: '',
    address: '',
    ahriNumber: '',
    unitModel: '',
    techId: ''
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateAIProcessing = () => {
    setState('uploading');
    setTimeout(() => {
      setState('scanning');
      // Simulate AI extraction logic
      setTimeout(() => {
        setFormData({
          customerName: 'J. Henderson',
          address: '4200 Bathurst St, North York, ON',
          ahriNumber: '205843192',
          unitModel: 'DAIKIN FIT-18 SEER',
          techId: 'GTA-8842-TS'
        });
        setState('review');
      }, 2500);
    }, 1200);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      simulateAIProcessing();
    }
  };

  const handleSubmit = () => {
    setState('submitting');
    setTimeout(() => {
      onSuccess('Rebate Package Transmitted: $6,500 Enbridge filing completed for 4200 Bathurst St. AHRI 205843192 Verified.');
      setState('idle');
      setFormData({ customerName: '', address: '', ahriNumber: '', unitModel: '', techId: '' });
    }, 2000);
  };

  return (
    <div className="glass rounded-3xl p-8 border border-white/10 relative overflow-hidden flex flex-col h-full shadow-2xl">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center border border-orange-500/20">
            <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-black uppercase tracking-tighter text-white">AI Rebate Filing</h2>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Enbridge & HRS Auto-Submission</p>
          </div>
        </div>
        
        {state === 'idle' && (
          <span className="text-[9px] bg-slate-800 text-slate-400 px-2 py-1 rounded-full border border-white/5 font-black uppercase tracking-widest">Grid Ready</span>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center">
        {state === 'idle' && (
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-white/10 rounded-2xl p-10 flex flex-col items-center justify-center cursor-pointer hover:border-orange-500/50 hover:bg-orange-500/5 transition-all group"
          >
            <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" accept="image/*,application/pdf" />
            <svg className="w-12 h-12 text-slate-600 group-hover:text-orange-400 mb-4 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p className="text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-white">Upload Work Order</p>
            <p className="text-[10px] text-slate-600 mt-2 uppercase font-bold">Ambient AI will auto-fill forms</p>
          </div>
        )}

        {(state === 'uploading' || state === 'scanning') && (
          <div className="space-y-6 py-10">
            <div className="relative h-48 bg-slate-900/40 rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center">
               {state === 'scanning' && (
                 <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)] animate-[bounce_3s_infinite] z-20"></div>
               )}
               <div className="text-center z-10">
                 <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                 <p className="text-sm font-black uppercase tracking-widest text-orange-400">
                    {state === 'uploading' ? 'Syncing Files...' : 'Ambient AI Scanning Document...'}
                 </p>
                 <div className="flex gap-1 justify-center mt-3">
                    <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-slate-500 font-bold uppercase">Extracting AHRI #</span>
                    <span className="text-[9px] bg-white/5 px-2 py-0.5 rounded text-slate-500 font-bold uppercase">Verifying Address</span>
                 </div>
               </div>
            </div>
          </div>
        )}

        {(state === 'review' || state === 'submitting') && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-slate-900/60 p-6 rounded-2xl border border-orange-500/20 space-y-4 relative">
              <div className="absolute top-4 right-4 text-[9px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-1">
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                 Extraction Valid
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-black text-slate-500 tracking-widest">Customer</label>
                  <p className="text-xs font-bold text-white mono">{formData.customerName}</p>
                </div>
                <div className="space-y-1 text-right">
                  <label className="text-[9px] uppercase font-black text-slate-500 tracking-widest">AHRI CERT #</label>
                  <p className="text-xs font-bold text-orange-400 mono">{formData.ahriNumber}</p>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] uppercase font-black text-slate-500 tracking-widest">Site Address</label>
                <p className="text-xs font-bold text-white mono">{formData.address}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] uppercase font-black text-slate-500 tracking-widest">System Profile</label>
                  <p className="text-xs font-bold text-white mono">{formData.unitModel}</p>
                </div>
                <div className="space-y-1 text-right">
                  <label className="text-[9px] uppercase font-black text-slate-500 tracking-widest">HRAI Tech ID</label>
                  <p className="text-xs font-bold text-white mono">{formData.techId}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={handleSubmit}
              disabled={state === 'submitting'}
              className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest transition-all ${
                state === 'submitting' 
                  ? 'bg-slate-800 text-slate-500 cursor-wait' 
                  : 'bg-orange-500 hover:bg-orange-400 text-white shadow-[0_0_30px_rgba(249,115,22,0.3)] active:scale-95'
              }`}
            >
              {state === 'submitting' ? 'Transmitting to Enbridge Grid...' : 'Transmit Filing Package'}
            </button>

            <button 
              onClick={() => setState('idle')}
              disabled={state === 'submitting'}
              className="w-full text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-slate-400 transition-colors"
            >
              Discard & Re-Scan
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
         <div className="flex gap-4">
            <div className="flex items-center gap-1.5 opacity-50">
               <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
               <span className="text-[9px] font-black uppercase tracking-tighter text-slate-400">Enbridge API v4.2</span>
            </div>
            <div className="flex items-center gap-1.5 opacity-50">
               <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
               <span className="text-[9px] font-black uppercase tracking-tighter text-slate-400">HRS Connect v1.1</span>
            </div>
         </div>
      </div>
    </div>
  );
};
