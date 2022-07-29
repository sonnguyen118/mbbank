import React from "react";
import Footer from "./footer";
import NavbarPC from "./navbarpc";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarPC />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
