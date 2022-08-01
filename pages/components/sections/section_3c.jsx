import Link from "next/link";
import React, { useRef, useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Router from "next/router";
import $ from "jquery";
import { typeOf } from "tls";

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

  const [close, setClose] = useState(false);
  const closeWhenClick = () => {
    setClose(true);
    console.log("da click the item");
    console.log(close);
  };
  useEffect(function mount() {
    const count = dataCards.length;
    var i = 1;
    const overlay = $(".modals-overlay");
    for (i = 0; i < count; i++) {
      const item = $("." + i);
      // console.log(item);
      item.click(function () {
        console.log(item.css("display"));
        item.css("display", "block");
        overlay.css("display", "block");
        // setClose(true);
        console.log(close);
      });
    }
  }, []);
  //   const ClickItem = $(".section_3-block3-slider-item-img");
  //   ClickItem.click(function () {
  //     console.log("okebabay", $(this).next());
  //     $(this).next().css("visibility", "visible");
  //   });

  useEffect(function mount() {
    const modalOverlays = $(".modals-overlay");
    const popub = $(".modals");
    var i = 0;
    modalOverlays.click(function () {
      popub.parent().css("display", "none");
      modalOverlays.css("display", "none");
    });
  }, []);
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
              <div className={index} onClick={closeWhenClick}>
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
              </div>
            </>
          ))}
        </Slider>
        <div className="modals-overlay">
          <i className="modals-icon fas fa-times-circle"></i>
        </div>
        {dataCards.map((data, index) => (
          <>
            <div className={index} id="popub">
              <div
                className="modals"
                style={{ backgroundImage: `url(${data.modal})` }}
              ></div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Section3c;
