"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BOTTOM_NAV = [
  { href: "/", label: "Home" },
  { href: "/projects/aspire", label: "Projects" },
  { href: "/why", label: "Why Ambr" },
  { href: "/contact", label: "Contact" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="bnav glass-nav fixed inset-x-0 bottom-3 z-[80] mx-auto flex w-[92vw] max-w-md rounded-full px-2 py-1.5 lg:hidden"
      aria-label="Section navigation"
    >
      {BOTTOM_NAV.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`flex-1 py-4 text-center text-sm transition-colors ${
            pathname === href ? "font-medium text-brand" : "text-ink-2"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
