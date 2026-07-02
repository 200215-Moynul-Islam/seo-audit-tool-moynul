import type { AuditIssue } from "../../types/audit";
import Badge from "../ui/Badge";
import Card from "../ui/Card";

interface Props {
  issues: AuditIssue[];
}

export default function AuditResults({ issues }: Props) {
  return (
    <div className="space-y-6">
      {issues.map((issue) => (
        <Card key={issue.rule} className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold">{issue.rule}</h3>

              <p className="mt-1 text-sm text-neutral-600">{issue.message}</p>
            </div>

            <Badge status={issue.status}>{issue.status}</Badge>
          </div>

          {issue.element && (
            <div>
              <p className="text-xs font-semibold uppercase text-neutral-500">
                Affected Element
              </p>

              <code className="mt-2 block rounded bg-neutral-100 p-2 text-sm">
                {issue.element}
              </code>
            </div>
          )}

          <div>
            <p className="text-xs font-semibold uppercase text-neutral-500">
              Recommendation
            </p>

            <p className="mt-1 text-sm text-neutral-700">
              {issue.recommendation}
            </p>
          </div>

          {issue.metrics && (
            <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-neutral-600">
              {Object.entries(issue.metrics).map(([key, value]) => (
                <div key={key}>
                  <span className="font-medium">{key}:</span> {String(value)}
                </div>
              ))}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
