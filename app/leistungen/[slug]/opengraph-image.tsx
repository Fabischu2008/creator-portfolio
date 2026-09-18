import { createOgImage, OG_SIZE } from "@/lib/og"
import { getServiceBySlug, services } from "@/lib/services"

export const alt = "Schuck Digital"
export const size = OG_SIZE
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
    label: "Leistung",
    title: service?.title ?? "Schuck Digital",
    subtitle: service?.shortDescription ?? "Websites, Marketing und Wachstum.",
  })
}
