import React from "react";
import Image from "next/image";
import Link from "next/link";

const Section2 = () => {
  return (
    <>
      <div className="section_2">
        <div className="section_2-wrap">
          <div className="section_2-wrap-clip">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/lmcFhovVI54?controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="section_2-infor">
          <div className="section_2-infor-icon">
            <Image
              src={`/4x/asset1.png`}
              alt="description of image"
              layout="fill"
              data-testid="close-icon"
              objectFit="contain"
            />
          </div>
          <p className="section_2-infor-title">
            Bạn đã có chiếc{" "}
            <span className="section_2-infor-title-hightlight">
              thẻ độc đáo nhất thế giới
            </span>{" "}
            trong tay!?
          </p>
          <a className="section_2-infor-text">Đăng ký ngay!</a>
        </div>
      </div>
    </>
  );
};

export default Section2;
