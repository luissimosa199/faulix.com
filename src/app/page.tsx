import ClientsSection from "@/components/ClientsSection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import IndustriesSection from "@/components/IndustriesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <HeroSection />
      <IndustriesSection />
      <ClientsSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </main>
  );
}
