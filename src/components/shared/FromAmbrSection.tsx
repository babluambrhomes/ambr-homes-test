"use client";

import { useRef, useState } from "react";
import Swiper from "swiper";
import { Swiper as SwiperReact, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading, Media } from "./ui";
import type { Img } from "@/lib/data";

export type FromAmbrItem = {
  img: Img;
  tag: string;
  title: string;
  body: string;
};

export function FromAmbrSection({
  eyebrow = "From Ambr",
  title = "Things Worth Knowing Before You Buy A Home",
  description = "The questions everyone should ask, answered plainly. Scroll through what to read, what to inspect and what to put in writing — before you sign.",
  items,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: FromAmbrItem[];
}) {
  const swiper = useRef<any>(null);
  const [idx, setIdx] = useState(0);

  return (
    <section className="bg-gradient-to-b from-white to-band py-28">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Heading eyebrow={eyebrow} title={title} description={description} />
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => swiper.current?.slidePrev()}
              aria-label="Previous"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
            >
              <ChevronLeft size="18" />
            </button>
            <button
              onClick={() => swiper.current?.slideNext()}
              aria-label="Next"
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
            >
              <ChevronRight size="18" />
            </button>
            <span className="ml-2 inline-flex items-baseline text-sm text-muted">
              <span className="text-xl font-medium text-ink tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
              <span className="mx-1.5 text-ink/40">/</span>
              <span className="tabular-nums">{String(items.length).padStart(2, "0")}</span>
            </span>
          </div>
        </div>

        <div className="mt-12">
          <SwiperReact
            modules={[Navigation, Pagination]}
            onSwiper={(s) => (swiper.current = s)}
            onSlideChange={(s) => setIdx(s.activeIndex)}
            pagination={{ el: ".from-pagination", clickable: true }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="!overflow-hidden !pb-4"
          >
            {items.map((c, i) => (
              <SwiperSlide key={c.title} className="!h-auto">
                <div className="group relative h-[430px] overflow-hidden rounded-[1.5rem]">
                  <Media
                    img={c.img}
                    sizes="(max-width: 1024px) 90vw, 33vw"
                    className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md ring-1 ring-white/20">
                    {c.tag}
                  </span>
                  <span className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white/15 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <span className="mb-4 block h-0.5 w-12 bg-brand transition-all duration-500 group-hover:w-20" />
                    <h4 className="text-[1.35rem] font-medium leading-snug text-white">{c.title}</h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-white/75">{c.body}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </SwiperReact>
          <div className="why-pagination from-pagination mt-6" />
        </div>
      </div>
    </section>
  );
}
