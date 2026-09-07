import { ArrowUpRight } from "lucide-react";

export function ArrowSquare({
  className = "",
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span className={`go ${className}`} {...props}>
      <ArrowUpRight size={18} strokeWidth={1.6} aria-hidden />
    </span>
  );
}
