'use client';

import Heading from '../Heading';
import HeaderNav from './HeaderNav';
import HeaderUtils from './HeaderUtils';

const StickyHeader = () => {
  return (
    <header className="py-6">
      <div className="2xl:container px-8 flex items-center">
        <Heading level="h5">
          <span>A.b. Martinez</span>
          <span className="text-purple">.</span>
        </Heading>
        <HeaderNav />
        <HeaderUtils />
      </div>
    </header>
  );
};

export default StickyHeader;
