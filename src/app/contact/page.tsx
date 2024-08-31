import Container from "components/Container";

import { LogoRound, ServingAuthenticityCaption } from "public/svgs";

const Contact = () => (
  <Container className="mt-6 mb-16">
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row items-center mb-10">
        <div className="w-full md:w-1/2 md:mr-37 flex justify-center md:justify-end">
          <div className="w-1/3">
            <LogoRound />
          </div>
        </div>
        <div className="bg-off-white h-divider w-full md:h-90 md:w-divider" />
        <div className="md:w-1/2 md:ml-37">
          <p className="uppercase">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex.
          </p>
        </div>
      </div>
      <ServingAuthenticityCaption />
    </div>
  </Container>
);

export default Contact;
