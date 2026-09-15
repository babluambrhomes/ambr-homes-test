"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`stickcta fixed bottom-20 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-[85] flex max-w-[calc(100vw-2rem)] items-center gap-2.5 transition-all duration-500 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <button
        className="grid h-8 w-8 place-items-center rounded-full border border-line/80 bg-white text-ink-2 shadow-md transition-colors hover:text-brand"
        aria-label="Dismiss booking shortcut"
        onClick={() => setShow(false)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      </button>
      <Link
        href="/contact#enquiry"
        className="inline-flex items-center gap-1.5 rounded-full border border-line/80 bg-white px-6 py-3.5 text-sm font-medium text-ink shadow-[0_12px_40px_-12px_rgba(0,0,0,0.2)] transition-colors hover:bg-neutral-50"
      >
        Book A Site Visit
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M4 12L12 4M5.6 4H12v6.4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      </Link>
    </div>
  );
}
