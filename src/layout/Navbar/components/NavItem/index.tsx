import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '@module/SvgIcon/svgIcon'
import './NavItem.scss'

const NavItemPropType = {
  name: PropTypes.string.isRequired,
  active: PropTypes.bool
}
type Props = PropTypes.InferProps<typeof NavItemPropType>

function NavItem(props: Props) {
  const { name, active } = props

  // 类名控制
  const _className = useMemo(() => {
    let classArr = ['nav-item']
    if (active) {
      classArr.push('nav-item--active')
    } else {
      classArr = ['nav-item']
    }
    return classArr.join(' ')
  }, [active])

  return (
    <div className={_className}>
      <span className="nav-item__content">{name}</span>
      <SvgIcon
        className="nav-item__close"
        iconName={active ? '#close' : '#close2'}
        color="#fff"
      />
    </div>
  )
}
NavItem.propTypes = NavItemPropType
NavItem.defaultProps = {
  active: false
}

export default NavItem
