import { Menu, X } from 'lucide-react';
import { Dispatch, FC, SetStateAction } from 'react';

interface MobileNavToggleProps {
  mobileNavVisible: boolean;
  setMobileNavVisible: Dispatch<SetStateAction<boolean>>;
}

const MobileNavToggle: FC<MobileNavToggleProps> = ({
  mobileNavVisible,
  setMobileNavVisible,
}) => {
  return (
    <button
      className={`${
        mobileNavVisible
          ? 'text-white-primary dark:text-black-primary'
          : 'text-black-primary dark:text-white-primary'
      } md:hidden ml-5 z-20`}
      onClick={() => setMobileNavVisible((isVisible) => !isVisible)}
    >
      {mobileNavVisible ? <X /> : <Menu />}
    </button>
  );
};

export default MobileNavToggle;
