import Link from "next/link";
import Button from "@mui/material/Button";
import React, { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const Section3 = () => {
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
  const dataCards = [
    {
      image: "/4x/asset10.png",
      title: "Cancer",
    },
    {
      image: "/4x/asset11.png",
      title: "Leo",
    },
    {
      image: "/4x/asset12.png",
      title: "Libra",
    },
    {
      image: "/4x/asset13.png",
      title: "Virgo",
    },
    {
      image: "/4x/asset10.png",
      title: "Cancer",
    },
    {
      image: "/4x/asset11.png",
      title: "Leo",
    },
    {
      image: "/4x/asset12.png",
      title: "Libra",
    },
    {
      image: "/4x/asset13.png",
      title: "Virgo",
    },
  ];
  return (
    <>
      <div className="section_3">
        <div className="section_3-block1">
          <div className="section_3-block1-title">
            <div className="section_3-block1-title-group">
              <h1 className="section_3-block1-title-group-main">Giao dịch</h1>
              <h1 className="section_3-block1-title-group-sub">#tiện lợi</h1>
            </div>
            <div className="section_3-block1-title-group">
              <h1 className="section_3-block1-title-group-main">Trải nghiệm</h1>
              <h1 className="section_3-block1-title-group-sub">#khác biệt</h1>
            </div>
          </div>
          <div className="section_3-block1-bos">
            <div className="section_3-block1-bos-header">
              <div className="section_3-block1-bos-header-box">
                <div className="section_3-block1-item-box">
                  <div className="section_3-block1-item-box-icon">
                    <Image
                      src={`/4x/asset2.png`}
                      alt="Điện Máy Toàn Cầu"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <p className="section_3-block1-item-box-title">
                    Tích hợp 2 in 1 tính năng thẻ tín dụng và thẻ ATM.
                  </p>
                  <p className="section_3-block1-item-box-text">
                    Mang đầy đủ tính năng và tiện ích thẻ tín dụng và thẻ ATM
                    trên cùng 1 chiếc thẻ. Sử dụng đa nguồn tiền và ưu tiên
                    nguồn tiền phù hợp với từng giao dịch: Giao dịch qua POS,
                    Internet hoặc rút tiền tại ATM nước ngoài ưu tiên nguồn hạn
                    mức tín dụng của thẻ; Giao dịch rút tiền tại ATM/CDM tại
                    Việt Nam ưu tiên nguồn tài khoản thanh toán.
                  </p>
                </div>
              </div>
              <div className="section_3-block1-bos-header-box">
                <div className="section_3-block1-item-box">
                  <div className="section_3-block1-item-box-icon">
                    <Image
                      src={`/4x/asset3.png`}
                      alt="Điện Máy Toàn Cầu"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <p className="section_3-block1-item-box-title">
                    Được cấp hạn mức tín dụng tự động{" "}
                  </p>
                  <p className="section_3-block1-item-box-text">
                    Thẻ sẽ được cấp hạn mức tín dụng tự động khi đạt điều kiện
                    của MB. Chi tiêu càng nhiều - Hạn mức càng cao!
                  </p>
                </div>
                <div className="section_3-block1-item-box">
                  <div className="section_3-block1-item-box-icon">
                    <Image
                      src={`/4x/asset4.png`}
                      alt="Điện Máy Toàn Cầu"
                      layout="fill"
                      data-testid="close-icon"
                      objectFit="contain"
                    />
                  </div>
                  <p className="section_3-block1-item-box-title">
                    Bảo mật và an toàn
                  </p>
                  <p className="section_3-block1-item-box-text">
                    Thẻ không hiển thị thông tin, bảo mật và an toàn. Xem đầy đủ
                    thông tin của thẻ ngay trên App MBBank.
                  </p>
                </div>
              </div>
            </div>
            <div className="section_3-block1-bos-footer">
              <p className="section_3-block1-item-footer__a">
                Lưu ý: Thẻ chỉ được bán duy nhất tại các CN/PGD MB trên toàn
                quốc và chưa phát hành online.
              </p>
              <div className="section_3-block1-item-footer__b">
                <div className="section_3-block1-item-footer__b-title">
                  Bạn có muốn đăng ký nhận thẻ tại các CN/PGD NV toàn quốc?!{" "}
                </div>
                <Button
                  variant="contained"
                  className="section_3-block1-item-footer__b-btn"
                >
                  ĐĂNG KÝ NHẬN THẺ
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="section_3-block2">
          <h1 className="section_3-block2-title">Ưu đãi bất tận</h1>
          <div className="section_3-block2-slider">
            <div
              className="section_3-block2-slider-icon-left"
              onClick={previous}
            >
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
        <div className="section_3-block3">
          <h1 className="section_3-block3-title">
            Khám phá bộ sưu tập Hi Collection
          </h1>
          <div className="section_3-block2-slider">
            <div
              className="section_3-block2-slider-icon-left"
              onClick={previouss}
            >
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
                </>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
