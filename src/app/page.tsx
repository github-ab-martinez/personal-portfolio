import AvailabilityBanner from "@/components/AvailabilityBanner";
import ExperienceSection from "@/components/ExperienceSection";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AvailabilityBanner />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
    </main>
  );
}
