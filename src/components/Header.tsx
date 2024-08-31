"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import { CloseIcon, Logo, LogoRound } from "public/svgs";

import Container from "./Container";

import { links } from "@/config";

const Header = () => {
  const pathname = usePathname();
  const isHomePath = pathname === "/";

  const [isOpen, setIsOpen] = useState<boolean>(true);

  const checkIsActive = useCallback(
    (href: string) => pathname === href || (pathname.includes(href) && href !== "/"),
    [pathname],
  );

  const toggleIsOpen = useCallback(() => {
    setIsOpen(is => !is);
  }, []);

  useEffect(() => {
    // window.addEventListener("scroll", () => {
    //   console.log(window.scrollY);
    // });
  }, []);

  return (
    <header className={clsx(isHomePath && "absolute", "w-full flex z-50 mt-10 flex-col")}>
      <div
        className={clsx(
          isOpen ? "flex freezeScroll" : "hidden",
          "backdrop-blur-default pt-15 pb-20 justify-between fixed top-0 left-0 w-full h-full z-10 items-center flex-col",
          "md:backdrop-blur-none md:flex md:py-0 md:justify-center md:static md:flex-row",
        )}
      >
        <LogoRound width="60px" className="md:hidden" />
        <nav className="flex flex-col md:flex-row">
          {Object.values(links).map(({ name, href }, index) => (
            <Link
              href={href}
              key={index}
              onClick={toggleIsOpen}
              className={clsx(
                "text-off-white font-light text-md md:text-sm mx-5 text-center my-4 md:my-0",
                checkIsActive(href) && "underline",
              )}
            >
              {name}
            </Link>
          ))}
        </nav>
        <button type="button" className="md:hidden" onClick={toggleIsOpen}>
          <CloseIcon width="30px" />
        </button>
      </div>
      <Container className="mt-6 md:px-40">
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
