"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, FreeMode, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

export type ThumbsItem = {
  img: string;
  alt: string;
};

export function ThumbsGallery({
  items,
  aspect = "aspect-[16/10]",
}: {
  items: ThumbsItem[];
  aspect?: string;
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  return (
    <div className="glass-swiper">
      <Swiper
        modules={[Thumbs, Navigation]}
        spaceBetween={12}
        thumbs={{ swiper: thumbsSwiper }}
        navigation
        grabCursor
        className="!overflow-hidden !rounded-2xl"
      >
        {items.map((it, i) => (
          <SwiperSlide key={i}>
            <div
              className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-white/50 shadow-xl`}
            >
              <Image
                src={it.img}
                alt={it.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs, FreeMode]}
        spaceBetween={12}
        slidesPerView="auto"
        freeMode
        watchSlidesProgress
        className="thumbs-rail mt-4 !overflow-x-visible"
      >
        {items.map((it, i) => (
          <SwiperSlide key={i} className="!w-24 sm:!w-28">
            <div className="relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg border border-white/50 opacity-50 transition-opacity duration-300 hover:opacity-90">
              <Image
                src={it.img}
                alt={it.alt}
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
