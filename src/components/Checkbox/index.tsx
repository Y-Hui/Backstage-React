import React, { KeyboardEvent, useMemo } from 'react'
import PropTypes from 'prop-types'
import './index.scss'

const CheckboxPropType = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  keyCode: PropTypes.number,
  children: PropTypes.node
}
type Props = PropTypes.InferProps<typeof CheckboxPropType>

const Checkbox:React.FC<Props> = (props:Props) => {
  const {
    checked, disabled, keyCode, onChange, children
  } = props

  // 事件总线
  const eventBus = ():void => {
    if (disabled === false) {
      onChange!(!checked)
    }
  }
  // 键盘事件
  const handleKeyPress = (event:KeyboardEvent):void => {
    if (event.charCode === keyCode) {
      eventBus()
    }
  }

  const className = useMemo(() => {
    const name = ['art-checkbox']
    if (disabled) {
      name.push('art-checkbox--disable')
    }
    return name.join(' ')
  }, [disabled])

  return (
    <div
      className={className}
      role="checkbox"
      aria-checked={checked!}
      aria-disabled={disabled!}
      onClick={eventBus}
      onKeyPress={handleKeyPress}
    >
      <i className="art-checkbox__icon" tabIndex={0} />
      <span className="art-checkbox__label">{children}</span>
    </div>
  )
}

Checkbox.propTypes = CheckboxPropType
Checkbox.defaultProps = {
  checked: false,
  disabled: false,
  keyCode: 13,
  onChange: () => { },
  children: null
}

export default React.memo(Checkbox)
