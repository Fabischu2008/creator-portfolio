import { createOgImage, OG_SQUARE } from "@/lib/og"
import { getServiceBySlug, services } from "@/lib/services"

export const alt = "Schuck Digital"
export const size = OG_SQUARE
export const contentType = "image/png"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServiceOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  return createOgImage({
    variant: "square",
    label: "Leistung",
    title: service?.title ?? "Schuck Digital",
    subtitle: service?.shortDescription ?? "Websites, Marketing und Wachstum.",
  })
}
