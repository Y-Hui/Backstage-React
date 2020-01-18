import LoginRegister from './index'
import Login from './view/login'
import Register from './view/register'

export default {
  path: '/user',
  component: LoginRegister,
  meta: {
    fullScreen: true
  },
  routes: [
    {
      path: '/user/login',
      component: Login
    },
    {
      path: '/user/register',
      component: Register
    }
  ]
}
