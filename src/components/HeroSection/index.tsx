'use client';

import { motion } from 'framer-motion';
import Heading from '../common/Heading';
import PageSection from '../common/PageSection';
import CodeAnimation from './CodeAnimation';

const HeroSection = () => {
  return (
    <PageSection className="flex lg:flex-nowrap flex-wrap items-center">
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.25, type: 'spring', bounce: 0.4 }}
        className="w-1/2 lg:text-left text-center"
      >
        <Heading level="h2" className="mb-14">
          Hi! I&apos;m A.b., a{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple via-red to-orange">
            Software Engineer
          </span>{' '}
          based in Austin.
        </Heading>
        <p className="text-lg font-light mb-14">
          I build products for the web with a focus on{' '}
          <span className="font-semibold">developing UIs</span> that help users
          accomplish their goals.
        </p>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 4.75, type: 'spring', bounce: 0.4 }}
          className="dark:bg-white-primary bg-black-primary dark:text-black-primary text-white-primary rounded-full py-4 px-6 uppercase font-semibold text-lg"
        >
          Download My Resume
        </motion.button>
      </motion.div>
      <CodeAnimation />
    </PageSection>
  );
};

export default HeroSection;
