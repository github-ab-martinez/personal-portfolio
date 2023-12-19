import { FC } from "react";
import { Quote } from "../quotes";
import Heading from "@/components/common/Heading";

const QuoteCard: FC<Quote> = ({ quote, name, relation }) => {
  return (
    <blockquote>
      <p className="mb-8 text-xl font-light lg:mb-14 lg:text-center">
        &quot;{quote}&quot;
      </p>
      <Heading level="h4" className="mb-2 lg:text-right">
        {name}
      </Heading>
      <Heading level="h5" className="lg:text-right">
        {relation}
      </Heading>
    </blockquote>
  );
};

export default QuoteCard;
