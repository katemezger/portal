export type PillColor =
  | "food"
  | "drink"
  | "social"
  | "learn"
  | "workshop"
  | "industry"
  | "networking"
  | "new"
  | "live"
  | "open"
  | "closed";

const colorClasses: Record<PillColor, string> = {
  food: "bg-rose-200 text-rose-800",
  drink: "bg-accent/40 text-accent-dark",
  social: "bg-emerald-200 text-emerald-800",
  learn: "bg-soft-purple text-lavender",
  workshop: "bg-slate-200 text-slate-700",
  industry: "bg-slate-200 text-slate-700",
  networking: "bg-blue-100 text-blue-700",
  new: "bg-black/10 text-ink/70",
  live: "bg-emerald-500 text-white",
  open: "bg-blue-200 text-blue-800",
  closed: "bg-black/10 text-ink/50",
};

export function Pill({
  color = "new",
  className = "",
  children,
}: {
  color?: PillColor;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-garet text-xs font-bold ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
}
