import { CONTACT_EMAIL } from "@/lib/contact"

/**
 * Pflichtangaben nach § 5 DDG. Die Anschrift muss ladungsfähig sein,
 * ein Postfach reicht nicht aus.
 */
export const LEGAL = {
  name: "Fabian Schuck",
  businessName: "Schuck Digital",
  street: "Pfarrgasse 9",
  zip: "67727",
  city: "Lohnsfeld",
  phone: "+49 152 59527957",
  email: CONTACT_EMAIL,
  /** Kleinunternehmer nach § 19 UStG — daher keine Umsatzsteuer-ID. */
  kleinunternehmer: true,
}

export const LEGAL_LAST_UPDATED = "17. September 2026"
