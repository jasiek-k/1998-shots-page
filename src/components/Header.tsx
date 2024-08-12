"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

import { Logo } from "public/svgs";

import Container from "./Container";

import { links } from "@/config";

const Header = () => {
  const pathname = usePathname();

  const checkIsActive = useCallback(
    (href: string) => pathname === href || (pathname.includes(href) && href !== "/"),
    [pathname],
  );

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
    });
  }, []);

  // absolute
  return (
    <header className="w-full flex z-50 mt-10 flex-col">
      <nav className="flex justify-center">
        {Object.values(links).map(({ name, href }, index) => (
          <Link
            href={href}
            key={index}
            className={clsx(
              "text-off-white font-light text-sm mx-5",
              checkIsActive(href) && "underline",
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
      <Container style={{ paddingLeft: "160px", paddingRight: "160px" }} className="mt-6">
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
