import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarPC = () => {
  //lo gic cuộn navabar fixed
  const [navbar, setNavbar] = useState(true);
  useEffect(function onFirstMount() {
    window.addEventListener("scroll", changeBackground);
    // window.addEventListener("scroll", SetbackToTop);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 1) {
      setNavbar(false);
      console.log("cuộn trang");
    } else {
      setNavbar(true);
      console.log("cuộn trangzzzz");
    }
  };
  return (
    <div className={navbar ? "navbarpc" : "navbarpc navbarpc-scroll"}>
      <div className={navbar ? "navbarpc-logo" : "navbarpc-logo-scroll"}>
        <Image
          src={`/mb-bank-logo-white.png`}
          alt="Điện Máy Toàn Cầu"
          layout="fill"
          data-testid="close-icon"
          objectFit="contain"
        />
      </div>
      <div className="navbarpc-menu">
        <a
          href="#section_3a"
          className={
            navbar
              ? "navbarpc-menu-title"
              : "navbarpc-menu-title navbarpc-menu-title-scroll"
          }
        >
          Tiện ích
        </a>
        <a
          href="#section_3b"
          className={
            navbar
              ? "navbarpc-menu-title"
              : "navbarpc-menu-title navbarpc-menu-title-scroll"
          }
        >
          Ưu đãi
        </a>
        <a
          href="#section_3c"
          className={
            navbar
              ? "navbarpc-menu-title"
              : "navbarpc-menu-title navbarpc-menu-title-scroll"
          }
        >
          Khám phá Hi Collection
        </a>
        <a
          href="#section_4"
          className={
            navbar
              ? "navbarpc-menu-title"
              : "navbarpc-menu-title navbarpc-menu-title-scroll"
          }
        >
          Đăng kí nhận thẻ
        </a>
      </div>
    </div>
  );
};

export default NavbarPC;
