import React from 'react'
import './index.scss'

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
    let result = ''
    if(this.state.isExpand) {
      result = 'nav-menu--active'
    }
    return result
  }
  render() {
    return (
      <div className={`nav-menu ${this.menuClass}`} onClick={this.changeExpand}>
        {this.props.children}
        <span className="nav-menu__arrow"></span>
      </div>
    )
  }
}

export default NavMenu
