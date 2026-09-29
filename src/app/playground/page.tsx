import type { Metadata } from "next";
import { PlaygroundPage } from "@/components/playground/playground-page";
import { playground } from "@/content/playground";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: `${playground.title} — ${site.name}`,
  description: playground.support,
  path: "/playground",
});

export default function Page() {
  return <PlaygroundPage />;
}
