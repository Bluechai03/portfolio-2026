import type { Metadata } from "next";
import { site } from "@/content/site";

// Page-level openGraph/twitter replace the layout's instead of merging,
// so every page builds the full set here to keep the preview image.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const image = { url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} — ${site.role}` };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      siteName: site.name,
      locale: "en_US",
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
