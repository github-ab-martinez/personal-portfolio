import Image from 'next/image';
import Heading from '../common/Heading';

import headshot from '../../assets/img/headshot.jpg';
import PageSection from '../common/PageSection';

const HeroSection = () => {
  return (
    <PageSection className="text-center">
      <Image
        src={headshot}
        alt="Picture of A.b. Martinez"
        className="rounded-full mx-auto mb-10 md:w-auto w-1/2"
      />
      <Heading level="h2" className="xl:w-2/3 mx-auto mb-10">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple via-red to-orange">
          Hi! I&apos;m A.b.,
        </span>{' '}
        a Software Engineer based in Austin.
      </Heading>
      <p className="xl:w-1/3 lg:w-2/3 mx-auto text-lg font-light mb-10">
        I build products for the web with a focus on{' '}
        <span className="font-semibold">developing UIs</span> that help users
        accomplish their goals.
      </p>
      <button className="dark:bg-white-primary bg-black-primary dark:text-black-primary text-white-primary rounded-full py-5 px-8 uppercase font-semibold text-lg">
        Download My Resume
      </button>
    </PageSection>
  );
};

export default HeroSection;
