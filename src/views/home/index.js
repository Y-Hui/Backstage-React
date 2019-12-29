import React from 'react';
import Button from '@module/Button';
import Checkbox from '@module/Checkbox';
import './index.scss';

class Home extends React.Component {
  constructor() {
    super()
    this.handleCheck = this.handleCheck.bind(this);
    this.handleCheck2 = this.handleCheck2.bind(this);
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
  render() {
    return (
      <div className="home">
        <Button>Primary</Button>
        <Button color="red">Danger</Button>
        <Button color="yellow">Warning</Button>
        <Button color="gray">Secondary</Button>
        <Button className="change" color="#2B2F32">Customize</Button>
        <br />
        <br />
        <Button round>Danger</Button>
        <Button color="red" round className="change">Danger</Button>
        <Button color="yellow" round="10" className="change">Danger</Button>
        <Button className="circle" color="gray" round="50%">A</Button>
        <br />
        <br />
        <Checkbox checked={this.state.check1} onChange={this.handleCheck} />
        <br />
        <Checkbox checked={this.state.check2} onChange={this.handleCheck2}>哈哈</Checkbox>
        <Checkbox checked={this.state.check2} onChange={this.handleCheck2}>哈哈</Checkbox>
      </div>
    )
  }
}

export default Home
