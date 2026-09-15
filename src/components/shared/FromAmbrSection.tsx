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
  tag?: string;
  title: string;
  body: string;
};

export function FromAmbrSection({
  eyebrow = "BEFORE YOU BUY",
  title = "Things Worth Knowing Before You Buy A Home",
  description = "The right home isn't just about the number on the price sheet. It is about whether the home, building and neighbourhood will work for your family.",
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
    <section className="bg-gradient-to-b from-white to-band py-28 overflow-hidden max-w-full">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Heading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />
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
              <span className="text-xl font-medium text-ink tabular-nums">
                {String(idx + 1).padStart(2, "0")}
              </span>

              <span className="mx-1.5 text-ink/40">/</span>

              <span className="tabular-nums">
                {String(items.length).padStart(2, "0")}
              </span>
            </span>
          </div>
        </div>

        <div className="mt-12">
          <SwiperReact
            modules={[Navigation, Pagination]}
            onSwiper={(s) => (swiper.current = s)}
            onSlideChange={(s) => setIdx(s.activeIndex)}
            pagination={{
              el: ".from-pagination",
              clickable: true,
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!overflow-hidden !pb-4"
          >
            {items.map((c) => (
              <SwiperSlide key={c.title} className="!h-auto">
                <div className="group relative h-[430px] overflow-hidden rounded-[1.5rem] bg-ink shadow-lg transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2 hover:shadow-[0_30px_70px_-25px_rgba(226,1,15,0.3)]">
                  <Media
                    img={c.img}
                    sizes="(max-width: 1024px) 90vw, 33vw"
                    className="transition-transform duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  />

                  {/* Gradient Overlay with smooth transition on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/20 transition-all duration-500 group-hover:from-black/98 group-hover:via-black/75" />

                  {/* Top Left Tag Badge (if provided) */}
                  {c.tag && (
                    <span className="absolute left-5 top-5 rounded-full bg-black/40 px-3.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-md ring-1 ring-white/20 transition-all duration-300 group-hover:border-brand group-hover:bg-brand">
                      {c.tag}
                    </span>
                  )}

                  {/* Bottom Content Area with Hover Reveal */}
                  <div className="absolute inset-x-0 bottom-0 p-7 flex flex-col justify-end">
                    <span className="mb-3 block h-1 w-10 bg-brand transition-all duration-500 group-hover:w-20 rounded-full" />

                    <h4 className="text-[1.35rem] font-bold leading-snug text-white drop-shadow-sm transition-transform duration-300 group-hover:-translate-y-0.5">
                      {c.title}
                    </h4>

                    {/* Smooth Hover Expansion for Description Text */}
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                      <div className="overflow-hidden">
                        <p className="pt-2 text-sm leading-relaxed text-white/90 font-normal">
                          {c.body}
                        </p>
                      </div>
                    </div>
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