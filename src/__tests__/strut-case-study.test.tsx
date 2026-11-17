import { existsSync } from "node:fs";
import { join } from "node:path";
import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { StrutCaseStudy } from "@/components/strut-case-study";
import { site } from "@/content/site";
import { strutCaseStudy as study } from "@/content/strut-case-study";

const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("//");

type Link = { readonly label: string; readonly href: string };
const linksOf = (thing: object): readonly Link[] => ("links" in thing ? (thing.links as readonly Link[]) : []);

const allLinks: Link[] = [
  ...study.links,
  ...study.sections.flatMap((section) => [
    ...linksOf(section),
    ...("items" in section ? section.items.flatMap((item) => linksOf(item)) : []),
  ]),
];

afterEach(cleanup);

describe("Strut case study content", () => {
  it("links only to https addresses or pages on this site", () => {
    expect(allLinks.length).toBeGreaterThan(5);
    for (const link of allLinks) {
      expect(isInternal(link.href) || link.href.startsWith("https://"), link.href).toBe(true);
      expect(link.label.length).toBeGreaterThan(0);
    }
  });

  it("points its evidence at the public Strut repo", () => {
    const repo = allLinks.filter((link) => link.href.includes("github.com"));
    expect(repo.length).toBeGreaterThan(5);
    for (const link of repo) {
      expect(link.href.startsWith("https://github.com/Bluechai03/interval-walking-timer"), link.href).toBe(true);
    }
  });

  it("has a real image file, alt text and a caption for every screenshot", () => {
    for (const shot of study.screenshots) {
      expect(existsSync(join(process.cwd(), "public", shot.src)), shot.src).toBe(true);
      expect(shot.alt.length).toBeGreaterThan(20);
      expect(shot.caption.length).toBeGreaterThan(0);
    }
  });

  it("gives every section a unique id and a title", () => {
    const ids = study.sections.map((section) => section.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const section of study.sections) expect(section.title.length).toBeGreaterThan(0);
  });

  it("labels unfinished work with a status from the glossary", () => {
    const statuses = ["Idea", "Planned", "In progress", "Live"];
    const rooms = study.sections.find((section) => section.id === "rooms");
    expect(rooms && "status" in rooms && statuses.includes(rooms.status)).toBe(true);
  });

  it("states the test count it was written with, and dates it", () => {
    const checks = study.sections.find((section) => section.id === "checks");
    const text = JSON.stringify(checks);
    expect(text).toContain(`${study.testCount} unit and component tests`);
    expect(study.asOf).toMatch(/\d{4}/);
  });

  it("lists the shared start under what works, not under what is still to do", () => {
    const rooms = study.sections.find((section) => section.id === "rooms");
    expect(rooms && "works" in rooms && rooms.works.some((line) => line.includes("same beat"))).toBe(true);
    expect(rooms && "next" in rooms && rooms.next.some((line) => line.includes("same beat"))).toBe(false);
  });

  it("says plainly that it was built with an AI assistant", () => {
    const how = study.sections.find((section) => section.id === "how");
    expect(JSON.stringify(how)).toContain("Claude Code");
  });

  it("is linked from the Strut card on the home page", () => {
    const strut = site.projects.find((project) => project.title === "Strut");
    expect(strut?.links.some((link) => link.href === study.path)).toBe(true);
  });
});

describe("StrutCaseStudy page", () => {
  it("has one main heading and a heading for each section", () => {
    render(<StrutCaseStudy />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Strut");
    for (const section of study.sections) {
      expect(screen.getByRole("heading", { level: 2, name: section.title })).toBeTruthy();
    }
  });

  it("shows the screenshots with their alt text", () => {
    render(<StrutCaseStudy />);
    for (const shot of study.screenshots) expect(screen.getByAltText(shot.alt)).toBeTruthy();
    expect(screen.getByText(study.screenshotNote)).toBeTruthy();
  });

  it("marks the rooms section as in progress and splits working from still to do", () => {
    render(<StrutCaseStudy />);
    const rooms = document.getElementById("rooms")!;
    expect(within(rooms).getByText("In progress")).toBeTruthy();
    expect(within(rooms).getByText("Working now")).toBeTruthy();
    expect(within(rooms).getByText("Still to do")).toBeTruthy();
    // Nothing is waiting in review any more.
    expect(within(rooms).queryByText("Built and in review")).toBeNull();
  });
});
