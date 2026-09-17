import { LEGAL } from "@/lib/legal"
import { SITE_URL } from "@/lib/site"
import { services } from "@/lib/services"

/**
 * Strukturierte Daten für Google. Sie sind für Besucher unsichtbar und tragen
 * das lokale Signal, ohne dass die sichtbaren Texte auf eine Region festgelegt
 * werden — die Seite bleibt damit für eine spätere internationale Ausrichtung offen.
 */
export function buildBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#business`,
    name: LEGAL.businessName,
    url: SITE_URL,
    logo: `${SITE_URL}/apple-icon.png`,
    image: `${SITE_URL}/apple-icon.png`,
    description:
      "Conversion-optimierte Websites, Landingpages, Meta & Google Ads, Social Media und SEO für Unternehmen, die online wachsen wollen.",
    email: LEGAL.email,
    telephone: LEGAL.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: LEGAL.street,
      postalCode: LEGAL.zip,
      addressLocality: LEGAL.city,
      addressCountry: "DE",
    },
    founder: {
      "@type": "Person",
      name: LEGAL.name,
      jobTitle: "Digital Marketing & Webentwicklung",
    },
    // Von der Region nach außen: sichert die lokale Sichtbarkeit jetzt,
    // schließt überregionale Anfragen aber nicht aus.
    areaServed: [
      { "@type": "City", name: "Kaiserslautern" },
      { "@type": "AdministrativeArea", name: "Rheinland-Pfalz" },
      { "@type": "Country", name: "Deutschland" },
    ],
    knowsLanguage: ["de", "en"],
    sameAs: ["https://www.linkedin.com/in/fabian-schuck-20a56122b/"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Leistungen",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.shortDescription,
          url: `${SITE_URL}/leistungen/${service.slug}`,
        },
      })),
    },
  }
}
