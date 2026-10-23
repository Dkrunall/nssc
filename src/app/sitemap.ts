import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/site";
import { services } from "@/content/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/how-it-works",
    "/about",
    "/faq",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ];
  return paths.map((p) => ({
    url: `${siteUrl}${p}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: p === "" ? 1 : p.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
