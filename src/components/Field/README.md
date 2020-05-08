# Field

```javascript
import Field from './index.js'

// Field.Password 密码框(带有密码文本明文切换)
```

### Props
| Props        | 说明                                                         | 类型      | 默认值 |
| ------------ | ------------------------------------------------------------ | --------- | ------ |
| type         | 文本框类型（原生属性）<br />虽为原生属性，但是只允许以下类型：<br />`text` `password` `email` `number` `tel` | string    | text   |
| placeholder  | 占位文本（原生属性）                                         | string    | -      |
| value        | 文本内容                                                     | string    | -      |
| disabled     | 是否禁用文本框                                               | boolean   | -      |
| readonly     | 是否只读                                                     | boolean   | -      |
| autocomplete | 自动填充（原生属性）                                         | string    | -      |
| style        | 设置行内样式                                                 | Object    | -      |
| prefix       | 左侧插槽                                                     | ReactNode | null   |
| suffix       | 右侧插槽                                                     | ReactNode | null   |

> 继承所有 HTMLInputElement 属性。

### Event

| Event        | 说明                   | 返回值           |
| ------------ | ---------------------- | ---------------- |
| onChange     | 输入框内容变化时的回调 | 改变后的文本内容 |
| onPressEnter | 按下回车的回调         | 文本内容         |

## Password

密码框所有 Props 与 Field 组件一致。

- 取消 `type`属性

