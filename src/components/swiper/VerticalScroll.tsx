"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Scrollbar } from "swiper/modules";

export type VerticalItem = {
  no: string;
  title: string;
  desc: string;
};

export function VerticalScroll({
  items,
  height = "520px",
}: {
  items: VerticalItem[];
  height?: string;
}) {
  return (
    <Swiper
      modules={[FreeMode, Scrollbar]}
      direction="vertical"
      slidesPerView="auto"
      freeMode
      mousewheel
      scrollbar={{ el: ".vscroll-bar", draggable: true }}
      autoHeight
      className="!h-auto"
      style={{ maxHeight: height }}
      wrapperClass="!items-stretch"
    >
      {items.map((it, i) => (
        <SwiperSlide key={i} className="!h-auto">
          <div className="mb-4 flex gap-6 rounded-2xl border border-line/70 bg-white p-7 shadow-[0_10px_30px_-20px_rgba(16,16,16,0.25)] transition-all duration-500 hover:-translate-y-1 hover:border-brand/30">
            <span className="bg-gradient-to-b from-brand to-brand-dark bg-clip-text text-[2.6rem] font-medium leading-none text-transparent">
              {it.no}
            </span>
            <div>
              <h3 className="text-lg font-medium text-ink">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{it.desc}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="vscroll-bar !relative mt-4 h-1.5 w-full rounded-full bg-white/60 !bottom-auto" />
    </Swiper>
  );
}
