import { ScrollAnimatedBackground } from "@/components/scroll-animated-background"

export function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-background" />

      <div className="absolute inset-0 site-glow" />

      <div
        className="absolute inset-0 opacity-[0.18] dark:opacity-[0.22] site-grid"
        style={{
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(100% 70% at 50% 35%, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(100% 70% at 50% 35%, black 30%, transparent 85%)",
        }}
      />

      <ScrollAnimatedBackground />

      <div className="absolute inset-0 site-vignette" />
    </div>
  )
}
