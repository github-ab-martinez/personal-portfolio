'use client';

import Heading from '../common/Heading';
import PageSection from '../common/PageSection';
import { useDarkMode } from '../common/StickyHeader/DarkModeToggle/DarkModeProvider';
import ToolCard from './ToolCard';
import { useTools } from './useTools';

const ToolsSection = () => {
  const tools = useTools();
  const { darkMode } = useDarkMode();

  return (
    <PageSection style="secondary">
      <div className="container flex lg:flex-row flex-col xl:gap-40 lg:gap-10 text-center lg:text-left">
        <div>
          <Heading level="h3" className="mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple via-red to-orange">
              Tools
            </span>{' '}
            of the Trade
          </Heading>
          <p className="text-lg mb-10">
            Languages and frameworks I love to work with.
          </p>
        </div>
        <ul className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-2 gap-4 grow">
          {tools.map((tool) => (
            <li key={tool.name}>
              <ToolCard darkMode={darkMode ?? true} {...tool} />
            </li>
          ))}
        </ul>
      </div>
    </PageSection>
  );
};

export default ToolsSection;
