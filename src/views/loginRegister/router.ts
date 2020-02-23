import { RouterConfig } from '@/@types/router'
import LoginRegister from './index'
import Login from './view/login'
import Register from './view/register'

const loginRegisterRouter:RouterConfig = {
  path: '/user',
  name: 'User',
  component: LoginRegister,
  frame: false,
  childrenRoute: [
    {
      path: '/user/login',
      name: 'Login',
      exact: true,
      frame: false,
      component: Login
    },
    {
      path: '/user/register',
      name: 'Register',
      frame: false,
      exact: true,
      component: Register
    }
  ]
}

export default loginRegisterRouter
