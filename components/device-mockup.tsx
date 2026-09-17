import Image from "next/image"

export interface Screenshot {
  src: string
  width: number
  height: number
}

interface DeviceMockupProps {
  desktop: Screenshot
  mobile: Screenshot
  alt: string
}

/** Desktop screenshot in a browser frame with the mobile view overlapping it. */
export function DeviceMockup({ desktop, mobile, alt }: DeviceMockupProps) {
  return (
    <div className="relative pb-6 sm:pb-8">
      <div className="w-full sm:w-[86%] rounded-xl border border-border bg-background shadow-lg overflow-hidden">
        <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-border bg-secondary/70">
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        </div>
        <Image
          src={desktop.src}
          alt={alt}
          width={desktop.width}
          height={desktop.height}
          className="w-full h-auto"
          sizes="(max-width: 640px) 100vw, 55vw"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-[26%] max-w-[170px] rounded-[1.1rem] border-[3px] border-foreground/80 bg-foreground/80 shadow-xl">
        <Image
          src={mobile.src}
          alt=""
          width={mobile.width}
          height={mobile.height}
          className="w-full h-auto rounded-[0.9rem]"
          sizes="(max-width: 640px) 26vw, 170px"
          aria-hidden="true"
        />
      </div>
    </div>
  )
}
