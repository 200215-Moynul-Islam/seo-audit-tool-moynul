import Card from "../ui/Card";
import type { PerformanceSummary } from "../../types/audit";

interface PerformanceCardProps {
  performance: PerformanceSummary;
}

export default function PerformanceCard({ performance }: PerformanceCardProps) {
  const metrics = [
    {
      label: "Response Time",
      value: `${performance.responseTime} ms`,
    },
    {
      label: "HTML Size",
      value: performance.pageSize,
    },
    {
      label: "HTTP Requests",
      value: performance.requests,
    },
    {
      label: "CSS Files",
      value: performance.cssFiles,
    },
    {
      label: "JavaScript Files",
      value: performance.jsFiles,
    },
    {
      label: "Images",
      value: performance.images,
    },
  ];

  return (
    <Card>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Performance Summary</h2>

        <p className="mt-1 text-sm text-neutral-500">
          Basic performance-related metrics collected during the audit.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-lg border border-neutral-200 p-4"
          >
            <p className="text-sm text-neutral-500">{metric.label}</p>

            <p className="mt-2 text-xl font-semibold">{metric.value}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
