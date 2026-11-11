import type { Metadata } from "next";
import { SEO_CONFIG } from "./seoConfig";

export function getSeoMetadata(path: string): Metadata {
  const page = SEO_CONFIG[path];
  if (!page) return {};
  const canonical = path === "/" ? "/" : `${path}/`;
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical },
    robots: { index: true, follow: true },
    openGraph: { type: "website", siteName: "Nexila Technologies", title: page.ogTitle || page.title, description: page.description, url: `https://nexilatechnologies.com${canonical}`, images: ["/logo.png"] },
    twitter: { card: "summary_large_image", title: page.ogTitle || page.title, description: page.description },
  };
}
