import React from 'react'
import './login.scss'
import { Switch, NavLink } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'
import { RouterView } from '@/router.tsx'

const LoginRegister:React.FC = (props:RouteConfig) => {
  const { routes } = props

  return (
    <div className="user">
      <div className="operating">
        <header className="tab">
          <NavLink
            className="tab__item"
            to="/user/login"
            replace
            exact
            activeClassName="tab__item--active"
          >
            登录
          </NavLink>
          <NavLink
            className="tab__item"
            to="/user/register"
            replace
            exact
            activeClassName="tab__item--active"
          >
            注册
          </NavLink>
        </header>
        <Switch>
          {
            routes!.map((route:RouteConfig) => (
              <RouterView key={route.path?.toString()} {...route} />
            ))
          }
        </Switch>
      </div>
    </div>
  )
}

export default LoginRegister
