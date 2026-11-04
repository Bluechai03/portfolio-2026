import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/design-system";

describe("Button", () => {
  it("renders a link when given an href", () => {
    render(<Button href="#work">See the work</Button>);
    expect(screen.getByRole("link", { name: "See the work" })).toHaveAttribute("href", "#work");
  });

  it("renders a button otherwise, and respects disabled", () => {
    render(<Button disabled>Save</Button>);
    expect(screen.getByRole("button", { name: "Save" })).toBeDisabled();
  });
});
