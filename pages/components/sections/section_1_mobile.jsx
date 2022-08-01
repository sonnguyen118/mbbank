import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import styles from "../../../styles/slick.module.css";

const Section1MB = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dotsClass: "button__bar",
    arrows: false,
    dotsClass: styles.button__bar,
  };
  console.log("rendering....");

  const imgArray = [
    {
      src: "/section_1/slide_1_mb_1.png",
    },
    {
      src: "/section_1/slide_1_mb_2.png",
    },
    {
      src: "/section_1/slide_1_mb_1.png",
    },
    {
      src: "/section_1/slide_1_mb_2.png",
    },
  ];

  return (
    <>
      <div>
        <Slider {...settings}>
          {imgArray?.map((imgArray, i) => (
            <>
              <div
                className="section_1-item"
                style={{ backgroundImage: `url(${imgArray.src})` }}
              ></div>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Section1MB;
