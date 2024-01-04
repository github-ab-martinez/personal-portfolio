import { FC } from "react";
import { Quote } from "../quotes";
import Heading from "@/components/common/Heading";

import { baiJam } from "@/app/fonts";

const QuoteCard: FC<Quote> = ({ quote, name, relation }) => {
  return (
    <blockquote className="flex flex-col gap-10 rounded-md bg-white-primary px-10 py-10 dark:bg-black-secondary lg:flex-row lg:py-20 lg:text-left">
      <p
        className={`text-xl lg:order-2 lg:text-3xl ${baiJam.className} font-semibold leading-normal`}
      >
        {quote}
      </p>
      <div className="flex flex-col border-t pt-10 lg:order-1 lg:justify-center lg:border-r lg:border-t-0 lg:pr-10 lg:pt-0">
        <Heading
          level="h5"
          className="mb-1 inline-block whitespace-nowrap bg-gradient-to-r from-purple via-red to-orange bg-clip-text font-semibold text-transparent"
        >
          {name}
        </Heading>
        <Heading level="h6">{relation}</Heading>
      </div>
    </blockquote>
  );
};

export default QuoteCard;
