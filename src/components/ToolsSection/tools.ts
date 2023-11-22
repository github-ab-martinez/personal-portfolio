import AngularLogo from '@/assets/logos/AngularLogo';
import FigmaLogo from '@/assets/logos/FigmaLogo';
import GitLogo from '@/assets/logos/GitLogo';
import JestLogo from '@/assets/logos/JestLogo';
import MySQLLogo from '@/assets/logos/MySQLLogo';
import NextLogo from '@/assets/logos/NextLogo';
import PHPLogo from '@/assets/logos/PHPLogo';
import ReactLogo from '@/assets/logos/ReactLogo';
import RedisLogo from '@/assets/logos/RedisLogo';
import TailwindLogo from '@/assets/logos/TailwindLogo';
import TypescriptLogo from '@/assets/logos/TypescriptLogo';

export const getTools = () => {
  return [
    {
      name: 'TypeScript',
      logo: TypescriptLogo,
    },
    {
      name: 'React',
      logo: ReactLogo,
    },
    {
      name: 'NextJS',
      logo: NextLogo,
    },
    {
      name: 'TailwindCSS',
      logo: TailwindLogo,
    },
    {
      name: 'Jest',
      logo: JestLogo,
    },
    {
      name: 'Angular',
      logo: AngularLogo,
    },
    {
      name: 'MySQL',
      logo: MySQLLogo,
    },
    {
      name: 'PHP',
      logo: PHPLogo,
    },
    {
      name: 'Redis',
      logo: RedisLogo,
    },
    {
      name: 'Git',
      logo: GitLogo,
    },
    {
      name: 'Figma',
      logo: FigmaLogo,
    },
  ];
};
