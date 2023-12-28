"use client";

import { useEffect, useRef } from "react";
import Heading from "../common/Heading";
import PageSection from "../common/PageSection";
import { useDarkMode } from "../common/StickyHeader/DarkModeToggle/DarkModeProvider";
import { useNavSpy } from "../common/StickyHeader/HeaderNav/NavSpyProvider";
import ToolCard from "./ToolCard";
import { useTools } from "./useTools";

const SkillsSection = () => {
  const tools = useTools();
  const { darkMode } = useDarkMode();
  const { navObserver } = useNavSpy();
  const skillsRef = useRef(null);

  useEffect(() => {
    skillsRef.current && navObserver?.observe(skillsRef.current);
  }, [navObserver]);

  return (
    <PageSection className="text-center">
      <Heading
        ref={skillsRef}
        id="skills"
        level="h2"
        className="mb-5 inline-block bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent"
      >
        Skills
      </Heading>
      <p className="mb-20 text-lg">
        Languages, frameworks and other tools I love to work with.
      </p>
      <ul className="grid grow grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 md:gap-12 lg:grid-cols-4 xl:grid-cols-5">
        {tools.map((tool) => (
          <li key={tool.name}>
            <ToolCard darkMode={darkMode ?? true} {...tool} />
          </li>
        ))}
      </ul>
    </PageSection>
  );
};

export default SkillsSection;