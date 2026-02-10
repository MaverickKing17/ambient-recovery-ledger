
import React, { useState, useEffect } from 'react';
import { TrafficTaxClock } from './components/TrafficTaxClock';
import { AccountantReveal } from './components/AccountantReveal';
import { VitalSignsGrid } from './components/VitalSignsGrid';
import { RebateEngine } from './components/RebateEngine';
import { TitanFeatures } from './components/TitanFeatures';
import { NetZeroFooter } from './components/NetZeroFooter';
import { SuccessModal } from './components/SuccessModal';
import { MarginRecoveryChart } from './components/MarginRecoveryChart';

type ConnectionStatus = 'connected' | 'intermittent' | 'disconnected';

const App: React.FC = () => {
  const [totalRecovered, setTotalRecovered] = useState(22450.00);
  const [status, setStatus] = useState<ConnectionStatus>('connected');
  const [history, setHistory] = useState<{ time: string; amount: number }[]>(() => {
    const initial = [];
    const now = Date.now();
    for (let i = 20; i >= 0; i--) {
      initial.push({
        time: new Date(now - i * 5000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        amount: 22450.00 - (i * 0.05)
      });
    }
    return initial;
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Simulation: Randomly fluctuate connection status for realism
  useEffect(() => {
    const statusTimer = setInterval(() => {
      const rand = Math.random();
      if (rand > 0.95) setStatus('disconnected');
      else if (rand > 0.85) setStatus('intermittent');
      else setStatus('connected');
    }, 12000);
    return () => clearInterval(statusTimer);
  }, []);

  // Increment total recovered and update history for real-time charting
  useEffect(() => {
    const timer = setInterval(() => {
      // Only recover if not disconnected
      if (status === 'disconnected') return;

      setTotalRecovered(prev => {
        const nextValue = prev + 0.05;
        const nextTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        setHistory(h => {
          const updated = [...h, { time: nextTime, amount: nextValue }];
          return updated.slice(-25); // Keep last 25 points for smooth visualization
        });
        
        return nextValue;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [status]);

  const triggerSuccess = (msg: string) => {
    setSuccessMsg(msg);
    setShowSuccess(true);
  };

  const handleBulkClaim = (ids: string[]) => {
    const totalRevenue = ids.length * 6500;
    triggerSuccess(`Profit Secured: $${totalRevenue.toLocaleString()} Revenue Injected from ${ids.length} leads. Unbillable Truck Rolls Prevented.`);
  };

  const getStatusConfig = (s: ConnectionStatus) => {
    switch (s) {
      case 'connected': return { color: 'bg-emerald-500', text: 'Live Feed Connected' };
      case 'intermittent': return { color: 'bg-amber-500', text: 'Intermittent Sync' };
      case 'disconnected': return { color: 'bg-red-500', text: 'Connection Lost' };
    }
  };

  const statusConfig = getStatusConfig(status);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 pb-32">
      {/* Header */}
      <header className="relative py-8 px-6 text-center">
        {/* Status Indicator Pill */}
        <div className="absolute top-8 right-6 hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5">
          <div className={`w-2.5 h-2.5 rounded-full pulse-indicator ${statusConfig.color}`}></div>
          <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">{statusConfig.text}</span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-8 h-8 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h1 className="text-3xl font-bold tracking-tight">Ambient Twin Enterprise</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase tracking-[0.2em]">GTA HVAC Margin Recovery System</p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Hero Section: Total Recovered, Real-time Chart & Live Traffic Tax */}
        <section className="glass rounded-3xl p-10 flex flex-col items-center justify-center text-center overflow-hidden relative">
          {/* Background subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>

          <div className="relative z-10 w-full flex flex-col items-center">
             <div className="flex items-center gap-2 text-emerald-500 mb-2">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-semibold tracking-wider">Total Recovered Capital</span>
             </div>
             
             <div className="text-6xl md:text-8xl font-black text-emerald-400 glow-emerald mono mb-4">
               ${totalRecovered.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
             </div>

             <div className="w-full h-[320px] mb-8">
               <MarginRecoveryChart data={history} />
             </div>

             <TrafficTaxClock />
          </div>
        </section>

        {/* Core Engine: Accountant Reveal */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h2 className="text-xl font-bold uppercase tracking-widest">Profit Recovery Sync</h2>
          </div>
          <AccountantReveal onReveal={() => triggerSuccess('Profit Secured: AI detected hidden margins in ServiceTitan drift.')} />
        </section>

        {/* Technical System Intelligence */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <h2 className="text-xl font-bold uppercase tracking-widest text-slate-100">Technical System Intelligence (TSI) Vital Signs</h2>
          </div>
          <VitalSignsGrid onSync={(unit) => triggerSuccess(`Synced ${unit} to Jobber. Service call automated.`)} />
        </section>

        {/* Rebate Engine & Titan Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <RebateEngine onClaim={handleBulkClaim} />
          <TitanFeatures />
        </div>

      </main>

      <div className="pb-32"></div>

      <NetZeroFooter />
      
      {showSuccess && (
        <SuccessModal message={successMsg} onClose={() => setShowSuccess(false)} />
      )}
    </div>
  );
};

export default App;
