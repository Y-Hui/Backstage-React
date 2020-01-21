import React, { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'

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
  // id [原生属性]
  id: PropTypes.string,
  // 文本框类型 [原生属性]
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel']),
  // 占位符 [原生属性]
  placeholder: PropTypes.string,
  // name [原生属性]
  name: PropTypes.string,
  // 文本内容
  value: PropTypes.string,
  // 是否禁用
  disabled: PropTypes.bool,
  // 是否只读 [原生属性]
  readonly: PropTypes.bool,
  // 自动填充 [原生属性]
  autocomplete: PropTypes.oneOf(['on', 'off']),
  // 行内样式
  style: stylePropType,
  // 其他未定义的原生属性
  // eslint-disable-next-line react/forbid-prop-types
  nativeProps: PropTypes.object,
  // css 类名
  className: PropTypes.string,
  // 插槽内容
  children: PropTypes.shape({
    left: PropTypes.node,
    right: PropTypes.node
  }),
  // 文本内容变更回调
  onChange: PropTypes.func,
  // 文本框获取焦点事件
  onFocus: PropTypes.func,
  // 文本框失去焦点事件
  onBlur: PropTypes.func,
  // 按下回车的回调
  onPressEnter: PropTypes.func
}
Field.defaultProps = {
  id: null,
  type: 'text',
  placeholder: null,
  name: null,
  value: '',
  disabled: false,
  readonly: false,
  autocomplete: 'off',
  style: {},
  nativeProps: {},
  className: '',
  children: {},
  onChange: () => { },
  onFocus: () => { },
  onBlur: () => { },
  onPressEnter: () => { }
}

export default React.memo(Field)
