'use client';

import Footer from '@/components/common/Footer';
// import type { Metadata } from 'next';
import './globals.css';
import AppWrapper from '@/components/common/AppWrapper';
import StickyHeader from '@/components/common/StickyHeader';
import { DarkModeProvider } from '@/components/common/StickyHeader/DarkModeToggle/DarkModeProvider';
import { LazyMotion, domAnimation } from 'framer-motion';
import { NavSpyProvider } from '@/components/common/StickyHeader/HeaderNav/NavSpyProvider';

// export const metadata: Metadata = {
//   title: 'A.b. Martinez - Personal Portfolio',
//   description: 'The personal portfolio of A.b. Martinez, Software Engineer.',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DarkModeProvider>
      <NavSpyProvider>
        <AppWrapper>
          <LazyMotion features={domAnimation}>
            <StickyHeader />
            {children}
            <Footer />
          </LazyMotion>
        </AppWrapper>
      </NavSpyProvider>
    </DarkModeProvider>
  );
}
