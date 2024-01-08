"use client";

import Footer from "@/components/common/Footer";
import "./globals.css";
import AppWrapper from "@/components/common/AppWrapper";
import StickyHeader from "@/components/common/StickyHeader";
import { DarkModeProvider } from "@/components/common/StickyHeader/DarkModeToggle/DarkModeProvider";
import { LazyMotion, domAnimation } from "framer-motion";
import { NavSpyProvider } from "@/components/common/StickyHeader/HeaderNav/NavSpyProvider";

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
