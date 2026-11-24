import { describe, expect, it } from "vitest";
import { buildNotes } from "@/content/build-notes";

type Section = { paragraphs?: readonly string[]; items?: readonly { title: string; text: string; turnedDown?: string }[]; links?: readonly { href: string }[] };

const sections: readonly Section[] = buildNotes.sections;
const allText = sections
  .flatMap((section) => [
    ...(section.paragraphs ?? []),
    ...(section.items ?? []).flatMap((item) => [item.title, item.text, item.turnedDown ?? ""]),
  ])
  .join(" ");

describe("build notes", () => {
  it("links only to https addresses", () => {
    for (const section of sections) {
      for (const link of section.links ?? []) {
        expect(link.href.startsWith("https://"), link.href).toBe(true);
      }
    }
  });

  it("says what was turned down for every decision", () => {
    const decisions = sections.find((section) => "items" in section && section.items?.some((item) => item.turnedDown));
    expect(decisions?.items?.length).toBeGreaterThan(0);
    for (const item of decisions?.items ?? []) {
      expect(item.turnedDown, item.title).toBeTruthy();
    }
  });

  it("states no test count", () => {
    expect(allText).not.toMatch(/\b\d+\s+(unit |browser |e2e |automated )?tests\b/i);
  });

  it("makes no accessibility claim, only that there is none yet", () => {
    expect(allText).toMatch(/not claiming this site is accessible/i);
    expect(allText).not.toMatch(/\b(wcag|fully accessible|accessible to all)\b/i);
  });

  it("uses sentence case for every heading", () => {
    const headings = [buildNotes.title, ...buildNotes.sections.map((section) => section.title)];
    for (const heading of headings) {
      const words = heading.split(" ").slice(1).filter((word) => /^[A-Z][a-z]/.test(word));
      // Proper nouns are allowed; none of these headings has one after the first word.
      expect(words, heading).toEqual([]);
    }
  });
});
