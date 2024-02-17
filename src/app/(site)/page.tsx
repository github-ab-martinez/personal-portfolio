import { getHomePageContent } from '../../../sanity/sanity-utils';

import AvailabilityBanner from '@/components/AvailabilityBanner';
import ExperienceSection from '@/components/ExperienceSection';
import Hero from '@/components/Hero';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default async function Home() {
  const { content } = await getHomePageContent();

  return (
    <main>
      {content?.map((block) => {
        switch (block._type) {
          case 'hero':
            return <Hero content={block.content} key={block._key} />;

          case 'availabilityBanner':
            return (
              <AvailabilityBanner content={block.content} key={block._key} />
            );

          default:
            return null;
        }
      })}
      <SkillsSection />
      <ExperienceSection />
      <TestimonialsSection />
    </main>
  );
}
