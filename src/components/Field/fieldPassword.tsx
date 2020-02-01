import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '@module/SvgIcon/svgIcon.tsx'
import { types, defaultProps } from './fieldProps'
import Field from './field'

// 密码框 Props 类型验证
const FieldPasswordPropType = {
  ...types,
  children: PropTypes.node
}
type Props = PropTypes.InferProps<typeof FieldPasswordPropType>

const FieldPassword: React.FC<Props> = (props: Props) => {
  const {
    id, name, value, placeholder,
    disabled, readonly, autocomplete,
    style, nativeProps, className,
    children,
    onChange, onFocus, onBlur, onPressEnter
  } = props

  // input.value
  const [val, setVal] = useState(value)
  // input.type
  const [type, setType] = useState('password')
  // SvgIcon.iconName
  const [icon, setIcon] = useState('#eye-invisible')

  // 文本内容更新
  const handleChange = (newVal: Props['value']) => {
    setVal(newVal)
    onChange!(newVal)
  }

  // 点击显示密码
  const handleType = () => {
    setType(type === 'password' ? 'text' : 'password')
    setIcon(icon === '#eye' ? '#eye-invisible' : '#eye')
  }

  // 插槽内容
  // const slot = () => ({
  //   left: children,
  //   right: <SvgIcon
  //     iconName={icon}
  //     color="#a8a8a8"
  //     style={{ cursor: 'pointer' }}
  //     onClick={handleType}
  //   />
  // })

  return (
    <Field
      id={id}
      name={name}
      className={className}
      placeholder={placeholder}
      disabled={disabled}
      readonly={readonly}
      autocomplete={autocomplete}
      style={style}
      nativeProps={nativeProps}
      type={type}
      onChange={(newVal) => handleChange(newVal)}
      onFocus={onFocus}
      onBlur={onBlur}
      value={val}
      onPressEnter={onPressEnter}
      prefix={children}
      suffix={(
        <SvgIcon
          iconName={icon}
          color="#a8a8a8"
          style={{ padding: 10, cursor: 'pointer' }}
          onClick={handleType}
        />
      )}
    />
  )
}

FieldPassword.propTypes = types
FieldPassword.defaultProps = {
  ...defaultProps,
  children: null
}

export default FieldPassword
