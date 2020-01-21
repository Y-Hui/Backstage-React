import React from 'react'
// import SyntaxHighlighter from 'react-syntax-highlighter'
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import '@/views/component/index.scss'
import FieldPassword from '@module/Field/fieldPassword.jsx'

function FieldPasswordDemo() {
  return (
    <div className="demo">
      <h2>Field Password:</h2>
      <FieldPassword />
    </div>
  )
}

export default FieldPasswordDemo
