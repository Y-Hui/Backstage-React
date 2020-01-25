import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { types, defaultProps } from './fieldProps'
import './index.scss'

function Field(props) {
  const {
    id, type, name, value, placeholder,
    disabled, readonly, autocomplete,
    style, nativeProps, className,
    onChange, onFocus, onBlur, onPressEnter,
    children
  } = props

  // 文本内容更新
  const [val, setVal] = useState(value)
  const handleChange = (event) => {
    setVal(event.target.value)
    onChange(event.target.value)
  }

  // 可选原生属性
  const [attr, setAttr] = useState({})
  const nativeAttr = {
    id,
    name,
    placeholder,
    autoComplete: autocomplete
  }
  useEffect(() => {
    Object.keys(nativeAttr).forEach((key) => {
      const prop = nativeAttr[key]
      if (prop !== null) {
        setAttr({
          ...attr,
          [key]: prop
        })
      }
    })
  }, [id, placeholder])

  const [isFocus, setFocusState] = useState(false)

  // 回车事件
  const handleEnter = (event) => {
    if (event.charCode === 13) {
      onPressEnter(val)
    }
  }

  // 获取焦点事件
  const handleFocus = () => {
    setFocusState(true)
    onFocus()
  }

  // 失去焦点事件
  const handleBlur = () => {
    setFocusState(false)
    onBlur()
  }

  // 插槽内容
  const slot = () => {
    const slots = {
      left: children.left || null,
      right: children.right || null
    }
    Object.keys(slots).forEach((key) => {
      if (slots[key]) {
        slots[key] = (
          <span className="field__icon">
            {slots[key]}
          </span>
        )
      }
    })
    return slots
  }

  const fieldClass = useMemo(() => {
    const classNames = ['field']
    classNames.push(...className.split(' '))
    if (isFocus) {
      classNames.push('field--active')
    }
    return classNames.join(' ')
  }, [isFocus])

  return (
    <div className={fieldClass} style={style}>
      <div className="field__content">
        {slot().left}
        <input
          {...attr}
          {...nativeProps}
          className="field__input"
          type={type}
          value={val}
          disabled={disabled ? 'disabled' : ''}
          readOnly={readonly ? 'readonly' : ''}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleEnter}
        />
        {slot().right}
      </div>
    </div>
  )
}
Field.propTypes = {
  ...types,
  // 文本框类型 [原生属性]
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel']),
  // 插槽内容
  children: PropTypes.shape({
    left: PropTypes.node,
    right: PropTypes.node
  })
}
Field.defaultProps = {
  ...defaultProps,
  type: 'text',
  children: {}
}

export default Field
