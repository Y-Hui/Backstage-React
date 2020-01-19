import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function Checkbox(props) {
  const {
    checked, disable, keyCode, onChange, children
  } = props

  // 事件总线
  const eventBus = () => {
    if (disable === false) {
      onChange(!checked)
    }
  }
  // 键盘事件
  const handleKeyPress = (event) => {
    if (event.charCode === keyCode) {
      eventBus()
    }
  }

  const className = useMemo(() => {
    const name = ['art-checkbox']
    if (disable) {
      name.push('art-checkbox--disable')
    }
    return name.join(' ')
  }, [disable])

  return (
    <div
      className={className}
      role="checkbox"
      aria-checked={checked}
      aria-disabled={disable}
      onClick={eventBus}
      onKeyPress={handleKeyPress}
    >
      <i className="art-checkbox__icon" tabIndex="0" />
      <span className="art-checkbox__label">{children}</span>
    </div>
  )
}
Checkbox.propTypes = {
  checked: PropTypes.bool,
  disable: PropTypes.bool,
  onChange: PropTypes.func,
  keyCode: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
}
Checkbox.defaultProps = {
  checked: false,
  disable: false,
  keyCode: 13,
  onChange: () => {},
  children: null
}

export default React.memo(Checkbox)
