import React, { useState, useMemo } from 'react'
import SvgIcon from '@module/SvgIcon/svgIcon.tsx'
import { Props, defaultProps } from './props/index'
import Field from './field'

export default function FieldPassword(props: Props) {
  const { value, onChange, ...$attrs } = props
  // 文本框内容
  const [val, setVal] = useState(value)
  /** 是否显示密码 */
  const [showPwd, setShowPwd] = useState(false)

  /** 文本框 type */
  const type = useMemo(() => (showPwd ? 'text' : 'password'), [showPwd])
  /** 右侧眼睛图标 */
  const icon = useMemo(() => (showPwd ? '#eye' : '#eye-invisible'), [showPwd])

  /** 文本内容更新 */
  const handleChange = (newVal: Props['value']) => {
    setVal(newVal)
    onChange!(newVal)
  }

  /** 点击显示密码 */
  const handleType = () => {
    setShowPwd((state) => !state)
  }

  return (
    <Field
      {...$attrs}
      value={val}
      type={type}
      onChange={(newVal) => handleChange(newVal)}
      suffix={(
        <SvgIcon
          iconName={icon}
          color="#a8a8a8"
          style={{ padding: 10, cursor: 'pointer' }}
          onClick={handleType}
        />
      )}
    />
  )
}
FieldPassword.defaultProps = defaultProps
