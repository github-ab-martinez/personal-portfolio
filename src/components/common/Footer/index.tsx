import AbLogo from "@/assets/logos/AbLogo";

const Footer = () => {
  return (
    <footer className="bg-white-secondary py-10 font-light dark:bg-black-secondary">
      <div className="flex flex-col items-center px-8 2xl:container lg:flex-row lg:justify-between">
        <p className="mb-6 lg:mb-0">&copy; 2024 - Built by A.b. Martinez</p>
        <div>
          <AbLogo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
