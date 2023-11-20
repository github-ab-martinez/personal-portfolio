'use client';

import { useState } from 'react';
import Heading from '../Heading';
import HeaderNav from './HeaderNav';
import HeaderUtils from './HeaderUtils';
import MobileNavToggle from './MobileNavToggle';

const StickyHeader = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  return (
    <header className="py-6">
      <div className="2xl:container px-8 flex items-center">
        <Heading level="h5">
          <span>A.b. Martinez</span>
          <span className="text-purple">.</span>
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
