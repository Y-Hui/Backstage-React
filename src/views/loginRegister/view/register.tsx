import React from 'react'
import Button from '@module/Button/index'
import Field from '@module/Field'

const Register:React.FC = () => (
  <ul className="form">
    <li className="form__item">
      <p className="form__label form__label--bottom">用户名&nbsp;/&nbsp;邮箱</p>
      <Field
        className="form__field"
      />
    </li>
    <li className="form__item">
      <p className="form__label form__label--bottom">密码</p>
      <Field.Password
        className="form__field"
      />
    </li>
    <li className="form__item">
      <p className="form__label form__label--bottom">确认密码</p>
      <Field.Password
        className="form__field"
      />
    </li>
    <li className="form__item">
      <Button className="form__btn" round="6">注&nbsp;册</Button>
    </li>
  </ul>
)

export default Register
