import React from "react"
import PropTypes from "prop-types"
import Footer from './footer'
import GlobalStyles from "../styles/global"
import Nav from "./Nav/nav"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Nav />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
