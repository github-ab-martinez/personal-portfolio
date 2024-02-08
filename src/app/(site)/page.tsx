import { getHomePageContent } from '../../../sanity/sanity-utils';

import AvailabilityBanner from '@/components/AvailabilityBanner';
import ExperienceSection from '@/components/ExperienceSection';
import HeroSection from '@/components/HeroSection';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default async function Home() {
  const { pageSections } = await getHomePageContent();

  return (
    <main>
      {pageSections.map((section) => {
        if (section._type === 'hero') {
          return (
            <HeroSection
              heading={section.heading[0]}
              key={section._key}
              subheading={section.subheading[0]}
            />
          );
        }
      })}
      <AvailabilityBanner />
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
    </main>
  );
}
