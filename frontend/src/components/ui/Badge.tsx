import type { ReactNode } from "react";

interface BadgeProps {
  status: "pass" | "warning" | "fail" | "neutral";
  children: ReactNode;
}

const variants = {
  pass: "bg-green-100 text-green-700 border border-green-200",

  warning: "bg-yellow-100 text-yellow-700 border border-yellow-200",

  fail: "bg-red-100 text-red-700 border border-red-200",

  neutral: "bg-neutral-100 text-neutral-700 border border-neutral-200",
};

export default function Badge({ status, children }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        uppercase
        tracking-wide
        ${variants[status]}
      `}
    >
      {children}
    </span>
  );
}
