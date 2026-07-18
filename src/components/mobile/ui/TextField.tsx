import type { InputHTMLAttributes } from "react";

export function TextField({
  label,
  id,
  className = "",
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-garet text-sm font-bold text-ink">
        {label}
      </label>
      <input
        id={id}
        className={`w-full rounded-xl border border-ink/10 bg-input px-4 py-3 font-garet text-sm text-ink placeholder:text-ink/40 outline-none focus:ring-2 focus:ring-primary/40 ${className}`}
        {...props}
      />
    </div>
  );
}
