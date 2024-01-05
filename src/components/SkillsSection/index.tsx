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
      <p className="mb-24 text-lg">
        Languages, frameworks and other tools I love to work with.
      </p>
      <ul className="flex flex-wrap justify-center gap-5">
        {tools.map((tool) => (
          <li
            className="grow-0 basis-[calc(50%-theme(spacing.3))] sm:basis-[calc(33.3333%-theme(spacing.4))] md:basis-[calc(25%-theme(spacing.4))] xl:basis-[calc(20%-theme(spacing.4))]"
            key={tool.name}
          >
            <ToolCard darkMode={darkMode ?? true} {...tool} />
          </li>
        ))}
      </ul>
    </PageSection>
  );
};

export default SkillsSection;
