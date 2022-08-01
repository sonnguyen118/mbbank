import React from "react";

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
                <a href="#">Khám phá Hi Collection</a>
              </li>
              <li>
                <a href="#">Đăng ký nhận thẻ</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
