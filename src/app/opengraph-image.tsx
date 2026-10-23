import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const alt = "Nayra Shares Solution & Consultant: Solutions for All Physical Share Issues";
export const size = { width: 1200, height: 630 };
export const dynamic = "force-static";
export const contentType = "image/png";

export default async function Image() {
  let icon: string | null = null;
  try {
    const buf = await readFile(path.join(process.cwd(), "public/brand/icon.png"));
    icon = `data:image/png;base64,${buf.toString("base64")}`;
  } catch {
    icon = null;
  }
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        padding: 80,
        background: "#0A3A2D",
        color: "#FAF6EA",
      }}
    >
      {icon && (
        <img
          src={icon}
          width={340}
          height={340}
          alt=""
          style={{ borderRadius: 24, background: "#fff" }}
        />
      )}
      <div style={{ display: "flex", flexDirection: "column", marginLeft: icon ? 64 : 0 }}>
        <div style={{ fontSize: 96, fontWeight: 700, color: "#D9B35A" }}>NSSC</div>
        <div style={{ fontSize: 40, marginTop: 8 }}>Nayra Shares Solution &amp; Consultant</div>
        <div style={{ fontSize: 34, marginTop: 28, color: "#E8CF8F" }}>
          Solutions for All Physical Share Issues
        </div>
        <div style={{ fontSize: 26, marginTop: 16, opacity: 0.85 }}>
          Mumbai · NRIs supported remotely
        </div>
      </div>
    </div>,
    size,
  );
}
