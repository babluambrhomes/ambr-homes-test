"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const POP_LINKS = [
  { label: "About", href: "/about" },
  { label: "Why Ambr Homes", href: "/why-ambr-homes" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function GlassPopup() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!sessionStorage.getItem("ambr-pop-seen")) setOpen(true);
    }, 3500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem("ambr-pop-seen", "1");
    setDismissed(true);
    setTimeout(() => setOpen(false), 400);
  };

  if (!open) return null;

  return (
    <>
      <aside
        className={`pop fixed bottom-6 right-6 z-[95] w-[min(92vw,340px)] overflow-hidden rounded-2xl border border-line/80 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] transition-all duration-400 ${
          dismissed ? "translate-y-6 opacity-0" : "translate-y-0 opacity-100"
        }`}
        aria-label="Book a site visit"
      >
        <button
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center text-ink-2 hover:text-brand"
          onClick={close}
          aria-label="Dismiss"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" />
          </svg>
        </button>

        <p className="text-lg font-semibold text-ink">Come see what we&apos;ve built</p>
        <p className="small mt-2">
          Compare 2 & 3 BHK options or walk through something we finished years ago.
        </p>

        <div className="mt-4 space-y-1">
          {POP_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={close}
              className="flex items-center justify-between border-b border-line py-2.5 text-sm text-ink-2 transition-colors hover:text-brand"
            >
              {l.label}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M4 12L12 4M5.6 4H12v6.4" stroke="currentColor" strokeWidth="1.7" />
              </svg>
            </Link>
          ))}
        </div>

        <Link
          href="/contact#enquiry"
          onClick={close}
          className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
        >
          Book A Site Visit
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M4 12L12 4M5.6 4H12v6.4" stroke="currentColor" strokeWidth="1.7" />
          </svg>
        </Link>
      </aside>
    </>
  );
}
