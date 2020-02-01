import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import '@/views/component/index.scss'
import SvgIcon from '@module/SvgIcon/svgIcon'

const SvgIconDemo:React.FC = () => (
  <div className="demo">
    <h2>SvgIcon:</h2>
    <SvgIcon iconName="#search" />
    <SyntaxHighlighter language="React JSX" style={atomOneDark}>
      {'<SvgIcon iconName="#search" />'}
    </SyntaxHighlighter>
    <br />
    <SvgIcon iconName="#search" color="red" />
    <SyntaxHighlighter language="React JSX" style={atomOneDark}>
      {'<SvgIcon iconName="#search" color="red" />'}
    </SyntaxHighlighter>
    <br />
    <SvgIcon iconName="#art-color" />
    <p>彩色图标无法设置颜色</p>
    <SyntaxHighlighter language="React JSX" style={atomOneDark}>
      {'<SvgIcon iconName="#art-color" />'}
    </SyntaxHighlighter>
  </div>
)

export default SvgIconDemo
