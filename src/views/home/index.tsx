import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Button from '@module/Button/index'
import './index.scss'

function Home(props:RouteComponentProps) {
  const { history } = props

  return (
    <div className="home">
      <Button onClick={() => history.push('/profile')}>个人中心</Button>
      <Button
        onClick={() => history.push('/user/login')}
        color="red"
      >
        登录
      </Button>
      <Button
        onClick={() => history.push('/user/register')}
        color="yellow"
      >
        注册
      </Button>
    </div>
  )
}

export default Home
