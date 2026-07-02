import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({
  children,
  className = "",
  ...props
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        w-full
        max-w-7xl
        px-6
        lg:px-8
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
