import Heading from '../Heading';
import ContentContainer from '../ContentContainer';

import HeaderNav from './HeaderNav';
import HeaderUtils from './HeaderUtils';
import MobileNavToggle from './MobileNavToggle';
import { MobileNavProvider } from './MobileNavToggle/MobileNavProvider';
import { useNavLinks } from './HeaderNav/useNavLinks';

import AbLogo from '@/assets/logos/AbLogo';

const StickyHeader = async () => {
  const navLinks = await useNavLinks();

  return (
    <MobileNavProvider>
      <header className="fixed z-20 w-full bg-white-primary/50 py-6 backdrop-blur-md dark:bg-black-primary/50">
        <ContentContainer className="flex items-center">
          <div className="flex items-center">
            <span className="text-black-primary dark:text-white-secondary">
              <AbLogo />
            </span>
            <Heading className="ml-3 hidden font-normal lg:block" level="h5">
              A.b. Martinez
            </Heading>
          </div>
          <HeaderNav navLinks={navLinks} />
          <HeaderUtils />
          <MobileNavToggle />
        </ContentContainer>
      </header>
    </MobileNavProvider>
  );
};

export default StickyHeader;
