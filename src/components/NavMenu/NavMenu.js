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
    let result = 'menu-group'
    if (this.state.isExpand) {
      result += ' menu-group--active'
    }
    return result
  }
  // 获取嵌套层级需要设置的 padding
  get nestingLevel() {
    const { paddingLeft = 20 } = this.props.style || {}
    return paddingLeft + 20
  }
  render() {
    const menuChildren = React.Children.map(this.props.children, (children) => {
      const userStyle = children.props.style || {}
      const style = Object.assign(userStyle, {
        paddingLeft: this.nestingLevel
      })
      return React.cloneElement(children, {
        style
      })
    })
    return (
      <div className="nav-menu">
        <div className={this.menuClass} style={this.props.style} onClick={this.changeExpand}>
          <span>{this.props.name}</span>
          <span className="menu-group__arrow"></span>
        </div>
        <div className="nav-menu__sub">
          {this.state.isExpand && menuChildren}
        </div>
      </div>
    )
  }
}

export default NavMenu
