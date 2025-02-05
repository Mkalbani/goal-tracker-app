import React from "react";
import Footer from "./Footer";
import ThemeToggle from "./ThemeToggle";
import Navbar from './NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <ThemeToggle />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
