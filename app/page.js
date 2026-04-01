import CtaSection from "@/components/home/CtaSection";
import DevicesSection from "@/components/home/DevicesSection";
import HeroSection from "@/components/home/HeroSection";
import PricingSection from "@/components/home/PricingSection";
import ProviderSection from "@/components/home/ProviderSection";
import SeoSection from "@/components/home/SeoSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import WhyUsSection from "@/components/home/WhyUsSection";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import ScrollToTop from "@/components/site/ScrollToTop";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyUsSection />
        <ProviderSection />
        <PricingSection />
        <DevicesSection />
        <TestimonialsSection />
        <SeoSection />
        <CtaSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
