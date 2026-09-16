"use client";

import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

export function ProjectAudience({ project }: { project: Project }) {
  const isAspire = project.slug === "aspire";

  const eyebrow = isAspire ? "Who Aspire Makes Sense For" : "Who It's For";

  const title = isAspire
    ? "A Home For The Life You Are Building"
    : "Designed For Every Stage Of Family Life";

  const cardsData = project.uses.map((u) => ({
    title: u.title,
    desc: u.desc,
    img: u.img,
  }));

  return (
    <section className="wrap py-[clamp(56px,7vw,100px)]">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <Heading
            align="center"
            eyebrow={eyebrow}
            title={title}
          />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cardsData.map((u, i) => (
          <Reveal key={u.title} delay={i * 0.08}>
            <div className="group relative h-[380px] sm:h-[420px] overflow-hidden rounded-[1.4rem] sm:rounded-[1.6rem] bg-ink ring-1 ring-white/10 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:ring-brand/60 hover:shadow-xl">
              <Media
                img={u.img}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 25vw"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/10 transition-all duration-500 group-hover:from-black/98 group-hover:via-black/75" />

              {/* Top Glassmorphic Number Badge */}
              <div className="absolute left-4 top-4 sm:left-5 sm:top-5 flex items-center gap-2">
                <span className="rounded-full bg-black/50 px-3 py-1 sm:px-3.5 sm:py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 group-hover:bg-brand group-hover:border-brand">
                  0{i + 1} · {u.title.split(" ")[0]}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end">
                <span className="mb-2.5 sm:mb-3 block h-1 w-8 bg-brand rounded-full transition-all duration-500 group-hover:w-16" />

                <h3 className="text-lg sm:text-xl font-bold leading-tight text-white drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                  {u.title}
                </h3>

                {/* Description - readable on mobile, animated hover on desktop */}
                <div className="grid grid-rows-[1fr] opacity-100 sm:grid-rows-[0fr] sm:opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="pt-2 text-xs sm:text-sm leading-relaxed text-white/90 font-normal">
                      {u.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}