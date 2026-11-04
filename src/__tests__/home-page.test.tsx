import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import Home from "@/app/page";
import { site } from "@/content/site";

describe("home page", () => {
  it("has a section for every nav link", () => {
    const { container } = render(<Home />);
    for (const { href, label } of site.nav) {
      const id = href.replace("#", "");
      expect(container.querySelector(`#${id}`), `${label} → ${href}`).not.toBeNull();
    }
  });

  it("shows only Live projects, each with a working link", () => {
    const { container } = render(<Home />);
    const work = container.querySelector("#work")!;
    for (const project of site.projects) {
      expect(project.status).toBe("Live");
      for (const link of project.links) {
        const anchor = work.querySelector(`a[href="${link.href}"]`);
        expect(anchor, link.label).not.toBeNull();
      }
    }
  });

  it("links to email, LinkedIn and GitHub in the contact section", () => {
    const { container } = render(<Home />);
    const contact = container.querySelector("#contact")!;
    expect(contact.querySelector(`a[href="mailto:${site.email}"]`)).not.toBeNull();
    expect(contact.querySelector(`a[href="${site.linkedin}"]`)).not.toBeNull();
    expect(contact.querySelector(`a[href="${site.github}"]`)).not.toBeNull();
  });
});
