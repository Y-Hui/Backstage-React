import React, { useState } from 'react'
import SvgIcon from '@module/SvgIcon/svgIcon.jsx'
import Field from './field'

function FieldPassword() {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState('#eye-invisible')

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
    <Field type={type}>
      {showButton()}
    </Field>
  )
}

export default FieldPassword
