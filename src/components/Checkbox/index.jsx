import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Checkbox(props) {
  const { checked, onChange, children } = props
  // 回车勾选
  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      onChange(!checked)
    }
  }
  return (
    <div
      className="art-checkbox"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      onKeyPress={handleKeyPress}
    >
      <i className="art-checkbox__icon" tabIndex="0" />
      <span className="art-checkbox__label">{children}</span>
    </div>
  )
}
Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}
Checkbox.defaultProps = {
  onChange: () => {},
  children: null
}

export default Checkbox
