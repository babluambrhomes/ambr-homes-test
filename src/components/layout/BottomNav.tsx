"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BOTTOM_NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/why-ambr-homes", label: "Why Ambr" },
  { href: "/contact", label: "Contact" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="bnav glass-nav fixed inset-x-0 bottom-3 z-[80] mx-auto flex w-[calc(100%-1.25rem)] max-w-md items-center justify-between rounded-full px-1.5 py-1.5 shadow-[0_8px_30px_rgb(0,0,0,0.12)] lg:hidden"
      aria-label="Section navigation"
    >
      {BOTTOM_NAV.map(({ href, label }) => {
        const isActive =
          href === "/"
            ? pathname === "/"
            : pathname === href || pathname.startsWith(`${href}/`);

        return (
          <Link
            key={href}
            href={href}
            className={`flex-1 px-1 py-2 sm:py-2.5 text-center text-[0.72rem] xs:text-xs sm:text-sm whitespace-nowrap transition-colors ${
              isActive
                ? "font-semibold text-brand"
                : "font-medium text-ink-2 hover:text-ink"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
