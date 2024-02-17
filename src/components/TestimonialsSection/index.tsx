'use client';

import { useEffect, useRef } from 'react';

import Heading from '../Heading';
import PageSection from '../PageSection';
import { useNavSpy } from '../StickyHeader/HeaderNav/NavSpyProvider';

import { useQuotes } from './useQuotes';
import Slider from './QuoteSlider';

const TestimonialsSection = () => {
  const quotes = useQuotes();
  const { navObserver } = useNavSpy();
  const testimonialsRef = useRef(null);

  useEffect(() => {
    testimonialsRef.current && navObserver?.observe(testimonialsRef.current);
  }, [navObserver]);

  return (
    <PageSection className="text-center" secondary>
      <Heading
        className="mb-5 inline-block bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent"
        id="testimonials"
        level="h2"
        ref={testimonialsRef}
      >
        Testimonials
      </Heading>
      <p className="mb-10 text-lg lg:mb-20" id="slider-label">
        Quotes from some of my peers.
      </p>
      <Slider
        className="relative mx-auto flex flex-col gap-12 md:w-2/3"
        label="slider-label"
        quotes={quotes}
      />
    </PageSection>
  );
};

export default TestimonialsSection;
