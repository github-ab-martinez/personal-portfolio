'use client';

import { useState } from 'react';
import Heading from '../Heading';
import HeaderNav from './HeaderNav';
import HeaderUtils from './HeaderUtils';
import MobileNavToggle from './MobileNavToggle';
import AbLogo from '@/assets/logos/AbLogo';
import ContentContainer from '../ContentContainer';

const StickyHeader = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  return (
    <header className="py-6 fixed w-full bg-white-secondary/50 dark:bg-black-primary/50 backdrop-blur-md z-20">
      <ContentContainer className="flex items-center">
        <div className="flex items-center">
          <span className="dark:text-black-primary text-white-primary">
            <AbLogo />
          </span>
          <Heading className="font-normal ml-3 lg:block hidden" level="h5">
            A.b. Martinez
          </Heading>
        </div>
        <HeaderNav
          mobileNavVisible={mobileNavVisible}
          setMobileNavVisible={setMobileNavVisible}
        />
        <HeaderUtils />
        <MobileNavToggle
          mobileNavVisible={mobileNavVisible}
          setMobileNavVisible={setMobileNavVisible}
        />
      </ContentContainer>
    </header>
  );
};

export default StickyHeader;
