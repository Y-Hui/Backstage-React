import React from 'react'
import './index.scss'
import NavMenuGroup from '@module/NavMenu/NavMenuGroup.jsx'
import NavMenu from '@module/NavMenu/NavMenu.jsx'
import { useHistory } from 'react-router-dom'

function SideBar() {
  const history = useHistory()
  return (
    <aside className="side-bar">
      <NavMenu onClick={() => history.replace('/home')}>首页</NavMenu>
      <NavMenu onClick={() => history.replace('/profile')}>个人中心</NavMenu>
      <NavMenuGroup name="组件演示">
        <NavMenu onClick={() => history.replace('/demo/button')}>Button</NavMenu>
        <NavMenu onClick={() => history.replace('/demo/checkbox')}>Checkbox</NavMenu>
        <NavMenu onClick={() => history.replace('/demo/svgicon')}>SvgIcon</NavMenu>
        <NavMenuGroup name="Text Box">
          <NavMenu>步进器</NavMenu>
          <NavMenuGroup name="Field">
            <NavMenu onClick={() => history.replace('/demo/field')}>Default</NavMenu>
            <NavMenu onClick={() => history.replace('/demo/field-password')}>Password</NavMenu>
          </NavMenuGroup>
        </NavMenuGroup>
      </NavMenuGroup>
      <NavMenuGroup name="工作台">
        <NavMenu>计划任务</NavMenu>
        <NavMenu>分配给我</NavMenu>
        <NavMenu>权限管理</NavMenu>
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

export default React.memo(SideBar)
