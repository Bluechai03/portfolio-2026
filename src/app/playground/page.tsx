import type { Metadata } from "next";
import { PlaygroundPage } from "@/components/playground/playground-page";
import { playground } from "@/content/playground";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `${playground.title} — ${site.name}`,
  description: playground.support,
};

export default function Page() {
  return <PlaygroundPage />;
}
