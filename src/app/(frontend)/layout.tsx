"use client";

import type { ReactNode } from "react";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";
// import SessionProviderComp from "@/components/nextauth/SessionProvider";

export default function FrontendLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <NextTopLoader color="#07be8a" />

      {/* <SessionProviderComp> */}
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="light">
          <div className="bg-white dark:bg-black antialiased">
            <Header />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      {/* </SessionProviderComp> */}
    </>
  );
}
