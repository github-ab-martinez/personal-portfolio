import { Metadata } from 'next';

import { DarkModeProvider } from '@/components/StickyHeader/DarkModeToggle/DarkModeProvider';
import Footer from '@/components/Footer';
import '../globals.css';
import AppWrapper from '@/components/AppWrapper';
import StickyHeader from '@/components/StickyHeader';
import { NavSpyProvider } from '@/components/StickyHeader/HeaderNav/NavSpyProvider';

export const metadata: Metadata = {
  title: 'A.b. Martinez - Personal Portfolio',
  description: 'The personal portfolio of A.b. Martinez, Software Engineer.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DarkModeProvider>
      <NavSpyProvider>
        <AppWrapper>
          <StickyHeader />
          {children}
          <Footer />
        </AppWrapper>
      </NavSpyProvider>
    </DarkModeProvider>
  );
}
