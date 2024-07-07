// -----------------Responsive issue have to solved----------------------

import React, { Component } from "react";
import Container from "./Container";
import Section from "./Section";
import Title from "./Title";
import Product from "./Product";
import Flex from "./Flex";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const NewArrivals = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} !w-[34px] lg:!w-[50px] !h-[34px] lg:!h-[50px] `}
        style={{
          ...style,
          display: "block",
          background: "#979797",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex:"999",
          position:"absolute",
          top:"40%",    
          left:"0px",
          color: "white"
        }}
        onClick={onClick}
      >
        <GoArrowLeft />
      </div>
    );
  };

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
      // !w-[34px] here we use ! sign for important
        className={`${className} !w-[34px] lg:!w-[50px] !h-[34px] lg:!h-[50px] `}
        style={{
          ...style,
          display: "block",
          background: "#979797",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex:"999",
          position:"absolute",
          top:"40%",    
          right:"5px",
          color: "white"
        }}
        onClick={onClick}
      >
        <GoArrowRight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Section className="mb-16 ">
      <Container>
        <Title className="mb-8" heading="New Arrival" />
        <div className="slider-container">
          <Slider {...settings}>
            <div className="w-[290px] object-cover">
              <Product
                pimage={"images/product1.png"}
                pitem={"Basic Crew Neck Tee"}
                ProductPrice={`$44.00`}
                ProductColor={"Black"}
                isNew={true}
              />
            </div>
            <div className="w-[290px] object-cover">
              <Product
                pimage={"images/product2.png"}
                pitem={"Hand Watch"}
                ProductPrice={`$120.00`}
                ProductColor={"Black"}
                isNew={false}
              />
            </div>
            <div className="w-[290px] object-cover">
              <Product
                pimage={"images/product3.png"}
                pitem={"Wicker basket"}
                ProductPrice={`$24.00`}
                ProductColor={`Black-Grey`}
                isNew={false}
              />
            </div>
            <div className="w-[290px] object-cover">
              <Product
                pimage={"images/product4.png"}
                pitem={"Toy"}
                ProductPrice={`$20.00`}
                ProductColor={`Grey`}
                isNew={true}
              />
            </div>
          </Slider>
        </div>
        {/* <Flex className="gap-4 sm:gap-2  flex-wrap lg:flex-nowrap">
          <Product
            pimage={"images/product1.png"}
            pitem={"Basic Crew Neck Tee"}
            ProductPrice={`$44.00`}
            ProductColor={"Black"}
            isNew={true}
          />
          <Product
            pimage={"images/product2.png"}
            pitem={"Hand Watch"}
            ProductPrice={`$120.00`}
            ProductColor={"Black"}
            isNew={false}
          />
          <Product
            pimage={"images/product3.png"}
            pitem={"Wicker basket"}
            ProductPrice={`$24.00`}
            ProductColor={`Black-Grey`}
            isNew={false}
          />
          <Product
            pimage={"images/product4.png"}
            pitem={"Toy"}
            ProductPrice={`$20.00`}
            ProductColor={`Grey`}
            isNew={true}
          />
        </Flex> */}
      </Container>
    </Section>
  );
};

export default NewArrivals;
