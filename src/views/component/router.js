import ComponentDemo from './index'
import Button from './button/index'
import Checkbox from './checkbox/index'
import Field from './field/index'
import SvgIcon from './svgIcon/index'
import FieldPasswordDemo from './field/password'

export default {
  path: '/demo',
  component: ComponentDemo,
  routes: [
    {
      path: '/demo/button',
      component: Button
    },
    {
      path: '/demo/checkbox',
      component: Checkbox
    },
    {
      path: '/demo/field',
      component: Field
    },
    {
      path: '/demo/field-password',
      exact: true,
      component: FieldPasswordDemo
    },
    {
      path: '/demo/svgicon',
      component: SvgIcon
    }
  ]
}
