"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type CardItem = {
  no: string;
  title: string;
  desc: string;
};

export function CardsStack({ items }: { items: CardItem[] }) {
  const swiper = useRef<any>(null);
  const [idx, setIdx] = useState(0);

  return (
    <div className="relative">
      <Swiper
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={700}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSwiper={(s) => (swiper.current = s)}
        onSlideChange={(s) => setIdx(s.activeIndex)}
        pagination={{ el: ".cs-pagination", clickable: true }}
        className="values-swiper !overflow-hidden"
      >
        {items.map((it) => (
          <SwiperSlide key={it.title} className="!h-auto">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-white p-10 shadow-[0_35px_70px_-35px_rgba(16,16,16,0.35)]">
              <span className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/[0.08] blur-2xl" />
              <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-dark to-brand" />

              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10">
                <span className="bg-gradient-to-b from-brand to-brand-dark bg-clip-text text-2xl font-medium leading-none text-transparent">
                  {it.no}
                </span>
              </span>

              <h3 className="mt-7 text-[1.55rem] font-medium leading-snug text-ink">{it.title}</h3>
              <span className="mt-4 block h-0.5 w-10 bg-brand/50" />
              <p className="mt-5 text-[0.98rem] leading-[1.75] text-ink-2">{it.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-8 flex items-center justify-between gap-4">
        <div className="cs-pagination flex items-center gap-2" />
        <div className="flex items-center gap-3">
          <button
            onClick={() => swiper.current?.slidePrev()}
            aria-label="Previous value"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
          >
            <ChevronLeft size="18" />
          </button>
          <span className="inline-flex items-baseline text-sm text-muted">
            <span className="text-xl font-medium text-ink tabular-nums">{String(idx + 1).padStart(2, "0")}</span>
            <span className="mx-1.5 text-ink/40">/</span>
            <span className="tabular-nums">{String(items.length).padStart(2, "0")}</span>
          </span>
          <button
            onClick={() => swiper.current?.slideNext()}
            aria-label="Next value"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-brand hover:bg-brand hover:text-white"
          >
            <ChevronRight size="18" />
          </button>
        </div>
      </div>
    </div>
  );
}
