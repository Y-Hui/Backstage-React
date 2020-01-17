import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

const routerModule = []
// 自动导入路由模块
const routerConfig = require.context('./views', true, /\.router\.js$/)
routerConfig.keys().forEach((fileName) => {
  const route = routerConfig(fileName).default
  routerModule.push(route)
})

function RouterView(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

function Router() {
  return (
    <Switch>
      {
        routerModule.map((route) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <RouterView key={route.path} {...route} />
        ))
      }
      <Redirect from="/" to="/home" />
    </Switch>
  )
}

export default Router
export {
  RouterView
}
