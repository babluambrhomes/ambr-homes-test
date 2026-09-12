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
            className="ml-auto hidden items-center lg:flex"
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
                        Projects

                        <svg
                          width="10"
                          height="7"
                          viewBox="0 0 10 7"
                          fill="none"
                          aria-hidden="true"
                          className={`transition-transform duration-300 ${
                            projectOpen ? "rotate-180" : ""
                          }`}
                        >
                          <path
                            d="M1 1l4 4 4-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>
                      </Link>

                      {/* Projects mega menu */}
                      <div
                        id="projMenu"
                        role="menu"
                        onMouseEnter={openProjects}
                        onMouseLeave={closeProjectsSoon}
                        className={`absolute left-1/2 top-[calc(100%+1px)] w-[760px] -translate-x-1/2 border border-black/10 border-t-0 bg-white px-3 pb-3 pt-4 shadow-[0_30px_70px_-34px_rgba(16,16,16,0.34)] transition-all duration-500 ${
                          projectOpen
                            ? "visible translate-y-0 opacity-100"
                            : "pointer-events-none invisible translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="flex items-center justify-between px-3 pb-3">
                          <div>
                            <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                              Our Communities

                              <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/10 text-brand">
                                <svg
                                  width="11"
                                  height="11"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M2 11 6.5 3l3 1L14 9 9.5 14l-2.5-2z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </p>

                            <p className="mt-0.5 text-xs text-muted">
                              Five addresses in Greater Noida West
                            </p>
                          </div>

                          <Link
                            href="/projects"
                            onClick={() => setProjectOpen(false)}
                            className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-brand"
                          >
                            All Projects
                            <ArrowUpRight size={15} />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {PROJECTS.map((p, i) => (
                            <Link
                              key={p.slug}
                              href={`/projects/${p.slug}`}
                              role="menuitem"
                              onClick={() => setProjectOpen(false)}
                              style={{
                                ["--md" as string]: `${0.2 + i * 0.06}s`,
                              }}
                              className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-black/[0.035]"
                            >
                              <span className="relative h-[64px] w-[76px] flex-none overflow-hidden rounded-lg">
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
                                  <b className="truncate text-sm font-medium text-ink">
                                    {p.name}
                                  </b>

                                  <span
                                    className={`inline-block h-1.5 w-1.5 flex-none rounded-full ${
                                      STATUS_TONE[p.statusTone]
                                    }`}
                                  />
                                </span>

                                <span className="mt-1 flex items-center gap-1 text-xs text-muted">
                                  <MapPin size="11" className="flex-none" />
                                  {p.locality} · {p.statusLabel}
                                </span>
                              </span>

                              <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-black/[0.045] text-ink opacity-0 transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:opacity-100">
                                <ArrowUpRight size="15" />
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

          {/* Contact CTA */}
          <div className="ml-4 flex items-center">
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
