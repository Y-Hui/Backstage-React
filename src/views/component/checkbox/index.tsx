import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import '@/views/component/index.scss'
import Checkbox from '@module/Checkbox/index'

const CheckboxDemo:React.FC = () => {
  const [check1, updateCheck1] = useState(false)
  const [check2, updateCheck2] = useState(false)
  return (
    <div className="demo">
      <h2>Checkbox:</h2>
      <h3>Basic</h3>
      <Checkbox checked={check1} onChange={updateCheck1} />
      <Checkbox checked />
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'<Checkbox checked={val} onChange={setVal} />\n<Checkbox checked />'}
      </SyntaxHighlighter>
      <br />

      <h3>Slot</h3>
      <Checkbox checked>不可变更</Checkbox>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'<Checkbox checked>不可变更</Checkbox>'}
      </SyntaxHighlighter>
      <Checkbox checked={check2} onChange={updateCheck2}>已阅读并同意协议</Checkbox>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'<Checkbox checked={val} onChange={setVal}>已阅读并同意协议</Checkbox>'}
      </SyntaxHighlighter>
      <br />

      <h3>Disable</h3>
      <Checkbox checked={check2} disabled>禁用选项</Checkbox>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'<Checkbox checked={val} disabled>禁用选项</Checkbox>'}
      </SyntaxHighlighter>

      <Checkbox checked disabled>默认选中且禁用</Checkbox>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'<Checkbox checked disabled>默认选中且禁用</Checkbox>'}
      </SyntaxHighlighter>
    </div>
  )
}

export default CheckboxDemo
