import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import './index.scss'

function SvgIcon(props) {
  const {
    iconName, color, className, style, onClick
  } = props

  // 设置类名
  const setClass = useMemo(() => {
    const name = ['svg-icon']
    name.push(...className.split(' '))
    return name.join(' ')
  }, [className])

  return (
    <svg className={setClass} color={color} style={style} onClick={onClick}>
      <use xlinkHref={iconName} />
    </svg>
  )
}
SvgIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: stylePropType,
  color: PropTypes.string,
  onClick: PropTypes.func
}
SvgIcon.defaultProps = {
  color: '',
  className: '',
  style: {},
  onClick: () => {}
}

export default SvgIcon
