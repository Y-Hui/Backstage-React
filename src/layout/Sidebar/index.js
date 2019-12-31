import React from 'react';
import './index.scss';
import NavMenu from '@module/NavMenu/NavMenu'
import NavMenuItem from '@module/NavMenu/NavMenuItem'

function SideBar() {
  return (
    <aside className="side-bar">
      <NavMenu name="工作台">
        <NavMenuItem>工作台</NavMenuItem>
      </NavMenu>
      <NavMenu>首页</NavMenu>
      <NavMenu>个人中心</NavMenu>
      <NavMenu>偏好设置</NavMenu>
    </aside>
  )
}

export default SideBar
