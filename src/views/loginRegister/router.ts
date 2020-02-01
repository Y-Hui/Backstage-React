import { RouteConfig } from 'react-router-config'
import LoginRegister from './index'
import Login from './view/login'
import Register from './view/register'

const loginRegisterRouter:RouteConfig = {
  path: '/user',
  component: LoginRegister,
  meta: {
    fullScreen: true
  },
  routes: [
    {
      path: '/user/login',
      exact: true,
      component: Login
    },
    {
      path: '/user/register',
      exact: true,
      component: Register
    }
  ]
}

export default loginRegisterRouter
