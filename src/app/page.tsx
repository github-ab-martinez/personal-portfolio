import AvailabilityBanner from '@/components/AvailabilityBanner';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ToolsSection from '@/components/ToolsSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AvailabilityBanner />
      <ToolsSection />
      <ExperienceSection />
      <TestimonialsSection />
    </main>
  );
}
