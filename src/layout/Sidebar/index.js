import React from 'react';
import './index.scss';
import NavMenu from '@module/NavMenu'

function SideBar() {
  return (
    <aside className="side-bar">
      <NavMenu>工作台</NavMenu>
      <NavMenu>首页</NavMenu>
      <NavMenu>个人中心</NavMenu>
      <NavMenu>偏好设置</NavMenu>
    </aside>
  )
}

export default SideBar
