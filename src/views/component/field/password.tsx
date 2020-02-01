import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import '@/views/component/index.scss'
import Field from '@module/Field'

function FieldPasswordDemo() {
  const [pwd, setPwd] = useState('')
  return (
    <div className="demo">
      <h2>Field Password:</h2>
      <Field.Password value={pwd} onChange={(val) => setPwd(val)} />
      <p>若不需要明文切换，请使用 Field 组件，且设置 type 为 password</p>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'import Field from \'@module/Field\''}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'<Field.Password />'}
      </SyntaxHighlighter>
    </div>
  )
}

export default FieldPasswordDemo
