import AbLogo from "@/assets/logos/AbLogo";

const Footer = () => {
  return (
    <footer className=" bg-white-primary py-12 font-light dark:bg-black-secondary">
      <div className="container flex flex-col items-center lg:flex-row lg:justify-between">
        <p className="mb-6 lg:mb-0">
          &copy; 2024 - Built from scratch by A.b. Martinez
        </p>
        <div>
          <AbLogo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
