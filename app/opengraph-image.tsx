import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h1 style={{ fontSize: 72, marginBottom: 20, fontWeight: 700 }}>
          {SITE_NAME}
        </h1>
        <p style={{ fontSize: 28, textAlign: "center", maxWidth: 800 }}>
          {SITE_DESCRIPTION}
        </p>
      </div>
    ),
    { ...size }
  );
}
