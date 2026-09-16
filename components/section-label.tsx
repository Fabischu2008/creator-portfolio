import type { ReactNode } from "react"

interface SectionLabelProps {
  children: ReactNode
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-4">
      {children}
    </p>
  )
}
