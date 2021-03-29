/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
// import Footer from "./footer"
import "../styles/theme-wet-boew/css/ie8-theme.css"

const Layout = ({ children }) => {
  return (
    <>
        <Header />
          {children}
      {/* <Footer/> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
