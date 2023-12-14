'use client';

import { useEffect, useRef } from 'react';
import Heading from '../common/Heading';
import PageSection from '../common/PageSection';
import { useDarkMode } from '../common/StickyHeader/DarkModeToggle/DarkModeProvider';
import { useNavSpy } from '../common/StickyHeader/HeaderNav/NavSpyProvider';
import ToolCard from './ToolCard';
import { useTools } from './useTools';
import { motion } from 'framer-motion';

const toolList = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ToolsSection = () => {
  const tools = useTools();
  const { darkMode } = useDarkMode();
  const { navObserver } = useNavSpy();
  const skillsRef = useRef(null);

  useEffect(() => {
    skillsRef.current && navObserver?.observe(skillsRef.current);
  }, [navObserver]);

  return (
    <PageSection>
      <motion.div
        initial={{ opacity: 0, y: '100%' }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 'all' }}
      >
        <Heading ref={skillsRef} id="skills" level="h2" className="mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple via-red to-orange">
            Tools
          </span>{' '}
          of the Trade
        </Heading>
      </motion.div>
      <motion.p
        className="text-lg mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 'all' }}
        transition={{ delay: 0.5 }}
      >
        Languages, frameworks and other tools I love to work with.
      </motion.p>
      <motion.ul
        className="grid xl:grid-cols-5 lg:grid-cols-2 grid-cols-2 gap-4 grow"
        initial={'hidden'}
        whileInView={'visible'}
        viewport={{ margin: '-150px' }}
        variants={toolList}
      >
        {tools.map((tool) => (
          <motion.li key={tool.name} variants={toolList}>
            <ToolCard darkMode={darkMode ?? true} {...tool} />
          </motion.li>
        ))}
      </motion.ul>
    </PageSection>
  );
};

export default ToolsSection;
