import type { Metadata } from "next";
import { site, siteUrl } from "@/config/site";

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: site.name, type: "website", locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description },
  };
}
