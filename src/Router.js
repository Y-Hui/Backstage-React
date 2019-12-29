import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const routerModule = []
// 自动导入路由模块
const routerConfig = require.context('./views', true, /\.router\.js$/)
routerConfig.keys().forEach(fileName => {
  const route = routerConfig(fileName).default
  routerModule.push(route)
})

function RouterView(route) {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <Redirect to="/home" />
          )}
        />
        {
          routerModule.map((route) => <RouterView key={route.path} {...route} />)
        }
      </Switch>
    </BrowserRouter>
  )
}

export default Router
export {
  RouterView
}
