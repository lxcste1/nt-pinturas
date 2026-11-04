import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "NT Pinturas — Pinturas y recubrimientos industriales"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF", position: "relative", fontFamily: "Arial, sans-serif" }}>
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 12, display: "flex" }}>
          <div style={{ width: "34%", background: "#FCAC01" }} />
          <div style={{ width: "33%", background: "#018D8D" }} />
          <div style={{ width: "33%", background: "#E61537" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 12 }}>
          <div style={{ display: "flex", position: "relative", height: 220, width: 360, alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
            <div style={{ position: "absolute", top: 5, left: 55, width: 250, height: 100, borderTop: "26px solid #FCAC01", borderRadius: "70% 70% 0 0", transform: "rotate(-8deg)" }} />
            <div style={{ position: "absolute", top: 45, left: 70, width: 235, height: 85, borderTop: "24px solid #018D8D", borderRadius: "70% 70% 0 0", transform: "rotate(-5deg)" }} />
            <div style={{ position: "absolute", top: 82, left: 92, width: 220, height: 70, borderTop: "22px solid #E61537", borderRadius: "70% 70% 0 0", transform: "rotate(-2deg)" }} />
            <div style={{ position: "absolute", bottom: 0, fontSize: 150, lineHeight: 1, fontWeight: 900, letterSpacing: -15, color: "#1A232B" }}>NT</div>
          </div>
          <div style={{ fontSize: 76, fontWeight: 500, letterSpacing: -3, color: "#1A232B" }}>NT Pinturas</div>
          <div style={{ marginTop: 18, fontSize: 25, letterSpacing: 6, color: "#48515A" }}>PINTURAS Y RECUBRIMIENTOS INDUSTRIALES</div>
          <div style={{ marginTop: 28, width: 150, height: 7, background: "#E61537" }} />
        </div>
      </div>
    ),
    { ...size }
  )
}
