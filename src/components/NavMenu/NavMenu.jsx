import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import './NavMenu.scss'

function NavMenuItem(props) {
  const { style, children } = props
  return (
    <div className="nav-menu-item" style={style}>
      {children}
    </div>
  )
}
NavMenuItem.propTypes = {
  style: stylePropType,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
NavMenuItem.defaultProps = {
  style: {}
}

export default NavMenuItem
