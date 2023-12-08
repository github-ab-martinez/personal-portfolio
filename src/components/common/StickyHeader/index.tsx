'use client';

import { useState } from 'react';
import Heading from '../Heading';
import HeaderNav from './HeaderNav';
import HeaderUtils from './HeaderUtils';
import MobileNavToggle from './MobileNavToggle';
import AbLogo from '@/assets/logos/AbLogo';

const StickyHeader = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  return (
    <header className="md:px-24 px-6 py-6 fixed w-full bg-white-secondary/50 dark:bg-black-primary/50 backdrop-blur-md z-10">
      <div className="2xl:container a flex items-center">
        <AbLogo />
        <Heading className="font-semibold ml-3" level="h5">
          A.b. Martinez
        </Heading>
        <HeaderNav mobileNavVisible={mobileNavVisible} />
        <HeaderUtils />
        <MobileNavToggle
          mobileNavVisible={mobileNavVisible}
          setMobileNavVisible={setMobileNavVisible}
        />
      </div>
    </header>
  );
};

export default StickyHeader;
