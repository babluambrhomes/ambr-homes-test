"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS, NAV } from "@/lib/data";
import { MobileDrawer } from "./MobileDrawer";

const STATUS_TONE: Record<string, string> = {
  orange: "bg-orange-600",
  green: "bg-emerald-600",
  blue: "bg-blue-600",
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

  const closeProjectsSoon = () => {
    closeTimer.current = setTimeout(() => {
      setProjectOpen(false);
    }, 120);
  };

  const openProjects = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProjectOpen(true);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[200] transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-[0_1px_0_rgba(16,16,16,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1440px] items-center px-4 transition-all duration-500 sm:px-6 lg:px-10 ${
            scrolled ? "h-[64px] sm:h-[72px]" : "h-[74px] sm:h-[82px]"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            className="relative block h-[44px] w-[110px] flex-none sm:h-[52px] sm:w-[130px]"
            aria-label="Ambr Homes — Strength in every brick"
          >
            <Image
              src={scrolled ? "/images/logo_dark.png" : "/images/logo_white.png"}
              alt="Ambr Homes"
              fill
              priority
              sizes="(max-width: 640px) 110px, 130px"
              className="object-contain object-left"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center lg:ml-auto lg:flex"
            aria-label="Primary"
          >
            <div className="flex items-center">
              {NAV.filter((item) => item.label !== "Contact").map((item) => {
                if (item.label === "Projects") {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={openProjects}
                      onMouseLeave={closeProjectsSoon}
                    >
                      <Link
                        href="/projects"
                        onClick={() => setProjectOpen(false)}
                        className={`inline-flex items-center gap-1.5 px-[13px] py-2 text-[15px] font-medium transition-colors duration-300 ${
                          scrolled
                            ? "text-ink hover:text-brand"
                            : "text-white hover:text-white/75"
                        }`}
                        aria-expanded={projectOpen}
                        aria-controls="projMenu"
                        aria-haspopup="true"
                      >
                        {item.label}

                        <svg
                          width="11"
                          height="7"
                          viewBox="0 0 10 6"
                          fill="none"
                          className={`transition-transform duration-300 ${
                            projectOpen ? "rotate-180 text-brand" : ""
                          }`}
                          aria-hidden="true"
                        >
                          <path
                            d="M1 1.25L5 4.75L9 1.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                      {/* Mega Dropdown */}
                      <div
                        id="projMenu"
                        role="menu"
                        aria-label="Projects list"
                        onMouseEnter={openProjects}
                        onMouseLeave={closeProjectsSoon}
                        className={`mega pointer-events-auto absolute right-[-100px] top-[calc(100%+8px)] w-[640px] max-w-[calc(100vw-2rem)] rounded-2xl border border-line/80 bg-white/98 p-4 shadow-[0_20px_50px_-15px_rgba(16,16,16,0.18),0_4px_16px_rgba(16,16,16,0.06)] backdrop-blur-2xl transition-all duration-300 before:absolute before:-top-3 before:inset-x-0 before:h-3 ${
                          projectOpen
                            ? "visible translate-y-0 opacity-100"
                            : "invisible pointer-events-none -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="mb-3 flex items-center justify-between border-b border-line/70 px-2 pb-3">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-brand" />
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink">
                              Featured Communities
                            </p>
                            <span className="text-xs text-muted">
                              · Greater Noida West
                            </span>
                          </div>

                          <Link
                            href="/projects"
                            onClick={() => setProjectOpen(false)}
                            className="group/link inline-flex items-center gap-1.5 text-xs font-semibold text-brand transition-colors hover:text-brand-dark"
                          >
                            <span>All Projects</span>
                            <ArrowUpRight
                              size={14}
                              className="transition-transform duration-200 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                            />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          {PROJECTS.map((p, i) => (
                            <Link
                              key={p.slug}
                              href={`/projects/${p.slug}`}
                              role="menuitem"
                              onClick={() => setProjectOpen(false)}
                              style={{
                                ["--md" as string]: `${0.2 + i * 0.05}s`,
                              }}
                              className="group relative flex items-center gap-3.5 rounded-xl border border-transparent p-2.5 transition-all duration-200 hover:border-line/80 hover:bg-[#faf9f6]"
                            >
                              <span className="relative h-[66px] w-[82px] flex-none overflow-hidden rounded-lg bg-line/50">
                                <Image
                                  src={p.heroImg.src}
                                  alt={p.heroImg.alt}
                                  fill
                                  sizes="82px"
                                  className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                                />
                              </span>

                              <span className="min-w-0 flex-1">
                                <span className="flex items-center justify-between gap-1.5">
                                  <b className="truncate text-sm font-semibold text-ink transition-colors duration-200 group-hover:text-brand">
                                    {p.name}
                                  </b>

                                  <span
                                    className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                                      p.statusTone === "orange"
                                        ? "bg-amber-50 text-amber-700 ring-1 ring-amber-600/20"
                                        : p.statusTone === "green"
                                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-600/20"
                                        : "bg-sky-50 text-sky-700 ring-1 ring-sky-600/20"
                                    }`}
                                  >
                                    <span
                                      className={`h-1.5 w-1.5 rounded-full ${
                                        STATUS_TONE[p.statusTone]
                                      }`}
                                    />
                                    {p.statusTone === "orange"
                                      ? "Pre-booking"
                                      : p.statusTone === "green"
                                      ? "Completed"
                                      : "Ready"}
                                  </span>
                                </span>

                                <span className="mt-1 flex items-center gap-1 text-xs text-muted">
                                  <MapPin
                                    size={11}
                                    className="flex-none text-muted/70"
                                  />
                                  <span className="truncate">
                                    {p.locality} · 2 & 3 BHK
                                  </span>
                                </span>
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 px-[13px] py-2 text-[15px] font-medium transition-colors duration-300 ${
                      scrolled
                        ? "text-ink hover:text-brand"
                        : "text-white hover:text-white/75"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Contact CTA & Mobile Menu */}
          <div className="ml-auto flex items-center lg:ml-6">
            <Link
              href="/contact"
              className={`group hidden items-center sm:flex ${
                scrolled ? "text-ink" : "text-white"
              }`}
            >
              <span className="px-4 text-[15px] font-medium transition-colors duration-300 group-hover:text-brand">
                Contact
              </span>

              <span className="grid h-[40px] w-[40px] place-items-center bg-brand text-white transition-colors duration-300 group-hover:bg-brand-dark">
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>

            {/* Mobile */}
            <button
              type="button"
              className={`ml-auto flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden ${
                scrolled ? "text-ink" : "text-white"
              }`}
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
              <span
                className={`block h-0.5 w-6 bg-current transition-all ${
                  drawerOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
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
