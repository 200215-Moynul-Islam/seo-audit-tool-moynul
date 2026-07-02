import { useState } from "react";

import AuditItem from "./AuditItem";

import type { AuditSection as AuditSectionType } from "../../types/audit";

interface AuditSectionProps {
  section: AuditSectionType;
}

export default function AuditSection({ section }: AuditSectionProps) {
  const [open, setOpen] = useState(true);

  return (
    <section className="overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex w-full items-center justify-between px-6 py-5 text-left transition hover:bg-neutral-50"
      >
        <div>
          <h2 className="text-xl font-semibold">{section.title}</h2>

          <p className="mt-1 text-sm text-neutral-500">
            {section.results.length} checks
          </p>
        </div>

        <span className="text-2xl font-light">{open ? "−" : "+"}</span>
      </button>

      {open && (
        <div className="space-y-5 border-t border-neutral-200 bg-neutral-50 p-6">
          {section.results.map((result) => (
            <AuditItem key={result.id} result={result} />
          ))}
        </div>
      )}
    </section>
  );
}
