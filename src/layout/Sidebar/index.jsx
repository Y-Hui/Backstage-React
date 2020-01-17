import React from 'react'
import './index.scss'
import NavMenuGroup from '@module/NavMenu/NavMenuGroup.jsx'
import NavMenu from '@module/NavMenu/NavMenu.jsx'
import { useHistory } from 'react-router-dom'

function SideBar() {
  const history = useHistory()
  function handleClick() {
    history.push('/home')
  }
  return (
    <aside className="side-bar">
      <NavMenu onClick={handleClick}>首页</NavMenu>
      <NavMenu>个人中心</NavMenu>
      <NavMenuGroup name="工作台">
        <NavMenu>计划任务</NavMenu>
        <NavMenu>分配给我</NavMenu>
        <NavMenu>权限管理</NavMenu>
      </NavMenuGroup>
      <NavMenuGroup name="嵌套路由">
        <NavMenuGroup name="二级路由">
          <NavMenuGroup name="三级嵌套">
            <NavMenu>四级路由</NavMenu>
            <NavMenu>四级路由</NavMenu>
            <NavMenu>四级路由</NavMenu>
            <NavMenu>四级路由</NavMenu>
          </NavMenuGroup>
          <NavMenu>三级路由</NavMenu>
          <NavMenu>三级路由</NavMenu>
        </NavMenuGroup>
        <NavMenu>二级路由</NavMenu>
      </NavMenuGroup>
      <NavMenuGroup name="异常页面">
        <NavMenu>101</NavMenu>
        <NavMenu>202</NavMenu>
        <NavMenu>403</NavMenu>
        <NavMenu>404</NavMenu>
        <NavMenu>500</NavMenu>
      </NavMenuGroup>
      <NavMenuGroup name="事物队列">
        <NavMenu>全部</NavMenu>
        <NavMenu>待处理</NavMenu>
        <NavMenu>处理中</NavMenu>
        <NavMenu>已完成</NavMenu>
      </NavMenuGroup>
    </aside>
  )
}

export default SideBar
