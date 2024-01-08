"use client";

import SparkleIcon from "@/assets/icons/SparkleIcon";
import Heading from "../common/Heading";
import { motion, useScroll, useTransform } from "framer-motion";

const availabilityContent = ["7+ Yrs Experience", "Available for Hire"];

const AvailabilityBanner = () => {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 0.4], ["-35%", "0%"]);

  return (
    <section className="relative mb-[-30px] mt-[-30px] overflow-hidden py-12 before:absolute before:bottom-[30px] before:h-[calc(100%-60px)] before:w-full before:bg-gradient-to-r before:from-purple  before:via-red before:to-orange before:content-['']">
      <div className="relative left-[-25%] top-0 w-[calc(150%)] -rotate-2 bg-white-secondary py-6 text-black-primary dark:bg-white-primary">
        <motion.span style={{ translateX }} className="flex items-center gap-6">
          {availabilityContent
            .concat(...Array(5).fill(availabilityContent))
            .map((content, index) => (
              <span key={index} className="flex items-center gap-6">
                <Heading
                  className="whitespace-nowrap font-semibold"
                  level="h4"
                  as="h2"
                >
                  {content}
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
