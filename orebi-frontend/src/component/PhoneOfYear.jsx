import React from "react";
import Section from "./Section";
import Container from "./Container";
import Images from "./Images";
import { Link } from "react-router-dom";

const PhoneOfYear = () => {
  return (
    <Section>
      <Container>
        <Link>
          <Images src="images/Ad4.png" alt="phoneAd" />
        </Link>
      </Container>
    </Section>
  );
};

export default PhoneOfYear;
