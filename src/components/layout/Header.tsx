"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ArrowRight, MapPin } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import { NAV } from "@/lib/site";
import { MobileDrawer } from "./MobileDrawer";

const STATUS_TONE: Record<string, string> = {
  orange: "text-orange-600",
  green: "text-emerald-600",
  blue: "text-blue-600",
};

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [projectOpen, setProjectOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  const isInner = pathname !== "/";

  return (
    <>
      <header
        className={`hdr fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || isInner ? "glass-nav" : "bg-transparent"
        }`}
      >
        <div
          className={`wrap flex items-center justify-between transition-all duration-500 ${
            scrolled || isInner ? "h-[58px]" : "h-[71px]"
          }`}
        >
          <Link href="/" className="flex items-center" aria-label="Ambr Homes — Strength in every brick">
            <Image
              src={scrolled || isInner ? "/images/logo_dark.png" : "/images/logo_white.png"}
              alt="Ambr Homes"
              width={73}
              height={30}
              priority
              className="h-auto w-auto transition-opacity duration-500"
            />
          </Link>

          <nav
            className="nav hidden items-center gap-7 lg:flex"
            aria-label="Primary"
          >
            <div className="flex items-center gap-7">
              {NAV.slice(0, 1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-link text-sm font-medium transition-colors ${
                    scrolled || isInner ? "text-ink hover:text-brand" : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <div
                className="relative"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current);
                  setProjectOpen(true);
                }}
                onMouseLeave={() => {
                  closeTimer.current = setTimeout(() => setProjectOpen(false), 120);
                }}
              >
                <button
                  className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                    scrolled || isInner ? "text-ink hover:text-brand" : "text-white/90 hover:text-white"
                  }`}
                  aria-expanded={projectOpen}
                  aria-controls="projMenu"
                  aria-haspopup="true"
                >
                  Projects
                  <svg width="10" height="7" viewBox="0 0 10 7" fill="none" aria-hidden="true">
                    <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>

                <div
                  id="projMenu"
                  role="menu"
                  className={`bg-white absolute left-1/2 top-[calc(100%+18px)] w-[640px] -translate-x-1/2 rounded-3xl p-4 shadow-[0_30px_80px_-30px_rgba(16,16,16,0.45)] transition-all duration-300 ${
                    projectOpen
                      ? "translate-y-0 opacity-100"
                      : "pointer-events-none translate-y-2 opacity-0"
                  }`}
                  onMouseEnter={() => {
                    if (closeTimer.current) clearTimeout(closeTimer.current);
                    setProjectOpen(true);
                  }}
                  onMouseLeave={() => {
                    closeTimer.current = setTimeout(() => setProjectOpen(false), 120);
                  }}
                >
                  <div className="flex items-center justify-between px-3 pb-3">
                    <div>
                      <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                        Our Communities
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/10 text-brand">
                          <svg width="11" height="11" viewBox="0 0 16 16" fill="none" aria-hidden>
                            <path d="M2 11 6.5 3l3 1L14 9 9.5 14l-2.5-2z" fill="currentColor" />
                          </svg>
                        </span>
                      </p>
                      <p className="small mt-0.5">Five addresses in Greater Noida West</p>
                    </div>
                    <Link href="/projects/aspire" className="tlink text-sm">
                      All Projects
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {PROJECTS.map((p, i) => (
                      <Link
                        key={p.slug}
                        href={`/projects/${p.slug}`}
                        role="menuitem"
                        style={{ ["--md" as string]: `${0.2 + i * 0.06}s` }}
                        className="group flex items-center gap-3 rounded-2xl border border-transparent p-2.5 transition-all duration-300 hover:border-line hover:bg-band/70"
                      >
                        <span className="relative h-[64px] w-[76px] flex-none overflow-hidden rounded-xl">
                          <Image
                            src={p.heroImg.src}
                            alt={p.heroImg.alt}
                            fill
                            sizes="76px"
                            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                          />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="flex items-center gap-2">
                            <b className="truncate font-medium text-ink">{p.name}</b>
                            <span
                              className={`inline-block h-1.5 w-1.5 flex-none rounded-full ${STATUS_TONE[p.statusTone]}`}
                            />
                          </span>
                          <span className="mt-1 flex items-center gap-1 text-xs text-muted">
                            <MapPin size="11" className="flex-none" />
                            {p.locality} · {p.statusLabel}
                          </span>
                        </span>
                        <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-grey text-ink opacity-0 transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:opacity-100">
                          <ArrowUpRight size="15" />
                        </span>
                      </Link>
                    ))}
                  </div>

                 
                </div>
              </div>

              {NAV.slice(1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`nav-link text-sm font-medium transition-colors ${
                    scrolled || isInner
                      ? "text-ink hover:text-brand"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="group hidden items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_30px_-10px_rgba(226,1,15,0.6)] transition-colors hover:bg-brand-dark sm:inline-flex"
            >
              <span className="lbl">Contact</span>
              <span
                className="grid h-5 w-5 place-items-center transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M5.6 4H12v6.4" stroke="currentColor" strokeWidth="1.7" />
                </svg>
              </span>
            </Link>

            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              aria-expanded={drawerOpen}
              aria-controls="drawer"
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              onClick={() => setDrawerOpen((v) => !v)}
            >
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${
                  drawerOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span className={`block h-0.5 w-6 bg-current transition-all ${
                drawerOpen ? "-translate-y-1 -rotate-45" : ""
              }`} />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        currentPath={pathname}
      />
    </>
  );
}
