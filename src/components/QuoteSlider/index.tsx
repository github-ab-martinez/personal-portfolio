import { motion, AnimatePresence } from "framer-motion";
import { FC, useState } from "react";
import { Quote } from "../TestimonialsSection/quotes";
import QuoteCard from "../TestimonialsSection/Quote";
import { useSwipeable } from "react-swipeable";

interface SliderProps {
  quotes: Quote[];
}

const QuoteSlider: FC<SliderProps> = ({ quotes }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const handleSwipeLeft = () => {
    console.log("swiped left");

    if (activeSlide === quotes.length - 1) {
      return;
    }

    setActiveSlide((currentSlide) => currentSlide + 1);
  };

  const handleSwipeRight = () => {
    console.log("swiped right");

    if (activeSlide === 0) {
      return;
    }

    setActiveSlide((currentSlide) => currentSlide - 1);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft,
    onSwipedRight: () => handleSwipeRight,
  });

  return (
    <section>
      <div
        {...handlers}
        className="relative flex w-full flex-nowrap overflow-hidden transition-all"
      >
        <AnimatePresence>
          {quotes.map((quote) => {
            if (quote.hash === quotes[activeSlide].hash) {
              return (
                <motion.div
                  className="shrink-0 basis-full"
                  key={quote.hash}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <QuoteCard {...quotes[activeSlide]} />
                </motion.div>
              );
            }
          })}
        </AnimatePresence>
      </div>
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
