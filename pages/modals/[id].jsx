import React from "react";
import { useRouter } from "next/router";
import NavbarPC from "../components/navbarpc";
import Image from "next/image";

const Modals = () => {
  const router = useRouter();
  console.log(router.query);
  const goBack = () => {
    window.history.back();
    window.scroll(0, 200);
  };
  return (
    <>
      <div className={"navbarpc navbarpc-scroll"}>
        <div className={"navbarpc-logo-scroll"}>
          <Image
            src={`/mb-bank-logo-white.png`}
            alt="Điện Máy Toàn Cầu"
            layout="fill"
            data-testid="close-icon"
            objectFit="contain"
          />
        </div>
        <div className="navbarpc-menu">
          <h2 className={"navbarpc-menu-title navbarpc-menu-title-scroll"}>
            Tiện ích
          </h2>
          <h2 className={"navbarpc-menu-title navbarpc-menu-title-scroll"}>
            Ưu đãi
          </h2>
          <h2 className={"navbarpc-menu-title navbarpc-menu-title-scroll"}>
            Khám phá Hi Collection
          </h2>
          <h2 className={"navbarpc-menu-title navbarpc-menu-title-scroll"}>
            Đăng kí nhận thẻ
          </h2>
        </div>
      </div>
      <div className="modals">
        <div className="modals-overlay " onClick={goBack}></div>
        <div
          className="modals-image"
          style={{ backgroundImage: `url(${router.query.keyword})` }}
        ></div>
        <i className="modals-close fas fa-window-close" onClick={goBack}></i>
      </div>
    </>
  );
};

export default Modals;
