import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skills = {
    Design: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Prototyping"],
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    Backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    Tools: ["Git", "GitHub", "VS Code", "Vercel", "Docker", "Webpack"],
  }

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Technologien</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Mein technisches Arsenal für erfolgreiche Projekte
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm px-4 py-2">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
