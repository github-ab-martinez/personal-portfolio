import Heading from '../common/Heading';
import PageSection from '../common/PageSection';
import QuoteCard from './Quote';
import { useQuotes } from './useQuotes';

const TestimonialsSection = () => {
  const quotes = useQuotes();

  return (
    <PageSection style="secondary">
      <Heading level="h2" className="mb-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple via-red to-orange">
          Testimonials
        </span>
      </Heading>
      <p className="text-lg mb-10">Some quotes from my peers.</p>
      <div className="grid grid-cols-2 gap-10">
        {quotes.map((quote) => (
          <QuoteCard key={quote.hash} {...quote} />
        ))}
      </div>
    </PageSection>
  );
};

export default TestimonialsSection;
