import React from 'react'
import Button from '@module/Button/index.jsx'
import Field from '@module/Field/field.jsx'

function Login() {
  return (
    <ul className="form">
      <li className="form__item">
        <p className="form__label form__label--bottom">用户名&nbsp;/&nbsp;邮箱</p>
        <Field
          className="form__field"
        />
      </li>
      <li className="form__item">
        <p className="form__label form__label--bottom">密码</p>
        <Field
          className="form__field"
          type="password"
        />
        <p className="form__label form__label--top">找回密码</p>
      </li>
      <li className="form__item">
        <Button className="form__btn" round="4">登&nbsp;录</Button>
      </li>
    </ul>
  )
}

export default Login
