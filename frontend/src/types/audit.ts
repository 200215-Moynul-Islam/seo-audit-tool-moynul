export type AuditStatus = "pass" | "warning" | "fail";

export interface AuditResult {
  id: string;
  title: string;
  status: AuditStatus;
  description: string;
  affectedElement?: string;
  recommendation: string;
}

export interface AuditSection {
  id: string;
  title: string;
  results: AuditResult[];
}

export interface PerformanceSummary {
  responseTime: number;
  pageSize: string;
  requests: number;
  cssFiles: number;
  jsFiles: number;
  images: number;
}

export interface AuditSummary {
  score: number;
  passed: number;
  warnings: number;
  failed: number;
  totalChecks: number;
}

export interface AuditReport {
  summary: AuditSummary;
  performance: PerformanceSummary;
  sections: AuditSection[];
}
