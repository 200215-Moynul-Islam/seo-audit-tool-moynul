import type { AuditResponse } from "../types/audit";

const API_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

interface ApiResponse {
  success: boolean;
  data: AuditResponse;
}

export async function auditWebsite(url: string): Promise<AuditResponse> {
  const response = await fetch(`${API_URL}/audit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });

  if (!response.ok) {
    throw new Error("Audit failed.");
  }

  const result: ApiResponse = await response.json();

  return result.data;
}
