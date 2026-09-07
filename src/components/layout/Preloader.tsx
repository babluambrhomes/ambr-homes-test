"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function Preloader() {
  const [state, setState] = useState<"loading" | "reveal" | "gone">("loading");

  useEffect(() => {
    const t1 = setTimeout(() => setState("reveal"), 1500);
    const t2 = setTimeout(() => setState("gone"), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (state === "gone") return null;

  return (
    <div
      className={`pl fixed inset-0 z-[1000] grid place-items-center overflow-hidden bg-ink ${
        state === "reveal" ? "pl-reveal" : ""
      }`}
      aria-hidden="true"
    >
      <div className="pl-logo relative z-10 flex flex-col items-center gap-5">
        <Image
          src="/images/logo_white.png"
          alt="Ambr Homes"
          width={210}
          height={86}
          priority
          className="h-auto w-[210px]"
        />
        <span className="pl-bar">
          <span className="pl-bar-fill" />
        </span>
      </div>
    </div>
  );
}