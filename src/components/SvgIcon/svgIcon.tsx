import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import './index.scss'

const SvgIconPropType = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  style: stylePropType,
  onClick: PropTypes.func
}
type Props = PropTypes.InferProps<typeof SvgIconPropType>

const SvgIcon:React.FC<Props> = (props: Props) => {
  const {
    iconName, color, className, style, onClick
  } = props

  // 设置类名
  const _className = useMemo(() => {
    const name = ['svg-icon']
    name.push(...className!.split(' '))
    return name.join(' ')
  }, [className])

  return (
    <svg
      className={_className}
      color={color!}
      style={style}
      onClick={onClick!}
    >
      <use xlinkHref={iconName} />
    </svg>
  )
}

SvgIcon.propTypes = SvgIconPropType
SvgIcon.defaultProps = {
  color: undefined,
  className: '',
  style: {},
  onClick: () => { }
}

export default SvgIcon
