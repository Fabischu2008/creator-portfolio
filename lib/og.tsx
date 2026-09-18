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

      {/* Weiches Licht hinter dem zentrierten Text. */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          background:
            "radial-gradient(ellipse 60% 70% at 50% 48%, rgba(255,255,255,0.08) 0%, transparent 62%)",
        }}
      />

      {/* Ringe bleiben als Dekor, sitzen aber hinter dem Text. */}
      <div
        style={{
          position: "absolute",
          left: 340,
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
              border: `1px solid rgba(255,255,255,${diameter === 200 ? 0.28 : diameter === 360 ? 0.18 : 0.12})`,
            }}
          />
        ))}
      </div>

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 80px",
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: 22,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.62)",
            fontWeight: 400,
          }}
        >
          {label}
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 28,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: title.length > 28 ? 64 : 76,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              textAlign: "center",
              maxWidth: 920,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: 28,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.68)",
              fontWeight: 400,
              textAlign: "center",
              maxWidth: 760,
            }}
          >
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
