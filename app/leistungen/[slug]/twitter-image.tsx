import { createOgImage, OG_WIDE } from "@/lib/og"
import { getServiceBySlug, services } from "@/lib/services"

export const alt = "Schuck Digital"
export const size = OG_WIDE
export const contentType = "image/png"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServiceTwitterImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  return createOgImage({
    variant: "wide",
    label: "Leistung",
    title: service?.title ?? "Schuck Digital",
    subtitle: service?.shortDescription ?? "Websites, Marketing und Wachstum.",
  })
}
