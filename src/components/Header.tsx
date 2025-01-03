"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { CloseIcon, LogoDark, LogoLight, LogoRound, MenuIcon } from "public/icons";

import Container from "./Container";
import ThemeSwitch from "./ThemeSwitch";

import { links } from "@/app/config";

const homePath = "/";

const Header = () => {
  const pathname = usePathname();
  const isHomePath = pathname === homePath;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const checkIsActive = useCallback(
    (href: string) => pathname === href || (pathname.includes(href) && href !== homePath),
    [pathname],
  );

  const toggleIsOpen = useCallback(() => {
    setIsOpen(is => !is);
  }, []);

  const getLinks = useCallback(
    (onClick?: () => void) => {
      return Object.values(links).map(({ name, href }, index) => (
        <Link
          href={href}
          key={index}
          prefetch={true}
          onClick={onClick}
          className={clsx(
            "text-black dark:text-off-white font-light text-md md:text-sm mx-5 text-center my-4 md:my-0",
            checkIsActive(href) && "underline",
          )}
        >
          {name}
        </Link>
      ));
    },
    [checkIsActive],
  );

  return (
    <header
      className={clsx(
        isHomePath && "absolute",
        "header w-full flex z-50 mb-6 md:mt-10 flex-col",
      )}
    >
      <div
        className={clsx(
          isOpen ? "flex freezeScroll" : "hidden",
          "md:hidden backdrop-blur-default pt-15 pb-20 justify-between fixed top-0 left-0 w-full h-full z-10 items-center flex-col",
        )}
      >
        <LogoRound width="60px" className="dark:fill-off-white fill-black" />
        <nav className="flex flex-col">{getLinks(toggleIsOpen)}</nav>
        <button type="button" onClick={toggleIsOpen}>
          <CloseIcon width="30px" className="dark:stroke-off-white stroke-black" />
        </button>
      </div>
      <Container className="mt-5 md:mt-0 md:px-40 flex flex-col">
        <div className="flex justify-between md:justify-center mb-6 text-xs md:relative">
          <ThemeSwitch className="md:absolute md:left-0 md:-top-1" />
          <button onClick={toggleIsOpen} className="md:hidden">
            <MenuIcon className="fill-black dark:fill-off-white" />
          </button>
          <nav className="hidden md:flex flex-row justify-center">{getLinks()}</nav>
        </div>
        <Link href={homePath}>
          <LogoDark className="hidden dark:flex" />
          <LogoLight className="dark:hidden flex" />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
