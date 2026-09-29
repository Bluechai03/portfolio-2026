import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#faf3ea",
          background:
            "radial-gradient(90% 80% at 88% 18%, #1f3a52 0%, transparent 60%), radial-gradient(80% 70% at 8% 10%, #211712 0%, transparent 55%), linear-gradient(165deg, #120b08 0%, #0b0705 100%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 8, color: "#6ea8dd", textTransform: "uppercase" }}>
          {site.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div style={{ display: "flex", fontSize: 128, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>
            {site.name}
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#efe2d4" }}>{site.tagline}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#e8bf96" }}>{site.url.replace("https://", "")}</div>
      </div>
    ),
    size,
  );
}
