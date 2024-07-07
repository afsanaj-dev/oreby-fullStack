import React from 'react';
import Container from "./Container";
import Section from "./Section";
import Title from "./Title";
import Product from "./Product";
import Flex from "./Flex";

const SpecialOffer = () => {
  return (
    <Section className="my-16">
      <Container>
        <Title className="mb-8" heading="Special Offers" />
        <Flex className="justify-between sm:gap-2  flex-wrap lg:flex-nowrap">
          <Product
            pimage={"images/sp1.png"}
            pitem={"Hat"}
            ProductPrice={`$15.00`}
            ProductColor={"White"}
            isNew={true}
          />
          <Product
            pimage={"images/sp2.png"}
            pitem={"Center Table"}
            ProductPrice={`$680.00`}
            ProductColor={"Wooden Texture"}
            isNew={true}
          />
          <Product
            pimage={"images/sp3.png"}
            pitem={"Head Phone"}
            ProductPrice={`$40.00`}
            ProductColor={`Red`}
            isNew={false}
          />
          <Product
            pimage={"images/sp4.png"}
            pitem={"Sun Glass"}
            ProductPrice={`$20.00`}
            ProductColor={"Black"}
            isNew={true}
          />
        </Flex>
      </Container>
    </Section>
  )
}

export default SpecialOffer