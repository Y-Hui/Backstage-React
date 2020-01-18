import React from 'react'
import Button from '@module/Button/index.jsx'
import Checkbox from '@module/Checkbox/index.jsx'
import './index.scss'
import PropTypes from 'prop-types'

class Home extends React.Component {
  constructor() {
    super()
    this.handleCheck = this.handleCheck.bind(this)
    this.handleCheck2 = this.handleCheck2.bind(this)
    this.$router = this.$router.bind(this)
    this.state = {
      check1: false,
      check2: true
    }
  }

  handleCheck(value) {
    this.setState({
      check1: value
    })
  }

  handleCheck2(value) {
    this.setState({
      check2: value
    })
  }

  $router() {
    const { history } = this.props
    history.push({
      pathname: '/profile'
    })
  }

  render() {
    const { check1, check2 } = this.state
    return (
      <div className="home">
        <Button onClick={this.$router}>个人中心</Button>
        <Button color="red">Danger</Button>
        <Button color="yellow">Warning</Button>
        <Button color="gray">Secondary</Button>
        <Button className="change" color="#2B2F32">Customize</Button>
        <br />
        <br />
        <Button round>Danger</Button>
        <Button color="red" round className="change">Danger</Button>
        <Button color="yellow" round="10" className="change">Danger</Button>
        <br />
        <br />
        <Checkbox checked={check1} onChange={this.handleCheck} />
        <br />
        <Checkbox checked={check2} onChange={this.handleCheck2}>哈哈</Checkbox>
        <Checkbox checked={check2} onChange={this.handleCheck2}>哈哈</Checkbox>
      </div>
    )
  }
}
Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
    createHref: PropTypes.func.isRequired
  }).isRequired
}

export default Home
