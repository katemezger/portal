"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { label: "Events", href: "/events" },
  { label: "Apply", href: "/applications" },
  { label: "Dashboard", href: "/dashboard" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-20 flex justify-center">
      <div className="flex w-full max-w-[430px] items-center justify-between bg-card px-6 py-3 shadow-[0_-2px_10px_rgba(0,0,0,0.06)]">
        {TABS.map((tab) => {
          const active = pathname?.startsWith(tab.href);
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-full px-4 py-2 font-garet text-sm font-bold transition-colors ${
                active ? "bg-soft-purple text-primary" : "text-ink/60"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
        <Link
          href="/profile"
          aria-label="Profile"
          className={`h-8 w-8 rounded-full border-2 ${
            pathname?.startsWith("/profile")
              ? "border-primary"
              : "border-black/15"
          } bg-black/10`}
        />
      </div>
    </nav>
  );
}
