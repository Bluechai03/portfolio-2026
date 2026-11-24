import { describe, expect, it } from "vitest";
import { pageMetadata } from "@/lib/metadata";

describe("pageMetadata", () => {
  const meta = pageMetadata({ title: "T", description: "D", path: "/how-its-built" });

  it("sets the canonical path", () => {
    expect(meta.alternates?.canonical).toBe("/how-its-built");
  });

  it("keeps the preview image in both openGraph and twitter", () => {
    expect(meta.openGraph?.images).toHaveLength(1);
    expect(meta.twitter?.images).toHaveLength(1);
  });
});
