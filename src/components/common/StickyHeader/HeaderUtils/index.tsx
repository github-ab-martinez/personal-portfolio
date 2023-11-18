import DarkModeToggle from '../DarkModeToggle';
import { Github, Linkedin } from 'lucide-react';

const HeaderUtils = () => {
  return (
    <section className="ml-auto flex items-center gap-6">
      <a
        href="https://github.com/github-ab-martinez/personal-portfolio"
        target="_blank"
      >
        <Github size={16} />
      </a>
      <a href="https://www.linkedin.com/in/samsonmartinez/" target="_blank">
        <Linkedin size={16} />
      </a>
      <DarkModeToggle />
    </section>
  );
};

export default HeaderUtils;
