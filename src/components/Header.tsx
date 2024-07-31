"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Container from "./Container";

const links = {
  home: { name: "HOME", href: "/" },
  photos: { name: "PHOTOS", href: "/photos" },
  contact: { name: "CONTACT", href: "/contact" },
};

const Logo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 1228 234">
    <g id="Group_35" data-name="Group 35" transform="translate(-87 -735)">
      <text
        id="_1998_SHOTS_"
        data-name="1998 SHOTS®"
        transform="translate(87 857)"
        fill="#fffff4"
        font-size="166"
        font-family="HelveticaNeueLTStd-BdEx, Helvetica Neue LT Std"
      >
        <tspan x="0" y="0">
          1998{" "}
        </tspan>
        <tspan y="0" font-family="HelveticaNeueLTStd-LtEx, Helvetica Neue LT Std">
          SHOTS
        </tspan>
        <tspan
          y="0"
          font-size="84"
          font-family="HelveticaNeueLTStd-LtEx, Helvetica Neue LT Std"
        >
          ®
        </tspan>
      </text>
      <text
        id="Serving_Authenticity"
        data-name="Serving Authenticity"
        transform="translate(208 928)"
        fill="#b2b2b2"
        font-size="145"
        font-family="AeroliteCPone"
      >
        <tspan x="0" y="0">
          Serving Authenticity
        </tspan>
      </text>
    </g>
  </svg>
);

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed w-full flex z-50 mt-10 flex-col">
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
