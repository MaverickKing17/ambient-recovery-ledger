
import React, { useState } from 'react';
import { AccountantStep } from '../types';

interface Props {
  onReveal: () => void;
}

export const AccountantReveal: React.FC<Props> = ({ onReveal }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const steps: AccountantStep[] = [
    { id: 0, label: 'Sync Records', status: activeStep > 0 ? 'complete' : (activeStep === 0 ? 'active' : 'pending') },
    { id: 1, label: 'Audit Drift', status: activeStep > 1 ? 'complete' : (activeStep === 1 ? 'active' : 'pending') },
    { id: 2, label: 'Reveal Profit', status: activeStep > 2 ? 'complete' : (activeStep === 2 ? 'active' : 'pending') },
  ];

  const handleNext = () => {
    if (activeStep < 2) {
      setActiveStep(prev => prev + 1);
    } else {
      setIsRevealed(true);
      onReveal();
    }
  };

  return (
    <div className="glass rounded-2xl p-8 border border-white/10">
      <div className="flex justify-between items-center mb-10">
        {steps.map((step, idx) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center gap-2 flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 ${
                step.status === 'complete' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' :
                step.status === 'active' ? 'bg-slate-700 border-emerald-400 text-white shadow-[0_0_15px_rgba(52,211,153,0.3)]' :
                'bg-slate-800 border-white/10 text-slate-500'
              }`}>
                {step.status === 'complete' ? (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="font-bold">{idx + 1}</span>
                )}
              </div>
              <span className={`text-xs uppercase font-bold tracking-widest ${
                step.status === 'active' ? 'text-emerald-400' : 'text-slate-500'
              }`}>{step.label}</span>
            </div>
            {idx < 2 && (
              <div className={`h-[2px] flex-1 mt-[-20px] mx-4 rounded-full ${
                activeStep > idx ? 'bg-emerald-500' : 'bg-slate-800'
              }`}></div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="min-h-[160px] flex flex-col items-center justify-center text-center">
        {activeStep === 0 && (
          <div className="space-y-4">
             <h3 className="text-xl font-bold">Connect Your Stack</h3>
             <p className="text-slate-400 text-sm max-w-md mx-auto">Bridging the gap between CRM data (Jobber/ServiceTitan) and GTA logistics costs.</p>
             <div className="flex gap-2 justify-center">
               <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400 font-bold uppercase">Jobber</span>
               <span className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-400 font-bold uppercase">ServiceTitan</span>
             </div>
          </div>
        )}
        {activeStep === 1 && (
          <div className="space-y-4 w-full">
             <h3 className="text-xl font-bold">Auditing Operating Drift</h3>
             <div className="max-w-md mx-auto">
               <div className="flex justify-between text-xs mb-1">
                 <span className="text-emerald-400 font-bold">78% Complete</span>
                 <span className="text-slate-500">Scanning Route Overlaps...</span>
               </div>
               <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-emerald-500 w-[78%] transition-all duration-1000"></div>
               </div>
             </div>
          </div>
        )}
        {activeStep === 2 && (
          <div className="space-y-4">
             <h3 className="text-xl font-bold">Analysis Ready</h3>
             <p className="text-slate-400 text-sm max-w-md mx-auto">Our AI has identified 12 leakage points in your current fleet logistics across Mississauga and Oakville.</p>
          </div>
        )}

        <button 
          onClick={handleNext}
          disabled={isRevealed}
          className={`mt-8 px-10 py-3 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${
            isRevealed ? 'bg-slate-800 text-slate-600' : 'bg-emerald-500 hover:bg-emerald-400 text-slate-900 shadow-[0_0_20px_rgba(16,185,129,0.4)]'
          }`}
        >
          {activeStep === 2 ? (isRevealed ? 'Profit Unlocked' : 'Reveal My Profit') : 'Proceed to next step'}
        </button>
      </div>
    </div>
  );
};
