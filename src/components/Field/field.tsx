import React, {
  useState, useEffect, useMemo,
  ChangeEvent, KeyboardEvent
} from 'react'
import PropTypes from 'prop-types'
import FieldPassword from './fieldPassword'
import { types, defaultProps } from './fieldProps'
import './index.scss'

const FieldPropType = {
  ...types,
  // 文本框类型 [原生属性]
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel']),
  // 左侧内容
  prefix: PropTypes.node,
  // 右侧内容
  suffix: PropTypes.node
}
type Props = PropTypes.InferProps<typeof FieldPropType>

function Field(props: Props) {
  const {
    id, type, name, value, placeholder,
    disabled, readonly, autocomplete,
    style, nativeProps, className,
    onChange, onFocus, onBlur, onPressEnter,
    prefix, suffix
  } = props

  // 文本内容更新
  const [val, setVal] = useState(value)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value)
    onChange!(event.target.value)
  }

  // 可选原生属性
  const [attr, setAttr] = useState({})
  useEffect(() => {
    const nativeAttr: { [key: string]: string | null | undefined } = {
      id,
      name,
      placeholder,
      autoComplete: autocomplete
    }
    Object.keys(nativeAttr).forEach((key: string) => {
      const prop = nativeAttr[key]
      if (prop !== null) {
        setAttr({
          [key]: prop
        })
      }
    })
  }, [id, name, placeholder, autocomplete])

  const [isFocus, setFocusState] = useState(false)

  // 回车事件
  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.charCode === 13) {
      onPressEnter!(val)
    }
  }

  // 获取焦点事件
  const handleFocus = () => {
    setFocusState(true)
    onFocus!()
  }

  // 失去焦点事件
  const handleBlur = () => {
    setFocusState(false)
    onBlur!()
  }

  // 插槽内容
  const slot = () => {
    const slots: { [key: string]: Props['prefix'] } = {
      prefix: prefix || null,
      suffix: suffix || null
    }
    Object.keys(slots).forEach((key: string) => {
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
    const _className = ['field']
    _className.push(...className!.split(' '))
    if (isFocus) {
      _className.push('field--active')
    }
    return _className.join(' ')
  }, [className, isFocus])

  return (
    <div className={fieldClass} style={style}>
      <div className="field__content">
        {slot().prefix}
        <input
          {...attr}
          {...nativeProps}
          className="field__input"
          type={type!}
          value={val!}
          disabled={disabled!}
          readOnly={readonly!}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyPress={handleEnter}
        />
        {slot().suffix}
      </div>
    </div>
  )
}

Field.Password = FieldPassword
Field.propTypes = FieldPropType
Field.defaultProps = {
  ...defaultProps,
  type: 'text',
  prefix: null,
  suffix: null,
  children: {
    left: null,
    right: null
  }
}

export default Field
