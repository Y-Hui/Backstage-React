import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import '@/views/component/index.scss'
import Field from '@module/Field/field'
import SvgIcon from '@module/SvgIcon/svgIcon'

const FieldDemo: React.FC = () => {
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
      <Field
        value="Enter keywords"
        suffix={(
          <SvgIcon
            iconName="#search"
            color="#8a8a8a"
            style={{ padding: '0 10px' }}
          />
        )}
      />
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {
`<Field
  value="Enter keywords"
  suffix={(
    <SvgIcon
      iconName="#search"
      color="#8a8a8a"
      style={{ padding: '0 10px' }}
    />
  )}
/>`
}
      </SyntaxHighlighter>
      <Field
        value="Enter keywords"
        prefix={(
          <SvgIcon
            iconName="#search"
            color="#8a8a8a"
            style={{ padding: '0 10px' }}
          />
        )}
      />
      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {
`<Field
  value="Enter keywords"
  prefix={(
    <SvgIcon
      iconName="#search"
      color="#8a8a8a"
      style={{ padding: '0 10px' }}
    />
  )}
/>`
}
      </SyntaxHighlighter>
      <br />
      <h3>Event</h3>
      <Field
        value="Art Vision"
        onFocus={() => setLogo('#art-color')}
        onBlur={() => setLogo('#art')}
        prefix={(
          <SvgIcon iconName={logo} style={{ padding: '0 10px' }} />
        )}
      />
      <SyntaxHighlighter language="JavaScript" style={atomOneDark}>
        {
`import React, { useState } from 'react'
const [logo, setLogo] = useState('#art')`
}
      </SyntaxHighlighter>

      <SyntaxHighlighter language="React JSX" style={atomOneDark}>
        {
`<Field
  value="Art Vision"
  onFocus={() => setLogo("#art-color")}
  onBlur={() => setLogo("#art")}
  prefix={(
    <SvgIcon iconName={logo} style={{ padding: '0 10px' }} />
  )}
/>`
}
      </SyntaxHighlighter>
    </div>
  )
}

export default FieldDemo
