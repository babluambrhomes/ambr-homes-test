"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Project } from "@/lib/data";

const PROJECT_FLYERS: Record<string, { src: string; alt: string }[]> = {
  aspire: [
    { src: "/images/aspire-01.jpeg", alt: "Aspire Building Elevation" },
    { src: "/images/unsp14.jpg", alt: "Modular Kitchen & Interior" },
    { src: "/images/bal.jpg", alt: "Spacious Balcony View" },
  ],
  magnolia: [
    { src: "/images/magno1.jpg", alt: "Magnolia Courtyard View" },
    { src: "/images/stu1.jpg", alt: "Interior Living Room" },
    { src: "/images/ambr38.jpeg", alt: "Magnolia Elevation" },
  ],
  amore: [
    { src: "/images/ambr10.jpeg", alt: "Amore Classical Architecture" },
    { src: "/images/park.jpg", alt: "Park Facing View" },
    { src: "/images/hero-4.jpeg", alt: "Finished Living Space" },
  ],
  atlanta: [
    { src: "/images/Batlanta.jpg", alt: "Atlanta Landmark Luxury" },
    { src: "/images/cross.jpg", alt: "Sunlit Room & Ventilation" },
    { src: "/images/bal.jpg", alt: "Wide Balcony View" },
  ],
  ambrosia: [
    { src: "/images/Bambrosia.jpeg", alt: "Ambrosia Completed Community" },
    { src: "/images/2bhk.jpg", alt: "2 BHK Layout" },
    { src: "/images/3bhk.jpg", alt: "3 BHK Corner Unit" },
  ],
};

const DEFAULT_FLYERS = [
  { src: "/images/aspire-01.jpeg", alt: "Park-facing home at Ambr Homes" },
  { src: "/images/hero-4.jpeg", alt: "Finished living room at an Ambr Homes flat" },
  { src: "/images/ambr19.jpeg", alt: "Ambr Homes residential community in Greater Noida West" },
];

export function ProjectTech({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const flyers = PROJECT_FLYERS[project.slug] || DEFAULT_FLYERS;

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
          src={project.heroImg.src || "/images/aspire-01.jpg"}
          alt={project.heroAlt || "Ambr Homes community at dusk"}
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/45 to-ink" />
      </motion.div>

      {/* Brand glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-brand/10 to-transparent" />

      <div className="wrap relative grid items-center gap-10 lg:gap-14 lg:grid-cols-[1fr_1.15fr]">
        {/* Left — parallax heading */}
        <motion.div style={{ y: yText }} className="relative z-10">
          <span className="inline-block text-sm sm:text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-brand">
            Technical Overview
          </span>
          <h2 className="mt-3 sm:mt-4 bg-gradient-to-br from-white to-white/40 bg-clip-text text-[clamp(1.9rem,4.5vw,4.2rem)] font-semibold leading-[1.05] sm:leading-[1.02] tracking-[-0.03em] text-transparent">
            How An {project.name} Home Is Built
          </h2>
          <p className="mt-4 sm:mt-6 max-w-md text-base sm:text-lg leading-relaxed text-white/70">
            Six systems, specified at contract stage and checked at a defined
            milestone each — from the frame to the switchgear, no &ldquo;or
            equivalent&rdquo;.
          </p>
        </motion.div>

        {/* Right — floating parallax photo cards */}
        <div className="relative h-[390px] sm:h-[480px] lg:h-[620px]">
          {flyers[0] && (
            <motion.div
              style={{ y: yCard[0] }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="absolute left-0 top-0 z-30 w-[65%] sm:w-[56%] hover:z-50"
            >
              <Flyer img={flyers[0]} rotate="-rotate-2" />
            </motion.div>
          )}
          {flyers[1] && (
            <motion.div
              style={{ y: yCard[1] }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="absolute right-0 top-[20%] z-20 w-[62%] sm:w-[53%] hover:z-50"
            >
              <Flyer img={flyers[1]} rotate="rotate-3" />
            </motion.div>
          )}
          {flyers[2] && (
            <motion.div
              style={{ y: yCard[2] }}
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="absolute left-[8%] bottom-0 z-10 w-[56%] sm:w-[48%] hover:z-50"
            >
              <Flyer img={flyers[2]} rotate="-rotate-1" />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

function Flyer({
  img,
  rotate,
}: {
  img: { src: string; alt: string };
  rotate: string;
}) {
  return (
    <div
      className={`group overflow-hidden rounded-2xl bg-white/10 p-2.5 backdrop-blur-md ring-1 ring-white/20 shadow-[0_35px_70px_-20px_rgba(0,0,0,0.7)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-0 group-hover:ring-brand/60 group-hover:shadow-[0_60px_100px_-30px_rgba(226,1,15,0.4)] ${rotate}`}
    >
      <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-xl bg-ink">
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 1024px) 60vw, 30vw"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
        />
      </div>
    </div>
  );
}