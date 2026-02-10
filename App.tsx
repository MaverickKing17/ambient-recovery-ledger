
import React, { useState, useEffect } from 'react';
import { BloombergTicker } from './components/BloombergTicker';
import { TrafficTaxClock } from './components/TrafficTaxClock';
import { AccountantReveal } from './components/AccountantReveal';
import { VitalSignsGrid } from './components/VitalSignsGrid';
import { RebateEngine } from './components/RebateEngine';
import { AutomatedRebateFiling } from './components/AutomatedRebateFiling';
import { TitanFeatures } from './components/TitanFeatures';
import { NetZeroFooter } from './components/NetZeroFooter';
import { GlobalFooter } from './components/GlobalFooter';
import { SuccessModal } from './components/SuccessModal';
import { AIChat } from './components/AIChat';
import { MarginRecoveryChart } from './components/MarginRecoveryChart';
import { GridEdgeArbitrage } from './components/GridEdgeArbitrage';
import { StormSurgePredictor } from './components/StormSurgePredictor';
import { TSSAGuardian } from './components/TSSAGuardian';
import { PredictiveMaintenance } from './components/PredictiveMaintenance';
import { BrandingSettings } from './components/BrandingSettings';
import { TenantConfig } from './types';

type ConnectionStatus = 'connected' | 'intermittent' | 'disconnected';

const App: React.FC = () => {
  const [totalRecovered, setTotalRecovered] = useState(22450.00);
  const [status, setStatus] = useState<ConnectionStatus>('connected');
  const [currentView, setCurrentView] = useState('dashboard');
  const [tenant, setTenant] = useState<TenantConfig>({
    name: 'Ambient Twin Enterprise',
    logo: '',
    primaryColor: '#10b981',
    region: 'Greater Toronto Area'
  });
  
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

  useEffect(() => {
    const statusTimer = setInterval(() => {
      const rand = Math.random();
      if (rand > 0.95) setStatus('disconnected');
      else if (rand > 0.85) setStatus('intermittent');
      else setStatus('connected');
    }, 12000);
    return () => clearInterval(statusTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (status === 'disconnected') return;
      setTotalRecovered(prev => {
        const nextValue = prev + 0.05;
        const nextTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setHistory(h => {
          const updated = [...h, { time: nextTime, amount: nextValue }];
          return updated.slice(-25);
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

  const statusConfig = status === 'connected' ? { color: 'bg-emerald-500', text: 'Live Feed Connected' } :
                     status === 'intermittent' ? { color: 'bg-amber-500', text: 'Intermittent Sync' } :
                     { color: 'bg-red-500', text: 'Connection Lost' };

  const getLegalContent = (view: string) => {
    const lastUpdated = "Last Updated: January 15, 2026";
    switch(view) {
      case 'privacy-policy':
        return {
          title: 'Privacy Policy & PIPEDA Compliance',
          content: `
            <div class="space-y-8 text-slate-300">
              <p class="text-xs text-slate-500 font-bold uppercase tracking-widest">${lastUpdated}</p>
              <section class="space-y-4">
                <h4 class="text-white font-black text-xl uppercase tracking-tighter">1. Data Governance Architecture</h4>
                <p>${tenant.name} operates as a secure data intermediary for high-volume HVAC enterprises. We strictly adhere to the Personal Information Protection and Electronic Documents Act (PIPEDA) and Ontario’s provincial privacy standards.</p>
              </section>
            </div>
          `
        };
      default:
        return null;
    }
  };

  const renderSubPage = () => {
    const legal = getLegalContent(currentView);
    const pageTitle = legal ? legal.title : currentView.replace(/-/g, ' ').toUpperCase();
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => setCurrentView('dashboard')}
          className="flex items-center gap-2 font-bold uppercase tracking-widest text-[10px] mb-8 group"
          style={{ color: tenant.primaryColor }}
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Ledger
        </button>

        <div className="glass rounded-3xl p-12 border border-white/10 relative overflow-hidden mb-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] blur-[100px] pointer-events-none opacity-20" style={{ backgroundColor: tenant.primaryColor }}></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white uppercase">{pageTitle}</h2>
            {legal && <div className="mt-12 prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: legal.content }} />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-100 pb-32 pt-10">
      <BloombergTicker />
      
      {/* Header */}
      <header className="relative py-12 px-6 text-center">
        <div className="absolute top-12 right-6 hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5 cursor-pointer hover:border-white/20 transition-all" onClick={() => setCurrentView('dashboard')}>
          <div className={`w-2.5 h-2.5 rounded-full pulse-indicator ${statusConfig.color}`}></div>
          <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">{statusConfig.text}</span>
        </div>

        <div className="flex items-center justify-center gap-4 mb-2 cursor-pointer group" onClick={() => setCurrentView('dashboard')}>
          {tenant.logo ? (
            <img src={tenant.logo} alt="Logo" className="w-12 h-12 rounded-xl object-cover border border-white/10 group-hover:scale-110 transition-transform" />
          ) : (
            <svg className="w-10 h-10 transition-transform group-hover:scale-110" style={{ color: tenant.primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          )}
          <h1 className="text-4xl font-black tracking-tighter text-white uppercase">{tenant.name}</h1>
        </div>
        <p className="text-slate-500 text-[10px] uppercase font-black tracking-[0.5em]">{tenant.region} Enterprise Hub</p>
      </header>

      {currentView === 'dashboard' ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-700">
          {/* Hero Section */}
          <section className="glass rounded-[32px] p-10 flex flex-col items-center justify-center text-center overflow-hidden relative border-white/5 shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] pointer-events-none opacity-5" style={{ backgroundColor: tenant.primaryColor }}></div>
            <div className="relative z-10 w-full flex flex-col items-center">
               <div className="flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border" style={{ color: tenant.primaryColor, borderColor: `${tenant.primaryColor}22`, backgroundColor: `${tenant.primaryColor}08` }}>
                  <span className="text-[10px] font-black uppercase tracking-widest">Global Margin Recovery Sync</span>
               </div>
               <div className="text-[80px] md:text-[120px] font-black text-white mono mb-6 tracking-tighter leading-none" style={{ textShadow: `0 0 40px ${tenant.primaryColor}22` }}>
                 ${totalRecovered.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
               </div>
               <div className="w-full h-[380px] mb-12">
                 <MarginRecoveryChart data={history} accentColor={tenant.primaryColor} />
               </div>
               <TrafficTaxClock />
            </div>
          </section>

          {/* C-Suite Command Center Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="xl:col-span-2">
              <PredictiveMaintenance onSchedule={(id) => triggerSuccess(`Proactive Tech Dispatched for Unit #${id}. Failure prevented.`)} />
            </div>
            <StormSurgePredictor />
            <TSSAGuardian />
          </section>

          {/* New Management Row */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GridEdgeArbitrage />
            <div className="lg:col-span-2">
              <BrandingSettings config={tenant} onUpdate={setTenant} />
            </div>
          </section>

          {/* Recovery Workspace */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Recovery Workspace</h2>
            </div>
            <AccountantReveal onReveal={() => triggerSuccess('Profit Secured: AI detected hidden margins in ServiceTitan drift.')} />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RebateEngine onClaim={handleBulkClaim} />
            <AutomatedRebateFiling onSuccess={(msg) => triggerSuccess(msg)} />
          </section>

          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter text-white">System Vital Signs</h2>
            </div>
            <VitalSignsGrid onSync={(unit) => triggerSuccess(`Synced ${unit} to Jobber. Service call automated.`)} />
          </section>

          <div className="pb-12">
            <TitanFeatures />
          </div>
        </main>
      ) : renderSubPage()}

      <GlobalFooter onNavigate={(id) => setCurrentView(id)} />
      <NetZeroFooter tenantColor={tenant.primaryColor} />
      <AIChat />
      
      {showSuccess && (
        <SuccessModal message={successMsg} onClose={() => setShowSuccess(false)} />
      )}
    </div>
  );
};

export default App;
