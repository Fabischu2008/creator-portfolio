import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Statement } from "@/components/statement"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Principles } from "@/components/principles"
import { Proof } from "@/components/proof"
import { Questionnaire } from "@/components/questionnaire"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { SiteBackground } from "@/components/site-background"
import { ScrollProgress } from "@/components/scroll-progress"

export default function Home() {
  return (
    <>
      <SiteBackground />
      <ScrollProgress />
      <main className="relative z-0 min-h-screen">
        <Header />
        <Hero />
        <Statement />
        <Services />
        <About />
        <Principles />
        <Proof />
        <Questionnaire />
        <FAQ />
        <Contact />
        <FinalCta />
        <Footer />
      </main>
    </>
  )
}
