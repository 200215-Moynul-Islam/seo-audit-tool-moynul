import SummaryGrid from "./SummaryGrid";
import PerformanceCard from "./PerformanceCard";
import AuditSection from "./AuditSection";

import type { AuditReport } from "../../types/audit";

interface AuditResultsProps {
  report: AuditReport;
}

export default function AuditResults({ report }: AuditResultsProps) {
  return (
    <div className="space-y-8">
      <SummaryGrid summary={report.summary} />

      <PerformanceCard performance={report.performance} />

      <div className="space-y-6">
        {report.sections.map((section) => (
          <AuditSection key={section.id} section={section} />
        ))}
      </div>
    </div>
  );
}
