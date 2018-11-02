import React from 'react'
import PropTypes from 'prop-types'

import { GlobalStyle } from '../../src'

const Wrapper = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
