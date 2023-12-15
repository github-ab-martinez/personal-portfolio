"use client";

import { motion } from "framer-motion";
import Heading from "../common/Heading";
import PageSection from "../common/PageSection";
import CodeAnimation from "./CodeAnimation";
import { useNavSpy } from "../common/StickyHeader/HeaderNav/NavSpyProvider";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const { navObserver } = useNavSpy();
  const heroRef = useRef(null);

  useEffect(() => {
    heroRef.current && navObserver?.observe(heroRef.current);
  }, [navObserver]);

  return (
    <PageSection
      className="relative flex flex-col items-center pt-10 before:absolute before:h-[150%] before:w-[200%] before:translate-y-[30%] before:rounded-full before:bg-gradient-radial before:from-purple before:to-transparent before:blur-3xl before:content-[''] lg:flex-row lg:flex-nowrap lg:pt-20 lg:before:h-[140%] lg:before:w-[120%] lg:before:translate-x-[30%] lg:before:translate-y-[25%]"
      secondary={true}
    >
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25, type: "spring", bounce: 0.4 }}
        className="static mb-3 text-center md:w-4/6 lg:mr-16 lg:w-1/2 lg:text-left xl:w-1/2"
      >
        <Heading ref={heroRef} id="home" level="h2" className="mb-10 lg:mb-14">
          Hi! I&apos;m A.b., a{" "}
          <span className="bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent">
            Software Engineer
          </span>{" "}
          based in Austin.
        </Heading>
        <p className="mb-10 text-lg font-light lg:mb-14 xl:w-4/5">
          I build products for the web with a focus on{" "}
          <span className="font-semibold">developing UIs</span> that help users
          accomplish their goals.
        </p>
      </motion.div>
      <div className="z-10 flex flex-col lg:ml-auto lg:w-1/2 xl:w-2/5">
        <CodeAnimation />
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 4.75, type: "spring", bounce: 0.4 }}
          className="relative -top-8 z-10 mx-auto -mb-8 w-5/6 rounded-full bg-black-primary px-6 py-4 text-lg font-semibold uppercase text-white-primary before:absolute before:left-[-2px] before:top-[-2px] before:-z-10 before:inline-block before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:rounded-full before:bg-transparent before:from-purple before:via-red before:to-orange before:opacity-0 before:transition-all before:duration-500 before:content-[''] hover:before:opacity-100 dark:bg-white-primary dark:text-black-primary before:dark:bg-gradient-to-r md:w-auto lg:right-0"
        >
          Download My Resume
        </motion.button>
      </div>
    </PageSection>
  );
};

export default HeroSection;
