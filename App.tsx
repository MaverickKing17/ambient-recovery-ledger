
import React, { useState, useEffect } from 'react';
import { TrafficTaxClock } from './components/TrafficTaxClock';
import { AccountantReveal } from './components/AccountantReveal';
import { VitalSignsGrid } from './components/VitalSignsGrid';
import { RebateEngine } from './components/RebateEngine';
import { TitanFeatures } from './components/TitanFeatures';
import { NetZeroFooter } from './components/NetZeroFooter';
import { GlobalFooter } from './components/GlobalFooter';
import { SuccessModal } from './components/SuccessModal';
import { AIChat } from './components/AIChat';
import { MarginRecoveryChart } from './components/MarginRecoveryChart';

type ConnectionStatus = 'connected' | 'intermittent' | 'disconnected';

const App: React.FC = () => {
  const [totalRecovered, setTotalRecovered] = useState(22450.00);
  const [status, setStatus] = useState<ConnectionStatus>('connected');
  const [currentView, setCurrentView] = useState('dashboard');
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
    switch(view) {
      case 'privacy-policy':
        return {
          title: 'Privacy Policy & PIPEDA Compliance',
          content: `
            <div class="space-y-6 text-slate-300">
              <p>Ambient Twin Inc. ("Ambient Twin") is committed to protecting the personal and commercial data of our users in the Greater Toronto Area (GTA). This policy outlines our adherence to the Personal Information Protection and Electronic Documents Act (PIPEDA).</p>
              <h4 class="text-white font-bold">1. Data Collection & Synchronization</h4>
              <p>We synchronize data from third-party HVAC platforms (e.g., ServiceTitan, Jobber). This includes customer addresses, unit serial numbers, and service history. We do not sell this data to third-party marketing entities.</p>
              <h4 class="text-white font-bold">2. Data Residency</h4>
              <p>Primary server clusters are located in Toronto and Montreal to ensure compliance with Canadian data residency requirements. All data "in transit" is encrypted using 256-bit TLS.</p>
              <h4 class="text-white font-bold">3. AI Processing Disclosure</h4>
              <p>Customer data is processed via anonymized tokens using the Gemini-3-Flash model to identify margin recovery opportunities. No personally identifiable information (PII) is used for training public models.</p>
              <h4 class="text-white font-bold">4. Your Rights</h4>
              <p>GTA HVAC Business owners may request a full data export or "Right to be Forgotten" via the Compliance Dashboard at any time.</p>
            </div>
          `
        };
      case 'terms-of-service':
        return {
          title: 'Master Service Agreement (ToS)',
          content: `
            <div class="space-y-6 text-slate-300">
              <p>By accessing the Ambient Twin Enterprise Ledger, you agree to these terms as of January 2025.</p>
              <h4 class="text-white font-bold">1. SaaS Subscription</h4>
              <p>Ambient Twin provides a monthly subscription service billed at $1,499 CAD. Failure to maintain payment results in the immediate suspension of CRM sync and Carbon Arbitrage tracking.</p>
              <h4 class="text-white font-bold">2. Technical Responsibility</h4>
              <p>Ambient Twin is a decision-support tool. Final field decisions, TSSA certification compliance, and onsite safety remain the sole responsibility of the HVAC contractor.</p>
              <h4 class="text-white font-bold">3. API Usage Limits</h4>
              <p>Excessive polling of the ServiceTitan/Jobber sync engine (exceeding 1,000 requests/hour) may result in temporary rate-limiting to preserve grid stability.</p>
              <h4 class="text-white font-bold">4. Termination</h4>
              <p>Notice of cancellation must be provided 30 days prior to the billing cycle. Ambient Twin retains "Historical Margin Logs" for 12 months post-termination unless otherwise requested.</p>
            </div>
          `
        };
      case 'disclaimer':
        return {
          title: 'Legal Disclaimer',
          content: `
            <div class="space-y-6 text-slate-300">
              <p>PLEASE READ THIS DISCLAIMER CAREFULLY BEFORE USING THE AMBIENT TWIN PLATFORM.</p>
              <h4 class="text-white font-bold">1. No Professional Advice</h4>
              <p>The "Margin Recovery Velocity" and "Rebate Projections" provided are estimates based on algorithmic analysis. They do not constitute accounting, legal, or professional engineering advice.</p>
              <h4 class="text-white font-bold">2. Ontario Rebate Eligibility</h4>
              <p>The $6,500 Rebate Engine identifies "qualified leads" based on standard Ontario HRS criteria. Actual rebate issuance is subject to the final audit by Enbridge or the relevant Ontario regulatory body.</p>
              <h4 class="text-white font-bold">3. Traffic Tax Accuracy</h4>
              <p>Traffic Tax calculations are based on live GTA traffic feeds (DVP, 401, QEW). While highly accurate, these are categorized as "Estimated Labor Leakage" and should be verified against actual GPS fleet logs.</p>
            </div>
          `
        };
      case 'dmca-policy':
        return {
          title: 'DMCA & Copyright Policy',
          content: `
            <div class="space-y-6 text-slate-300">
              <p>Ambient Twin respects the intellectual property rights of others. This policy covers our procedures for responding to allegations of copyright infringement.</p>
              <h4 class="text-white font-bold">1. Digital Twin Ownership</h4>
              <p>All source code, UI/UX design components (e.g., "Accountant Reveal"), and proprietary HVAC algorithms are the exclusive property of Ambient Twin Inc.</p>
              <h4 class="text-white font-bold">2. Reporting Infringement</h4>
              <p>If you believe content on our platform infringes your copyright, please contact our Legal Hub at legal@ambienttwin.ca with a full description of the copyrighted work and the location of the allegedly infringing material.</p>
            </div>
          `
        };
      case 'cookie-policy':
        return {
          title: 'Cookie & Tracking Policy',
          content: `
            <div class="space-y-6 text-slate-300">
              <p>We use essential "Enterprise Cookies" to maintain session integrity and CRM synchronization states.</p>
              <h4 class="text-white font-bold">1. Essential Cookies</h4>
              <p>Required for dashboard authentication and real-time ledger updates. Disabling these will render the Ambient Twin workspace inoperable.</p>
              <h4 class="text-white font-bold">2. Performance Tracking</h4>
              <p>We use local storage to cache GTA traffic data and rebate lead status for low-latency performance.</p>
              <h4 class="text-white font-bold">3. No Advertising Cookies</h4>
              <p>Ambient Twin does not use 3rd-party advertising tracking cookies. Your HVAC operations data is not used for retargeting.</p>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => setCurrentView('dashboard')}
          className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold uppercase tracking-widest text-xs mb-8 group"
        >
          <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Ledger
        </button>

        <div className="glass rounded-3xl p-12 border border-white/10 relative overflow-hidden mb-12 shadow-2xl">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-white uppercase">{pageTitle}</h2>
            
            {legal ? (
              <div className="mt-12 prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: legal.content }} />
            ) : (
              <>
                <p className="text-slate-400 max-w-2xl text-lg leading-relaxed mb-10">
                  Detailed analytical breakdown for {pageTitle.toLowerCase()}. Ambient Twin Enterprise provides real-time oversight and automated reconciliation for this sector.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  <div className="bg-slate-900/60 p-8 rounded-2xl border border-white/5">
                    <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest block mb-2">Regional Index</span>
                    <div className="text-3xl font-black text-white">98.2</div>
                    <div className="text-xs text-emerald-400 mt-2 font-bold">+2.4% vs Prev. Quarter</div>
                  </div>
                  <div className="bg-slate-900/60 p-8 rounded-2xl border border-white/5">
                    <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest block mb-2">System Health</span>
                    <div className="text-3xl font-black text-emerald-400">OPTIMIZED</div>
                    <div className="text-xs text-slate-500 mt-2 font-bold">Latency: 14ms</div>
                  </div>
                  <div className="bg-slate-900/60 p-8 rounded-2xl border border-white/5">
                    <span className="text-[10px] uppercase font-black text-slate-500 tracking-widest block mb-2">Market Volatility</span>
                    <div className="text-3xl font-black text-amber-500">LOW</div>
                    <div className="text-xs text-slate-500 mt-2 font-bold">GTA Stable Matrix</div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-2xl p-8 border border-white/5">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-emerald-500 mb-6">Technical Ledger History</h4>
                  <div className="space-y-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                        <div>
                          <div className="text-sm font-bold">Automated Audit ID #2948-{i}</div>
                          <div className="text-[10px] text-slate-500 uppercase tracking-wider">Verified by TSSA API Cluster</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-black mono text-emerald-400">+$124.50</div>
                          <div className="text-[10px] text-slate-500 uppercase">Synchronized</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      {/* Header */}
      <header className="relative py-12 px-6 text-center">
        <div className="absolute top-12 right-6 hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full glass border-white/5 cursor-pointer hover:border-white/20 transition-all" onClick={() => setCurrentView('dashboard')}>
          <div className={`w-2.5 h-2.5 rounded-full pulse-indicator ${statusConfig.color}`}></div>
          <span className="text-[10px] uppercase font-black tracking-widest text-slate-400">{statusConfig.text}</span>
        </div>

        <div className="flex items-center justify-center gap-2 mb-2 cursor-pointer group" onClick={() => setCurrentView('dashboard')}>
          <svg className="w-10 h-10 text-emerald-500 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h1 className="text-4xl font-black tracking-tighter">AMBIENT TWIN</h1>
        </div>
        <p className="text-slate-400 text-sm uppercase font-bold tracking-[0.4em]">GTA HVAC Enterprise Ledger</p>
      </header>

      {currentView === 'dashboard' ? (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 pb-24 animate-in fade-in duration-700">
          {/* Hero Section */}
          <section className="glass rounded-3xl p-10 flex flex-col items-center justify-center text-center overflow-hidden relative border-white/10 shadow-2xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] pointer-events-none"></div>
            <div className="relative z-10 w-full flex flex-col items-center">
               <div className="flex items-center gap-2 text-emerald-400 mb-4 bg-emerald-500/10 px-4 py-1 rounded-full border border-emerald-500/20">
                  <span className="text-xs font-black uppercase tracking-widest">Global Margin Recovery</span>
               </div>
               <div className="text-7xl md:text-9xl font-black text-white glow-emerald mono mb-6 tracking-tighter">
                 ${totalRecovered.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
               </div>
               <div className="w-full h-[360px] mb-10">
                 <MarginRecoveryChart data={history} />
               </div>
               <TrafficTaxClock />
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
              <h2 className="text-2xl font-black uppercase tracking-tighter">Recovery Workspace</h2>
            </div>
            <AccountantReveal onReveal={() => triggerSuccess('Profit Secured: AI detected hidden margins in ServiceTitan drift.')} />
          </section>

          {/* System Vital Signs */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-black uppercase tracking-tighter">System Vital Signs</h2>
            </div>
            <VitalSignsGrid onSync={(unit) => triggerSuccess(`Synced ${unit} to Jobber. Service call automated.`)} />
          </section>

          {/* Bottom Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-12">
            <RebateEngine onClaim={handleBulkClaim} />
            <TitanFeatures />
          </div>
        </main>
      ) : renderSubPage()}

      <GlobalFooter onNavigate={(id) => setCurrentView(id)} />
      <NetZeroFooter />
      <AIChat />
      
      {showSuccess && (
        <SuccessModal message={successMsg} onClose={() => setShowSuccess(false)} />
      )}
    </div>
  );
};

export default App;
