import React from 'react'
import PropsType from 'prop-types'
import './index.scss'

function Checkbox({ checked, onChange, children }) {
  return (
    <div
      className="art-checkbox"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
    >
      <i className="art-checkbox__icon" tabIndex="0"></i>
      <span className="art-checkbox__label">{children}</span>
    </div>
  )
}
Checkbox.propsType = {
  checked: PropsType.bool.isRequired,
  onChange: PropsType.func
}

export default Checkbox
