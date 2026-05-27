import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };

export default async function Icon() {
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
          fontSize: 20,
        }}
      >
        T
      </div>
    ),
    { ...size }
  );
}
