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

    swiperRef.current.slideTo(
      Math.max(swiperRef.current.activeIndex - 1, 0),
      600
    );
  };

  const goNext = () => {
    if (!swiperRef.current) return;

    const maxIndex = Math.max(
      items.length - Math.floor(slidesPerView),
      0
    );

    swiperRef.current.slideTo(
      Math.min(swiperRef.current.activeIndex + 1, maxIndex),
      600
    );
  };

  return (
    <div className="relative">
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
      >
        {items.map((it, i) => (
          <SwiperSlide key={i} className="!w-auto">
            <article className="group relative h-[440px] w-[320px] overflow-hidden rounded-3xl bg-ink shadow-[0_30px_80px_-35px_rgba(16,16,16,0.55)] ring-1 ring-white/10">
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={it.img}
                  alt={it.alt}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                  sizes="320px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/35 transition-opacity duration-500" />
              </div>

              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-white backdrop-blur-md ring-1 ring-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="block h-px w-8 bg-brand transition-all duration-500 group-hover:w-14" />

                <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.01em] text-white">
                  {it.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {it.sub}
                </p>

                <span className="mt-5 inline-grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
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
                </span>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PROGRESS */}
      <div className="mt-7 flex items-center gap-3">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-[2px] transition-all duration-500 ${i === activeIndex
              ? "w-10 bg-brand"
              : "w-5 bg-line"
              }`}
          />
        ))}
      </div>
    </div>
  );
}