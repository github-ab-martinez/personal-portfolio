import { FC } from "react";
import { Quote } from "../quotes";
import Heading from "@/components/common/Heading";

import { baiJam } from "@/app/fonts";

const QuoteCard: FC<{ skeleton?: boolean } & Quote> = ({
  quote,
  name,
  relation,
  skeleton,
}) => {
  return (
    <blockquote
      className={`flex h-full flex-col justify-center gap-10 rounded-md bg-white-secondary px-10 py-10 dark:bg-black-secondary ${
        skeleton && "opacity-80 blur-sm"
      }`}
    >
      {skeleton ? (
        <div className="flex w-full flex-col justify-center">
          <div className="mb-6 h-5 w-full bg-white-secondary"></div>
          <div className="mb-6 h-5 w-full bg-white-secondary"></div>
          <div className="mb-6 h-5 w-full bg-white-secondary"></div>
          <div className="h-5 w-3/5 bg-white-secondary"></div>
        </div>
      ) : (
        <p
          className={`text-xl lg:text-2xl ${baiJam.className} font-semibold leading-normal`}
        >
          {quote}
        </p>
      )}
      <div className="mx-auto flex w-4/5 flex-col items-center border-t pt-10">
        {skeleton ? (
          <>
            <div className="mb-4 h-3 w-32 rounded-full bg-gradient-to-r from-purple via-red to-orange"></div>
            <div className="mb-2 h-2 w-28 rounded-full bg-white-secondary"></div>
            <div className="h-2 w-20 rounded-full bg-white-secondary"></div>
          </>
        ) : (
          <>
            <Heading
              level="h5"
              as="h3"
              className="mb-1 inline-block whitespace-nowrap bg-gradient-to-r from-purple via-red to-orange bg-clip-text font-semibold text-transparent"
            >
              {name}
            </Heading>
            <Heading level="h6" as="h4">
              {relation}
            </Heading>
          </>
        )}
      </div>
    </blockquote>
  );
};

export default QuoteCard;
