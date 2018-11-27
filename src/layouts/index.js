import React from "react";
import "../styles/main.scss";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ShareThisScript from "../vendor/ShareThis";
import StyleLayout from "./style";

const Layout = ({ children }) => (
  <StyleLayout>
    <div className="mw9 center pa4 pt3-ns ph7-l mb4">
      <Header />
      {children}
    </div>
    <Footer />
    <ShareThisScript />
  </StyleLayout>
);

Layout.propTypes = {
  children: PropTypes.any
};

export default Layout;
