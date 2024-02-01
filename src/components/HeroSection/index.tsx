'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import Heading from '../Heading';
import PageSection from '../PageSection';
import { useNavSpy } from '../StickyHeader/HeaderNav/NavSpyProvider';

import CodeAnimation from './CodeAnimation';

const HeroSection = () => {
  const { navObserver } = useNavSpy();
  const heroRef = useRef(null);

  useEffect(() => {
    heroRef.current && navObserver?.observe(heroRef.current);
  }, [navObserver]);

  return (
    <PageSection
      className="relative flex flex-col items-center gap-16 pt-20 lg:flex-row lg:flex-nowrap"
      secondary
    >
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        className="static z-10 text-center md:w-4/6 lg:mr-16 lg:w-1/2 lg:text-left"
        initial={{ opacity: 0, x: '-100%' }}
        transition={{ bounce: 0.4, duration: 1.25, type: 'spring' }}
      >
        <Heading
          as="h1"
          className="mb-10 lg:mb-14"
          id="home"
          level="h2"
          ref={heroRef}
        >
          Hi! I&apos;m A.b., a{' '}
          <span className="bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent">
            Software Engineer
          </span>{' '}
          based in Austin.
        </Heading>
        <p className="mb-10 text-lg font-light leading-8 lg:mb-0 xl:w-4/5">
          I build products for the web with a focus on{' '}
          <span className="font-semibold">developing UIs</span> that help users
          accomplish their goals.
        </p>
      </motion.div>
      <div className="flex flex-col lg:ml-auto lg:w-1/2 lg:pl-6">
        <div className="relative z-0 pt-6 before:absolute before:-right-[calc(50vw-50%)] before:top-0 before:-z-10 before:h-[calc(100%+theme(spacing.60))] before:w-screen before:bg-purple before:content-[''] after:absolute after:-right-[calc(50vw-50%)] after:-top-20 after:-z-10 after:h-[calc(theme(spacing.20))] after:w-screen after:bg-purple after:content-[''] after:clip-ellipse-bottom lg:static lg:pt-0 before:lg:-top-40 before:lg:h-[calc(100%+theme(spacing.80))] before:lg:w-[calc(50vw-theme(spacing.20))] after:lg:-top-40 after:lg:right-[calc(50%-theme(spacing.20))]  after:lg:h-[calc(100%+theme(spacing.60)+theme(spacing.44))] after:lg:w-[calc(theme(spacing.28))] after:lg:clip-ellipse-right">
          <CodeAnimation />
        </div>

        <motion.span
          animate={{ scale: 1 }}
          className="relative -top-4 mx-auto -mb-4"
          initial={{ scale: 0 }}
          transition={{ bounce: 0.4, delay: 3.25, type: 'spring' }}
          viewport={{ amount: 0.1, once: true }}
        >
          <Link
            className="relative z-10 rounded-full bg-white-primary px-4 py-4 text-lg font-semibold uppercase text-black-primary shadow-lg before:absolute before:left-[-3px] before:top-[-3px] before:-z-10 before:h-[calc(100%+6px)]  before:w-[calc(100%+6px)] before:rounded-full before:bg-gradient-to-r before:from-purple before:via-red before:to-orange before:opacity-0 before:transition-all before:duration-500 before:content-[''] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:rounded-full after:bg-white-secondary after:content-[''] hover:text-black-primary hover:before:opacity-100 sm:px-6 md:w-auto"
            href="/resume/AbMartinez_Resume.pdf"
            prefetch={false}
            rel="noopener noreferrer"
            target="_blank"
          >
            Download My Resume
          </Link>
        </motion.span>
      </div>
    </PageSection>
  );
};

export default HeroSection;
