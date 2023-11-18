import DarkModeToggle from '../DarkModeToggle';
import { Github, Linkedin } from 'lucide-react';

const HeaderUtils = () => {
  return (
    <section className="ml-auto flex items-center gap-6">
      <a href="">
        <Github size={16} />
      </a>
      <a href="">
        <Linkedin size={16} />
      </a>
      <DarkModeToggle />
    </section>
  );
};

export default HeaderUtils;
