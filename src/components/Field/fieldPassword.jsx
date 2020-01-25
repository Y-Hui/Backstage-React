import React, { useState } from 'react'
import SvgIcon from '@module/SvgIcon/svgIcon.jsx'
import { types, defaultProps } from './fieldProps'
import Field from './field'

function FieldPassword(props) {
  const {
    id, name, value, placeholder,
    disabled, readonly, autocomplete,
    style, nativeProps, className,
    onChange, onFocus, onBlur, onPressEnter
  } = props
  const [val, setVal] = useState(value)
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState('#eye-invisible')

  const handleChange = (newVal) => {
    setVal(newVal)
    onChange(newVal)
  }

  const handleType = () => {
    setType(type === 'password' ? 'text' : 'password')
    setIcon(icon === '#eye' ? '#eye-invisible' : '#eye')
  }

  const showButton = () => ({
    right: <SvgIcon
      iconName={icon}
      color="#a8a8a8"
      style={{ cursor: 'pointer' }}
      onClick={handleType}
    />
  })

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
    >
      {showButton()}
    </Field>
  )
}

FieldPassword.propTypes = {
  ...types
}
FieldPassword.defaultProps = {
  ...defaultProps
}

export default FieldPassword
