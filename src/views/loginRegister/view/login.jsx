import React from 'react'
import Button from '@module/Button/index.jsx'

function Login() {
  return (
    <ul className="form">
      <li className="form__item">
        <p className="form__label form__label--bottom">用户名&nbsp;/&nbsp;邮箱</p>
        <input className="form__field form__field--input" type="text" />
      </li>
      <li className="form__item">
        <p className="form__label form__label--bottom">密码</p>
        <input className="form__field form__field--input" type="password" />
        <p className="form__label form__label--top">找回密码</p>
      </li>
      <li className="form__item">
        <Button className="button-lg" round="6">登&nbsp;录</Button>
      </li>
    </ul>
  )
}

export default Login
