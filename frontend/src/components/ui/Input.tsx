import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 block text-sm font-medium text-neutral-800"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        className={`
          w-full
          rounded-xl
          border
          px-4
          py-3
          text-sm
          outline-none
          transition
          duration-200
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-neutral-300 focus:border-black focus:ring-2 focus:ring-neutral-300"
          }
          ${className}
        `}
        {...props}
      />

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
