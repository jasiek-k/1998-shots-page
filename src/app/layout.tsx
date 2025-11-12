import "./globals.css";

import { BodyWrapper, Footer, Header, ScrollTop } from "@components";
import { ThemeScope } from "@context";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1998 SHOTS®",
  description: "Page for photography content created by 1998 SHOTS®",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <ThemeScope>
      <BodyWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollTop />
      </BodyWrapper>
    </ThemeScope>
  </html>
);

export default RootLayout;
