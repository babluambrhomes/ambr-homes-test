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
    ? "A home should have room for the people you are today — and the people your family may become. Aspire brings together 2 & 3 BHK homes in Vaidpura, with generous balconies, natural light, ventilation and spaces made for everyday family life."
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
      <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
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
            <h1 className="mt-5 text-[clamp(2.4rem,5.2vw,4.6rem)] font-medium leading-[1.05] tracking-[-0.02em] text-white">
              {heading}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
              {intro}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8">
              <Button href="/contact">Book A Site Visit</Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                `${project.locality}, Greater Noida West`,
                "RERA Registered",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] text-white ring-1 ring-white/20 backdrop-blur-md"
                >
                  {t}
                </span>
              ))}
            </div>

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