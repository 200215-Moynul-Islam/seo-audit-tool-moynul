import { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Container from "../components/ui/Container";

import AuditForm from "../components/audit/AuditForm";
import AuditResults from "../components/audit/AuditResults";

import type { AuditResponse } from "../types/audit";

import { auditWebsite } from "../services/audit";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState<AuditResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleAudit(url: string) {
    try {
      setLoading(true);
      setError(null);

      const result = await auditWebsite(url);

      setReport(result);
    } catch (err) {
      console.error(err);

      setError("Failed to audit website. Please try again.");
      setReport(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />

      <main className="flex-1 pt-24 pb-16">
        <Container>
          {/* Title Section */}
          <section className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight">
              SEO Audit Tool
            </h1>

            <p className="mt-4 text-lg text-neutral-600">
              Analyze any public website and receive actionable SEO
              recommendations.
            </p>
          </section>

          {/* Input Form */}
          <AuditForm loading={loading} onSubmit={handleAudit} />

          {/* Error State */}
          {error && (
            <div className="mt-8 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-red-600">
              {error}
            </div>
          )}

          {/* Loading State */}
          {loading && (
            <div className="mt-10 text-center">
              <p className="text-neutral-500 animate-pulse">
                Auditing website...
              </p>
            </div>
          )}

          {/* Results */}
          {report && (
            <div className="mt-12">
              <AuditResults issues={report.issues} />
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </div>
  );
}
