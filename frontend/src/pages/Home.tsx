import { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import Container from "../components/ui/Container";

import AuditForm from "../components/audit/AuditForm";
import AuditResults from "../components/audit/AuditResults";

import { mockAudit } from "../data/mockAudit";

import type { AuditReport } from "../types/audit";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const [report, setReport] = useState<AuditReport | null>(null);

  function handleAudit(url: string) {
    console.log(url);

    setLoading(true);

    setTimeout(() => {
      setReport(mockAudit);

      setLoading(false);
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <main className="py-16">
        <Container>
          <section className="mx-auto mb-12 max-w-3xl text-center">
            <h1 className="text-5xl font-bold tracking-tight">
              SEO Audit Tool
            </h1>

            <p className="mt-4 text-lg text-neutral-600">
              Analyze any public website and receive actionable SEO
              recommendations.
            </p>
          </section>

          <AuditForm loading={loading} onSubmit={handleAudit} />

          {loading && (
            <div className="mt-10 text-center">
              <p className="text-neutral-500">Auditing website...</p>
            </div>
          )}

          {report && (
            <div className="mt-12">
              <AuditResults report={report} />
            </div>
          )}
        </Container>
      </main>

      <Footer />
    </div>
  );
}
