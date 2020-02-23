import ComponentDemo from './index'
import Button from './button/index'
import Checkbox from './checkbox/index'
import Field from './field/index'
import SvgIcon from './svgIcon/index'
import FieldPasswordDemo from './field/password'

const demo = {
  path: '/demo',
  name: 'Demo',
  component: ComponentDemo,
  childrenRoute: [
    {
      path: '/demo/button',
      redirectFrom: '/demo',
      exact: true,
      name: 'Button',
      component: Button
    },
    {
      path: '/demo/checkbox',
      name: 'Checkbox',
      exact: true,
      component: Checkbox
    },
    {
      path: '/demo/field',
      name: 'Field',
      exact: true,
      component: Field
    },
    {
      path: '/demo/field-password',
      name: 'FieldPasswordDemo',
      exact: true,
      component: FieldPasswordDemo
    },
    {
      path: '/demo/svgicon',
      name: 'SvgIcon',
      exact: true,
      component: SvgIcon
    }
  ]
}

export default demo
