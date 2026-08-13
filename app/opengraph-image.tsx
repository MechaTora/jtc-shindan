import { ImageResponse } from "next/og";

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
          alignItems: "center",
          justifyContent: "center",
          background: "#f5f5f7",
        }}
      >
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            border: "10px solid #c0392b",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#c0392b",
            fontSize: 88,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          印
        </div>
        <div style={{ fontSize: 92, fontWeight: 700, color: "#1a1a1f" }}>JTC診断</div>
        <div style={{ fontSize: 34, color: "#6b6b75", marginTop: 24 }}>
          あなたの会社のJTC度は何%？
        </div>
      </div>
    ),
    { ...size }
  );
}
