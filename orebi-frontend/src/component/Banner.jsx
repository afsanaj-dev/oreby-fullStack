import React, { useState } from "react";
import Images from "./Images";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

const Banner = () => {
  let [active, setActive] = useState(0);
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: true,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-65%)",
                  left: "0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === active
                  ? {
                      width: "15px",
                      color: "black",
                      padding: "0 5px 0 0",
                      borderRight: "2px black solid",
                      fontSize: "10px",
                      fontWeight: "400",
                      fontFamily: "dmSans",
                    }
                  : {
                      width: "15px",
                      color: "transparent",
                      padding: "0 5px 0 0",
                      borderRight: "2px white solid",
                    }
              }
              //
            >
              0{i + 1}
            </div>
          ),
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-70%)",
                  left: "0",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === active
                  ? {
                      width: "20px",
                      color: "black",
                      padding: "0px 5px 0px 0",
                      borderRight: "2px black solid",
                      fontSize: "10px",
                      fontWeight: "400",
                      fontFamily: "dmSans",
                    }
                  : {
                      width: "20px",
                      color: "transparent",
                      padding: "0px 5px 0px 0",
                      borderRight: "2px white solid",
                    }
              }
              //
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
    beforeChange: (prev, next) => {
      setActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "transparent",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            margin: "0px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "5%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        //  --------------------Easy way of styling carasoul pagination----------------
        // style={{
        //   width: "30px",
        //   color: "transparent",
        //   padding: "10px 10px 10px 0",
        //   borderRight: "2px white solid",
        //   fontSize: "10px",
        //   fontWeight: "400",
        //   fontFamily: "dmSans",
        // }}
        // ---------------------A bit complex way of styling  carasoul pagination-------------------
        style={
          i === active
            ? {
                width: "30px",
                color: "black",
                padding: "10px 10px 10px 0",
                borderRight: "2px black solid",
                fontSize: "10px",
                fontWeight: "400",
                fontFamily: "dmSans",
              }
            : {
                width: "30px",
                color: "transparent",
                padding: "10px 10px 10px 0",
                borderRight: "2px white solid",
              }
        }
        //
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Images src="images/banner.png" alt="banner-image" />
        </div>
        <div>
          <Images src="images/banner1.png" alt="banner-image" />
        </div>
        <div>
          <Images src="images/banner2.png" alt="banner-image" />
        </div>
        <div>
          <Images src="images/banner3.png" alt="banner-image" />
        </div>
        <div>
          <Images src="images/banner1.png" alt="banner-image" />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
