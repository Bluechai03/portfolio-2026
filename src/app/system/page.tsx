import type { Metadata } from "next";
import { SystemPage } from "@/components/system/system-page";
import { site } from "@/content/site";
import { system } from "@/content/system";

export const metadata: Metadata = {
  title: `${system.title} — ${site.name}`,
  description: system.support,
};

export default function Page() {
  return <SystemPage />;
}
