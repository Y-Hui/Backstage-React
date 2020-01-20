import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

function SvgIcon({ iconName, color }) {
  return (
    <svg className="svg-icon" color={color}>
      <use xlinkHref={iconName} />
    </svg>
  )
}
SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  color: PropTypes.string
}
SvgIcon.defaultProps = {
  color: ''
}

export default SvgIcon
