import HeroSection from "@/components/hero-section/Hero";
import ServiceSection from "@/components/service-section/service";
import ProjectSection from "@/components/project-section/project";
import FaqSection from "@/components/faq-section/faq";
import PriceSection from "@/components/price-section/price";
import ReviewSection from "@/components/review-section/review";
import TeamSection from "@/components/team-section/team";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <TeamSection />
      <FaqSection />
      <ReviewSection />
      <PriceSection />
    </main>
  );
}
