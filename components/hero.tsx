"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import { AnimatedBackground } from "@/components/animated-background"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatedBackground />
      </div>
      
      <div className="max-w-5xl w-full relative z-10">
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              UX/UI Designer &<br />
              Software­entwickler
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground max-w-3xl text-pretty">
              Ich entwickle durchdachte digitale Erlebnisse, die Design und Code vereinen
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" onClick={scrollToContact} className="group">
              Projekt starten
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById("projects")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Arbeiten ansehen
            </Button>
          </div>

          <div className="flex gap-4 justify-center md:justify-start pt-8">
            <a
              href="https://github.com/Fabischu2008"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/fabian-schuck-20a56122b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:fabianschuck13@gmail.com"
              className="p-3 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
