"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

export type HeroSlide = {
  img: string;
  alt: string;
  eyebrow: string;
  title: string;
  body: string;
};

export function HeroSwiper({
  slides,
  loop = true,
}: {
  slides: HeroSlide[];
  loop?: boolean;
}) {
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-[75vh] w-full overflow-hidden bg-transparent">
      <Swiper
        modules={[EffectFade, Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={1000}
        loop={loop}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="!h-full w-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={`${s.img}-${i}`} className="!h-full">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src={s.img}
                alt={s.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-black/20" />

              <div className="wrap relative z-10 flex h-full items-center justify-center">
                <div className="mx-auto max-w-5xl text-center">
                  <span className="inline-flex items-center justify-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {s.eyebrow}
                  </span>

                  <h1 className="mx-auto mt-5 max-w-5xl text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.022em] text-white">
                    {s.title}
                  </h1>

                  <p className="mx-auto mt-6 max-w-[46ch] text-lg leading-relaxed text-white/85">
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* SLIDER CONTROLS — IMAGE KE UPAR */}
      <div className="pointer-events-none absolute inset-x-0 bottom-6 z-30">
        <div className="wrap flex items-center justify-end">
          <div className="pointer-events-auto flex items-center gap-3">
            {/* Previous */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Previous slide"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden
              >
                <path
                  d="M11 4L7 9L11 14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Next slide"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-black/10 text-white backdrop-blur-md transition-all duration-300 hover:border-white hover:bg-white hover:text-ink"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden
              >
                <path
                  d="M7 4L11 9L7 14"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* DOTS — IMAGE KE UPAR */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-30">
        <div className="flex justify-center">
          <div className="pointer-events-auto flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => swiperRef.current?.slideToLoop(i)}
                className={`h-[2px] transition-all duration-500 ${activeIndex === i
                  ? "w-11 bg-white"
                  : "w-6 bg-white/40 hover:bg-white/70"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}