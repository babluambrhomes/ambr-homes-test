import { Heading } from "./ui";
import { Button } from "./Button";

export type RedCtaButton = {
  label: string;
  href: string;
  variant?: "solid" | "ghost";
  className?: string;
};

export function RedCta({
  eyebrow,
  title,
  description,
  buttons,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  buttons: RedCtaButton[];
}) {
  return (
    <section className="relative overflow-hidden bg-[#f5f5f5] py-20">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-white/15 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[540px] w-[540px] rounded-full bg-[#8f0006]/50 blur-[130px]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] [mask-image:radial-gradient(1200px_at_50%_0%,black,transparent)]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/25 to-transparent" />

      <div className="wrap relative z-10 ">
        <div>
          <Heading eyebrow={eyebrow} title={title} description={description} />
        </div>
          <div className="mt-9 flex flex-wrap  gap-4">
            {buttons.map((b) => (
              <Button
                key={b.label + b.href}
                href={b.href}
                variant={b.variant ?? "solid"}
                className={b.className}
              >
                {b.label}
              </Button>
            ))}
          </div>
       
      </div>
    </section>
  );
}
