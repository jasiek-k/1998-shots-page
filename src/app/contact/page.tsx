import Link from "next/link";

import Container from "components/Container";

import { LogoRound, ServingAuthenticityCaption } from "public/icons";

import { emailAddress, instagramLink, instagramName } from "@/app/config";

interface IContactLinkProps {
  name: string;
  value: string;
  href: string;
  target?: string;
  rel?: string;
}

const ContactLink = ({ name, value, ...props }: IContactLinkProps) => (
  <div>
    <span>[</span>
    <span className="mx-3 uppercase">{name}</span>
    <span>]:</span>
    <Link {...props} className="ml-2 underline">
      {value}
    </Link>
  </div>
);

const Contact = () => (
  <Container className="mt-20 mb-16 md:mt-6 md:mb-16">
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center md:mb-10">
        <div className="w-full md:w-1/2 md:mr-37 flex justify-center md:justify-end">
          <div className="w-25 md:w-1/3">
            <LogoRound />
          </div>
        </div>
        <div className="dark:bg-off-white h-divider w-full md:h-90 md:w-divider my-20 md:my-0" />
        <div className="md:w-1/2 md:ml-37 flex flex-col uppercase">
          <ContactLink
            name="instagram"
            value={`@${instagramName}`}
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
          />
          <ContactLink
            name="e-mail"
            href={`mailto:${emailAddress}`}
            value={emailAddress}
          />
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex.
          </p>
        </div>
      </div>
      <div className="w-full md:w-88 mt-20 md:mt-0">
        <ServingAuthenticityCaption />
      </div>
    </div>
  </Container>
);

export default Contact;
