import React from 'react';
import "../styles/main.scss"
import PropTypes from 'prop-types'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StyleLayout from './style'

const Layout = ({ children }) => (
  <StyleLayout>
    <Header />
    <div className="mw9 center pa4 pt3-ns ph7-l mb4">
    {children}
    </div>
    <Footer/>
  </StyleLayout>
  
  )

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout