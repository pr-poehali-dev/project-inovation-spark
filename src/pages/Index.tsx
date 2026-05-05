import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"
import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { ReviewsSection } from "@/components/sections/reviews-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { ContactsSection } from "@/components/sections/contacts-section"
import { FooterSection } from "@/components/sections/footer-section"

const Index = () => {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <HeroSection />
        <ManifestoSection />
        <FeaturesSection />
        <ShowcaseSection />
        <CarouselSection />
        <ReviewsSection />
        <InsightsSection />
        <PricingSection />
        <ContactsSection />
        <FooterSection />
      </main>
    </LenisProvider>
  )
}

export default Index
