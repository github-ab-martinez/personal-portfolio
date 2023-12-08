'use client';

// import type { Metadata } from 'next';
import './globals.css';
import AppWrapper from '@/components/common/AppWrapper';
import { DarkModeProvider } from '@/components/common/StickyHeader/DarkModeToggle/DarkModeProvider';
import { LazyMotion, domAnimation } from 'framer-motion';

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
      <AppWrapper>
        <LazyMotion features={domAnimation}>{children}</LazyMotion>
      </AppWrapper>
    </DarkModeProvider>
  );
}
