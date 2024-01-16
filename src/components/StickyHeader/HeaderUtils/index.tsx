import { Github, Linkedin } from 'lucide-react';

import DarkModeToggle from '../DarkModeToggle';

const HeaderUtils = () => {
  return (
    <section className="ml-auto flex items-center gap-6">
      <a
        href="https://github.com/github-ab-martinez/personal-portfolio"
        rel="noreferrer"
        target="_blank"
      >
        <Github aria-hidden="true" size={16} />
        <span className="sr-only">View this site&apos;s source code</span>
      </a>
      <a
        href="https://www.linkedin.com/in/samsonmartinez/"
        rel="noreferrer"
        target="_blank"
      >
        <Linkedin aria-hidden="true" size={16} />
        <span className="sr-only">Find me on LinkedIn</span>
      </a>
      <DarkModeToggle />
    </section>
  );
};

export default HeaderUtils;
