import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { site, siteUrl } from "@/config/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyContactBar } from "@/components/StickyContactBar";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Physical Share Help in Mumbai`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Physical share certificate help in Mumbai: transmission, duplicates, name correction, IEPF claims and demat. NRIs supported.",
  applicationName: site.name,
};

export const viewport: Viewport = { themeColor: "#0A3A2D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${manrope.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-green-900 focus:px-4 focus:py-3 focus:text-ivory-50"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyContactBar />
      </body>
    </html>
  );
}
