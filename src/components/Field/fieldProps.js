import PropTypes from 'prop-types'
import stylePropType from 'react-style-proptype'

const types = {
  // id [原生属性]
  id: PropTypes.string,
  // 占位符 [原生属性]
  placeholder: PropTypes.string,
  // name [原生属性]
  name: PropTypes.string,
  // 文本内容
  value: PropTypes.string,
  // 是否禁用
  disabled: PropTypes.bool,
  // 是否只读 [原生属性]
  readonly: PropTypes.bool,
  // 自动填充 [原生属性]
  autocomplete: PropTypes.oneOf(['on', 'off']),
  // 行内样式
  style: stylePropType,
  // 其他未定义的原生属性
  // eslint-disable-next-line react/forbid-prop-types
  nativeProps: PropTypes.object,
  // css 类名
  className: PropTypes.string,
  // 文本内容变更回调
  onChange: PropTypes.func,
  // 文本框获取焦点事件
  onFocus: PropTypes.func,
  // 文本框失去焦点事件
  onBlur: PropTypes.func,
  // 按下回车的回调
  onPressEnter: PropTypes.func
}
const defaultProps = {
  id: null,
  placeholder: null,
  name: null,
  value: '',
  disabled: false,
  readonly: false,
  autocomplete: 'off',
  style: {},
  nativeProps: {},
  className: '',
  onChange: () => { },
  onFocus: () => { },
  onBlur: () => { },
  onPressEnter: () => { }
}
export {
  types,
  defaultProps
}
