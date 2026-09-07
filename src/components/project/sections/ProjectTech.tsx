"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/lib/projects";
import { IMG } from "@/lib/images";

const FLYERS = [IMG.park, IMG.interior, IMG.community];

export function ProjectTech({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const groups = [
    [project.tech[0], project.tech[1]],
    [project.tech[2], project.tech[3]],
    [project.tech[4], project.tech[5]],
  ];

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scaleBg = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
  const yText = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
  const yCard = [
    useTransform(scrollYProgress, [0, 1], ["8%", "-40%"]),
    useTransform(scrollYProgress, [0, 1], ["-26%", "8%"]),
    useTransform(scrollYProgress, [0, 1], ["18%", "-22%"]),
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-ink py-[clamp(72px,10vw,140px)]"
    >
      {/* Parallax background */}
      <motion.div
        style={{ y: yBg, scale: scaleBg }}
        className="absolute -inset-y-[15%] inset-x-0"
      >
        <Image
          src={IMG.dusk.src}
          alt={IMG.dusk.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/45 to-ink" />
      </motion.div>

      {/* Brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-brand/10 to-transparent" />

      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[1fr_1.15fr]">
        {/* Left — parallax heading */}
        <motion.div style={{ y: yText }} className="relative z-10">
          <span className="flex items-center gap-[13px] text-[0.8125rem] font-semibold uppercase tracking-[0.06em] text-brand after:h-px after:w-12 after:shrink-0 after:bg-brand/60 after:content-['']">
            Technical Overview
          </span>
          <h2 className="mt-4 bg-gradient-to-br from-white to-white/40 bg-clip-text text-[clamp(2.4rem,4.6vw,4.2rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-transparent">
            How An {project.name} Home Is Built
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
            Six systems, specified at contract stage and checked at a defined
            milestone each — from the frame to the switchgear, no &ldquo;or
            equivalent&rdquo;.
          </p>
        </motion.div>

        {/* Right — floating parallax spec cards */}
        <div className="relative h-[540px]">
          {groups[0] && (
            <motion.div
              style={{ y: yCard[0] }}
              whileHover={{ scale: 1.09 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="absolute left-0 top-0 z-30 w-[58%] hover:z-50"
            >
              <Flyer img={FLYERS[0]} project={project.name} items={groups[0]} prefix={1} rotate="-rotate-2" />
            </motion.div>
          )}
          {groups[1] && (
            <motion.div
              style={{ y: yCard[1] }}
              whileHover={{ scale: 1.09 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="absolute right-0 top-[26%] z-20 w-[55%] hover:z-50"
            >
              <Flyer img={FLYERS[1]} project={project.name} items={groups[1]} prefix={3} rotate="rotate-3" />
            </motion.div>
          )}
          {groups[2] && (
            <motion.div
              style={{ y: yCard[2] }}
              whileHover={{ scale: 1.09 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="absolute left-[10%] bottom-0 z-10 w-[50%] hover:z-50"
            >
              <Flyer img={FLYERS[2]} project={project.name} items={groups[2]} prefix={5} rotate="-rotate-1" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function Flyer({
  img,
  project,
  items,
  prefix,
  rotate,
}: {
  img: { src: string; alt: string };
  project: string;
  items: { title: string; desc: string }[];
  prefix: number;
  rotate: string;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl bg-white p-2 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-0 group-hover:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.8)] ${rotate}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 1024px) 60vw, 28vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
        <span className="absolute bottom-2.5 left-2.5 rounded-full border border-white/25 bg-ink/45 px-3 py-1 text-[0.625rem] font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
          {project}
        </span>
      </div>
      <div className="px-1.5 py-2.5">
        {items.map((t, i) => (
          <div key={t.title} className="group/item flex items-start gap-2.5 border-b border-line/70 py-2 last:border-0">
            <span className="mt-0.5 flex-none text-[0.625rem] font-bold tracking-wider text-brand">
              {String(prefix + i).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-[0.8125rem] font-semibold leading-snug text-ink transition-colors duration-300 group-hover/item:text-brand">
                {t.title}
              </h4>
              <p className="mt-0.5 text-xs leading-relaxed text-muted">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}