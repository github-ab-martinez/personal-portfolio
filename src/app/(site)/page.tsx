import AvailabilityBanner from '@/components/AvailabilityBanner';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default async function Home() {
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
