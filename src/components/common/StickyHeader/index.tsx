"use client";

import { useState } from "react";
import Heading from "../Heading";
import HeaderNav from "./HeaderNav";
import HeaderUtils from "./HeaderUtils";
import MobileNavToggle from "./MobileNavToggle";
import AbLogo from "@/assets/logos/AbLogo";
import ContentContainer from "../ContentContainer";

const StickyHeader = () => {
  const [mobileNavVisible, setMobileNavVisible] = useState(false);

  return (
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
