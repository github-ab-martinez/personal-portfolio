import type { Metadata } from 'next';
import './globals.css';
import { notoSans } from './fonts';

export const metadata: Metadata = {
  title: 'A.b. Martinez - Personal Portfolio',
  description: 'The personal portfolio of A.b. Martinez, Software Engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDarkMode = true;

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body
        className={`${notoSans.className} bg-white-secondary text-black-secondary dark:bg-black-primary dark:text-white-primary`}
      >
        {children}
      </body>
    </html>
  );
}
