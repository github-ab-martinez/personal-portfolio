import Heading from '../common/Heading';
import PageSection from '../common/PageSection';
import { useWorkHistory } from './useWorkHistory';

const months: Record<number, string> = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};

const ExperienceSection = () => {
  const workHistory = useWorkHistory();

  return (
    <PageSection>
      <div className="container flex">
        <div className="mb-10 w-1/2">
          <Heading level="h2" className="mb-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple via-red to-orange">
              Experience
            </span>
          </Heading>
          <p className="text-lg">
            Places where you can (maybe) find my code in the wild.
          </p>
        </div>

        <ul>
          {workHistory.map(
            ({ company, startDate, endDate, role, techStack }) => {
              return (
                <li
                  key={startDate.toString()}
                  className="pl-8 pb-14 relative after:content-[''] after:absolute after:h-[8px] after:w-[8px] after:rounded-full after:bg-orange after:left-2 after:top-3
                before:content-[''] before:absolute before:h-full before:w-[1px] before:bg-white-secondary before:left-[11px] before:top-4"
                >
                  <Heading level="h4" as="h3" className="mb-1">
                    {company}
                  </Heading>
                  <Heading level="h5" as="h4" className="mb-3 font-semibold">
                    {role}
                  </Heading>
                  <p className="mb-10 font-light">
                    {months[startDate.getMonth()]} {startDate.getDate()},{' '}
                    {startDate.getFullYear()} - {months[endDate.getMonth()]}{' '}
                    {endDate.getDate()}, {endDate.getFullYear()}
                  </p>

                  <ul className="flex gap-3">
                    {techStack.map((tech) => {
                      return (
                        <li
                          className="bg-purple text-black-secondary py-1 px-3 rounded-full text-sm"
                          key={tech}
                        >
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </PageSection>
  );
};

export default ExperienceSection;
