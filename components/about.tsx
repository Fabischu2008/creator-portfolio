import { Card } from "@/components/ui/card"
import { Code2, Palette, Zap } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Über mich</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Mit einer Leidenschaft für nutzerzentriertes Design und sauberen Code schaffe ich digitale Produkte, die
              nicht nur gut aussehen, sondern auch hervorragend funktionieren. Meine Arbeit verbindet ästhetische
              Exzellenz mit technischer Präzision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 hover:border-accent transition-colors">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">UX/UI Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Durchdachte Benutzeroberflächen, die intuitiv sind und Freude bereiten. Von Wireframes bis zum fertigen
                Design.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:border-accent transition-colors">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Code2 className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Entwicklung</h3>
              <p className="text-muted-foreground leading-relaxed">
                Moderne Web-Anwendungen mit React, Next.js und TypeScript. Sauberer, wartbarer und performanter Code.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:border-accent transition-colors">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Performance</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimierte Lösungen, die schnell laden und reibungslos funktionieren. Fokus auf beste User Experience.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
