import type { Metadata } from "next";
import { SystemPage } from "@/components/system/system-page";
import { site } from "@/content/site";
import { system } from "@/content/system";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: `${system.title} — ${site.name}`,
  description: system.support,
  path: "/system",
});

export default function Page() {
  return <SystemPage />;
}
