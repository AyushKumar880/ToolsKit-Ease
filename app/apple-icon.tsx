import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };

export default async function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 700,
          fontSize: 100,
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
