"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";

export type CreativeItem = {
  img: string;
  alt: string;
  title: string;
};

export function CreativeCard({ items }: { items: CreativeItem[] }) {
  return (
    <Swiper
      modules={[EffectCreative, Autoplay]}
      effect="creative"
      grabCursor
      loop
      speed={900}
      autoplay={{ delay: 3800, disableOnInteraction: false }}
      creativeEffect={{
        prev: { shadow: true, translate: ["-22%", 0, -1] },
        next: { translate: ["100%", 0, 0] },
      }}
      className="!h-auto"
    >
      {items.map((it, i) => (
        <SwiperSlide key={i}>
          <div className="glass sheen relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/50 shadow-2xl">
            <Image
              src={it.img}
              alt={it.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 40vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6">
              <p className="text-lg font-medium text-white">{it.title}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
