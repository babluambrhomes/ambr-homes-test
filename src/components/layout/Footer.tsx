"use client";

import Link from "next/link";
import Image from "next/image";
import { IMG } from "@/lib/images";
import { NAV, CONTACT, SOCIALS } from "@/lib/site";
import { PROJECTS } from "@/lib/projects";

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Instagram: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Facebook: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M14 8h3V4.5h-3c-2.2 0-3.5 1.4-3.5 3.6V11H8v3.4h2.5V21H14v-6.6h2.6L17 11h-3V8.6c0-.4.3-.6 1-.6z" />
    </svg>
  ),
  YouTube: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5l5 2.5-5 2.5z" />
    </svg>
  ),
  LinkedIn: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.4v.1M11.5 17v-3.6c0-1.6 3-1.7 3 0V17" />
    </svg>
  ),
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-ink to-black pb-0 text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-indigo-500/20 blur-[110px]" />
      <div className="wrap relative z-10">
        <div className="grid grid-cols-2 gap-8 pb-12 pt-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/images/logo_white.png"
              alt="Ambr Homes"
              width={120}
              height={49}
              className="h-[40px] w-auto"
            />
            <p className="mt-3 max-w-[26ch] text-sm leading-relaxed text-white/60">
              Built the way we would want ours built.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`Ambr Homes on ${s.label}`}
                  rel="noopener"
                  target="_blank"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                >
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-white/50">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {NAV.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-white/50">
              Projects
            </h4>
            <ul className="space-y-2.5">
              {PROJECTS.map((p) => (
                <li key={p.slug}>
                  <Link href={`/projects/${p.slug}`} className="text-sm text-white/75 hover:text-white">
                    {p.name} — {p.statusLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-white/50">
              Contact Us
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href={CONTACT.phoneHref} className="text-sm text-white/75 hover:text-white">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="text-sm text-white/75 hover:text-white">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <address className="text-sm not-italic text-white/75" style={{ overflowWrap: "anywhere" }}>
                  {CONTACT.addressLine1} {CONTACT.addressLine2}
                </address>
              </li>
              <li>
                <span className="text-[0.9rem] leading-relaxed text-white/50">{CONTACT.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="relative z-10 max-w-[118ch] pb-28 text-[0.76rem] leading-relaxed text-white/40">
          {CONTACT.rera}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 py-6">
         
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            {["Privacy Policy", "Terms & Conditions", "Disclaimer", "Sitemap"].map((l) => (
              <a key={l} href="#" className="text-[0.82rem] text-white/50 hover:text-white">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="ft-skyline pointer-events-none absolute inset-x-0 bottom-0 z-0 select-none opacity-40">
        <svg viewBox="0 0 1440 160" preserveAspectRatio="none" fill="currentColor" className="h-auto w-full text-white/[0.05]" aria-hidden="true">
          <g transform="translate(0 20)">
            <rect x="-20" y="110" width="90" height="70" />
            <rect x="60" y="60" width="70" height="120" />
            <rect x="120" y="88" width="44" height="92" />
            <rect x="178" y="40" width="58" height="140" />
            <rect x="250" y="92" width="66" height="88" />
            <rect x="330" y="56" width="52" height="124" />
            <rect x="396" y="100" width="84" height="80" />
            <rect x="494" y="30" width="60" height="150" />
            <rect x="566" y="80" width="46" height="100" />
            <rect x="626" y="110" width="70" height="70" />
            <rect x="710" y="48" width="54" height="132" />
            <rect x="778" y="90" width="80" height="90" />
            <rect x="872" y="38" width="64" height="142" />
            <rect x="950" y="96" width="50" height="84" />
            <rect x="1014" y="68" width="84" height="112" />
            <rect x="1112" y="104" width="56" height="76" />
            <rect x="1182" y="52" width="48" height="128" />
            <rect x="1244" y="86" width="72" height="94" />
            <rect x="1330" y="34" width="58" height="146" />
            <rect x="1400" y="78" width="60" height="102" />
          </g>
        </svg>
      </div>
    </footer>
  );
}
