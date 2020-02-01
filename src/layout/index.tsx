import React from 'react'
import {
  Switch, Redirect
} from 'react-router-dom'
import routerModule, { RouterView } from '../router'
import Sidebar from './Sidebar/index'
import AppContent from './AppContent/index'
import Navbar from './Navbar/index'

// 在框架内渲染路由页面
const Frame = (props:React.PropsWithChildren<any>) => {
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

const View:React.FC = (route:any) => {
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

const Layout:React.FC = () => (
  <Switch>
    {
        routerModule.map((route) => (
          <View key={route.path?.toString()} {...route} />
        ))
      }
    <Redirect from="/" to="/home" />
    <Redirect from="/login" to="/user/login" />
    <Redirect from="/register" to="/user/register" />
  </Switch>
)

export default Layout
