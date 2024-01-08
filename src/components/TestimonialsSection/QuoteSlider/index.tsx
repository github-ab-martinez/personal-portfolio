import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { FC, useState } from "react";
import { Quote } from "../quotes";
import QuoteCard from "../Quote";
// import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      role="region"
      aria-roledescription="carousel"
      aria-labelledby={label}
      className={className}
    >
      <div
        className="absolute top-[calc(50%-76px)] z-20 flex w-full justify-between"
        role="group"
        aria-label="Slide controls"
      >
        <button
          disabled={activeSlide === 0}
          onClick={() => handleSwipeRight()}
          className={`relative -left-12 top-0 mr-auto hidden items-center justify-center rounded-full border-2 border-purple p-6 opacity-50 transition-all duration-300 hover:border-purple hover:opacity-100 md:flex ${
            activeSlide === 0 && "md:hidden"
          }`}
          aria-label="Previous slide"
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          disabled={activeSlide === quotes.length - 1}
          onClick={() => handleSwipeLeft()}
          className={`relative -right-12 top-0 ml-auto hidden items-center justify-center rounded-full border-2 border-purple p-6 opacity-50 transition-all duration-300 hover:border-purple hover:opacity-100  md:flex ${
            activeSlide === quotes.length - 1 && "md:hidden"
          }`}
          aria-label="Next slide"
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>
      <div
        role="group"
        aria-label="Additional slide controls"
        className="order-2 inline-flex justify-center gap-4 self-center bg-gradient-to-r from-purple via-red to-orange p-1"
      >
        {quotes.map((quote, index) => {
          const isActiveSlide = quote.hash === quotes[activeSlide].hash;

          return (
            <button
              key={quote.hash}
              className={`relative h-4 w-4 rounded-full transition-colors duration-500 before:absolute before:-left-[2px] before:-top-[2px] before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:rounded-full before:ring-[9px] before:ring-white-primary  before:ring-offset-1 before:ring-offset-transparent before:transition-all before:duration-500 before:content-[''] before:dark:ring-black-primary ${
                isActiveSlide
                  ? "bg-transparent"
                  : "bg-white-primary dark:bg-black-primary"
              }`}
              onClick={() => setActiveSlide(index)}
              disabled={isActiveSlide}
              aria-disabled={isActiveSlide}
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
            activeSlide === 0 ? "0" : `${80 * activeSlide}`
          }px)`,
        }}
        transition={{ duration: 0.5 }}
        className="relative order-1 flex flex-nowrap gap-20"
      >
        <AnimatePresence>
          {quotes.map((quote, index) => {
            const isActiveSlide = quote.hash === quotes[activeSlide].hash;

            return (
              <motion.div
                className="min-w-full"
                key={quote.hash}
                drag="x"
                dragSnapToOrigin={true}
                dragConstraints={{ left: 10, right: 10 }}
                onDragEnd={(event, info) => handleDragEnd(info)}
                animate={{
                  scale: !isActiveSlide ? 0.9 : 1,
                }}
                transition={{ duration: 0.5 }}
                aria-hidden={!isActiveSlide}
                role="group"
                aria-roledescription="Slide"
                aria-label={`Slide ${index + 1} of ${quotes.length}`}
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
