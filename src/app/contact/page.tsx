import { LogoRound, ServingAuthenticityCaption } from "public/svgs";

import Container from "@/components/Container";
import RatioContainer from "@/components/RatioContainer";

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <RatioContainer ratio={1080 / 1920}>
        <Container>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center mb-10">
              <div className="w-1/2 mr-37 flex justify-end">
                <LogoRound />
              </div>
              <div style={{ width: "1px" }} className="bg-off-white h-100" />
              <div className="w-1/2 ml-37">
                <p className="uppercase">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
                </p>
              </div>
            </div>
            <ServingAuthenticityCaption />
          </div>
        </Container>
      </RatioContainer>
    </main>
  );
};

export default Contact;
