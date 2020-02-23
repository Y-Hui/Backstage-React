import React from 'react'
import { NavLink, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import './login.scss'

const LayoutProps = {
  children: PropTypes.node
}
type Props = PropTypes.InferProps<typeof LayoutProps>

const LoginRegister:React.FC = (props:Props) => {
  const { children } = props
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
          {children}
        </Switch>
      </div>
    </div>
  )
}

export default LoginRegister
