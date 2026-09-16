"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type FreeModeItem = {
  img: string;
  alt: string;
  title: string;
  sub: string;
};

export function FreeModeStrip({
  items,
  slidesPerView = 3,
}: {
  items: FreeModeItem[];
  slidesPerView?: number;
}) {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goPrevious = () => {
    if (!swiperRef.current) return;
    const current = swiperRef.current.activeIndex;
    const target = current > 0 ? current - 1 : items.length - 1;
    swiperRef.current.slideTo(target, 600);
    setActiveIndex(target);
  };

  const goNext = () => {
    if (!swiperRef.current) return;
    const current = swiperRef.current.activeIndex;
    const target = current < items.length - 1 ? current + 1 : 0;
    swiperRef.current.slideTo(target, 600);
    setActiveIndex(target);
  };

  return (
    <div className="relative overflow-hidden max-w-full">
      {/* CONTROLS */}
      <div className="mb-7 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={goPrevious}
          aria-label="Previous"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={goNext}
          aria-label="Next"
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white text-ink transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
        >
          <ChevronRight size={18} />
        </button>

        <span className="ml-2 flex items-baseline text-sm text-muted">
          <span className="text-xl font-medium text-ink tabular-nums">
            {String(activeIndex + 1).padStart(2, "0")}
          </span>

          <span className="mx-1.5 text-ink/40">/</span>

          <span className="tabular-nums">
            {String(items.length).padStart(2, "0")}
          </span>
        </span>
      </div>

      {/* CARDS */}
      <Swiper
        modules={[FreeMode]}
        spaceBetween={22}
        slidesPerView="auto"
        freeMode={{
          enabled: true,
          momentum: true,
          momentumBounce: false,
        }}
        grabCursor
        watchOverflow
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        onActiveIndexChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {items.map((it, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <article className="group relative h-[390px] sm:h-[440px] w-[275px] sm:w-[320px] overflow-hidden rounded-3xl bg-ink shadow-[0_30px_80px_-35px_rgba(16,16,16,0.55)] ring-1 ring-white/10">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={it.img}
                  alt={it.alt}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  sizes="320px"
                />

                {/* Enhanced dark gradient overlay for 100% contrast & readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/25 transition-all duration-500 group-hover:from-black/95 group-hover:via-black/80" />
              </div>

              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur-md ring-1 ring-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end">
                <span className="block h-px w-8 bg-brand transition-all duration-500 group-hover:w-14" />

                <h3 className="mt-3 text-xl sm:text-2xl font-bold leading-tight tracking-[-0.01em] text-white drop-shadow-sm">
                  {it.title}
                </h3>

                {/* Hover Reveal Description */}
                <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
                  <div className="overflow-hidden">
                    <p className="pt-2 text-xs sm:text-sm leading-relaxed text-white/90">
                      {it.sub}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  {/* <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-white/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Hover details
                  </span> */}

                  {/* <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition-all duration-300 group-hover:bg-brand group-hover:text-white group-hover:scale-110">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M4 12L12 4M5.6 4H12v6.4"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </span> */}
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PROGRESS */}
      <div className="mt-7 flex items-center gap-3">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(i, 600);
                setActiveIndex(i);
              }
            }}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-500 ${i === activeIndex
              ? "w-10 bg-brand"
              : "w-5 bg-line hover:bg-ink/40"
              }`}
          />
        ))}
      </div>
    </div>
  );
}