import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@module/Button/index.jsx'
import Checkbox from '@module/Checkbox/index.jsx'
import './index.scss'

function Home(props) {
  const [check1, updateCheck1] = useState(true)
  const [check2, updateCheck2] = useState(false)
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
      <Button color="gray">Secondary</Button>
      <Button className="change" color="#2B2F32">Customize</Button>
      <br />
      <br />
      <Button round>Danger</Button>
      <Button color="red" round className="change">Danger</Button>
      <Button color="yellow" round="10" className="change">Danger</Button>
      <br />
      <br />
      <Checkbox checked disable>禁用选项</Checkbox>
      <Checkbox checked={check1} onChange={updateCheck1}>已阅读并同意</Checkbox>
      <Checkbox checked={check2} onChange={updateCheck2}>哈哈</Checkbox>
    </div>
  )
}
Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    createHref: PropTypes.func.isRequired
  }).isRequired
}

export default Home
