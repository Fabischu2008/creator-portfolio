import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

export const OG_SIZE = { width: 1200, height: 630 }

function loadFont(filename: string) {
  return readFile(join(process.cwd(), "app/fonts", filename))
}

interface OgImageProps {
  title: string
  subtitle: string
  label?: string
}

export async function createOgImage({ title, subtitle, label = "Schuck Digital" }: OgImageProps) {
  const [regular, bold] = await Promise.all([
    loadFont("Geist-Regular.ttf"),
    loadFont("Geist-Bold.ttf"),
  ])

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        background: "#141414",
        color: "#f4f4f4",
        fontFamily: "Geist",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Feines Gitternetz — erinnert an den Seitenhintergrund, bleibt aber lesbar. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.11) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Weiches Licht von links, damit der Text nicht flach wirkt. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(ellipse 70% 80% at 18% 45%, rgba(255,255,255,0.08) 0%, transparent 62%)",
        }}
      />

      {/* Dekorative Kugel rechts — schlichtes Schwarzweiß, analog zur Scroll-Animation. */}
      <div
        style={{
          position: "absolute",
          right: -80,
          top: 55,
          width: 520,
          height: 520,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {[520, 360, 200].map((diameter) => (
          <div
            key={diameter}
            style={{
              position: "absolute",
              width: diameter,
              height: diameter,
              display: "flex",
              borderRadius: 999,
              border: `1px solid rgba(255,255,255,${diameter === 200 ? 0.34 : diameter === 360 ? 0.22 : 0.14})`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: 780,
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.62)",
            fontWeight: 400,
          }}
        >
          {label}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: title.length > 28 ? 64 : 76,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.68)",
              fontWeight: 400,
              maxWidth: 680,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 22,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          <div
            style={{
              width: 36,
              height: 1,
              background: "rgba(255,255,255,0.35)",
              display: "flex",
            }}
          />
          schuck.digital
        </div>
      </div>
    </div>,
    {
      ...OG_SIZE,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
      ],
    },
  )
}
