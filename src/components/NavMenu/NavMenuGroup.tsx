import React, {
  useState, useRef, useEffect, useMemo, KeyboardEvent
} from 'react'
import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'
import './NavMenuGroup.scss'

const NavMenuGroupPropType = {
  // 分组名称
  name: PropTypes.string.isRequired,
  // 自定义样式
  style: stylePropType,
  // 菜单
  children: PropTypes.arrayOf(PropTypes.element).isRequired
}
type Props = PropTypes.InferProps<typeof NavMenuGroupPropType>

interface submenuStyle {
  show: { [key: string]: string | number }
  hide: { [key: string]: string | number }
}

function NavMenuGroup(props: Props) {
  const { name, style, children } = props
  // 菜单展开/关闭
  const [isOpen, setOpen] = useState(false)
  // 子菜单展开/关闭样式
  const [panelStyle, setPanelStyle] = useState<submenuStyle>({
    show: {
      maxHeight: 'fit-content',
      visibility: 'hidden'
    },
    hide: {
      maxHeight: 'auto',
      visibility: 'hidden'
    }
  })
  // 子菜单 ref
  const submenuDom = useRef(null)
  // 组件显示/隐藏（子组件高度获取完毕后显示）
  const [isHide, setHide] = useState(true)

  // 子菜单
  const submenu = () => React.Children.map(children, (child: any) => {
    const _oldStyle = child!.props.style || {}
    // 缩进 padding
    const paddingLeft = style?.paddingLeft || 20

    const _style = {
      ..._oldStyle,
      paddingLeft: paddingLeft + 20
    }
    return React.cloneElement(child, {
      style: _style
    })
  })

  // 打开/关闭事件
  const handleOpen = () => {
    setOpen(!isOpen)
  }

  // 回车勾选
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.charCode === 13) {
      handleOpen()
    }
  }

  // 获取 children 高度
  const getHight = (callback:Function) => {
    const { offsetHeight } = submenuDom?.current! as HTMLElement

    setPanelStyle({
      show: {
        maxHeight: offsetHeight || 'fit-content'
      },
      hide: {
        maxHeight: 0
      }
    })
    callback()
  }

  // 根据 isOpen 的状态变更 class
  const menuClass = useMemo(() => {
    let _className = ['menu-group']
    if (isOpen) {
      _className.push('menu-group--active')
    } else {
      _className = ['menu-group']
    }
    return _className.join(' ')
  }, [isOpen])

  useEffect(() => {
    // 获取 children 高度
    getHight(() => {
      // 显示组件
      setHide(false)
    })
  }, [children])

  return (
    <div
      className="nav-menu"
      style={{ visibility: isHide ? 'hidden' : 'visible' }}
    >
      <div
        role="menuitem"
        aria-owns="menuitem"
        className={menuClass}
        style={style}
        onClick={handleOpen}
        onKeyPress={handleKeyPress}
        tabIndex={0}
      >
        <span>{name}</span>
        <span className="menu-group__arrow" />
      </div>
      <div
        className="nav-menu__sub"
        ref={submenuDom}
        style={isOpen ? panelStyle.show : panelStyle.hide}
      >
        {submenu()}
      </div>
    </div>
  )
}

export default NavMenuGroup
