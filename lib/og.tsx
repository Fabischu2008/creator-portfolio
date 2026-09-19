import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const OG_WIDE = { width: 1200, height: 630 }
export const OG_SQUARE = { width: 1200, height: 1200 }
/** @deprecated use OG_WIDE */
export const OG_SIZE = OG_WIDE

function loadFont(filename: string) {
  return readFile(join(process.cwd(), "app/fonts", filename))
}

interface OgImageProps {
  title: string
  subtitle: string
  label?: string
  variant?: "wide" | "square"
}

export async function createOgImage({
  title,
  subtitle,
  label = "Schuck Digital",
  variant = "wide",
}: OgImageProps) {
  const [regular, bold] = await Promise.all([
    loadFont("Geist-Regular.ttf"),
    loadFont("Geist-Bold.ttf"),
  ])

  const square = variant === "square"
  const size = square ? OG_SQUARE : OG_WIDE
  const stackedTitle = title.replace(/\. /g, ".\n")

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "Geist",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(ellipse 70% 55% at 18% 0%, rgba(255,255,255,0.16) 0%, transparent 58%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: square ? -160 : -140,
          top: square ? -80 : -220,
          width: square ? 980 : 780,
          height: square ? 980 : 780,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {(square ? [980, 720, 460] : [780, 560, 360]).map((diameter) => (
          <div
            key={diameter}
            style={{
              position: "absolute",
              width: diameter,
              height: diameter,
              display: "flex",
              borderRadius: 999,
              border: `1px solid rgba(255,255,255,${diameter < 400 ? 0.22 : diameter < 600 ? 0.14 : 0.09})`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          right: 0,
          bottom: 0,
          width: square ? 320 : 280,
          height: square ? 220 : 160,
          display: "flex",
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.28) 1.1px, transparent 1.2px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: square ? "88px 84px 80px" : "56px 72px 52px",
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: square ? 22 : 18,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.72)",
            fontWeight: 400,
          }}
        >
          {label}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: square ? 36 : 22,
            maxWidth: square ? 1040 : 980,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: square ? (title.length > 28 ? 86 : 108) : title.length > 28 ? 58 : 72,
              lineHeight: 0.96,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              whiteSpace: "pre-line",
            }}
          >
            {stackedTitle}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: square ? 34 : 26,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.78)",
              fontWeight: 400,
              maxWidth: square ? 900 : 820,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: square ? 34 : 24,
            color: "#ffffff",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 36,
              height: 3,
              background: "#ffffff",
              display: "flex",
            }}
          />
          schuck.digital
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
      ],
    },
  )
}
