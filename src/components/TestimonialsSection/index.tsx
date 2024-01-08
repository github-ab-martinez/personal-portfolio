"use client";

import { useEffect, useRef } from "react";
import Heading from "../common/Heading";
import PageSection from "../common/PageSection";
import { useNavSpy } from "../common/StickyHeader/HeaderNav/NavSpyProvider";
import { useQuotes } from "./useQuotes";
import Slider from "./QuoteSlider";

const TestimonialsSection = () => {
  const quotes = useQuotes();
  const { navObserver } = useNavSpy();
  const testimonialsRef = useRef(null);

  useEffect(() => {
    testimonialsRef.current && navObserver?.observe(testimonialsRef.current);
  }, [navObserver]);

  return (
    <PageSection style="secondary" className="text-center">
      <Heading
        ref={testimonialsRef}
        id="testimonials"
        level="h2"
        className="mb-5 inline-block bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent"
      >
        Testimonials
      </Heading>
      <p id="slider-label" className="mb-10 text-lg lg:mb-20">
        Some quotes from my peers.
      </p>
      <Slider
        quotes={quotes}
        className="relative mx-auto flex flex-col gap-12 md:w-2/3"
        label="slider-label"
      />
    </PageSection>
  );
};

export default TestimonialsSection;
