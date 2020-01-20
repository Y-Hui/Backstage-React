import React from 'react'
import PropTypes from 'prop-types'
import Button from '@module/Button/index.jsx'
import './index.scss'

function Home(props) {
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
Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    createHref: PropTypes.func.isRequired
  }).isRequired
}

export default Home
