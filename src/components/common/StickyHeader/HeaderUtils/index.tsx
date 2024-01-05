import DarkModeToggle from "../DarkModeToggle";
import { Github, Linkedin } from "lucide-react";

const HeaderUtils = () => {
  return (
    <section className="ml-auto flex items-center gap-6">
      <a
        href="https://github.com/github-ab-martinez/personal-portfolio"
        target="_blank"
      >
        <Github aria-hidden="true" size={16} />
        <span className="sr-only">View this site&apos;s source code</span>
      </a>
      <a href="https://www.linkedin.com/in/samsonmartinez/" target="_blank">
        <Linkedin size={16} aria-hidden="true" />
        <span className="sr-only">Find me on LinkedIn</span>
      </a>
      <DarkModeToggle />
    </section>
  );
};

export default HeaderUtils;
