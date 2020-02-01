/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import './NavMenu.scss'

const NavMenuItemPropType = {
  style: stylePropType,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
type Props = PropTypes.InferProps<typeof NavMenuItemPropType>

function NavMenuItem(props:Props) {
  const { style, onClick, children } = props
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className="nav-menu-item" style={style} onClick={onClick!}>
      {children}
    </div>
  )
}
NavMenuItem.propTypes = NavMenuItemPropType
NavMenuItem.defaultProps = {
  style: {},
  onClick: () => {}
}

export default NavMenuItem
