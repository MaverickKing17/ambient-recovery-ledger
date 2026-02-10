
export interface UnitVitalSigns {
  id: string;
  location: string;
  heatingPower: number;
  systemBreathing: number;
  marketGrade: 'A' | 'B' | 'C';
  efficiency: number;
  alert?: string;
  crmSynced: boolean;
}

export interface RebateLead {
  id: string;
  location: string;
  reason: string;
  rebateAmount: number;
  status: 'Verified' | 'Pending';
}

export interface AccountantStep {
  id: number;
  label: string;
  status: 'complete' | 'active' | 'pending';
}

export interface GridPeakData {
  time: string;
  load: number;
  cost: number;
}

export interface TechCompliance {
  name: string;
  license: string;
  expiry: string;
  status: 'valid' | 'warning' | 'expired';
}

export interface TenantConfig {
  name: string;
  logo: string;
  primaryColor: string;
  region: string;
}

export interface PredictionNode {
  unitId: string;
  location: string;
  failureRisk: number;
  daysToFailure: number;
  predictedIssue: string;
  recommendation: string;
}
