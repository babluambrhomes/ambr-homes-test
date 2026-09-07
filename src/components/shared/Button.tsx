import Link from "next/link";

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const base =
    "group inline-flex items-center gap-3 rounded-full py-[15px] pl-[28px] pr-[22px] text-base font-medium transition-all duration-[0.45s] ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none";

  const variants: Record<string, string> = {
    solid: "bg-brand text-white hover:bg-brand-dark hover:shadow-[0_16px_40px_-12px_rgba(226,1,15,0.55)] hover:-translate-y-0.5",
    ghost: "bg-transparent text-white border border-white/40 hover:border-white hover:bg-white hover:text-ink",
  };

  const cls = [base, variants[variant], className].filter(Boolean).join(" ");

  const inner = (
    <>
      <span>{children}</span>
      <span
        className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 transition-all duration-[0.45s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-brand group-hover:text-white group-hover:translate-x-1"
        aria-hidden="true"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M4 12L12 4M5.6 4H12v6.4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" className={cls}>
      {inner}
    </button>
  );
}
