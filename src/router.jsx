import React from 'react'
import { Route } from 'react-router-dom'

const routerModule = []
// 自动导入路由模块
const routerConfig = require.context('./views', true, /router\.js|\.router\.js$/)
routerConfig.keys().forEach((fileName) => {
  const route = routerConfig(fileName).default
  if (Array.isArray(route)) {
    routerModule.push(...route)
  } else {
    routerModule.push(route)
  }
})

// 路由视图组件
function RouterView(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        <route.component
          {...props}
          meta={route.meta}
          routes={route.routes}
        />
      )}
    />
  )
}
export default routerModule
export { RouterView }
