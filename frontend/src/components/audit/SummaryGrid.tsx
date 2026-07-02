import SummaryCard from "./SummaryCard";
import type { AuditSummary } from "../../types/audit";

interface SummaryGridProps {
  summary: AuditSummary;
}

export default function SummaryGrid({ summary }: SummaryGridProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      <SummaryCard title="SEO Score" value={`${summary.score}%`} />

      <SummaryCard title="Total Checks" value={summary.totalChecks} />

      <SummaryCard
        title="Passed"
        value={summary.passed}
        color="text-green-600"
      />

      <SummaryCard
        title="Warnings"
        value={summary.warnings}
        color="text-yellow-600"
      />

      <SummaryCard title="Failed" value={summary.failed} color="text-red-600" />
    </section>
  );
}
