import type { LucideIcon } from "lucide-react";

export type Stat = {
  value: string;
  label: string;
  icon: LucideIcon;
};

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s, i) => {
        const Icon = s.icon;
        return (
          <div
            key={s.label}
            className="group relative overflow-hidden rounded-2xl border border-line/70 bg-white p-6 text-center shadow-[0_10px_30px_-20px_rgba(16,16,16,0.25)] transition-all duration-500 hover:-translate-y-1.5 hover:border-brand/30 hover:shadow-[0_20px_45px_-22px_rgba(226,1,15,0.35)]"
          >
            <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-brand/5 transition-all duration-500 group-hover:scale-[2.2] group-hover:bg-brand/10" />
            <span className="absolute left-3 top-3 text-[0.7rem] font-semibold tracking-[0.14em] text-muted/50">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="relative mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand/10 text-brand transition-all duration-500 group-hover:rotate-6 group-hover:bg-brand group-hover:text-white">
              <Icon size="22" strokeWidth={1.8} />
            </span>
            <span className="relative mt-4 block text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-none tracking-[-0.02em] text-ink tabular-nums">
              {s.value}
            </span>
            <p className="relative mt-2.5 text-[0.8rem] font-medium uppercase tracking-[0.1em] text-muted">
              {s.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
