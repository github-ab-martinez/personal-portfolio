import { Menu, X } from "lucide-react";
import { Dispatch, FC, SetStateAction } from "react";

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
          ? "text-white-primary dark:text-black-primary"
          : "text-black-primary dark:text-white-primary"
      } z-20 ml-5 md:hidden`}
      onClick={() => setMobileNavVisible((isVisible) => !isVisible)}
    >
      {mobileNavVisible ? (
        <X aria-hidden="true" />
      ) : (
        <Menu aria-hidden="true" />
      )}
      <span className="sr-only">{`${
        mobileNavVisible ? "Close" : "Open"
      } navigation`}</span>
    </button>
  );
};

export default MobileNavToggle;
