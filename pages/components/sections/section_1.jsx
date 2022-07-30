import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import styles from "../../../styles/slick.module.css";

const Section1 = () => {
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
  // const Slider = [
  //   "/section_1/section_1.jpg",
  //   "/section_1/section_2.jpg",
  //   "/section_1/section_3.jpg",
  //   "/section_1/section_4.jpg",
  //   "/section_1/section_5.jpg",
  //   "/section_1/section_6.jpg",
  // ];
  // console.log("rendering....", Slider);
  const imgArray = [
    {
      src: "/section_1/section_1.jpg",
    },
    {
      src: "/section_1/section_2.jpg",
    },
    {
      src: "/section_1/section_3.jpg",
    },
    {
      src: "/section_1/section_4.jpg",
    },
    {
      src: "/section_1/section_5.jpg",
    },
    {
      src: "/section_1/section_6.jpg",
    },
  ];
  // console.log(
  //   "test",
  //   imgArray.map((a, i) => a.src)
  // );
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

// export async function getServerSideProps(props) {
//   const Slider = [
//     "/section_1/section_1.jpg",
//     "/section_1/section_2.jpg",
//     "/section_1/section_3.jpg",
//     "/section_1/section_4.jpg",
//     "/section_1/section_5.jpg",
//     "/section_1/section_6.jpg",
//   ];
//   // const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   // const data = await res.json();
//   // console.log(data);

//   return {
//     props: {
//       Slider,
//     },
//   };
// }

export default Section1;
