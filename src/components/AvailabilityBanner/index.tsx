'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { FC } from 'react';

import Heading from '../Heading';

import SparkleIcon from '@/assets/icons/SparkleIcon';

interface AvailabilityBannerProps {
  content: string[];
}

const AvailabilityBanner: FC<AvailabilityBannerProps> = ({ content }) => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 0.4], ['-35%', '0%']);

  return (
    <section className="relative mb-[-30px] mt-[-30px] overflow-hidden py-12 before:absolute before:bottom-[30px] before:h-[calc(100%-60px)] before:w-full before:bg-gradient-to-r before:from-purple  before:via-red before:to-orange before:content-['']">
      <div className="relative left-[-25%] top-0 w-[calc(150%)] -rotate-2 bg-white-secondary py-6 text-black-primary dark:bg-white-primary">
        <motion.span className="flex items-center gap-6" style={{ translateX }}>
          {content.concat(...Array(5).fill(content)).map((copy, index) => (
            <span className="flex items-center gap-6" key={index}>
              <Heading
                as="h2"
                className="whitespace-nowrap font-semibold"
                level="h4"
              >
                {copy}
              </Heading>
              <SparkleIcon className="shrink-0" />
            </span>
          ))}
        </motion.span>
      </div>
    </section>
  );
};

export default AvailabilityBanner;
