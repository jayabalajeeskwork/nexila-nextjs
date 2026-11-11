"use client";

import { useEffect } from "react";
import { useLocation } from "../lib/router-compat";
import { SEO_CONFIG } from "./seoConfig";

const SITE = "https://www.nexilatechnologies.com";

function setMeta(attribute, key, content) {
  if (!content) return;

  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function SEOManager() {
  const location = useLocation();

  useEffect(() => {
    const path =
      location.pathname === "/"
        ? "/"
        : location.pathname.replace(/\/+$/, "");

    const page = SEO_CONFIG[path];

    if (!page) {
      console.warn("SEO metadata not configured for:", path);
      return;
    }

    const canonical = `${SITE}${path === "/" ? "/" : `${path}/`}`;

    document.title = page.title;

    setMeta("name", "description", page.description);
    setMeta("name", "keywords", page.keywords);
    setMeta("name", "robots", "index, follow");

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Nexila Technologies");
    setMeta("property", "og:title", page.ogTitle || page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", canonical);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", page.ogTitle || page.title);
    setMeta("name", "twitter:description", page.description);

    let canonicalLink = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = canonical;

    const schema = {
      "@context": "https://schema.org",
      "@type": page.type || "WebPage",
      name: page.title,
      description: page.description,
      url: canonical,
      isPartOf: {
        "@type": "WebSite",
        name: "Nexila Technologies",
        url: `${SITE}/`,
      },
    };

    let script = document.getElementById("dynamic-seo-schema") as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = "dynamic-seo-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);
  }, [location.pathname]);

  return null;
}
