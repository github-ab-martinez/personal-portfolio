import { motion, AnimatePresence } from "framer-motion";
import { FC, useState } from "react";
import { Quote } from "../TestimonialsSection/quotes";
import QuoteCard from "../TestimonialsSection/Quote";

interface SliderProps {
  quotes: Quote[];
}

const QuoteSlider: FC<SliderProps> = ({ quotes }) => {
  const [activeSlide, setActiveSlide] = useState(quotes[0]);

  return (
    <section>
      <div className="flex w-full flex-nowrap overflow-hidden transition-all">
        <AnimatePresence>
          {quotes.map((quote) => {
            if (quote.hash === activeSlide.hash) {
              return (
                <motion.div
                  className="shrink-0 basis-full"
                  key={quote.hash}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <QuoteCard {...activeSlide} />
                </motion.div>
              );
            }
          })}
        </AnimatePresence>
      </div>
      <div className="mt-14 flex justify-center gap-4">
        {quotes.map((quote, index) => (
          <button
            key={quote.hash}
            className={`h-4 w-4 rounded-full border border-purple ${
              quote.hash === activeSlide.hash ? "bg-purple" : "bg-transparent"
            }`}
            onClick={() => setActiveSlide(quotes[index])}
          >
            <span className="sr-only">Load quote from {quote.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default QuoteSlider;
