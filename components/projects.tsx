import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Next Gen Website",
      description:
        "Next-generation privacy cryptocurrency website mit futuristischem Design. Features Quantum-Safe Security, DAO-Governance und vollständige Transaktions-Anonymität. Dark-Theme mit immersiven 3D-Cityscape-Background.",
      image: "/images/screenshot-202026-01-12-20at-2014.png",
      tags: ["Next.js", "TypeScript", "Web3", "Framer Motion"],
      liveUrl: "https://xcoin-website.vercel.app/",
      githubUrl: "https://github.com/Fabischu2008/Xcoin_Website",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Moderne Online-Shopping-Plattform mit intuitivem Checkout-Prozess und personalisierten Produktempfehlungen.",
      image: "/modern-ecommerce-website.png",
      tags: ["React", "Next.js", "Stripe", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "SaaS Dashboard",
      description: "Umfassendes Analytics-Dashboard mit Echtzeit-Datenvisualisierung und benutzerdefinierten Reports.",
      image: "/analytics-dashboard.png",
      tags: ["TypeScript", "React", "D3.js", "Node.js"],
      liveUrl: "https://saas-dashboard-prototyp.vercel.app/",
      githubUrl: "https://github.com/Fabischu2008/saas-dashboard-prototyp",
    },
    {
      title: "Mobile App Design",
      description: "Fitness-Tracking-App mit ansprechenden Animationen und gamifizierter User Experience.",
      image: "/fitness-mobile-app-ui-design.jpg",
      tags: ["Figma", "React Native", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ausgewählte Projekte</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Eine Auswahl meiner neuesten Arbeiten
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group hover:border-accent transition-colors">
                <div className="relative w-full h-64 overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button variant="default" size="sm" className="group/btn" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
