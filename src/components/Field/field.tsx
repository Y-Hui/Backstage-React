import React, { useState, useMemo } from 'react'
import FieldPassword from './fieldPassword'
import { Props, defaultProps } from './props/index'
import './index.scss'

export default function Field(props: Props) {
  const {
    type, value, style, className,
    onChange, onFocus, onBlur, onPressEnter,
    prefix, suffix,
    ...$attrs
  } = props

  // 文本内容更新
  const [val, setVal] = useState(value)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value)
    onChange && onChange(event.target.value)
  }

  const [isFocus, setFocusState] = useState(false)

  /** 回车事件 */
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      onPressEnter && onPressEnter(val)
    }
  }

  /** 获取焦点事件 */
  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
    setFocusState(true)
    onFocus && onFocus(event)
  }

  /** 失去焦点事件 */
  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    setFocusState(false)
    onBlur && onBlur(event)
  }

  /** 插槽内容 */
  const slot = (content: React.ReactNode) => {
    if (content) {
      return (
        <span className="field__slot">
          {content}
        </span>
      )
    }
    return null
  }

  const rootClassName = useMemo(() => {
    const _className = ['field']
    _className.push(...(className || '')!.split(' '))
    if (isFocus) {
      _className.push('field--active')
    }
    return _className.join(' ')
  }, [className, isFocus])

  return (
    <div className={rootClassName} style={style}>
      <div className="field__content">
        {slot(prefix)}
        <input
          {...$attrs}
          className="field__input"
          type={type!}
          value={val!}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleEnter}
        />
        {slot(suffix)}
      </div>
    </div>
  )
}

Field.Password = FieldPassword
Field.defaultProps = defaultProps
