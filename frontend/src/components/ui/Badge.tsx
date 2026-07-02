interface BadgeProps {
  status: "pass" | "warning" | "fail" | "neutral";
  children: React.ReactNode;
}

const variants = {
  pass: "bg-green-100 text-green-700",
  warning: "bg-yellow-100 text-yellow-700",
  fail: "bg-red-100 text-red-700",
  neutral: "bg-neutral-100 text-neutral-700",
};

export default function Badge({
  status,
  children,
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${variants[status]}
      `}
    >
      {children}
    </span>
  );
}