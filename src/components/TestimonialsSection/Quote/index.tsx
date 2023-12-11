import { FC } from 'react';
import { Quote } from '../quotes';
import { Quote as QuoteIcon } from 'lucide-react';

const QuoteCard: FC<Quote> = ({ quote, name, relation }) => {
  return (
    <blockquote className="bg-white-secondary dark:bg-black-secondary rounded py-10 px-8 relative overflow-hidden">
      <div className="bg-gradient-to-r from-purple via-red to-orange dark:text-black-secondary p-4 inline-block rounded-full absolute -bottom-2 -left-2">
        <QuoteIcon size={50} />
      </div>
      <p className="font-light mb-4">&quot;{quote}&quot;</p>
      <p className="text-right mb-2">- {name}</p>
      <p className="text-right">{relation}</p>
    </blockquote>
  );
};

export default QuoteCard;
