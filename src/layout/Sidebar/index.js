import React from 'react';
import './index.scss';
import NavMenu from '@module/NavMenu/NavMenu'
import NavMenuItem from '@module/NavMenu/NavMenuItem'

function SideBar() {
  return (
    <aside className="side-bar">
      <NavMenuItem>首页</NavMenuItem>
      <NavMenu name="嵌套路由">
        <NavMenu name="二级路由">
          <NavMenu name="三级嵌套">
            <NavMenuItem>四级路由</NavMenuItem>
            <NavMenuItem>四级路由</NavMenuItem>
            <NavMenuItem>四级路由</NavMenuItem>
            <NavMenuItem>四级路由</NavMenuItem>
          </NavMenu>
          <NavMenuItem>三级路由</NavMenuItem>
          <NavMenuItem>三级路由</NavMenuItem>
        </NavMenu>
        <NavMenuItem>二级路由</NavMenuItem>
      </NavMenu>
      <NavMenu name="工作台">
        <NavMenuItem>仪表盘</NavMenuItem>
        <NavMenuItem>待办事项</NavMenuItem>
        <NavMenuItem>权限管理</NavMenuItem>
      </NavMenu>
      <NavMenu name="异常页面">
        <NavMenuItem>101</NavMenuItem>
        <NavMenuItem>202</NavMenuItem>
        <NavMenuItem>403</NavMenuItem>
        <NavMenuItem>404</NavMenuItem>
        <NavMenuItem>500</NavMenuItem>
      </NavMenu>
      <NavMenu name="事物队列">
        <NavMenuItem>全部</NavMenuItem>
        <NavMenuItem>待处理</NavMenuItem>
        <NavMenuItem>处理中</NavMenuItem>
        <NavMenuItem>已完成</NavMenuItem>
      </NavMenu>
    </aside>
  )
}

export default SideBar
