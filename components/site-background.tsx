import { ScrollAnimatedBackground } from "@/components/scroll-animated-background"

export function SiteBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* Base tone */}
      <div className="absolute inset-0 bg-background" />

      {/* Soft depth glow behind the content */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 28%, rgba(0,0,0,0.05), rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(100% 70% at 50% 35%, black 30%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(100% 70% at 50% 35%, black 30%, transparent 85%)",
        }}
      />

      {/* Particle network → sphere → explosion */}
      <ScrollAnimatedBackground />

      {/* Vignette to keep text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(135% 95% at 50% 32%, rgba(255,255,255,0) 58%, rgba(255,255,255,0.28) 86%, rgba(255,255,255,0.6) 100%), linear-gradient(rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 14%, rgba(255,255,255,0) 88%, rgba(255,255,255,0.55) 100%)",
        }}
      />
    </div>
  )
}
