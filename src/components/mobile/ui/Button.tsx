import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "accent" | "soft" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-white text-ink border border-ink/15 hover:bg-black/5",
  accent: "bg-accent text-ink hover:bg-accent-dark",
  soft: "bg-soft-purple text-primary hover:bg-soft-purple/70",
  ghost: "bg-transparent text-ink hover:bg-black/5",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 font-garet text-sm font-bold transition-colors disabled:opacity-50 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
