"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS } from "@/lib/data";
import { NAV } from "@/lib/data";

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
      className={`glass-strong fixed inset-0 z-40 flex flex-col pt-[74px] sm:pt-[82px] transition-all duration-500 lg:hidden ${
        open ? "translate-x-0 visible" : "pointer-events-none -translate-x-full invisible"
      }`}
    >
      <div className="mesh pointer-events-none absolute inset-0 -z-10" />
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-4 pb-28 sm:px-8" aria-label="Mobile">
        {NAV.filter((item) => item.label !== "Contact").map((item) => {
          if (item.label === "Projects") {
            return (
              <div key={item.label}>
                <div className="flex items-center justify-between border-b border-line/70 py-3.5">
                  <Link
                    href="/projects"
                    onClick={onClose}
                    className={`text-base font-medium sm:text-lg ${
                      currentPath === "/projects" || currentPath.startsWith("/projects/")
                        ? "text-brand"
                        : "text-ink"
                    }`}
                  >
                    Projects
                  </Link>
                  <button
                    type="button"
                    onClick={() => setOpenSub((v) => !v)}
                    aria-expanded={openSub}
                    aria-controls="drawerSub"
                    className="px-2 py-1 text-sm font-semibold text-muted hover:text-ink"
                    aria-label="Toggle subprojects"
                  >
                    <span aria-hidden>{openSub ? "−" : "+"}</span>
                  </button>
                </div>

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
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-ink-2 hover:bg-black/5"
                    >
                      <span className="font-medium text-ink">{p.name}</span>
                      <span className="rounded-full bg-brand/10 px-2.5 py-0.5 text-[0.7rem] font-medium text-brand">
                        {p.statusLabel}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`border-b border-line/70 py-3.5 text-base font-medium sm:text-lg ${
                currentPath === item.href ? "text-brand" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        <div className="mt-6 pt-2">
          <Link
            href="/contact"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-base font-medium text-white shadow-lg transition-all hover:bg-brand-dark"
          >
            Book A Site Visit
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M4 12L12 4M5.6 4H12v6.4" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          </Link>
          <p className="small mt-4 text-center">Vaidpura, Greater Noida West, Uttar Pradesh 201306</p>
        </div>
      </nav>
    </div>
  );
}
