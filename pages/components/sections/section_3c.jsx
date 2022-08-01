import Link from "next/link";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Router from "next/router";

const Section3c = () => {
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
  const settingCards = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 457,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 376,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          cssEase: "linear",
        },
      },
    ],
  };
  const dataCards = [
    {
      image: "/4x/asset10.png",
      title: "Cancer",
      modal: "/4x/modal.jpg",
    },
    {
      image: "/4x/asset11.png",
      title: "Leo",
      modal: "/4x/modal.jpg",
    },
    {
      image: "/4x/asset12.png",
      title: "Libra",
      modal: "/4x/modal.jpg",
    },
    {
      image: "/4x/asset13.png",
      title: "Virgo",
      modal: "/4x/modal.jpg",
    },
    {
      image: "/4x/asset10.png",
      title: "Cancer",
      modal: "/4x/modal.jpg",
    },
    {
      image: "/4x/asset11.png",
      title: "Leo",
      modal: "/4x/modal.jpg",
    },
    {
      image: "/4x/asset12.png",
      title: "Libra",
      modal: "/4x/modal.jpg",
    },
    {
      image: "/4x/asset13.png",
      title: "Virgo",
      modal: "/4x/modal.jpg",
    },
  ];
  return (
    <div className="section_3-block3" id="section_3c">
      <h1 className="section_3-block3-title">
        Khám phá bộ sưu tập Hi Collection
      </h1>
      <div className="section_3-block2-slider">
        <div className="section_3-block2-slider-icon-left" onClick={previouss}>
          <Image
            src={`/4x/arrow_left.png`}
            alt="Điện Máy Toàn Cầu"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <div className="section_3-block2-slider-icon-right" onClick={nexts}>
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
          {...settingCards}
          className="section_3-block3-slider-slider"
        >
          {dataCards.map((data, index) => (
            <>
              <Link
                href={{
                  pathname: "/modals/meme",
                  query: { keyword: data.modal },
                }}
              >
                <div className="section_3-block3-slider-item">
                  <div
                    className="section_3-block3-slider-item-img"
                    style={{ backgroundImage: `url(${data.image})` }}
                  ></div>
                  <div className="section_3-block3-slider-item-infor">
                    <p className="section_3-block3-slider-item-infor-title">
                      {data.title}
                    </p>
                  </div>
                </div>
              </Link>
            </>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Section3c;
