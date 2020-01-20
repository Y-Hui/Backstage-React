import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import '@/views/component/index.scss'
import Button from '@module/Button/index.jsx'

function ButtonDemo() {
  return (
    <div className="demo">
      <h2>Button:</h2>
      <h3>Color</h3>
      <Button>Default</Button>
      <Button color="red">Red</Button>
      <Button color="yellow">Yellow</Button>
      <Button color="gray">Gray</Button>
      <Button style={{ color: '#fff' }} color="#2B2F32">#2B2F32</Button>

      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {`// color: ['blue', 'red', 'yellow', 'gray']\n
<Button color="red">Red</Button>\n
<Button style={{ color: '#fff' }} color="#2B2F32">#2B2F32</Button>`}
      </SyntaxHighlighter>
      <br />
      <h3>Round</h3>
      <Button round>Round</Button>
      <Button color="red" round="6">6px Round</Button>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'<Button round>Round</Button>\n<Button color="red" round="6">6px Round</Button>'}
      </SyntaxHighlighter>
    </div>
  )
}

export default ButtonDemo
