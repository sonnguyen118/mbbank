import React from "react";
import Image from "next/image";

const NavbarMobile = () => {
  return (
    <div className="mobile-wrapper">
      <div className="mobile-container">
        <div className="content">
          <nav>
            <input type="checkbox" id="hamburger1" />
            <label htmlFor="hamburger1" />
            <ul className="nav-links">
              <li>
                <a href="#">Tiện ích</a>
              </li>
              <li>
                <a href="#">Ưu đãi</a>
              </li>
              <li>
                <a href="#">
                  Khám phá <br></br>Hi Collection
                </a>
              </li>
            </ul>
            <div className="mobile-container-logo">
              <Image
                src={`/mb-bank-logo.png`}
                alt="Điện Máy Toàn Cầu"
                layout="fill"
                data-testid="close-icon"
                objectFit="contain"
              />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
