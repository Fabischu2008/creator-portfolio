"use client"

import { useEffect, useState, type ReactNode } from "react"
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface MediaCarouselProps {
  slides: ReactNode[]
  ariaLabel: string
}

export function MediaCarousel({ slides, ariaLabel }: MediaCarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    const update = () => setCurrent(api.selectedScrollSnap())
    update()
    api.on("select", update)
    return () => {
      api.off("select", update)
    }
  }, [api])

  const hasMultiple = slides.length > 1

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: hasMultiple }}
      aria-label={ariaLabel}
      className="w-full"
    >
      <CarouselContent className="-ml-4">
        {slides.map((slide, index) => (
          <CarouselItem key={index}>{slide}</CarouselItem>
        ))}
      </CarouselContent>

      {hasMultiple && (
        // Controls sit below the track instead of floating outside it, so they
        // never get clipped on narrow screens.
        <div className="mt-6 flex items-center justify-center gap-4">
          <CarouselPrevious className="static left-auto right-auto translate-y-0 size-9" />

          <div className="flex items-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Zu Element ${index + 1} springen`}
                aria-current={index === current ? "true" : undefined}
                className={`h-2 rounded-full transition-all ${
                  index === current
                    ? "w-6 bg-foreground"
                    : "w-2 bg-muted-foreground/35 hover:bg-muted-foreground/60"
                }`}
              />
            ))}
          </div>

          <CarouselNext className="static left-auto right-auto translate-y-0 size-9" />
        </div>
      )}
    </Carousel>
  )
}
