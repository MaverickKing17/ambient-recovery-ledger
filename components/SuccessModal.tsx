
import React, { useEffect } from 'react';

interface Props {
  message: string;
  onClose: () => void;
}

export const SuccessModal: React.FC<Props> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      ></div>
      
      {/* Content */}
      <div className="relative glass p-10 rounded-3xl max-w-lg w-full text-center border-emerald-500/30 animate-in zoom-in-95 duration-300 shadow-[0_0_50px_rgba(16,185,129,0.2)]">
        <div className="mb-6 flex justify-center">
           <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center text-emerald-400 border-2 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
           </div>
        </div>
        
        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter">Profit Injected</h2>
        <p className="text-lg text-emerald-400 font-bold mb-6 glow-emerald leading-tight">{message}</p>
        
        <div className="space-y-2 mt-8 pt-8 border-t border-white/5">
           <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Unbillable Truck Roll Prevented</p>
           <p className="text-[10px] text-slate-600 uppercase tracking-widest">Transaction Verified via AI Ledger</p>
        </div>

        <button 
          onClick={onClose}
          className="mt-8 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-300"
        >
          Close [ESC]
        </button>
      </div>
    </div>
  );
};
