import React from "react";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import NavBar from './NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <ThemeToggle />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
