import React from 'react'
import { Route } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'

const routerModule: Array<RouteConfig> = []

// 自动导入路由模块
const routerConfig = require.context('./views', true, /router\.(js|ts)/)
routerConfig.keys().forEach((fileName: string) => {
  const route = routerConfig(fileName).default
  if (Array.isArray(route)) {
    routerModule.push(...route)
  } else {
    routerModule.push(route)
  }
})

// 路由视图组件
function RouterView(route: RouteConfig) {
  const Tag = route.component!
  return (
    <Route
      path={route.path}
      render={(props) => (
        <Tag
          {...props}
          {...{
            meta: route.meta,
            routes: route.routes
          }}
        />
      )}
    />
  )
}
export default routerModule
export { RouterView }
