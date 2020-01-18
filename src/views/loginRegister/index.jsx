import React from 'react'
import PropTypes from 'prop-types'
import './login.scss'
import { Switch, NavLink } from 'react-router-dom'
import { RouterView } from '@/router.jsx'

function LoginRegister({ routes }) {
  return (
    <div className="login">
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
            routes.map((route) => (
              <RouterView key={route.path} {...route} />
            ))
          }
        </Switch>
      </div>
    </div>
  )
}
LoginRegister.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  routes: PropTypes.array.isRequired
}

export default LoginRegister
