
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
    const lastUpdated = "Effective Date: January 20, 2026";
    const subheaderStyle = "text-[10px] text-slate-500 font-black uppercase tracking-[0.4em] mb-4 border-b border-white/5 pb-4 block";
    const sectionTitle = "text-white font-black text-xl uppercase tracking-tighter mb-6 flex items-center gap-3";
    const cardBase = "glass p-8 rounded-[32px] border border-white/5 hover:border-white/10 transition-all shadow-inner mb-8";
    const paragraphStyle = "text-slate-400 leading-relaxed text-sm mb-6 font-medium";
    const boldOrange = "text-orange-400 font-black uppercase tracking-widest text-[10px]";

    switch(view) {
      // SOLUTIONS PAGES
      case 'margin-recovery-ledger':
        return {
          title: 'Margin Recovery Ledger',
          content: `
            <div class="space-y-6">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <p class="${paragraphStyle}">The Recovery Ledger is our proprietary financial interop layer. It scans Jobber and ServiceTitan job-logs to identify "Silent Leakage"—unbilled consumables, travel premiums, and missed warranty credits that typically erode 4-7% of gross profit.</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div class="${cardBase}">
                  <span class="text-[9px] text-slate-500 uppercase font-black">Gross Recapture (YTD)</span>
                  <div class="text-3xl font-black text-emerald-400 mono tracking-tighter">$142,480.00</div>
                  <p class="text-[8px] text-slate-500 mt-2 uppercase">Verified via Enterprise Audit</p>
                </div>
                <div class="${cardBase}">
                  <span class="text-[9px] text-slate-500 uppercase font-black">Leakage Rate</span>
                  <div class="text-3xl font-black text-red-500 mono tracking-tighter">1.2%</div>
                  <p class="text-[8px] text-slate-500 mt-2 uppercase">Industry Avg: 6.8%</p>
                </div>
                <div class="${cardBase}">
                  <span class="text-[9px] text-slate-500 uppercase font-black">Audit Confidence</span>
                  <div class="text-3xl font-black text-sky-400 mono tracking-tighter">99.4%</div>
                  <p class="text-[8px] text-slate-500 mt-2 uppercase">AI-Ledger Verification</p>
                </div>
              </div>
              <div class="${cardBase} bg-emerald-500/5">
                <h4 class="${sectionTitle}">Line-Item Recovery Detail</h4>
                <div class="space-y-4">
                  <div class="flex justify-between border-b border-white/5 pb-4 items-center">
                    <div>
                      <span class="block text-white font-bold text-sm">Mississauga Job #8842</span>
                      <span class="text-[9px] text-slate-500 font-bold uppercase">Unbilled Filter Credit + Eco-Fee</span>
                    </div>
                    <span class="text-emerald-400 font-black mono">+$42.50</span>
                  </div>
                  <div class="flex justify-between border-b border-white/5 pb-4 items-center">
                    <div>
                      <span class="block text-white font-bold text-sm">Vaughan Dispatch - 400/407 Reroute</span>
                      <span class="text-[9px] text-slate-500 font-bold uppercase">Labor Idle Mitigation</span>
                    </div>
                    <span class="text-emerald-400 font-black mono">+$112.00</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <div>
                      <span class="block text-white font-bold text-sm">Scarborough Warranty Arbitrage</span>
                      <span class="text-[9px] text-slate-500 font-bold uppercase">Auto-Sync Part Credit</span>
                    </div>
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
              <p class="${paragraphStyle}">Vital Signs provides high-fidelity telemetry from your entire installed base. We convert raw sensor data into EBITDA-impacting maintenance signals, allowing for "Just-in-Time" part replacement before critical failure.</p>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">GTA-Wide Fleet Telemetry</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                   <div class="space-y-8">
                      <div>
                        <div class="flex justify-between mb-2">
                           <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Mean Static Pressure</span>
                           <span class="text-xs font-black text-white mono">0.52 WC</span>
                        </div>
                        <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                           <div class="h-full bg-emerald-500 w-[52%] shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
                        </div>
                      </div>
                      <div>
                        <div class="flex justify-between mb-2">
                           <span class="text-xs font-bold text-slate-400 uppercase tracking-widest">Blower Motor Amperage Drift</span>
                           <span class="text-xs font-black text-amber-500 mono">+4.2%</span>
                        </div>
                        <div class="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-white/5">
                           <div class="h-full bg-amber-500 w-[65%] shadow-[0_0_10px_rgba(245,158,11,0.4)]"></div>
                        </div>
                      </div>
                   </div>
                   <div class="bg-black/40 p-6 rounded-2xl border border-white/5">
                      <h5 class="text-[10px] uppercase font-black text-slate-500 mb-4 tracking-[0.2em]">Anomalous Nodes Identified</h5>
                      <div class="space-y-4">
                         <div class="flex justify-between items-center text-xs border-b border-white/5 pb-2">
                            <span class="text-white font-bold">Unit #2241 (Oakville)</span>
                            <span class="text-red-500 font-black uppercase tracking-tighter">Critical Delta</span>
                         </div>
                         <div class="flex justify-between items-center text-xs">
                            <span class="text-white font-bold">Unit #9942 (North York)</span>
                            <span class="text-amber-500 font-black uppercase tracking-tighter">Op-Warning</span>
                         </div>
                      </div>
                      <div class="mt-4 pt-4 border-t border-white/5">
                        <button class="text-[9px] font-black text-sky-400 uppercase tracking-widest hover:text-white transition-colors">Request Deep-Scan</button>
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
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <p class="${paragraphStyle}">Ambient Twin eliminates the friction of provincial rebates. Our AI parses work orders against Enbridge HER+ criteria and AHRI technical ratings to generate automated filing packages with 100% documentation accuracy.</p>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">Active Rebate Programs (2026)</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="bg-emerald-500/10 p-6 rounded-3xl border border-emerald-500/30 group hover:scale-[1.02] transition-transform">
                    <h5 class="text-emerald-400 font-black text-lg mb-2 italic">Enbridge HER+ ccASHP Tier 1</h5>
                    <p class="text-xs text-slate-400 mb-6 leading-relaxed uppercase font-bold">Cold Climate Air Source Heat Pumps. AI validates AHRI cert-match instantly against provincial ledger.</p>
                    <div class="text-3xl font-black text-white mono">$6,500.00 <span class="text-[10px] text-slate-500 uppercase font-black ml-1">Per Node</span></div>
                  </div>
                  <div class="bg-sky-500/10 p-6 rounded-3xl border border-sky-500/30 group hover:scale-[1.02] transition-transform">
                    <h5 class="text-sky-400 font-black text-lg mb-2 italic">Grid Efficiency Credit (GEC)</h5>
                    <p class="text-xs text-slate-400 mb-6 leading-relaxed uppercase font-bold">Incentives for demand-response interop and VFD blower motor upgrades. Managed via Smart-Grid interop.</p>
                    <div class="text-3xl font-black text-white mono">$1,200.00 <span class="text-[10px] text-slate-500 uppercase font-black ml-1">Base Payout</span></div>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="${cardBase}">
                   <h5 class="text-[10px] uppercase font-black text-slate-500 mb-2">Audit Velocity</h5>
                   <div class="text-2xl font-black text-white mono">32 Days</div>
                   <p class="text-[9px] text-slate-600 mt-1 uppercase font-bold tracking-widest">Industry Average: 120 Days</p>
                </div>
                <div class="${cardBase}">
                   <h5 class="text-[10px] uppercase font-black text-slate-500 mb-2">Acceptance Rate</h5>
                   <div class="text-2xl font-black text-emerald-400 mono">98.2%</div>
                   <p class="text-[9px] text-slate-600 mt-1 uppercase font-bold tracking-widest">First-Pass Submission Success</p>
                </div>
              </div>
            </div>
          `
        };
      case 'carbon-arbitrage-sync':
        return {
          title: 'Carbon Arbitrage Sync',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <p class="${paragraphStyle}">Convert mechanical efficiency into liquid capital. Ambient Twin leverages the IESO market to "mint" carbon offset credits by modulating your fleet's energy demand during Ontario's peak Global Adjustment hours.</p>
              <div class="${cardBase} bg-gradient-to-br from-[#001d44]/30 to-transparent">
                <h4 class="${sectionTitle}">IESO Market Interop Status</h4>
                <p class="text-xs text-slate-300 leading-relaxed mb-8 italic">Operating at the "Grid Edge", we optimize thermostat modulation across 4,000+ nodes to reduce regional load without customer discomfort, creating tradeable ESG value for your firm.</p>
                <div class="flex flex-col md:flex-row gap-12 mt-8">
                   <div class="text-center p-6 bg-black/40 rounded-2xl border border-white/10 flex-1">
                      <span class="${boldOrange}">Live Market Yield</span>
                      <div class="text-4xl font-black text-white mt-2 mono tracking-tighter">$142.20<span class="text-xs text-slate-600 ml-1">/MT</span></div>
                   </div>
                   <div class="text-center p-6 bg-black/40 rounded-2xl border border-emerald-500/20 flex-1">
                      <span class="${boldOrange}">Ecosystem Load State</span>
                      <div class="text-4xl font-black text-emerald-400 mt-2 uppercase italic tracking-tighter">Optimal</div>
                      <p class="text-[8px] text-slate-500 uppercase font-black mt-2">Zero-Curtailment Protocol Active</p>
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
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <p class="${paragraphStyle}">The "GTA Traffic Tax" is the single largest unbilled expense for Toronto HVAC contractors. By syncing ServiceTitan dispatching with live MTO congestion telemetry, we recover lost technician margin through proactive route-shifting.</p>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">The 401/DVP Leakage Report</h4>
                <div class="space-y-8 mt-8">
                  <div class="flex justify-between items-center border-b border-white/5 pb-4">
                    <div>
                      <span class="text-sm font-bold text-white uppercase tracking-tight italic">Avg. Unbillable Leakage / Van</span>
                      <p class="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">Weekly Corridor Transit Cost</p>
                    </div>
                    <span class="text-red-500 text-2xl font-black mono tracking-tighter">$482.40</span>
                  </div>
                  <div class="flex justify-between items-center border-b border-white/5 pb-4">
                    <div>
                      <span class="text-sm font-bold text-white uppercase tracking-tight italic">Reroute Efficiency Delta</span>
                      <p class="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">AI-Optimized Navigation Yield</p>
                    </div>
                    <span class="text-emerald-500 text-2xl font-black mono tracking-tighter">+14.2%</span>
                  </div>
                </div>
                <div class="mt-8 p-4 bg-red-500/5 border border-red-500/20 rounded-xl">
                   <p class="text-xs text-red-400 font-black uppercase tracking-widest text-center">Warning: DVP Southbound Congestion Peak Predicted at 2:15 PM</p>
                </div>
              </div>
            </div>
          `
        };

      // REGIONAL HUB PAGES (Visual Polish)
      case 'toronto-hub':
        return {
          title: 'Toronto Core Service Hub',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase} border-sky-500/20">
                <h4 class="${sectionTitle}">Hub Intelligence Profile</h4>
                <p class="${paragraphStyle}">Located in the Downtown Core, this hub specializes in high-density residential (MURB) and historical commercial retrofits. Operating in the Toronto Core requires precision dispatching to navigate Gardiner and Lakeshore restrictions.</p>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                   <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span class="text-[9px] font-black uppercase text-slate-500">Asset Density</span>
                      <div class="text-xl font-black text-white mt-1">4.2k Units</div>
                   </div>
                   <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span class="text-[9px] font-black uppercase text-slate-500">Recovery Rate</span>
                      <div class="text-xl font-black text-emerald-400 mt-1">18.4%</div>
                   </div>
                   <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span class="text-[9px] font-black uppercase text-slate-500">Avg Tech Exp.</span>
                      <div class="text-xl font-black text-sky-400 mt-1">12yr</div>
                   </div>
                   <div class="p-4 bg-white/5 rounded-2xl border border-white/5">
                      <span class="text-[9px] font-black uppercase text-slate-500">MURB Focus</span>
                      <div class="text-xl font-black text-white mt-1">92%</div>
                   </div>
                </div>
              </div>
            </div>
          `
        };
      case 'vaughan-hub':
        return {
          title: 'Vaughan Enterprise HQ',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase} border-emerald-500/20">
                <h4 class="${sectionTitle}">Global Sync Nerve Center</h4>
                <p class="${paragraphStyle}">Strategic headquarters for the GTA fleet. Vaughan HQ manages the master ledger sync and storm-surge prediction engines. Its proximity to the 400/407 junction provides optimal logistics for Richmond Hill and Markham dispatching.</p>
                <div class="flex items-center gap-4 mt-8 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl">
                   <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500">
                     <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 13l4 4L19 7" stroke-width="3"/></svg>
                   </div>
                   <div>
                     <span class="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Master Node Status: Synced</span>
                     <p class="text-sm text-white font-bold">Latency: 4ms to Regional Grid</p>
                   </div>
                </div>
              </div>
            </div>
          `
        };

      // COMPLIANCE & TRUST PAGES (NEW)
      case 'tssa-compliance':
        return {
          title: 'TSSA Certified Intelligence',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <p class="${paragraphStyle}">Ambient Twin Enterprise maintains a direct data bridge with Ontario regulatory bodies. Our system automates the TSSA document cycle, ensuring every technician license is valid and every tag is digitally archived with a cryptographically verifiable timestamp.</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="${cardBase}">
                   <h5 class="${boldOrange} mb-4">Regulatory Monitoring</h5>
                   <div class="space-y-4">
                      <div class="flex justify-between border-b border-white/5 pb-2">
                        <span class="text-xs text-white">License Compliance Rate</span>
                        <span class="text-xs font-black text-emerald-400 mono">100.00%</span>
                      </div>
                      <div class="flex justify-between border-b border-white/5 pb-2">
                        <span class="text-xs text-white">Audit Pass Probability</span>
                        <span class="text-xs font-black text-emerald-400 mono">99.8%</span>
                      </div>
                      <div class="flex justify-between">
                        <span class="text-xs text-white">Document Latency</span>
                        <span class="text-xs font-black text-sky-400 mono">Real-Time</span>
                      </div>
                   </div>
                </div>
                <div class="${cardBase} bg-emerald-500/5">
                   <h5 class="${boldOrange} mb-4">Certified Protocol</h5>
                   <p class="text-[11px] text-slate-400 italic">"Ambient Twin's automated tagging protocol reduces administrative liability for TSSA Section 32/33 filings by 94% through digital validation of G1/G2 licensing."</p>
                   <p class="text-[9px] font-black text-slate-600 mt-4 uppercase">— Provincial Audit Liaison</p>
                </div>
              </div>
            </div>
          `
        };
      case 'ontario-hrs-audit':
        return {
          title: 'Ontario HRS Audit Transparency',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <p class="${paragraphStyle}">Home Rebate System (HRS) audits are the financial backbone of the modern HVAC enterprise. Ambient Twin provides a "Glass-Box" view into the audit process, visualizing yield capture velocity and auditor acceptance rates across your entire fleet.</p>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">HRS Yield Performance</h4>
                <div class="h-64 w-full bg-black/40 rounded-2xl border border-white/5 flex items-center justify-center mb-8 relative">
                   <div class="text-center">
                     <span class="text-[10px] text-slate-600 font-black uppercase tracking-widest block mb-2 italic">Yield Capture Heatmap Active</span>
                     <div class="flex gap-2 justify-center">
                        <div class="w-2 h-8 bg-emerald-500/20 rounded"></div>
                        <div class="w-2 h-12 bg-emerald-500/40 rounded"></div>
                        <div class="w-2 h-20 bg-emerald-500/60 rounded animate-pulse"></div>
                        <div class="w-2 h-16 bg-emerald-500/40 rounded"></div>
                        <div class="w-2 h-24 bg-emerald-500/80 rounded animate-pulse"></div>
                     </div>
                   </div>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                   <div class="text-center">
                      <span class="text-[9px] text-slate-500 uppercase font-black">Audit Load</span>
                      <div class="text-xl font-black text-white mono">142</div>
                   </div>
                   <div class="text-center">
                      <span class="text-[9px] text-slate-500 uppercase font-black">Verified Revenue</span>
                      <div class="text-xl font-black text-emerald-400 mono">$923k</div>
                   </div>
                   <div class="text-center">
                      <span class="text-[9px] text-slate-500 uppercase font-black">Cycle Time</span>
                      <div class="text-xl font-black text-sky-400 mono">3.2d</div>
                   </div>
                   <div class="text-center">
                      <span class="text-[9px] text-slate-500 uppercase font-black">Loss Avoidance</span>
                      <div class="text-xl font-black text-red-400 mono">4.2%</div>
                   </div>
                </div>
              </div>
            </div>
          `
        };
      case 'soc2-managed':
        return {
          title: 'SOC2 Type II Managed Environment',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <p class="${paragraphStyle}">Enterprise data requires absolute governance. Ambient Twin is audited to SOC2 Type II standards, ensuring that your HVAC operational telemetry and customer financial data are protected by bank-grade security and Canadian-soil data sovereignty.</p>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div class="${cardBase}">
                   <h5 class="${boldOrange} mb-4">Sovereignty</h5>
                   <p class="text-xs text-slate-400">All Enterprise Ledgers are stored in <b>AWS Canada-Central</b> (Toronto) to ensure PIPEDA and Provincial compliance.</p>
                 </div>
                 <div class="${cardBase}">
                   <h5 class="${boldOrange} mb-4">Encryption</h5>
                   <p class="text-xs text-slate-400">Data at rest is secured via <b>AES-256-GCM</b>. Transit uses <b>TLS 1.3</b> with enterprise-grade certificate pinning.</p>
                 </div>
                 <div class="${cardBase}">
                   <h5 class="${boldOrange} mb-4">Access Control</h5>
                   <p class="text-xs text-slate-400">Zero-Trust architecture with <b>MFA enforcement</b> on every dispatch and financial sync action.</p>
                 </div>
              </div>
              <div class="p-8 border border-white/5 bg-black/40 rounded-[32px] text-center">
                <div class="w-16 h-16 bg-white/5 border border-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" stroke-width="2"/></svg>
                </div>
                <h4 class="text-white font-black uppercase text-lg italic tracking-tight mb-2">Security Posture: Hardened</h4>
                <p class="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Last Threat Perimeter Scan: 2:14 PM EST — CLEAN</p>
              </div>
            </div>
          `
        };

      // LEGAL PAGES (Visual Polish)
      case 'privacy-policy':
        return {
          title: 'Privacy & Data Governance',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">1. Personal Information Protection (PIPEDA)</h4>
                <p class="${paragraphStyle}">Ambient Twin Enterprise is fully compliant with the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada. We act as a Data Processor for our HVAC Enterprise clients. All customer Personally Identifiable Information (PII) extracted from ServiceTitan, Jobber, or other CRM integrations is encrypted using AES-256 at rest and TLS 1.3 in transit.</p>
                
                <h4 class="${sectionTitle}">2. Data Sovereignty (Toronto/GTA)</h4>
                <p class="${paragraphStyle}">Operating within the Greater Toronto Area requires strict data residency. All telemetry data, financial ledgers, and technician logs are stored exclusively on Canadian soil (AWS Canada Central - Montreal or Toronto Hubs). We do not transmit operational HVAC data outside of Canadian borders to ensure compliance with municipal and provincial government contracts.</p>

                <h4 class="${sectionTitle}">3. Usage of HVAC Telemetry</h4>
                <p class="${paragraphStyle}">Telemetry data such as static pressure, airflow cycles, and amperage draws are anonymized and aggregated to improve our "Storm-Surge" predictive models. This data is never sold to equipment manufacturers or third-party marketers without explicit written consent from the Enterprise Tenant.</p>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="${cardBase} border-emerald-500/20">
                  <span class="${boldOrange}">Security Status</span>
                  <div class="text-2xl font-black text-white mt-2 mono tracking-tighter">SOC2 TYPE II</div>
                  <p class="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">Audited Jan 2026</p>
                </div>
                <div class="${cardBase} border-sky-500/20">
                  <span class="${boldOrange}">Encryption Level</span>
                  <div class="text-2xl font-black text-white mt-2 mono tracking-tighter">MIL-SPEC 256</div>
                  <p class="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">End-to-End Vaulting</p>
                </div>
              </div>
            </div>
          `
        };
      default:
        // Fallback for Hubs or generic pages
        return {
          title: view.replace(/-/g, ' ').toUpperCase(),
          content: `
            <div class="space-y-8 text-center py-24">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="w-20 h-20 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg class="w-10 h-10 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" stroke-width="2"/></svg>
              </div>
              <h4 class="text-white font-black uppercase text-3xl tracking-tighter italic">Module Loading</h4>
              <p class="text-slate-400 font-medium">Enterprise data for ${view} is being synthesized. Check back shortly.</p>
            </div>
          `
        };
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

        <div className="glass rounded-[48px] p-8 md:p-16 border border-white/10 relative overflow-hidden mb-12 shadow-2xl min-h-[600px]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] blur-[140px] pointer-events-none opacity-20" style={{ backgroundColor: tenant.primaryColor }}></div>
          <div className="relative z-10 w-full">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16 text-white uppercase italic leading-none">{pageTitle}</h2>
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
            <h1 className="text-5xl font-extrabold tracking-tighter text-white uppercase italic">{tenant.name}</h1>
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
               <div className="text-[100px] md:text-[140px] font-extrabold text-white mono mb-8 tracking-tighter leading-none tabular-nums" style={{ textShadow: `0 4px 60px ${tenant.primaryColor}33` }}>
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
              <h2 className="text-3xl font-bold uppercase tracking-tighter text-white italic">Recovery Workspace</h2>
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
              <h2 className="text-3xl font-bold uppercase tracking-tighter text-white italic">System Vital Signs</h2>
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
