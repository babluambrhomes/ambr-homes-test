import { Reveal } from "@/components/shared/Reveal";
import { Heading, Media } from "@/components/shared/ui";
import { Button } from "@/components/shared/Button";
import type { Img, Project } from "@/lib/data";

type GalleryItem = { img: Img; label?: string; large?: boolean };

export function ProjectGallery({ project }: { project: Project }) {
  const isAspire = project.slug === "aspire";

  const gallery: GalleryItem[] = [
    {
      img: project.heroImg,
      label: project.name,
      large: true,
    },
    {
      img: project.configs[0]?.img ?? project.heroImg,
      label: isAspire ? "A home that opens up to light." : project.configs[0]?.tag ?? "",
    },
    {
      img: project.configs[1]?.img ?? project.heroImg,
      label: isAspire ? "Green space around the everyday." : project.configs[1]?.tag ?? "",
    },
    {
      img: {
        src: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=80",
        alt: "Balcony view at an Ambr Homes flat",
      },
      label: isAspire ? "A kitchen made for more than cooking." : "Balcony",
    },
    {
      img: {
        src: "/images/hero-4.jpeg",
        alt: "Finished living room at an Ambr Homes flat",
      },
      label: isAspire ? "A balcony you can actually use." : "Interior",
    },
  ];

  return (
    <section className="wrap pt-[clamp(56px,6vw,88px)]">
      <div className="grid items-end gap-8 md:grid-cols-2">
        <Reveal>
          <Heading
            eyebrow="Project Gallery"
            title={isAspire ? "Inside Aspire" : `Inside ${project.name}`}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-lg leading-relaxed text-ink-2 md:pb-1 md:pl-6">
            {isAspire
              ? "The first impression is the elevation. The better impression is what happens inside it. Look through the home, the landscape and the details — then come see how they feel in person."
              : `A look at the homes, the balconies and the finishes you can walk into — every image from an actual ${project.name} unit.`}
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[240px]">
        {gallery.map((item, i) => (
          <Reveal
            key={item.img.src + i}
            delay={i * 0.05}
            className={
              item.large
                ? "sm:col-span-2 lg:row-span-2"
                : ""
            }
          >
            <figure className="group relative h-full min-h-[200px] overflow-hidden rounded-2xl border border-line/60 bg-grey">
              <Media
                img={item.img}
                className="absolute inset-0 h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

              <figcaption className="absolute bottom-4 left-4 right-4 flex items-start justify-between gap-3">
                <span className="text-sm font-medium text-white">
                  {item.label || project.name}
                </span>

                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-white/15 backdrop-blur-md ring-1 ring-white/25 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-white"
                  >
                    <path
                      d="M4 12L12 4M5.6 4H12v6.4"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                  </svg>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      {isAspire && (
        <Reveal delay={0.25}>
          <div className="mt-8">
            <Button href="/projects">Explore The Homes</Button>
          </div>
        </Reveal>
      )}
    </section>
  );
}