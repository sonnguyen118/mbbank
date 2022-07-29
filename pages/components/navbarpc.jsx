import * as React from "react";
import Image from "next/image";
import Link from "next/link";

const NavbarPC = () => {
  return (
    <div className="navbarpc">
      <div className="navbarpc-logo">
        <Image
          src={`/mb-bank-logo-white.png`}
          alt="Điện Máy Toàn Cầu"
          layout="fill"
          data-testid="close-icon"
          objectFit="contain"
        />
      </div>
      <div className="navbarpc-menu">
        <h2 className="navbarpc-menu-title">Tiện ích</h2>
        <h2 className="navbarpc-menu-title">Ưu đãi</h2>
        <h2 className="navbarpc-menu-title">Khám phá Hi Collection</h2>
        <h2 className="navbarpc-menu-title">Đăng kí nhận thẻ</h2>
      </div>
    </div>
  );
};

export default NavbarPC;
