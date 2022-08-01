import React from "react";
import Footer from "./footer";
import NavbarPC from "./navbarpc";
import NavbarMobile from "./navbarmobile";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarPC />
      <NavbarMobile />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
