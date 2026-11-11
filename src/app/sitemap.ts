import type { MetadataRoute } from "next";
import { SEO_CONFIG } from "../seo/seoConfig";

const SITE = "https://www.nexilatechnologies.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...new Set([...Object.keys(SEO_CONFIG), "/test-internship"])].map((path) => ({
    url: `${SITE}${path === "/" ? "/" : `${path}/`}`,
    changeFrequency: path.startsWith("/blogs/") ? "monthly" : "weekly",
    priority: path === "/" ? 1 : path.startsWith("/courses/") ? 0.8 : 0.7,
  }));
}
