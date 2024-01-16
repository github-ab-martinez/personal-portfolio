import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { FC, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Quote } from '../quotes';
import QuoteCard from '../Quote';

interface SliderProps {
  quotes: Quote[];
  className?: string;
  label: string;
}

const QuoteSlider: FC<SliderProps> = ({ quotes, className, label }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSwipeLeft = () => {
    if (activeSlide === quotes.length - 1) {
      return;
    }

    setActiveSlide((currentSlide) => currentSlide + 1);
  };

  const handleSwipeRight = () => {
    if (activeSlide === 0) {
      return;
    }

    setActiveSlide((currentSlide) => currentSlide - 1);
  };

  const handleDragEnd = (info: PanInfo) => {
    if (info.offset.x > 150) {
      handleSwipeRight();
    }
    if (info.offset.x < -150) {
      handleSwipeLeft();
    }
  };

  return (
    <section
      aria-labelledby={label}
      aria-roledescription="carousel"
      className={className}
      role="region"
    >
      <div
        aria-label="Slide controls"
        className="absolute top-[calc(50%-76px)] z-20 flex w-full justify-between"
        role="group"
      >
        <button
          aria-label="Previous slide"
          className={`relative -left-12 top-0 mr-auto hidden items-center justify-center rounded-full border-2 border-purple p-6 opacity-50 transition-all duration-300 hover:border-purple hover:opacity-100 md:flex ${
            activeSlide === 0 && 'md:hidden'
          }`}
          disabled={activeSlide === 0}
          onClick={() => handleSwipeRight()}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          aria-label="Next slide"
          className={`relative -right-12 top-0 ml-auto hidden items-center justify-center rounded-full border-2 border-purple p-6 opacity-50 transition-all duration-300 hover:border-purple hover:opacity-100  md:flex ${
            activeSlide === quotes.length - 1 && 'md:hidden'
          }`}
          disabled={activeSlide === quotes.length - 1}
          onClick={() => handleSwipeLeft()}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <div
        aria-label="Additional slide controls"
        className="order-2 inline-flex justify-center gap-4 self-center bg-gradient-to-r from-purple via-red to-orange p-1"
        role="group"
      >
        {quotes.map((quote, index) => {
          const isActiveSlide = quote.hash === quotes[activeSlide].hash;

          return (
            <button
              aria-disabled={isActiveSlide}
              className={`relative h-4 w-4 rounded-full transition-colors duration-500 before:absolute before:-left-[2px] before:-top-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:rounded-full before:ring-[9px] before:ring-white-primary  before:ring-offset-1 before:ring-offset-transparent before:transition-all before:duration-500 before:content-[''] before:dark:ring-black-primary ${
                isActiveSlide
                  ? 'bg-transparent'
                  : 'bg-white-primary dark:bg-black-primary'
              }`}
              disabled={isActiveSlide}
              key={quote.hash}
              onClick={() => setActiveSlide(index)}
            >
              <span className="sr-only">{`Load slide ${index + 1} of ${
                quotes.length
              }`}</span>
            </button>
          );
        })}
      </div>
      <motion.div
        animate={{
          x: `calc(-${activeSlide}00% - ${
            activeSlide === 0 ? '0' : `${80 * activeSlide}`
          }px)`,
        }}
        className="relative order-1 flex flex-nowrap gap-20"
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          {quotes.map((quote, index) => {
            const isActiveSlide = quote.hash === quotes[activeSlide].hash;

            return (
              <motion.div
                animate={{
                  scale: !isActiveSlide ? 0.9 : 1,
                }}
                aria-hidden={!isActiveSlide}
                aria-label={`Slide ${index + 1} of ${quotes.length}`}
                aria-roledescription="Slide"
                className="min-w-full"
                drag="x"
                dragConstraints={{ left: 10, right: 10 }}
                dragSnapToOrigin={true}
                key={quote.hash}
                onDragEnd={(event, info) => handleDragEnd(info)}
                role="group"
                transition={{ duration: 0.5 }}
              >
                <QuoteCard skeleton={!isActiveSlide} {...quote} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default QuoteSlider;
