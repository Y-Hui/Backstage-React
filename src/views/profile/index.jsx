import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Field from '@module/Field/field.jsx'
import SvgIcon from '@module/SvgIcon/svgIcon.jsx'

import './index.scss'

function Profile() {
  const [value, setValue] = useState('Hello')
  const [logo, setLogo] = useState('#art')
  return (
    <div className="profile">
      <Link to="/home">主页</Link>
      <br />
      <br />
      <Field value="Disabled">
        {
          {
            right: <SvgIcon iconName="#search" />
          }
        }
      </Field>
      <br />
      <br />
      <Field
        value="Art Design"
        onFocus={() => setLogo('#art-color')}
        onBlur={() => setLogo('#art')}
      >
        {
          {
            left: <SvgIcon iconName={logo} />
          }
        }
      </Field>
      <br />
      <br />
      <Field value={value} onChange={(val) => setValue(val)} />
      <p>{value}</p>
      <br />
      <SvgIcon iconName="#search" color="#f03" />
      <SvgIcon iconName="#search" />
    </div>
  )
}
export default Profile
