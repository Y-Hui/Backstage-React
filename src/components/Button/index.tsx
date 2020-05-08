import React, { useState, useEffect, useMemo } from 'react'
import { hasAttr } from '@/utils/common'
import { Props, defaultProps, styleType } from './props/index'
import './index.scss'

type mouseEvent = React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
export default function Button(props: Props) {
  const {
    className: newClassName,
    style: lineStyle,
    color,
    round,
    onClick,
    children,
    ...$attrs
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

  const handlerClick = (e:mouseEvent) => {
    if (onClick) {
      onClick!(e)
    }
  }

  return (
    <button
      {...$attrs}
      className={_className}
      type="button"
      style={style}
      onClick={handlerClick}
    >
      { children }
    </button>
  )
}

Button.defaultProps = defaultProps
