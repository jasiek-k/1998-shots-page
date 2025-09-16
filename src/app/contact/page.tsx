import { Container } from "@components";
import { LogoRound, ServingAuthenticityCaption } from "@public/icons";
import Link from "next/link";

import { emailAddress, instagramLink, instagramName } from "@/app/config";

interface IContactLinkProps {
  name: string;
  value: string;
  href: string;
  target?: string;
  rel?: string;
}

const text =
  "Want to see more, collaborate or have any questions? Reach out via Instagram account or e-mail and let's shot something together.";

const ContactLink = ({ name, value, ...props }: IContactLinkProps) => (
  <div className="flex justify-between md:justify-normal">
    <span className="uppercase">{`[ ${name} ]:`}</span>
    <Link {...props} className="ml-2 underline">
      {value}
    </Link>
  </div>
);

const Contact = () => (
  <Container className="mt-20 mb-16 md:mt-6 md:mb-16">
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col md:flex-row items-center md:mb-10">
        <div className="w-full md:w-1/2 md:mr-35 flex justify-center md:justify-end">
          <div className="w-25 md:w-1/3">
            <LogoRound className="dark:fill-off-white fill-black" />
          </div>
        </div>
        <div className="bg-black dark:bg-off-white h-divider w-full md:h-90 md:w-divider my-20 md:my-0" />
        <div className="md:w-1/2 md:ml-35 flex flex-col uppercase">
          <p className="mb-4">{text}</p>
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
        </div>
      </div>
      <div className="w-full md:w-88 mt-20 md:mt-0">
        <ServingAuthenticityCaption className="dark:fill-off-white fill-black" />
      </div>
    </div>
  </Container>
);

export default Contact;
