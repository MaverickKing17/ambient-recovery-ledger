
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

  const getPageContent = (view: string) => {
    const lastUpdated = "Report Generated: " + new Date().toLocaleDateString();
    const subheaderStyle = "text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mb-4 border-b border-white/5 pb-4 block";
    const sectionTitle = "text-white font-black text-xl uppercase tracking-tighter mb-6 flex items-center gap-3";
    const cardBase = "bg-black/30 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all shadow-inner mb-8";

    switch(view) {
      case 'margin-recovery-ledger':
        return {
          title: 'Margin Recovery Ledger',
          content: `
            <div class="space-y-6">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="${cardBase}">
                  <span class="text-[9px] text-slate-500 uppercase font-black">Gross Recapture</span>
                  <div class="text-3xl font-black text-emerald-400 mono">$142,480</div>
                </div>
                <div class="${cardBase}">
                  <span class="text-[9px] text-slate-500 uppercase font-black">Leakage Rate</span>
                  <div class="text-3xl font-black text-red-500 mono">1.2%</div>
                </div>
                <div class="${cardBase}">
                  <span class="text-[9px] text-slate-500 uppercase font-black">Audit Confidence</span>
                  <div class="text-3xl font-black text-sky-400 mono">99.4%</div>
                </div>
              </div>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">Line-Item Recovery Detail</h4>
                <div class="space-y-4">
                  <div class="flex justify-between border-b border-white/5 pb-4">
                    <span>Mississauga Job #8842 - Unbilled Filter Credit</span>
                    <span class="text-emerald-400 font-black mono">+$42.50</span>
                  </div>
                  <div class="flex justify-between border-b border-white/5 pb-4">
                    <span>Vaughan Dispatch - Reroute Efficiency Recovery</span>
                    <span class="text-emerald-400 font-black mono">+$112.00</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Scarborough Warranty Arbitrage - Auto-Sync</span>
                    <span class="text-emerald-400 font-black mono">+$1,120.00</span>
                  </div>
                </div>
              </div>
            </div>
          `
        };
      case 'technical-vital-signs':
        return {
          title: 'Technical Vital Signs',
          content: `
            <div class="space-y-6">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">GTA-Wide Fleet Telemetry</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div class="space-y-8">
                      <div>
                        <div class="flex justify-between mb-2">
                           <span class="text-xs font-bold text-slate-400">Mean Static Pressure</span>
                           <span class="text-xs font-black text-white">0.52 WC</span>
                        </div>
                        <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                           <div class="h-full bg-emerald-500 w-[52%]"></div>
                        </div>
                      </div>
                      <div>
                        <div class="flex justify-between mb-2">
                           <span class="text-xs font-bold text-slate-400">Blower Motor Amperage Drift</span>
                           <span class="text-xs font-black text-amber-500">+4.2%</span>
                        </div>
                        <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                           <div class="h-full bg-amber-500 w-[65%]"></div>
                        </div>
                      </div>
                   </div>
                   <div class="bg-black/20 p-6 rounded-2xl border border-white/5">
                      <h5 class="text-[10px] uppercase font-black text-slate-500 mb-4">Anomalous Nodes</h5>
                      <div class="space-y-3">
                         <div class="flex justify-between items-center text-xs">
                            <span class="text-white">Unit #2241 (Oakville)</span>
                            <span class="text-red-500 font-black">CRITICAL DELTA</span>
                         </div>
                         <div class="flex justify-between items-center text-xs">
                            <span class="text-white">Unit #9942 (North York)</span>
                            <span class="text-amber-500 font-black">WARNING</span>
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          `
        };
      case 'ontario-rebate-engine':
        return {
          title: 'Ontario Rebate Engine',
          content: `
            <div class="space-y-6">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                 <div class="${cardBase} border-emerald-500/20">
                    <h4 class="text-emerald-400 font-black mb-4 uppercase">HER+ Pipeline</h4>
                    <div class="text-5xl font-black text-white mono mb-2">$422,500</div>
                    <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Enbridge Verified Active Queue</p>
                 </div>
                 <div class="${cardBase} border-sky-500/20">
                    <h4 class="text-sky-400 font-black mb-4 uppercase">Submission Health</h4>
                    <div class="text-5xl font-black text-white mono mb-2">99.8%</div>
                    <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">First-Pass Approval Rate</p>
                 </div>
              </div>
            </div>
          `
        };
      case 'carbon-arbitrage-sync':
        return {
          title: 'Carbon Arbitrage Sync',
          content: `
            <div class="space-y-6">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase} bg-gradient-to-br from-sky-900/40 to-black/40">
                <h4 class="${sectionTitle}">TSX Market Connectivity</h4>
                <div class="flex items-center justify-between gap-12">
                   <div>
                      <span class="text-[10px] uppercase font-black text-slate-500">Asset Liquidity</span>
                      <div class="text-4xl font-black text-white mono">$1,142,900</div>
                   </div>
                   <div class="text-right">
                      <span class="text-[10px] uppercase font-black text-slate-500">Credit Volume</span>
                      <div class="text-4xl font-black text-sky-400 mono">1,400 tCO2e</div>
                   </div>
                </div>
              </div>
            </div>
          `
        };
      case 'fleet-traffic-audit':
        return {
          title: 'Fleet Traffic Audit',
          content: `
            <div class="space-y-6">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase} border-red-500/30">
                 <h4 class="text-red-500 font-black text-xl mb-6 uppercase tracking-tighter">401/DVP Leakage Audit</h4>
                 <div class="space-y-4">
                    <div class="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
                       <span class="text-xs font-bold uppercase tracking-widest">Idle Loss (This Week)</span>
                       <span class="text-red-400 font-black mono">$6,420.00</span>
                    </div>
                    <div class="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/5">
                       <span class="text-xs font-bold uppercase tracking-widest">Optimization Potential</span>
                       <span class="text-emerald-400 font-black mono">+$842.00/day</span>
                    </div>
                 </div>
              </div>
            </div>
          `
        };
      case 'privacy-policy':
        return {
          title: 'Privacy Policy',
          content: `
            <div class="space-y-8 text-slate-300">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <section class="prose prose-invert max-w-none">
                <h4 class="text-white font-black uppercase text-lg mb-4">1. PIPEDA & Data Governance</h4>
                <p>We adhere to the Personal Information Protection and Electronic Documents Act (PIPEDA) for all residential HVAC customer data collected in Ontario.</p>
                <h4 class="text-white font-black uppercase text-lg mb-4">2. Data Sovereignty</h4>
                <p>All telemetry and PII are stored on domestic servers in the Toronto and Montreal regions.</p>
              </section>
            </div>
          `
        };
      case 'terms-of-service':
        return {
          title: 'Terms of Service',
          content: `
            <div class="space-y-8 text-slate-300">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <section class="prose prose-invert max-w-none">
                <h4 class="text-white font-black uppercase text-lg mb-4">1. SLA Guarantee</h4>
                <p>Ambient Twin guarantees 99.9% uptime for the Margin Recovery Ledger. Operational drift analysis is provided as-is based on telemetry feeds.</p>
                <h4 class="text-white font-black uppercase text-lg mb-4">2. Professional Responsibility</h4>
                <p>Our AI tools are decision-support only. Final safety verification must be performed by a Licensed G1/G2/G3 Gasfitter.</p>
              </section>
            </div>
          `
        };
      case 'disclaimer':
        return {
          title: 'Legal Disclaimer',
          content: `
            <div class="space-y-8 text-slate-300">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="bg-amber-500/10 p-8 rounded-3xl border border-amber-500/20">
                <h4 class="text-amber-500 font-black uppercase text-lg mb-4">Regulatory Notice</h4>
                <p>Predicted rebate amounts are estimates and subject to final auditor approval by Enbridge and HRAI. Forecasts are probabilistic and require on-site technical validation.</p>
              </div>
            </div>
          `
        };
      case 'dmca-policy':
        return {
          title: 'DMCA Policy',
          content: `
            <div class="space-y-8 text-slate-300">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <section class="prose prose-invert max-w-none">
                <h4 class="text-white font-black uppercase text-lg mb-4">Intellectual Property</h4>
                <p>The "Traffic Tax" algorithm and "Yield AI" interface are proprietary IP of Ambient Twin, Inc. Unauthorized use of these components in the Ontario HVAC market is prohibited.</p>
              </section>
            </div>
          `
        };
      case 'cookie-policy':
        return {
          title: 'Cookie Policy',
          content: `
            <div class="space-y-8 text-slate-300">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <section class="prose prose-invert max-w-none">
                <h4 class="text-white font-black uppercase text-lg mb-4">Operational Cookies</h4>
                <p>We use session cookies solely for Hub authentication and regional preference tracking. No third-party advertising pixels are utilized.</p>
              </section>
            </div>
          `
        };
      default:
        return null;
    }
  };

  const renderSubPage = () => {
    const pageData = getPageContent(currentView);
    const pageTitle = pageData ? pageData.title : currentView.replace(/-/g, ' ').toUpperCase();
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => setCurrentView('dashboard')}
          className="flex items-center gap-2 font-black uppercase tracking-[0.3em] text-[10px] mb-8 group transition-all"
          style={{ color: tenant.primaryColor }}
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Enterprise Dashboard
        </button>

        <div className="glass rounded-[48px] p-16 border border-white/10 relative overflow-hidden mb-12 shadow-2xl min-h-[600px]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] blur-[140px] pointer-events-none opacity-20" style={{ backgroundColor: tenant.primaryColor }}></div>
          <div className="relative z-10 w-full">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-white uppercase italic">{pageTitle}</h2>
            {pageData && <div className="mt-12" dangerouslySetInnerHTML={{ __html: pageData.content }} />}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-200 pb-32 pt-16">
      <BloombergTicker />
      
      {/* Header */}
      <header className="relative py-14 px-6 text-center">
        <div className="absolute top-14 right-6 hidden md:flex items-center gap-3 px-5 py-2 rounded-full glass border-white/10 cursor-pointer hover:border-white/20 transition-all shadow-xl" onClick={() => setCurrentView('dashboard')}>
          <div className={`w-3 h-3 rounded-full pulse-indicator ${statusConfig.color}`}></div>
          <span className="text-[11px] uppercase font-bold tracking-[0.2em] text-slate-400">{statusConfig.text}</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-6 mb-2">
          <div 
            onClick={() => setCurrentView('dashboard')}
            className="flex items-center justify-center gap-5 cursor-pointer group"
          >
            {tenant.logo ? (
              <img src={tenant.logo} alt="Logo" className="w-16 h-16 rounded-2xl object-cover border border-white/10 group-hover:scale-110 transition-all shadow-[0_0_30px_rgba(0,0,0,0.4)]" />
            ) : (
              <svg className="w-14 h-14 transition-all group-hover:scale-110 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" style={{ color: tenant.primaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            )}
            <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase">{tenant.name}</h1>
          </div>
          <p className="text-slate-400 text-[11px] uppercase font-bold tracking-[0.6em] ml-1">{tenant.region} Regional Enterprise Hub</p>
        </div>
      </header>

      {currentView === 'dashboard' ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 animate-in fade-in duration-700">
          {/* Hero Section */}
          <section className="glass rounded-[40px] p-12 flex flex-col items-center justify-center text-center overflow-hidden relative border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] blur-[180px] pointer-events-none opacity-10" style={{ backgroundColor: tenant.primaryColor }}></div>
            <div className="relative z-10 w-full flex flex-col items-center">
               <div className="flex items-center gap-3 mb-8 px-5 py-2 rounded-full border shadow-lg" style={{ color: tenant.primaryColor, borderColor: `${tenant.primaryColor}33`, backgroundColor: `${tenant.primaryColor}10` }}>
                  <span className="text-xs font-bold uppercase tracking-[0.4em]">Global Ledger Synchronization</span>
               </div>
               <div className="text-[100px] md:text-[140px] font-extrabold text-white mono mb-8 tracking-tighter leading-none" style={{ textShadow: `0 4px 60px ${tenant.primaryColor}33` }}>
                 ${totalRecovered.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
               </div>
               <div className="w-full h-[400px] mb-12">
                 <MarginRecoveryChart data={history} accentColor={tenant.primaryColor} />
               </div>
               <TrafficTaxClock />
            </div>
          </section>

          {/* C-Suite Command Center Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="xl:col-span-2">
              <PredictiveMaintenance onSchedule={(id) => triggerSuccess(`Proactive Response Initiated for Unit #${id}. Predictive Strike Successful.`)} />
            </div>
            <StormSurgePredictor />
            <TSSAGuardian />
          </section>

          {/* Management Row */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <GridEdgeArbitrage />
            <div className="lg:col-span-2">
              <BrandingSettings config={tenant} onUpdate={setTenant} />
            </div>
          </section>

          {/* Recovery Workspace */}
          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-lg">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">Recovery Workspace</h2>
            </div>
            <AccountantReveal onReveal={() => triggerSuccess('Margin Injection Verified: AI scanned $4,200 in hidden ServiceTitan leakage.')} />
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <RebateEngine onClaim={handleBulkClaim} />
            <AutomatedRebateFiling onSuccess={(msg) => triggerSuccess(msg)} />
          </section>

          <section>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/20 shadow-lg">
                <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold uppercase tracking-tighter text-white">System Vital Signs</h2>
            </div>
            <VitalSignsGrid onSync={(unit) => triggerSuccess(`Unit ${unit} Synchronized. Service Protocol Automated.`)} />
          </section>

          <div className="pb-16">
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
