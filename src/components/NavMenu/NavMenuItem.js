import React from 'react'
import './NavMenuItem.scss'

class NavMenuItem extends React.Component {
  render() {
    return (
      <div className="nav-menu-item" style={this.props.style}>
        {this.props.children}
      </div>
    )
  }
}

export default NavMenuItem
