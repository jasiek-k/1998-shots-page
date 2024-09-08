import "./globals.css";

import type { Metadata } from "next";

import useFonts from "./useFonts";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollTop from "@/components/ScrollTop";

export const metadata: Metadata = {
  title: "1998 SHOTS",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fonts = useFonts();

  return (
    <html lang="en">
      <body className={fonts.className}>
        <ScrollTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
