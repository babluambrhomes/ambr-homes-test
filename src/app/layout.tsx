import type { Metadata } from "next";
import { Figtree, Manrope } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GlassPopup } from "@/components/layout/GlassPopup";
import { BottomNav } from "@/components/layout/BottomNav";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Preloader } from "@/components/layout/Preloader";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ambr Homes | 2 & 3 BHK in Greater Noida West",
  description:
    "Five communities. All RERA registered. Ambr Homes builds 2 & 3 BHK homes in Greater Noida West — designed for light, ventilation and the twelve years after handover.",
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
      
        <Header />
        <main id="main" className="flex-1">
          {props.children}
        </main>
        <Footer />
        <GlassPopup />
        <BottomNav />
        <StickyCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
