
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
    const cardBase = "bg-black/30 p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-all shadow-inner mb-8";
    const paragraphStyle = "text-slate-300 leading-relaxed text-sm mb-6";
    const boldOrange = "text-orange-400 font-black uppercase tracking-widest text-[10px]";

    switch(view) {
      // SOLUTIONS PAGES
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
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">Active Rebate Programs (2026)</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div class="bg-emerald-500/5 p-6 rounded-2xl border border-emerald-500/20">
                    <h5 class="text-emerald-400 font-black text-lg mb-2">Enbridge HER+ Tier 1</h5>
                    <p class="text-xs text-slate-400 mb-4">Maximum payout for Cold Climate Air Source Heat Pumps (ccASHP). AI validates AHRI match instantly.</p>
                    <div class="text-2xl font-black text-white">$6,500.00 <span class="text-[10px] text-slate-500 uppercase">Per Unit</span></div>
                  </div>
                  <div class="bg-sky-500/5 p-6 rounded-2xl border border-sky-500/20">
                    <h5 class="text-sky-400 font-black text-lg mb-2">Ontario Grid Efficiency Credit</h5>
                    <p class="text-xs text-slate-400 mb-4">Incentives for demand-response integration and VFD blower motor upgrades in multi-residential units.</p>
                    <div class="text-2xl font-black text-white">$1,200.00 <span class="text-[10px] text-slate-500 uppercase">Base Credit</span></div>
                  </div>
                </div>
              </div>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">Filing Statistics</h4>
                <p class="${paragraphStyle}">Our automated filing protocol has a 98.2% acceptance rate with Enbridge auditors. Average payout time reduced from 120 days to 32 days via digital document verification.</p>
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
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">IESO Market Interop</h4>
                <p class="${paragraphStyle}">Ambient Twin synchronizes directly with Independent Electricity System Operator (IESO) load profiles. By modulating setpoints across your fleet's installed base during "Global Adjustment" peak hours, we mint carbon offset credits for your enterprise.</p>
                <div class="flex gap-12 mt-8">
                   <div class="text-center">
                      <span class="${boldOrange}">Live Market Rate</span>
                      <div class="text-3xl font-black text-white mt-1">$142.20<span class="text-xs text-slate-600 ml-1">/MT</span></div>
                   </div>
                   <div class="text-center">
                      <span class="${boldOrange}">Grid Load State</span>
                      <div class="text-3xl font-black text-emerald-400 mt-1 uppercase">Optimal</div>
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
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">The GTA Traffic Tax</h4>
                <p class="${paragraphStyle}">Unbillable technician hours lost to DVP and 401 congestion is the #1 silent killer of HVAC margins. Our audit identifies these losses and auto-reroutes based on live MTO telemetry.</p>
                <div class="space-y-6 mt-8">
                  <div class="flex justify-between items-center border-b border-white/5 pb-4">
                    <span class="text-sm font-bold">Avg. Unbillable/Van (Weekly)</span>
                    <span class="text-red-500 font-black mono">$482.40</span>
                  </div>
                  <div class="flex justify-between items-center border-b border-white/5 pb-4">
                    <span class="text-sm font-bold">Reroute Efficiency Gain</span>
                    <span class="text-emerald-500 font-black mono">+14.2%</span>
                  </div>
                </div>
              </div>
            </div>
          `
        };

      // REGIONAL HUB PAGES
      case 'toronto-hub':
        return {
          title: 'Toronto Service Hub',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">Core Hub Intelligence</h4>
                <p class="${paragraphStyle}">Managed from the downtown core. Specializing in multi-unit residential (MURB) efficiency and dense residential heat pump retrofits. The primary bottleneck for this hub is DVP congestion between Eglinton and the Gardiner.</p>
                <div class="grid grid-cols-2 gap-4 mt-8">
                   <div class="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <span class="text-[9px] font-black uppercase text-slate-500">Asset Density</span>
                      <div class="text-2xl font-black text-white mt-1">4.2k Units</div>
                   </div>
                   <div class="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <span class="text-[9px] font-black uppercase text-slate-500">Avg. Recovery Rate</span>
                      <div class="text-2xl font-black text-emerald-400 mt-1">18.4%</div>
                   </div>
                </div>
              </div>
            </div>
          `
        };
      case 'mississauga-hub':
        return {
          title: 'Mississauga Hub',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">Industrial & Airport Logistics</h4>
                <p class="${paragraphStyle}">Serving the high-volume industrial corridors of Derry Rd and the Pearson Airport vicinity. Focus on massive commercial Rooftop Units (RTUs) and VFD-driven industrial ventilation. High exposure to 401/410/403 corridor leakage.</p>
                <div class="bg-sky-500/5 p-6 rounded-2xl border border-sky-500/20 mt-8">
                   <h5 class="text-sky-400 font-black uppercase text-xs mb-2">Priority Corridor</h5>
                   <p class="text-sm text-white">401 Express/Collector Diversion: Active</p>
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
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">The Nerve Center</h4>
                <p class="${paragraphStyle}">Ambient Twin's primary data-sync hub. Strategically located at the 400/407 junction to provide the lowest latency fleet dispatching in the GTA. This hub serves as the benchmark for all "Titan-Class" contractors in the region.</p>
                <div class="flex items-center gap-2 mt-8">
                   <div class="w-3 h-3 rounded-full bg-emerald-500 pulse-indicator"></div>
                   <span class="text-xs font-black uppercase text-slate-400">Ledger Master Sync: Operational</span>
                </div>
              </div>
            </div>
          `
        };
      case 'oakville-hub':
        return {
          title: 'Oakville & Burlington',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">High-Performance Residential</h4>
                <p class="${paragraphStyle}">Dominating the custom residential market. This hub features the highest adoption rate of multi-stage heat pumps and air-to-water hydronic systems. Focused on "Net-Zero" asset management and maximizing HER+ rebate throughput.</p>
                <div class="mt-8 h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                   <div class="h-full bg-emerald-500 w-[94%]"></div>
                </div>
                <p class="text-[9px] text-slate-500 uppercase font-black mt-2">Heat Pump Conversion Velocity: 94%</p>
              </div>
            </div>
          `
        };
      case 'markham-hub':
        return {
          title: 'Markham Digital Hub',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">Smart Grid Integration</h4>
                <p class="${paragraphStyle}">Serving Canada's high-tech capital. This hub specializes in smart-thermostat ecosystem integration and grid-edge responsiveness. Markham technicians lead the fleet in digital compliance and TSSA document accuracy.</p>
                <div class="grid grid-cols-3 gap-4 mt-8">
                   <div class="text-center">
                      <span class="text-[9px] font-black text-slate-500 uppercase">TSSA Score</span>
                      <div class="text-xl font-black text-white">100%</div>
                   </div>
                   <div class="text-center">
                      <span class="text-[9px] font-black text-slate-500 uppercase">Latency</span>
                      <div class="text-xl font-black text-sky-400">12ms</div>
                   </div>
                   <div class="text-center">
                      <span class="text-[9px] font-black text-slate-500 uppercase">Uptime</span>
                      <div class="text-xl font-black text-emerald-400">99.9%</div>
                   </div>
                </div>
              </div>
            </div>
          `
        };

      // LEGAL PAGES
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
                  <div class="text-2xl font-black text-white mt-2">SOC2 TYPE II</div>
                  <p class="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">Audited Jan 2026</p>
                </div>
                <div class="${cardBase} border-sky-500/20">
                  <span class="${boldOrange}">Encryption Level</span>
                  <div class="text-2xl font-black text-white mt-2">MIL-SPEC 256</div>
                  <p class="text-[10px] text-slate-500 mt-2 uppercase font-bold tracking-widest">End-to-End Vaulting</p>
                </div>
              </div>
            </div>
          `
        };
      case 'terms-of-service':
        return {
          title: 'Enterprise Terms of Service',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">1. Master Service Agreement (MSA)</h4>
                <p class="${paragraphStyle}">By accessing the Ambient Twin Dashboard, the Enterprise Client agrees to utilize the provided "Margin Recovery Ledger" and "Yield AI" tools strictly for the optimization of HVAC field operations within the Province of Ontario. Any use of the platform for unauthorized data scraping or industrial espionage against competing GTA contractors is strictly prohibited and results in immediate termination of the license.</p>
                
                <h4 class="${sectionTitle}">2. The "Matrix" SLA Guarantee</h4>
                <p class="${paragraphStyle}">Ambient Twin Inc. guarantees 99.9% uptime for the primary data synchronization engine. Downtime related to IESO grid data feeds or MTO (Ministry of Transportation) traffic sensor outages is excluded from this guarantee. In the event of a critical ledger outage exceeding 4 hours, service credits will be issued according to the Tier-1 Enterprise schedule.</p>

                <h4 class="${sectionTitle}">3. Professional Responsibility Disclaimer</h4>
                <p class="${paragraphStyle}">Ambient Twin is a decision-support tool. It does not replace the requirement for TSSA-certified inspections. Any automated service protocol recommendations must be reviewed by a licensed G1/G2 Gasfitter or 313A Refrigeration Mechanic before execution. Ambient Twin Inc. holds no liability for mechanical failures resulting from unverified AI recommendations.</p>
              </div>

              <div class="${cardBase} bg-red-500/5 border-red-500/20">
                <h4 class="text-red-400 font-black text-lg mb-4 uppercase italic tracking-tighter">Limitation of Liability</h4>
                <p class="text-xs text-slate-400 leading-relaxed italic">The maximum aggregate liability of Ambient Twin Inc. for any claim arising from the use of the "Recovery Workspace" or "Storm-Surge Predictor" shall not exceed the total fees paid by the Enterprise Client in the twelve (12) months preceding the claim.</p>
              </div>
            </div>
          `
        };
      case 'disclaimer':
        return {
          title: 'Legal Disclaimer & Notices',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase} border-amber-500/30 bg-amber-500/5">
                <h4 class="text-amber-500 font-black text-2xl mb-8 uppercase tracking-tighter italic">REGULATORY NOTICE</h4>
                <p class="text-lg font-bold text-white leading-tight mb-8">The "Ontario Rebate Engine" and associated "Filing AI" tools provide mathematical estimates based on AHRI certifications and current Enbridge Gas HER+ program criteria.</p>
                <div class="space-y-6">
                  <div class="flex gap-4">
                    <div class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                    <p class="text-sm text-slate-300"><b>Payout Not Guaranteed:</b> Final rebate approval is determined by HRAI and third-party energy auditors. Ambient Twin provides documentation support but does not guarantee Enbridge payout success.</p>
                  </div>
                  <div class="flex gap-4">
                    <div class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                    <p class="text-sm text-slate-300"><b>Technical Validation:</b> Predicted "Failure Forecasts" are probabilistic models based on amperage drift and static pressure telemetry. They are not a replacement for an on-site safety inspection by a TSSA-certified professional.</p>
                  </div>
                  <div class="flex gap-4">
                    <div class="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2"></div>
                    <p class="text-sm text-slate-300"><b>Traffic Tax Metrics:</b> "Idle Leakage" costs for the 401/DVP are based on provincial averages for G-class van fuel consumption and GTA median technician labor rates. Individual fleet costs may vary.</p>
                  </div>
                </div>
              </div>
            </div>
          `
        };
      case 'dmca-policy':
        return {
          title: 'Digital Rights & IP Policy',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">Copyright Infringement (DMCA)</h4>
                <p class="${paragraphStyle}">Ambient Twin Inc. respects the intellectual property of others. If you believe that your HVAC-related software, training materials, or marketing assets have been copied and are accessible on the Ambient Twin Dashboard in a way that constitutes copyright infringement, you may notify our registered Copyright Agent.</p>
                
                <h4 class="${sectionTitle}">Formal Notice Procedure</h4>
                <p class="${paragraphStyle}">Your notice must be in writing and include: (a) a physical or electronic signature of the owner; (b) identification of the copyrighted work claimed to have been infringed; (c) identification of the material that is claimed to be infringing; (d) contact information for the complaining party; and (e) a statement that the party has a good faith belief that the use is not authorized.</p>

                <div class="bg-black/40 p-6 rounded-2xl border border-white/5 mt-8">
                  <span class="${boldOrange}">Designated Agent Contact</span>
                  <div class="text-white font-bold mt-2">Ambient Twin IP Department</div>
                  <p class="text-xs text-slate-500 mt-1">100 King St W, Toronto, ON M5X 1A9</p>
                  <p class="text-xs text-sky-400 font-black mt-2">legal@ambienttwin.ca</p>
                </div>
              </div>
            </div>
          `
        };
      case 'cookie-policy':
        return {
          title: 'Enterprise Cookie Policy',
          content: `
            <div class="space-y-8">
              <span class="${subheaderStyle}">${lastUpdated}</span>
              <div class="${cardBase}">
                <h4 class="${sectionTitle}">1. Strictly Necessary Cookies</h4>
                <p class="${paragraphStyle}">These cookies are essential for the operation of the Ambient Twin Enterprise dashboard. They manage session persistence for the "Margin Recovery Ledger" and ensure that "Accountant Reveal" steps are tracked accurately within your browser session.</p>
                
                <h4 class="${sectionTitle}">2. Performance & Regional Hub Cookies</h4>
                <p class="${paragraphStyle}">We use regional preference cookies to store your "Service Hub" selection (e.g., Vaughan HQ vs. Mississauga Satellite). This allows the dashboard to immediately load the correct 401/DVP traffic telemetry relevant to your specific GTA fleet operations.</p>

                <h4 class="${sectionTitle}">3. Zero Third-Party Advertising</h4>
                <p class="${paragraphStyle}"><b>Enterprise Privacy Commitment:</b> Ambient Twin does not utilize third-party tracking pixels (e.g., Meta, Google Ads) for the purpose of cross-site advertising. Your browsing habits and operational HVAC data are never shared with marketing brokers.</p>
              </div>

              <div class="bg-sky-500/5 p-8 rounded-3xl border border-sky-500/20 text-center">
                 <h5 class="text-sky-400 font-black text-lg mb-2 uppercase tracking-tighter">COOKIE AUDIT STATUS</h5>
                 <div class="flex items-center justify-center gap-2">
                    <div class="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.6)]"></div>
                    <span class="text-white font-black uppercase text-xs tracking-widest">Compliance Level: AAA (Clean)</span>
                 </div>
              </div>
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
