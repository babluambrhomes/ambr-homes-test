"use client";

import { useEffect } from "react";
import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";

const MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function trackPageView(url: string) {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", "page_view", {
    page_path: url,
    page_location: window.location.origin + url,
    page_title: document.title,
  });
}

export function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!MEASUREMENT_ID || typeof window.gtag !== "function") return;
    const query = searchParams.toString();
    trackPageView(`${pathname}${query ? `?${query}` : ""}`);
  }, [pathname, searchParams]);

  if (!MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', { send_page_view: false });
          gtag('event', 'page_view', {
            page_path: window.location.pathname + window.location.search,
            page_location: window.location.href,
            page_title: document.title,
          });
        `}
      </Script>
    </>
  );
}
