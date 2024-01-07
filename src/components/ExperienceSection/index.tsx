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

const getFormattedDate = (date: Date) => {
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

const ExperienceSection = () => {
  const workHistory = useWorkHistory();
  const { navObserver } = useNavSpy();
  const experienceRef = useRef(null);

  useEffect(() => {
    experienceRef.current && navObserver?.observe(experienceRef.current);
  }, [navObserver]);

  return (
    <PageSection secondary className="text-center">
      <Heading
        ref={experienceRef}
        id="experience"
        level="h2"
        className="mb-5 inline-block bg-gradient-to-r from-purple via-red to-orange bg-clip-text text-transparent"
      >
        Experience
      </Heading>
      <p className="mb-10 text-lg lg:mb-20">
        Places where I&apos;ve written code professionally.
      </p>

      <ul className="relative z-0 text-left before:absolute before:left-0 before:-z-10 before:h-full before:w-full before:bg-gradient-to-r before:from-purple before:via-red before:to-orange before:content-['']">
        {workHistory.map(({ company, startDate, endDate, role, techStack }) => (
          <li
            key={startDate.toString()}
            className="z-0 flex flex-col border-b bg-white-secondary px-3 py-6 transition-colors duration-500 last-of-type:border-b-0 hover:bg-transparent hover:text-white-secondary dark:bg-black-secondary hover:dark:bg-transparent lg:flex-row lg:items-center lg:px-6 lg:py-10"
          >
            <div className="order-1 mb-3 lg:mb-0">
              <Heading level="h3" className="lg:mb-2">
                {company}
              </Heading>
              <Heading level="h4">{role}</Heading>
            </div>
            <ul className="align-start order-3 flex flex-wrap gap-3 lg:order-2 lg:ml-auto lg:mr-6 lg:grow-0 lg:basis-[20%] lg:gap-4">
              {techStack.map((tech, index) => (
                <li
                  key={index}
                  className="whitespace-nowrap rounded-full border-2 border-purple bg-purple px-4 py-1 text-sm text-white-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <Heading
              level="h5"
              className="order-2 mb-8 lg:order-3 lg:mb-0 lg:basis-[30%] lg:text-right"
            >
              {getFormattedDate(startDate)} -{" "}
              <span className="whitespace-nowrap">
                {getFormattedDate(endDate)}
              </span>
            </Heading>
          </li>
        ))}
      </ul>
    </PageSection>
  );
};

export default ExperienceSection;
