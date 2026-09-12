import Image from "next/image";
import type { Img } from "@/lib/data";

export function Heading({
  eyebrow = "Contact Us",
  title = "Come And See What We've Built.",
  description,
  level = 2,
  align = "left",
  light = false,
  children,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  level?: 1 | 2;
  align?: "left" | "center";
  light?: boolean;
  children?: React.ReactNode;
}) {
  const Tag = level === 1 ? "h1" : "h2";
  const centered = align === "center";
  return (
    <>
      <span
        className={`flex items-center gap-[13px] text-[0.8125rem] font-semibold tracking-[0.06em] uppercase after:h-px after:w-[54px] after:shrink-0 after:bg-current after:content-[''] ${
          light ? "text-white" : "text-brand"
        } ${centered ? "justify-center" : ""} ${centered ? "before:h-px before:w-[54px] before:shrink-0 before:bg-current before:content-['']":""}`}
      >
        {eyebrow}
      </span>
      <Tag
        className={`mt-4 sm:mt-5 font-medium ${
          level === 1
            ? "text-[clamp(1.9rem,4.8vw,4.6rem)] leading-[1.08] sm:leading-[1.05] tracking-[-0.02em]"
            : "text-[clamp(1.65rem,3.2vw,3.5rem)] leading-[1.15] sm:leading-[1.1] tracking-[-0.015em]"
        } ${light ? "text-white" : "text-ink"} ${centered ? "text-center" : ""}`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-4 sm:mt-5 max-w-[52ch] text-base sm:text-lg leading-relaxed ${
            light ? "text-white/85" : "text-ink-2"
          } ${centered ? "mx-auto text-center" : ""}`}
        >
          {description}
        </p>
      ) : null}
      {children}
    </>
  );
}

export function Pill({
  label,
  tone = "orange",
}: {
  label: string;
  tone?: "green" | "blue" | "orange";
}) {
  const tones: Record<string, string> = {
    green: "bg-emerald-600",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
  };
  return (
    <span className={`inline-block rounded-full px-3.5 py-1.5 text-xs font-medium text-white ${tones[tone]}`}>
      {label}
    </span>
  );
}

export function Media({
  img,
  className = "",
  priority = false,
  sizes,
}: {
  img: Img;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <Image
      src={img.src}
      alt={img.alt}
      fill
      sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      className={`object-cover ${className}`}
    />
  );
}

