import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiNumber2 } from "react-icons/ri";
import Section from "./Section";
import { FaShuttleVan } from "react-icons/fa";
import { FaArrowRotateLeft } from "react-icons/fa6";

const Information = () => {
  return (
    <Section className="border-y border-1 border-[#F0F0F0] py-5">
      <Container>
        <Flex className="justify-between items-center">
          <Flex className="items-center gap-2">
            <RiNumber2  className="text-black"/>
            <h3 className="text-xs sm:text-base font-normal font-dmSans text-ash">
              Two years warranty
            </h3>
          </Flex>
          <Flex  className="items-center gap-2">
          <FaShuttleVan className="text-black" />
            <h3 className="text-xs sm:text-base  font-normal font-dmSans text-ash">
              Free Shipping
            </h3>
          </Flex>
          <Flex  className="items-center gap-2">
          <FaArrowRotateLeft className="text-black"/>
            <h3 className="text-xs sm:text-base font-normal font-dmSans text-ash">
              Return Policy in 30 days
            </h3>
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
};

export default Information;
