import Badge from "../ui/Badge";
import Card from "../ui/Card";

import type { AuditResult } from "../../types/audit";

interface AuditItemProps {
  result: AuditResult;
}

export default function AuditItem({ result }: AuditItemProps) {
  return (
    <Card className="space-y-5">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="text-lg font-semibold">{result.title}</h3>

          <p className="mt-2 text-sm leading-6 text-neutral-600">
            {result.description}
          </p>
        </div>

        <Badge status={result.status}>{result.status.toUpperCase()}</Badge>
      </div>

      {result.affectedElement && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
            Affected Element
          </p>

          <code className="mt-2 inline-block rounded-md bg-neutral-100 px-3 py-2 text-sm">
            {result.affectedElement}
          </code>
        </div>
      )}

      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">
          Recommendation
        </p>

        <p className="mt-2 text-sm leading-6 text-neutral-700">
          {result.recommendation}
        </p>
      </div>
    </Card>
  );
}
