import Link from "next/link"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DEFAULT_WHATSAPP_MESSAGE,
  mailtoUrl,
  whatsappUrl,
} from "@/lib/contact"

interface ContactActionsProps {
  whatsappMessage?: string
  mailSubject?: string
  className?: string
}

export function ContactActions({
  whatsappMessage = DEFAULT_WHATSAPP_MESSAGE,
  mailSubject = "Anfrage über schuck.digital",
  className = "",
}: ContactActionsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center ${className}`}>
      <Button size="lg" className="group" asChild>
        <Link href="/#fragebogen">
          60-Sek-Check starten
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Button>

      <Button size="lg" variant="outline" asChild>
        <a href={whatsappUrl(whatsappMessage)} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="mr-2 h-4 w-4" />
          Per WhatsApp
        </a>
      </Button>

      <Button size="lg" variant="outline" asChild>
        <a href={mailtoUrl(mailSubject)}>
          <Mail className="mr-2 h-4 w-4" />
          Per E-Mail
        </a>
      </Button>
    </div>
  )
}
