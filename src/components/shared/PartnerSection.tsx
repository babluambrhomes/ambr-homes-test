import type { LucideIcon } from "lucide-react";
import { Heading } from "./ui";

export type PartnerItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export function PartnerSection({
  eyebrow = "Partner with us",
  title = "Let's Build The Next Address Together.",
  description = "Good partnerships start with clear conversations. If you own land, represent buyers or invest in residential real estate, let's talk about what we can build together.",
  items,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  items: PartnerItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-28">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand/15 blur-[130px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[460px] w-[460px] rounded-full bg-brand/10 blur-[120px]" />

      <div className="wrap relative">
        <div className="mx-auto max-w-3xl text-center">
          <Heading align="center" light eyebrow={eyebrow} title={title} description={description} />
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {items.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-brand/40 hover:bg-white/[0.07]"
              >
                <span className="pointer-events-none absolute -right-2 -top-6 bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-[7rem] font-bold leading-none text-transparent">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand/15 text-brand transition-transform duration-500 group-hover:rotate-6">
                  <Icon size="26" strokeWidth={1.8} />
                </span>

                <h3 className="relative mt-7 text-xl font-medium text-white">{p.title}</h3>
                <p className="relative mt-3 leading-relaxed text-white/70">{p.body}</p>

                <span className="relative mt-7 block h-0.5 w-10 bg-brand/60 transition-all duration-500 group-hover:w-16 group-hover:bg-brand" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
