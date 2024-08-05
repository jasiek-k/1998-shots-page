"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Logo } from "public/svgs";

import Container from "./Container";

import { links } from "@/config";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="absolute w-full flex z-50 mt-10 flex-col">
      <nav className="flex justify-center">
        {Object.values(links).map(({ name, href }, index) => (
          <Link
            href={href}
            key={index}
            className={clsx(
              "text-off-white font-light text-sm mx-5",
              href === pathname && "underline",
            )}
          >
            {name}
          </Link>
        ))}
      </nav>
      <Container style={{ paddingLeft: "126px", paddingRight: "126px" }} className="mt-5">
        <Logo />
      </Container>
    </header>
  );
};

export default Header;
