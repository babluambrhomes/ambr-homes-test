"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Parallax, Pagination } from "swiper/modules";

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
  return (
    <div className="relative h-full w-full">
      <Swiper
        className="h-full w-full"
        modules={[EffectFade, Autoplay, Parallax, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1300}
        loop={loop}
        autoplay={{
          delay: 5200,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        parallax
        pagination={{
          clickable: true,
          el: ".hero-pagination",
        }}
        grabCursor
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative h-screen min-h-[560px] w-full overflow-hidden"
              data-swiper-parallax="-25%"
            >
              <Image
                src={s.img}
                alt={s.alt}
                fill
                className="object-cover"
                sizes="100vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/40 to-black/30" />
              <div className="wrap relative z-10 flex h-full flex-col justify-end pb-[calc(var(--nav-h)+40px)]">
                <div
                  className="max-w-5xl"
                  data-swiper-parallax="-20%"
                  data-swiper-parallax-opacity="0"
                >
                  <span
                    className="inline-flex items-center gap-2.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md"
                    data-swiper-parallax="-150"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    {s.eyebrow}
                  </span>
                  <h1
                    className="mt-5 text-[clamp(2.6rem,6vw,5.4rem)] font-medium leading-[1.02] tracking-[-0.022em] text-white"
                    data-swiper-parallax="-120"
                  >
                    {s.title}
                  </h1>
                  <p
                    className="mt-6 max-w-[46ch] text-lg leading-relaxed text-white/85"
                    data-swiper-parallax="-90"
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hero-pagination" />
    </div>
  );
}
