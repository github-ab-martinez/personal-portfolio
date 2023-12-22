"use client";

import { motion } from "framer-motion";
import Heading from "../common/Heading";
import PageSection from "../common/PageSection";
import CodeAnimation from "./CodeAnimation";
import { useNavSpy } from "../common/StickyHeader/HeaderNav/NavSpyProvider";
import { useEffect, useRef } from "react";
import Link from "next/link";

const HeroSection = () => {
  const { navObserver } = useNavSpy();
  const heroRef = useRef(null);

  useEffect(() => {
    heroRef.current && navObserver?.observe(heroRef.current);
  }, [navObserver]);

  return (
    <PageSection
      className="relative flex flex-col items-center pt-10 lg:flex-row lg:flex-nowrap lg:pt-20 "
      secondary={true}
    >
      <div className="absolute top-[50%] h-[calc(100%+192px)] rotate-[-30deg] opacity-80 lg:-top-[96px] lg:translate-x-[48%] lg:rotate-0 xl:translate-x-[55%]">
        <svg
          className="h-full w-auto lg:h-auto lg:w-full"
          width="1165"
          height="1028"
          viewBox="0 0 1165 1028"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M839.243 0.901575C863.434 0.901576 885.787 13.8073 897.883 34.7573L1155.03 480.144C1167.12 501.094 1167.12 526.906 1155.03 547.856L897.883 993.243C885.787 1014.19 863.434 1027.1 839.243 1027.1H324.954C300.763 1027.1 278.41 1014.19 266.314 993.243L9.17006 547.856C-2.92542 526.906 -2.92542 501.094 9.17006 480.144L266.314 34.7573C278.41 13.8073 300.763 0.90155 324.954 0.90155L839.243 0.901575Z"
            fill="#B16CEA"
          />
        </svg>
      </div>

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
      <div className="z-0 flex flex-col lg:ml-auto lg:w-1/2 xl:w-2/5">
        <CodeAnimation />

        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 3.25, type: "spring", bounce: 0.4 }}
          className="relative -top-4 mx-auto -mb-4"
        >
          <Link
            className="relative z-10 w-5/6 rounded-full bg-white-primary px-6 py-4 text-lg font-semibold uppercase text-black-primary shadow-lg before:absolute before:left-[-3px] before:top-[-3px] before:-z-10  before:h-[calc(100%+6px)] before:w-[calc(100%+6px)] before:rounded-full before:bg-gradient-to-r before:from-purple before:via-red before:to-orange before:opacity-0 before:transition-all before:duration-500 before:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-white-primary after:content-[''] hover:text-black-primary hover:before:opacity-100 md:w-auto"
            href="/resume/AbMartinez_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My Resume
          </Link>
        </motion.span>
      </div>
    </PageSection>
  );
};

export default HeroSection;
