"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

export type CoverflowItem = {
  img: string;
  alt: string;
  label?: string;
};

export function Coverflow({
  items,
  pagination = true,
}: {
  items: CoverflowItem[];
  pagination?: boolean;
}) {
  const swiper = useRef<any>(null);
  const [idx, setIdx] = useState(0);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[EffectCoverflow, Autoplay, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        initialSlide={2}

        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 180,
          modifier: 1.15,
          slideShadows: true,
        }}

        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          waitForTransition: false,
        }}

        speed={1200}

        onSwiper={(s) => {
          swiper.current = s;
        }}

        onSlideChange={(s) => {
          setIdx(s.realIndex);
        }}

        pagination={
          pagination
            ? {
              clickable: true,
              el: ".coverflow-pagination",
            }
            : false
        }

        className="!pb-16"
      >
        {items.map((it, i) => (
          <SwiperSlide
            key={i}
            className="!w-[82%] sm:!w-[52%] md:!w-[34%] lg:!w-[24%]"
          >
            <div
              className="
                group
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-3xl
                shadow-[0_30px_80px_-30px_rgba(16,16,16,0.6)]
                ring-1
                ring-white/20
              "
            >
              <Image
                src={it.img}
                alt={it.alt}
                fill
                className="
                  object-cover
                  transition-transform
                  duration-[1200ms]
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-110
                "
                sizes="(max-width: 768px) 60vw, 30vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

              {/* Number */}
              <span
                className="
                  absolute
                  left-4
                  top-4
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-xl
                  bg-white/15
                  text-xs
                  font-semibold
                  text-white
                  backdrop-blur-md
                  ring-1
                  ring-white/20
                  transition-transform
                  duration-500
                  group-hover:rotate-6
                "
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Label */}
              {it.label ? (
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="mb-3 block h-0.5 w-12 bg-brand transition-all duration-500 group-hover:w-20" />

                  <span
                    className="
                      inline-block
                      rounded-full
                      bg-white/15
                      px-4
                      py-1.5
                      text-[0.7rem]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white
                      backdrop-blur-md
                      ring-1
                      ring-white/20
                    "
                  >
                    {it.label}
                  </span>
                </div>
              ) : null}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {pagination ? (
        <div className="coverflow-pagination mt-5" />
      ) : null}
    </div>
  );
}