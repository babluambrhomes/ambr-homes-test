"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import { RedCta } from "@/components/shared/RedCta";
import { ProjectBankPartners } from "@/components/project/sections/ProjectBankPartners";
import { PROJECTS, STATUS_TONES } from "@/lib/data";
import { MapPin, ArrowUpRight, ShieldCheck, Layers } from "lucide-react";

export default function ProjectsPage() {
  const [statusFilter, setStatusFilter] = useState<"all" | "construction" | "ready" | "completed">("all");
  const [localityFilter, setLocalityFilter] = useState<"all" | "Vaidpura" | "Bishrakh">("all");

  const filteredProjects = PROJECTS.filter((p) => {
    // Status filter matching
    if (statusFilter === "construction" && !p.statusLabel.toLowerCase().includes("construction")) {
      return false;
    }
    if (statusFilter === "ready" && !p.statusLabel.toLowerCase().includes("ready")) {
      return false;
    }
    if (statusFilter === "completed" && !p.statusLabel.toLowerCase().includes("completed")) {
      return false;
    }
    // Locality filter matching
    if (localityFilter !== "all" && p.locality !== localityFilter) {
      return false;
    }
    return true;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink pb-20 pt-[clamp(100px,14vw,170px)] text-white">
        {/* Visible Architectural Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/Batlanta.jpg"
            alt="Ambr Homes Building Elevation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-90 transition-transform duration-1000 scale-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-black/20" />
        </div>

        <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-brand/10 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-[350px] w-[350px] rounded-full bg-brand/10 blur-[120px]" />

        <div className="wrap relative z-10">
          <div className="max-w-3xl">
            <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-14 after:shrink-0 after:bg-brand/60 after:content-['']">
              OUR COMMUNITIES & ADDRESSES
            </span>

            <h1 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white drop-shadow-md">
              Delivered Communities & Active Projects
            </h1>

            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90 drop-shadow">
              Five addresses in Vaidpura & Bishrakh — built with clear specifications, sanctioned floor plans, and possession dates that mean something to the families waiting for them.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-white/15 pt-6 sm:pt-8">
            {/* Status Filter */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <span className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider text-white/50 w-full sm:w-auto">
                Status:
              </span>
              {[
                { id: "all", label: "All Projects" },
                { id: "construction", label: "Under Construction" },
                { id: "ready", label: "Ready To Move" },
                { id: "completed", label: "Delivered & Occupied" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setStatusFilter(tab.id as any)}
                  className={`rounded-full px-3.5 py-1.5 sm:px-4 sm:py-2 text-[0.7rem] sm:text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    statusFilter === tab.id
                      ? "bg-brand text-white shadow-lg shadow-brand/30"
                      : "border border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Locality Filter */}
            <div className="flex items-center gap-2 pt-1 sm:pt-0">
              <span className="text-[0.7rem] sm:text-xs font-semibold uppercase tracking-wider text-white/50">
                Locality:
              </span>
              {[
                { id: "all", label: "All Areas" },
                { id: "Vaidpura", label: "Vaidpura" },
                { id: "Bishrakh", label: "Bishrakh" },
              ].map((loc) => (
                <button
                  key={loc.id}
                  onClick={() => setLocalityFilter(loc.id as any)}
                  className={`rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 text-[0.7rem] sm:text-xs font-semibold transition-all duration-300 ${
                    localityFilter === loc.id
                      ? "bg-white text-ink font-bold shadow-md"
                      : "border border-white/15 text-white/60 hover:text-white"
                  }`}
                >
                  {loc.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Projects Grid */}
      <section className="wrap py-[clamp(48px,6vw,96px)]">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                OUR PROJECTS
              </span>
              <h2 className="mt-1.5 sm:mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Five Communities ({filteredProjects.length})
              </h2>
            </div>
            <span className="text-xs sm:text-sm text-muted">
              Walk any completed home or visit our active construction sites — open 7 days a week.
            </span>
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-10 grid gap-6 sm:gap-8 md:grid-cols-2">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-xl">
                {/* Media Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                  <Media
                    img={project.heroImg}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

                  {/* Clean Status & Locality Tag */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="rounded-full border border-white/20 bg-black/60 px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md">
                      {project.locality} · {project.statusLabel}
                    </span>
                  </div>

                  {/* Bottom Title Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-white/80">
                      {project.sub}
                    </p>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="line-clamp-3 min-h-[4.25rem] text-sm leading-relaxed text-ink-2">
                      {project.intro}
                    </p>

                    {/* Configurations list */}
                    <div className="mt-5 flex flex-wrap items-center gap-2">
                      {project.configs.map((c) => (
                        <span
                          key={c.title}
                          className="rounded-full border border-line bg-band/50 px-3 py-1 text-xs font-medium text-ink"
                        >
                          {c.tag}
                        </span>
                      ))}
                      <span className="rounded-full border border-brand/30 bg-brand/5 px-3 py-1 text-xs font-semibold text-brand">
                        Sanctioned & Approved
                      </span>
                    </div>
                  </div>

                  {/* CTA Footer */}
                  <div className="mt-8 flex items-center justify-between border-t border-line pt-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Sanctioned Plans & Specs
                    </span>

                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-brand-dark"
                    >
                      View Project
                      <ArrowUpRight size="14" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Track Record & Delivered Projects (01 to 08) */}
      <ProjectBankPartners />

      {/* CTA Section */}
      <RedCta
        eyebrow="COME VISIT US"
        title="Schedule A Guided Site Visit"
        description="Experience the location, walk through sample plans, and see the construction quality for yourself. Pick a time that suits you — evenings and Sundays included."
        buttons={[
          {
            label: "Book Site Visit Now",
            href: "/contact#enquiry",
            className: "border border-white/40 hover:!bg-white hover:!text-ink",
          },
          {
            label: "Call Sales Desk",
            href: "tel:+919090090032",
            className: "!bg-white !text-brand hover:!bg-ink hover:!text-white",
          },
        ]}
      />
    </>
  );
}
