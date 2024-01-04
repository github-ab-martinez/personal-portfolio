import { motion, AnimatePresence } from "framer-motion";
import { FC, useState } from "react";
import { Quote } from "../TestimonialsSection/quotes";
import QuoteCard from "../TestimonialsSection/Quote";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  quotes: Quote[];
}

const QuoteSlider: FC<SliderProps> = ({ quotes }) => {
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

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft(),
    onSwipedRight: () => handleSwipeRight(),
  });

  return (
    <section className="relative">
      <motion.div
        {...handlers}
        animate={{
          x: `calc(-${activeSlide}00% - ${
            activeSlide === 0 ? "0" : `${80 * activeSlide}`
          }px)`,
        }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-nowrap gap-20"
      >
        <AnimatePresence>
          {quotes.map((quote) => {
            return (
              <motion.div
                className="min-w-full"
                key={quote.hash}
                animate={{
                  scale: quote.hash !== quotes[activeSlide].hash ? 0.9 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <QuoteCard
                  skeleton={quote.hash !== quotes[activeSlide].hash}
                  {...quote}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
      <button
        disabled={activeSlide === 0}
        onClick={() => handleSwipeRight()}
        className={`absolute -left-14 top-[calc(50%-theme(spacing.20))] z-20 hidden items-center justify-center rounded-full border-2 border-purple/50 p-6 text-white-primary/50 transition-all duration-300 hover:border-purple hover:text-white-primary md:flex ${
          activeSlide === 0 && "hidden"
        }`}
      >
        <ChevronLeft />
      </button>
      <button
        disabled={activeSlide === quotes.length - 1}
        onClick={() => handleSwipeLeft()}
        className={`absolute -right-14 top-[calc(50%-theme(spacing.20))] z-20 hidden items-center justify-center rounded-full border-2 border-purple/50 p-6 text-white-primary/50 transition-all duration-300 hover:border-purple hover:text-white-primary md:flex ${
          activeSlide === quotes.length - 1 && "hidden"
        }`}
      >
        <ChevronRight />
      </button>
      <div className="mt-14 inline-flex justify-center gap-4 bg-gradient-to-r from-purple via-red to-orange p-1">
        {quotes.map((quote, index) => (
          <button
            key={quote.hash}
            className={`relative h-4 w-4 rounded-full transition-colors duration-500 before:absolute before:-left-[2px] before:-top-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:rounded-full before:ring-[9px] before:ring-white-secondary  before:ring-offset-1 before:ring-offset-transparent before:transition-all before:duration-500 before:content-[''] before:dark:ring-black-primary ${
              quote.hash === quotes[activeSlide].hash
                ? "bg-transparent"
                : "bg-white-secondary dark:bg-black-primary"
            }`}
            onClick={() => setActiveSlide(index)}
          >
            <span className="sr-only">Load quote from {quote.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuoteSlider;
