export type AuditStatus = "pass" | "warning" | "fail";

export interface AuditIssue {
  rule: string;
  status: AuditStatus;
  message: string;
  element?: string | null;
  recommendation: string;

  metrics?: Record<string, number>;
}

export interface AuditResponse {
  url: string;
  issues: AuditIssue[];
}