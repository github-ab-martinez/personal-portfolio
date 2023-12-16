"use client";

import { useEffect, useRef } from "react";
import Heading from "../common/Heading";
import PageSection from "../common/PageSection";
import { useNavSpy } from "../common/StickyHeader/HeaderNav/NavSpyProvider";
import { useWorkHistory } from "./useWorkHistory";

const months: Record<number, string> = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

const ExperienceSection = () => {
  const workHistory = useWorkHistory();
  const { navObserver } = useNavSpy();
  const experienceRef = useRef(null);

  useEffect(() => {
    experienceRef.current && navObserver?.observe(experienceRef.current);
  }, [navObserver]);

  return (
    <PageSection
      secondary
      className="flex flex-col justify-between md:flex-row"
    >
      <div className="shrink sm:mr-6">
        <Heading
          ref={experienceRef}
          id="experience"
          level="h2"
          className="mb-5 inline-block bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent"
        >
          Experience
        </Heading>
        <p className="mb-10 text-lg">
          Places where I&apos;ve written code professionally.
        </p>
      </div>

      <ul className="sm:w-1/2 lg:w-full">
        {workHistory.map(({ company, startDate, endDate, role, techStack }) => {
          return (
            <li
              key={startDate.toString()}
              className="relative flex flex-col pb-14 pl-8 before:absolute before:left-[3px] before:top-4 before:h-full before:w-[1px] before:bg-white-secondary before:content-[''] after:absolute after:left-0 after:top-3
            after:h-[8px] after:w-[8px] after:rounded-full after:bg-orange after:content-[''] lg:flex-row lg:pb-0 lg:before:hidden lg:after:hidden"
            >
              <p className="mb-2 pt-1 font-light lg:w-1/2 lg:text-right">
                {months[startDate.getMonth()]} {startDate.getDate()},{" "}
                {startDate.getFullYear()} -{" "}
                <span className="whitespace-nowrap">
                  {months[endDate.getMonth()]} {endDate.getDate()},{" "}
                  {endDate.getFullYear()}
                </span>
              </p>
              <div
                className="relative shrink-0 before:absolute before:left-[11px] before:top-4 before:hidden before:h-full before:w-[1px] before:bg-white-secondary before:content-[''] after:absolute after:left-2 after:top-3 after:hidden after:h-[8px]
                after:w-[8px] after:rounded-full after:bg-orange after:content-[''] lg:pb-14 lg:pl-8 lg:before:inline-block lg:after:inline-block"
              >
                <Heading level="h4" as="h3" className="mb-1">
                  {company}
                </Heading>
                <Heading level="h5" as="h4" className="mb-10 font-semibold">
                  {role}
                </Heading>
                <ul className="flex flex-wrap gap-3">
                  {techStack.map((tech) => {
                    return (
                      <li
                        className="rounded-full bg-purple px-3 py-1 text-sm text-black-secondary"
                        key={tech}
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          );
        })}
      </ul>
    </PageSection>
  );
};

export default ExperienceSection;
