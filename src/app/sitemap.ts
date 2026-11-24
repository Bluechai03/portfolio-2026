import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/work/interval-walking-timer", "/how-its-built", "/playground"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.6,
  }));
}
