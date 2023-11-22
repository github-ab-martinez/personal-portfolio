import Heading from '@/components/common/Heading';
import Image from 'next/image';

import headshot from '../assets/img/headshot.jpg';

export default function Home() {
  return (
    <main>
      <section className="2xl:container px-8 py-20 text-center">
        <Image
          src={headshot}
          alt="Picture of A.b. Martinez"
          className="rounded-full mx-auto mb-10"
        />
        <Heading level="h2" className="w-2/3 mx-auto mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple via-red to-orange">
            Hi! I&apos;m A.b.,
          </span>{' '}
          a Software Engineer based in Austin.
        </Heading>
        <p className="w-1/3 mx-auto text-lg font-light mb-10">
          I build products for the web with a focus on{' '}
          <span className="font-semibold">developing UIs</span> that help users
          accomplish their goals.
        </p>
        <button className="dark:bg-white-primary bg-black-primary dark:text-black-primary text-white-primary rounded-full py-5 px-8 uppercase font-semibold text-lg">
          Download My Resume
        </button>
      </section>
    </main>
  );
}
