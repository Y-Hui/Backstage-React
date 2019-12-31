import React from 'react'
import './NavMenu.scss'

class NavMenu extends React.Component {
  constructor(props) {
    super(props)
    this.changeExpand = this.changeExpand.bind(this)
    this.state = {
      isExpand: false
    }
  }
  changeExpand() {
    this.setState((state) => {
      const { isExpand } = state
      return {
        isExpand: !isExpand
      }
    })
  }
  get menuClass() {
    let result = 'nav-menu'
    if (this.state.isExpand) {
      result += ' nav-menu--active'
    }
    return result
  }
  render() {
    return (
      <div className={this.menuClass} onClick={this.changeExpand}>
        <span>{this.props.name}</span>
        <div className="nav-menu__sub">
          {this.props.children}
        </div>
        <span className="nav-menu__arrow"></span>
      </div>
    )
  }
}

export default NavMenu
