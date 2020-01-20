import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import '@/views/component/index.scss'
import Field from '@module/Field/field.jsx'
import SvgIcon from '@module/SvgIcon/svgIcon.jsx'

function FieldDemo() {
  const [value, setValue] = useState('Hello')
  const [logo, setLogo] = useState('#art')
  return (
    <div className="demo">
      <h2>Field:</h2>
      <Field value={value} onChange={(val) => setValue(val)} />
      <p style={{ paddingLeft: '6px' }}>{value}</p>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'<Field value={value} onChange={(val) => setValue(val)} />'}
      </SyntaxHighlighter>
      <br />

      <h3>Disable</h3>
      <Field value="This is disabled" disabled />
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {'<Field value="This is disabled" disabled />'}
      </SyntaxHighlighter>
      <br />

      <h3>Icon</h3>
      <Field value="Enter keywords">
        {
          {
            right: <SvgIcon iconName="#search" color="#8a8a8a" />
          }
        }
      </Field>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {`<Field value="Enter keywords">
  {
    {
      right: <SvgIcon iconName="#search" color="#8a8a8a" />
    }
  }
</Field>`}
      </SyntaxHighlighter>
      <Field value="Enter keywords">
        {
          {
            left: <SvgIcon iconName="#search" color="#8a8a8a" />
          }
        }
      </Field>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {`<Field value="Enter keywords">
  {
    {
      left: <SvgIcon iconName="#search" color="#8a8a8a" />
    }
  }
</Field>`}
      </SyntaxHighlighter>
      <br />
      <h3>Event</h3>
      <Field
        value="Art Vision"
        onFocus={() => setLogo('#art-color')}
        onBlur={() => setLogo('#art')}
      >
        {
          {
            left: <SvgIcon iconName={logo} />
          }
        }
      </Field>
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {`const [logo, setLogo] = useState('#art')\n
<Field
  value="Art Vision"
  onFocus={() => setLogo('#art-color')}
  onBlur={() => setLogo('#art')}
>
  {
    {
      left: <SvgIcon iconName={logo} />
    }
  }
</Field>`}
      </SyntaxHighlighter>

    </div>
  )
}

export default FieldDemo
