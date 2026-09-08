import { Media } from "./ui";
import type { Img } from "@/lib/data";

export function OverlayCard({
  img,
  children,
  className = "",
  gradFrom = "from-ink",
  imgClassName = "",
}: {
  img: Img;
  children: React.ReactNode;
  className?: string;
  gradFrom?: string;
  imgClassName?: string;
}) {
  return (
    <div
      className={`group relative overflow-hidden ${className}`}
    >
      <Media
        img={img}
        sizes="(max-width: 1024px) 90vw"
        className={`transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 ${imgClassName}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t ${gradFrom} via-ink/40 to-transparent`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
