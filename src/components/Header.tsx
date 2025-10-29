/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ArrowButton } from "@components";
import { CloseIcon, LogoDark, LogoRound, MenuIcon } from "@public/icons";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";

import { Container } from "./Container";

import { links } from "@/app/config";

const homePath = "/";

// TODO mobile
const getLinks = (checkIsActive: (href: string) => boolean, onClick?: () => void) =>
  Object.values(links).map(({ name, href, ...rest }) => (
    <ArrowButton
      key={href}
      href={href}
      variant="no-icon"
      type="link"
      // onClick={onClick}
      isActive={checkIsActive(href)}
      {...rest}
    >
      {name}
    </ArrowButton>
  ));

const MobileHeader = ({ isOpen, checkIsActive, toggleIsOpen }: any) => (
  <>
    <div
      className={
        isOpen
          ? "fixed top-0 left-0 w-full h-full bg-og-black opacity-85 z-10 md:hidden"
          : "hidden"
      }
    />
    <div
      className={clsx(
        isOpen ? "flex freezeScroll" : "hidden",
        "md:hidden pt-15 pb-20 justify-between fixed top-0 left-0 w-full h-full z-10 items-center flex-col",
      )}
    >
      <LogoRound width="60px" className="dark:fill-off-white fill-black" />
      <nav className="flex flex-col items-center gap-8">
        {getLinks(checkIsActive, toggleIsOpen)}
      </nav>
      <button type="button" onClick={toggleIsOpen}>
        <CloseIcon width="24px" className="dark:stroke-off-white stroke-black" />
      </button>
    </div>
  </>
);

const DesktopHeader = ({ checkIsActive, toggleIsOpen }: any) => (
  <Container className="mt-5 md:mt-0 md:px-40 flex flex-col">
    <div className="flex justify-end md:justify-center mb-6 text-xs md:relative">
      <button onClick={toggleIsOpen} className="md:hidden">
        <MenuIcon className="fill-black dark:fill-off-white" />
      </button>
      <nav className="hidden md:flex flex-row justify-center gap-8">
        {getLinks(checkIsActive)}
      </nav>
    </div>
    <Link href={homePath}>
      <LogoDark />
    </Link>
  </Container>
);

export const Header = () => {
  const pathname = usePathname();
  const isHomePath = pathname === homePath;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(is => !is);
  }, []);

  const checkIsActive = useCallback(
    (href: string) => pathname === href || (pathname.includes(href) && href !== homePath),
    [pathname],
  );

  return (
    <header
      className={clsx(
        isHomePath && "absolute",
        "header w-full flex z-50 mb-5 md:mt-9 flex-col",
      )}
    >
      <MobileHeader
        isOpen={isOpen}
        checkIsActive={checkIsActive}
        toggleIsOpen={toggleIsOpen}
      />
      <DesktopHeader checkIsActive={checkIsActive} toggleIsOpen={toggleIsOpen} />
    </header>
  );
};
