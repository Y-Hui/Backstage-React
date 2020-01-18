import React from 'react'
import PropTypes from 'prop-types'
import {
  Switch, Redirect
} from 'react-router-dom'
import routerModule, { RouterView } from '@/router.jsx'
import Sidebar from '@/layout/Sidebar/index.jsx'
import AppContent from '@/layout/AppContent/index.jsx'
import Navbar from '@/layout/Navbar/index.jsx'

// 在框架内渲染路由页面
function Frame(props) {
  const { children } = props
  return (
    <>
      <Sidebar />
      <AppContent>
        <Navbar />
        {children}
      </AppContent>
    </>
  )
}
Frame.propTypes = {
  children: PropTypes.element.isRequired
}

function View(route) {
  const { fullScreen = false } = route.meta || {}
  // 路由 {meta} 配置 {fullScreen} 设置全屏
  if (fullScreen) {
    return <RouterView key={route.path} {...route} />
  }
  // 在框架内加载
  return (
    <Frame>
      <RouterView key={route.path} {...route} />
    </Frame>
  )
}

function Layout() {
  return (
    <Switch>
      {
        routerModule.map((route) => (
          <View key={route.path} {...route} />
        ))
      }
      <Redirect from="/" to="/home" />
    </Switch>
  )
}

export default Layout
