import React from 'react';
import "../styles/main.scss"
import PropTypes from 'prop-types'
import Header from '../components/Header'
import StyleLayout from './style'

const Layout = ({ children }) => (
  <StyleLayout>
    <Header />
    {children}
  </StyleLayout>
  )

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout