import type { ReactNode } from "react";

type GlassVariant = "light" | "strong" | "dark";

const VARIANTS: Record<GlassVariant, string> = {
  light: "glass",
  strong: "glass-strong",
  dark: "glass-dark",
};

export function Glass({
  children,
  variant = "light",
  className = "",
  sheen = false,
}: {
  children: ReactNode;
  variant?: GlassVariant;
  className?: string;
  sheen?: boolean;
}) {
  const cls = [
    VARIANTS[variant],
    "rounded-2xl",
    sheen ? "sheen" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <div className={cls}>{children}</div>;
}
