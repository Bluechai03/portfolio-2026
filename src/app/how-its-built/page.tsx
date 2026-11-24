import type { Metadata } from "next";
import { BuildNotesPage } from "@/components/build-notes/build-notes-page";
import { buildNotes } from "@/content/build-notes";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: `${buildNotes.title} — ${site.name}`,
  description: buildNotes.support,
  path: buildNotes.path,
});

export default function Page() {
  return <BuildNotesPage />;
}
