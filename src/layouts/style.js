import React from 'react';
import PropTypes from 'prop-types'

import "../styles/main.scss"

const StyleLayout = ({ children }) => <div>{children}</div>

StyleLayout.propTypes = {
  children: PropTypes.any,
}

export default StyleLayout