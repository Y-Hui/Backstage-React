import React from 'react'

class NavMenuItem extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default NavMenuItem
