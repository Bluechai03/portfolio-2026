import type { Metadata } from "next";
import { StrutCaseStudy } from "@/components/strut-case-study";
import { site } from "@/content/site";
import { strutCaseStudy } from "@/content/strut-case-study";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: `Strut, a case study — ${site.name}`,
  description: strutCaseStudy.support,
  path: strutCaseStudy.path,
});

export default function Page() {
  return <StrutCaseStudy />;
}
