"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";

import { CloseIcon, Logo, LogoRound } from "public/svgs";

import Container from "./Container";

import { links } from "@/config";

const Header = () => {
  const pathname = usePathname();
  const isHomePath = pathname === "/";
  // const { theme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const checkIsActive = useCallback(
    (href: string) => pathname === href || (pathname.includes(href) && href !== "/"),
    [pathname],
  );

  const toggleIsOpen = useCallback(() => {
    setIsOpen(is => !is);
  }, []);

  // const toggleTheme = useCallback(() => {
  //   setTheme(theme => (theme === "light" ? "dark" : "light"));
  // }, [setTheme]);

  const getLinks = useCallback(
    (onClick?: () => void) => {
      return Object.values(links).map(({ name, href }, index) => (
        <Link
          href={href}
          key={index}
          prefetch={true}
          onClick={onClick}
          className={clsx(
            "text-off-white font-light text-md md:text-sm mx-5 text-center my-4 md:my-0",
            checkIsActive(href) && "underline",
          )}
        >
          {name}
        </Link>
      ));
    },
    [checkIsActive],
  );

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   console.log(window.scrollY);
    // });
  }, []);

  return (
    <header
      className={clsx(isHomePath && "absolute", "w-full flex z-50 md:mt-10 flex-col")}
    >
      <div
        className={clsx(
          isOpen ? "flex freezeScroll" : "hidden",
          "md:hidden backdrop-blur-default pt-15 pb-20 justify-between fixed top-0 left-0 w-full h-full z-10 items-center flex-col",
        )}
      >
        <LogoRound width="60px" />
        <nav className="flex flex-col">{getLinks(toggleIsOpen)}</nav>
        <button type="button" onClick={toggleIsOpen}>
          <CloseIcon width="30px" />
        </button>
      </div>
      <Container className="mt-6 md:px-40 flex flex-col">
        <div className="flex md:justify-center mb-6 text-xs md:relative">
          {/* <button onClick={toggleTheme} className="md:absolute md:left-0">
            {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
          </button> */}
          <button onClick={toggleIsOpen} className="md:hidden">
            MENU
          </button>
          <nav className="hidden md:flex flex-row justify-center">{getLinks()}</nav>
        </div>
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
