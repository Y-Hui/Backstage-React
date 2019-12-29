import React from 'react';
import PropsType from 'prop-types'

import './index.scss';

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

  render() {
    const { lineStyle } = this.state
    return (
      <button
        className={this.classNameStr}
        style={lineStyle}
        data-vision-art={this.namespace}
        type="button"
      >
        {this.props.children}
      </button>
    )
  }

  setClassName(className) {
    this.setState((state) => {
      const { buttonClass } = state
      const classArr = [...buttonClass]
      const classNameArr = className.split(' ')
      classNameArr.forEach(name => {
        if (name && classArr.hasOwnProperty(name) === false) {
          classArr.push(name)
        }
      });
      return {
        buttonClass: classArr
      }
    })
  }

  setColor() {
    const { color } = this.props
    const { defaultColor } = this.state
    // 查找默认颜色
    if (defaultColor.hasOwnProperty(color)) {
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
        break;
      case true:
        this.setClassName('art-button--round')
        break
      default:
        let unit = round.includes('%') ? '' : 'px'
        this.setLineStyle({
          borderRadius: `${round}${unit}`
        })
        break;
    }
  }

  // 设置行间样式
  setLineStyle(cssObj) {
    const { lineStyle } = this.state
    this.setState({
      lineStyle: Object.assign({}, lineStyle, cssObj)
    })
  }
}
Button.propsType = {
  className: PropsType.string,
  color: PropsType.style,
  round: PropsType.oneOfType([PropsType.bool, PropsType.string, PropsType.number])
}
Button.defaultProps = {
  className: '',
  color: 'blue',
  round: false
}

export default Button
