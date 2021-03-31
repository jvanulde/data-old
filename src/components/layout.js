import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import "../styles/index.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
