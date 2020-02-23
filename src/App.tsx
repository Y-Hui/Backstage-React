import React from 'react'
import {
  BrowserRouter, Switch, Route, Redirect
} from 'react-router-dom'
import { RouterConfig, RouterType } from '@/@types/router'
import '@/icons/index'
import Layout from '@/layout/layout'

const routerModules: RouterType = {
  frame: [], // 框架内显示路由
  fullScreen: [] // 完整屏幕路由
}
// 自动导入路由模块。分成两类路由
const routerConfig = require.context('@/views', true, /router\.(js|ts)$/)
routerConfig.keys().forEach((fileName: string) => {
  const _route = routerConfig(fileName).default
  const route = Array.isArray(_route) ? _route : [_route]
  route.forEach((item) => {
    if (item.frame === false) {
      routerModules.fullScreen.push(item)
    } else {
      routerModules.frame.push(item)
    }
  })
})

function App() {
  // 递归渲染路由以及子路由
  const renderRoute = (routeList:RouterConfig[]) => (
    routeList.map((item) => (
      <Route
        key={item.path}
        exact={item.exact || false}
        path={item.path}
        render={(prop) => {
          const childrenRoute = item.childrenRoute
            ? renderRoute(item.childrenRoute) : null
          return (
            <item.component {...prop}>{childrenRoute}</item.component>
          )
        }}
      />
    ))
  )
  return (
    <BrowserRouter>
      <Switch>
        <Redirect from="/login" to="/user/login" />
        <Redirect from="/register" to="/user/register" />
        <Redirect from="/" exact to="/home" />
        {/* 顶级重定向需要写在此处 */}
        {/* 子路由视图容器需要显示声明并渲染 children */}
        {
          renderRoute(routerModules.fullScreen)
        }
        <Route
          path="/"
          render={() => (
            <Layout>
              <Switch>
                {
                  renderRoute(routerModules.frame)
                }
              </Switch>
            </Layout>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
