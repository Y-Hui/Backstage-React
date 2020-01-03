import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import './NavMenu.scss'

const panelStyle = {
  show: {
    // display: 'block',
    maxHeight: 'fit-content'
  },
  hide: {
    // display: 'none',
    maxHeight: 0
  }
}

class NavMenu extends React.Component {
  constructor(props) {
    super(props)
    this.panel = React.createRef()
    this.switchPanel = this.switchPanel.bind(this)
    this.submenu = this.submenu.bind(this)

    this.state = {
      isShow: false
    }
  }

  // 菜单高亮 class
  get menuClass() {
    let result = 'menu-group'
    const { isShow } = this.state
    if (isShow) {
      result += ' menu-group--active'
    }
    return result
  }

  // 获取嵌套层级需要设置的 padding
  get nestingLevel() {
    const { style } = this.props
    const { paddingLeft = 20 } = style
    return paddingLeft + 20
  }

  // 点击展开菜单
  switchPanel() {
    this.setState((state) => {
      const { isShow } = state
      return {
        isShow: !isShow
      }
    })
  }

  // 子菜单（嵌套）
  submenu() {
    const { children } = this.props

    const submenu = React.Children.map(children, (child) => {
      const userStyle = child.props.style || {}
      const style = { ...userStyle, paddingLeft: this.nestingLevel }
      return React.cloneElement(child, {
        style
      })
    })

    return submenu
  }

  render() {
    const { isShow } = this.state
    const { name, style } = this.props

    return (
      <div className="nav-menu">
        <div
          role="menuitem"
          aria-owns="menuitem"
          className={this.menuClass}
          style={style}
          onClick={this.switchPanel}
          onKeyPress={() => {}}
        >
          <span>{name}</span>
          <span className="menu-group__arrow" />
        </div>
        <div
          className="nav-menu__sub"
          ref={this.panel}
          style={isShow ? panelStyle.show : panelStyle.hide}
        >
          {this.submenu()}
        </div>
      </div>
    )
  }
}

NavMenu.propTypes = {
  name: PropTypes.string.isRequired,
  style: stylePropType,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
NavMenu.defaultProps = {
  style: {}
}

export default NavMenu
