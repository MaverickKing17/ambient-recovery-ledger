
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
