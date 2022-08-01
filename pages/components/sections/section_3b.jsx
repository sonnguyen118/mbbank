import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const Section3b = () => {
  const slider = useRef();
  const next = () => {
    slider.current.slickNext();
  };
  const previous = () => {
    slider.current.slickPrev();
  };
  const nexts = () => {
    slider.current.slickNext();
  };
  const previouss = () => {
    slider.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
  const settingCards = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
  };
  const dataEndow = [
    {
      image: "/4x/asset6.png",
      title: "Mua 50k - Hoàn 50k",
      content: "Mua sắm thả ga trên Lazada",
    },
    {
      image: "/4x/asset6.png",
      title: "Mua 50k - Hoàn 50k",
      content: "Mua sắm thả ga trên Lazada",
    },
    {
      image: "/4x/asset6.png",
      title: "Mua 50k - Hoàn 50k",
      content: "Mua sắm thả ga trên Lazada",
    },
    {
      image: "/4x/asset6.png",
      title: "Mua 50k - Hoàn 50k",
      content: "Mua sắm thả ga trên Lazada",
    },
    {
      image: "/4x/asset6.png",
      title: "Mua 50k - Hoàn 50k",
      content: "Mua sắm thả ga trên Lazada",
    },
  ];

  return (
    <div className="section_3-block2" id="section_3b">
      <h1 className="section_3-block2-title">Ưu đãi bất tận</h1>
      <div className="section_3-block2-slider">
        <div className="section_3-block2-slider-icon-left" onClick={previous}>
          <Image
            src={`/4x/arrow_left.png`}
            alt="Điện Máy Toàn Cầu"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <div className="section_3-block2-slider-icon-right" onClick={next}>
          <Image
            src={`/4x/arrow_right.png`}
            alt="Điện Máy Toàn Cầu"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <Slider
          ref={(c) => (slider.current = c)}
          {...settings}
          className="section_3-block2-slider-slider"
        >
          {dataEndow.map((data, index) => (
            <>
              <div className="section_3-block2-slider-item">
                <div
                  className="section_3-block2-slider-item-img"
                  style={{ backgroundImage: `url(${data.image})` }}
                ></div>
                <div className="section_3-block2-slider-item-infor">
                  <p className="section_3-block2-slider-item-infor-title">
                    {data.title}
                  </p>
                  <p className="section_3-block2-slider-item-infor-main">
                    {data.content}
                  </p>
                </div>
              </div>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section3b;
