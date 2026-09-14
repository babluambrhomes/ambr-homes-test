"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/shared/Reveal";
import { Button } from "@/components/shared/Button";
import { Media, Pill } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

export function ProjectHero({ project }: { project: Project }) {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  const isAspire = project.slug === "aspire";

  const tagline = isAspire ? "ASPIRE" : project.tagline;
  const heading = isAspire
    ? "More Room For The Life Ahead."
    : project.heading;
  const intro = isAspire
    ? "Aspire is planned for families who want more from the years ahead — generous 2 & 3 BHK homes, wider balconies, thoughtful planning and a landscaped setting in Vaidpura, Greater Noida West. Pre-booking is now open."
    : project.intro;
  const statusLabel = isAspire
    ? "Under Construction · Pre-booking"
    : project.statusLabel;

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-ink pb-44 pt-[calc(71px+clamp(40px,6vw,80px))] text-white"
    >
      {/* Parallax backdrop image */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="absolute inset-0"
      >
        <Media img={project.heroImg} priority sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/45 to-ink" />
      </motion.div>

      <div className="wrap relative">
        <div className="max-w-3xl">
          <Reveal>
            <div className="mb-6">
              <Pill label={statusLabel} tone={project.statusTone} />
            </div>

            <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-14 after:shrink-0 after:bg-brand/60 after:content-['']">
              {tagline}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-[clamp(1.9rem,4.8vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              {heading}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {intro}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* BOOK A SITE VISIT */}
              <Button
                href="/contact"
                className="!min-h-[54px] !rounded-xl !bg-brand !px-7 !py-3.5 !text-[15px] !font-semibold !text-white shadow-[0_14px_40px_-14px_rgba(226,1,15,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:!bg-brand-dark hover:shadow-[0_18px_45px_-12px_rgba(226,1,15,0.9)]"
              >
                Book A Site Visit
              </Button>

              {/* VIEW BROCHURE */}
              <a
                href={project.slug === "amore" ? "/Brochure/aspire.pdf" : `/Brochure/${project.slug}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[54px] items-center gap-3 rounded-xl border border-white/35 bg-white/10 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_-18px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white hover:text-ink hover:shadow-[0_16px_35px_-15px_rgba(0,0,0,0.45)]"
              >
                <span>View Brochure</span>

                <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 transition-all duration-300 group-hover:bg-ink/10">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 12L12 4M5.6 4H12v6.4"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* PROJECT INFO */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                `${project.locality}, Greater Noida West`,
                "Sanctioned & Approved",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-white ring-1 ring-white/20 backdrop-blur-md"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* ASPIRE NOTE */}
            {isAspire && (
              <p className="mt-5 text-sm leading-relaxed text-white/70">
                Come see the plans. Walk the spaces. Take your time.
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
