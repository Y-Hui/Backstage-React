import React from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import { hasAttr } from '@/utils/common'
import './index.scss'

class Button extends React.Component {
  constructor(props) {
    super(props)
    this.namespace = 'button'
    this.state = {
      lineStyle: {},
      // 默认颜色类名
      defaultColor: {
        blue: 'art-button--blue',
        red: 'art-button--red',
        yellow: 'art-button--yellow',
        gray: 'art-button--gray'
      },
      // 按钮类名
      buttonClass: ['art-button']
    }
  }

  componentDidMount() {
    const { className } = this.props
    this.setColor()
    this.setRound()
    this.setClassName(className)
  }

  get classNameStr() {
    const { buttonClass } = this.state
    let className = ''
    buttonClass.forEach((name, index) => {
      if (index === 0) {
        className = name
      } else {
        className += ` ${name}`
      }
    })
    return className
  }

  setClassName(className) {
    this.setState((state) => {
      const { buttonClass } = state
      const classArr = [...buttonClass]
      const classNameArr = className.split(' ')
      classNameArr.forEach((name) => {
        if (name && hasAttr(classArr, name) === false) {
          classArr.push(name)
        }
      })
      return {
        buttonClass: classArr
      }
    })
  }

  setColor() {
    const { color } = this.props
    const { defaultColor } = this.state
    // 查找默认颜色
    if (hasAttr(defaultColor, color)) {
      this.setClassName(defaultColor[color])
    } else {
      // 使用行间样式
      this.setLineStyle({
        background: color
      })
    }
  }

  setRound() {
    const { round } = this.props
    switch (round) {
      case false:
        break
      case true:
        this.setClassName('art-button--round')
        break
      default:
        this.setLineStyle({
          borderRadius: `${round}${round.includes('%') ? '' : 'px'}`
        })
        break
    }
  }

  // 设置行间样式
  setLineStyle(cssObj) {
    const { lineStyle } = this.state
    const { style } = this.props
    this.setState({
      lineStyle: { ...lineStyle, ...cssObj, ...style }
    })
  }

  render() {
    const { lineStyle } = this.state
    const { onClick, children } = this.props
    return (
      <button
        className={this.classNameStr}
        style={lineStyle}
        data-vision-art={this.namespace}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    )
  }
}
Button.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['blue', 'red', 'yellow', 'gray']),
  round: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
    PropTypes.number
  ]),
  // 行内样式
  style: stylePropType,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
}
Button.defaultProps = {
  className: '',
  color: 'blue',
  round: false,
  style: {},
  onClick: () => { }
}

export default Button
