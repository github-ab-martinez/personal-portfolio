'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

import { DarkModeProvider } from '@/components/StickyHeader/DarkModeToggle/DarkModeProvider';
import Footer from '@/components/Footer';
import './globals.css';
import AppWrapper from '@/components/AppWrapper';
import StickyHeader from '@/components/StickyHeader';
import { NavSpyProvider } from '@/components/StickyHeader/HeaderNav/NavSpyProvider';

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
