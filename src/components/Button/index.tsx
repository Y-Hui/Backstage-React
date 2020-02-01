import React, {
  useState, useEffect, useMemo
} from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import { hasAttr } from '@/utils/common'
import './index.scss'

const ButtonPropType = {
  className: PropTypes.string,
  color: PropTypes.string,
  round: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  // 行内样式
  style: stylePropType,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired
}
type Props = PropTypes.InferProps<typeof ButtonPropType>
type styleType = typeof stylePropType

const Button:React.FC<Props> = (props: Props) => {
  const {
    className: newClassName,
    style: lineStyle,
    color,
    round,
    onClick,
    disabled,
    children
  } = props

  // 设置类名
  const [className, setClassName] = useState(['art-button'])
  // 行内样式
  const [style, setStyle] = useState(lineStyle)

  // 合并 className
  const _className = useMemo(() => {
    const name = [...className, ...newClassName?.split(' ') || []]
    return name.join(' ')
  }, [className, newClassName])

  useEffect(() => {
    // 默认颜色类名
    const colorClass: { [key: string]: string } = {
      blue: 'art-button--blue',
      red: 'art-button--red',
      yellow: 'art-button--yellow',
      gray: 'art-button--gray'
    }
    // 颜色值
    const setColor = () => {
      if (hasAttr(colorClass, color)) {
        setClassName((prevState) => [...prevState, colorClass[color!]])
      } else {
        // 使用行间样式
        setStyle((prevState: styleType) => ({
          ...prevState,
          background: color
        }))
      }
    }
    // 圆角
    const setRound = () => {
      switch (round) {
        case false:
          break
        case true:
          setClassName((prevState) => [...prevState, 'art-button--round'])
          break
        default:
          // 使用行间样式
          setStyle((prevState: styleType) => ({
            ...prevState,
            borderRadius: round
          }))
          break
      }
    }
    setColor()
    setRound()
  }, [color, round])

  return (
    <button
      className={_className}
      type="button"
      style={style}
      disabled={disabled!}
      onClick={onClick!}
    >
      {children}
    </button>
  )
}

Button.propTypes = ButtonPropType
Button.defaultProps = {
  className: '',
  color: 'blue',
  round: false,
  style: {},
  disabled: false,
  onClick: () => { }
}

export default Button
