"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/projects";
import { NAV } from "@/lib/site";

export function MobileDrawer({
  open,
  onClose,
  currentPath,
}: {
  open: boolean;
  onClose: () => void;
  currentPath: string;
}) {
  const [openSub, setOpenSub] = useState(false);

  return (
    <div
      id="drawer"
      className={`glass-strong fixed inset-0 z-40 flex flex-col pt-[71px] transition-all duration-500 lg:hidden ${
        open ? "translate-x-0" : "pointer-events-none -translate-x-full"
      }`}
    >
      <div className="mesh pointer-events-none absolute inset-0 -z-10" />
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-6" aria-label="Mobile">
        {NAV.slice(0, 1).map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className={`border-b border-line py-4 text-lg font-medium ${
              currentPath === item.href ? "text-brand" : "text-ink"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <button
          className="flex items-center justify-between border-b border-line py-4 text-left text-lg font-medium text-ink"
          onClick={() => setOpenSub((v) => !v)}
          aria-expanded={openSub}
          aria-controls="drawerSub"
        >
          Projects <span aria-hidden>{openSub ? "−" : "+"}</span>
        </button>
        <div
          id="drawerSub"
          className={`overflow-hidden transition-all duration-500 ${
            openSub ? "max-h-[420px]" : "max-h-0"
          }`}
        >
          {PROJECTS.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              onClick={onClose}
              className="flex items-center justify-between px-2 py-2.5 text-sm text-ink-2"
            >
              {p.name} <span className="small">{p.statusLabel}</span>
            </Link>
          ))}
        </div>

        {NAV.slice(1).map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={onClose}
            className={`border-b border-line py-4 text-lg font-medium ${
              currentPath === item.href ? "text-brand" : "text-ink"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="px-6 pb-8">
        <Link
          href="/contact"
          onClick={onClose}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand px-6 py-3.5 text-base font-medium text-white"
        >
          Contact
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 12L12 4M5.6 4H12v6.4" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        </Link>
        <p className="small mt-4">Vaidpura, Greater Noida West, Uttar Pradesh 201306</p>
      </div>
    </div>
  );
}
