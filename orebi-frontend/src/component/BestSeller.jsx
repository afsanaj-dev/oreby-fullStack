import React from "react";
import Container from "./Container";
import Section from "./Section";
import Title from "./Title";
import Product from "./Product";
import Flex from "./Flex";

const BestSeller = () => {
  return (
    <Section className="mb-16">
      <Container>
        <Title className="mb-8" heading="Our Bestsellers" />
        <Flex className="justify-between sm:gap-2  flex-wrap lg:flex-nowrap">
          <Product
            pimage={"images/BestSell1.png"}
            pitem={"Flower Vase"}
            ProductPrice={`$32.00`}
            ProductColor={"White"}
            isNew={true}
          />
          <Product
            pimage={"images/BestSell2.png"}
            pitem={"Back Pack"}
            ProductPrice={`$120.00`}
            ProductColor={"Ash"}
            isNew={false}
          />
          <Product
            pimage={"images/BestSell3.png"}
            pitem={"Mortar & Pestle"}
            ProductPrice={`$40.00`}
            ProductColor={`Black-Grey`}
            isNew={true}
          />
          <Product
            pimage={"images/BestSell4.png"}
            pitem={"Back Pack"}
            ProductPrice={`$120.00`}
            ProductColor={"Black"}
            isNew={true}
          />
        </Flex>
      </Container>
    </Section>
  );
};

export default BestSeller;
