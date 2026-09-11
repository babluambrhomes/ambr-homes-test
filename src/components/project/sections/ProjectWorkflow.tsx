"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { Heading } from "@/components/shared/ui";
import type { Project } from "@/lib/data";

export function ProjectWorkflow({ project }: { project: Project }) {
  const swiper = useRef<any>(null);
  const [idx, setIdx] = useState(0);

  return (
    <section className="relative overflow-hidden bg-ink py-[clamp(56px,6vw,96px)]">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="wrap relative">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="mx-auto max-w-3xl text-center md:mx-0 md:text-left">
            <Reveal>
              <Heading
                light
                eyebrow="CONSTRUCTION WORKFLOW"
                title="From Foundation To Keys"
                description="A home takes more than a floor plan to become real. Here is the simple version of what has to happen before a family turns a key."
              />
            </Reveal>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiper.current?.slidePrev()}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-brand hover:bg-brand"
            >
              <ChevronLeft size="18" />
            </button>
            <button
              onClick={() => swiper.current?.slideNext()}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:border-brand hover:bg-brand"
            >
              <ChevronRight size="18" />
            </button>
            <span className="ml-2 inline-flex items-baseline text-sm text-white/60">
              <span className="text-xl font-medium text-white tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
              <span className="mx-1.5 text-white/40">/</span>
              <span className="tabular-nums">{String(project.steps.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>

        <div className="mt-12">
          <Swiper
            modules={[Navigation, Pagination]}
            onSwiper={(s) => (swiper.current = s)}
            onSlideChange={(s) => setIdx(s.activeIndex)}
            pagination={{ el: ".workflow-pagination", clickable: true }}
            spaceBetween={20}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              900: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
            className="!overflow-hidden !pb-16"
          >
            {project.steps.map((s, i) => (
              <SwiperSlide key={s.title} className="!h-auto">
                <div className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand/40 hover:bg-white/[0.07]">
                  <span className="pointer-events-none absolute -right-2 -top-6 bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-[7rem] font-bold leading-none text-transparent">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <span className="relative grid h-14 w-14 flex-none place-items-center rounded-2xl bg-brand/15 text-base font-bold text-brand transition-transform duration-500 group-hover:rotate-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <h3 className="relative mt-7 text-xl font-medium text-white">{s.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-white/70">{s.desc}</p>

                  <span className="relative mt-7 block h-0.5 w-10 bg-brand/60 transition-all duration-500 group-hover:w-16 group-hover:bg-brand" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="workflow-pagination mt-6" />
        </div>
      </div>
    </section>
  );
}
