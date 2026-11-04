import { describe, expect, it } from "vitest";
import { site } from "@/content/site";

const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("//");

describe("site content", () => {
  it("only uses https for external project links", () => {
    for (const project of site.projects) {
      for (const link of project.links) {
        expect(isInternal(link.href) || link.href.startsWith("https://"), link.href).toBe(true);
      }
    }
  });

  it("uses a project status from the glossary", () => {
    const statuses = ["Idea", "Planned", "In progress", "Live"];
    for (const project of site.projects) {
      expect(statuses).toContain(project.status);
    }
  });

  it("gives every experience item a title and a description", () => {
    for (const item of site.experience.items) {
      expect(item.title.length).toBeGreaterThan(0);
      expect(item.description.length).toBeGreaterThan(0);
    }
  });
});
