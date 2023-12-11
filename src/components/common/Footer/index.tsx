import NextLogo from '@/assets/logos/NextLogo';
import TailwindLogo from '@/assets/logos/TailwindLogo';
import TypescriptLogo from '@/assets/logos/TypescriptLogo';

const Footer = () => {
  return (
    <footer className="container flex justify-end border-t py-20 text-center">
      <div>
        <p>Developed by A.b. Martinez using:</p>
        <div className="flex justify-center items-center gap-3">
          <span>
            <TypescriptLogo />
          </span>
          <NextLogo darkMode />
          <TailwindLogo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
