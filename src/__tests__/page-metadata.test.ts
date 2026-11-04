import { describe, expect, it } from "vitest";
import { pageMetadata } from "@/lib/metadata";

describe("pageMetadata", () => {
  const meta = pageMetadata({ title: "T", description: "D", path: "/system" });

  it("sets the canonical path", () => {
    expect(meta.alternates?.canonical).toBe("/system");
  });

  it("keeps the preview image in both openGraph and twitter", () => {
    expect(meta.openGraph?.images).toHaveLength(1);
    expect(meta.twitter?.images).toHaveLength(1);
  });
});
