# Field

```javascript
import Field from './index.js'

// Field.Password 密码框(带有密码文本明文切换)
```


| Props        | 说明                                                         | 类型    | 默认值       |
| ------------ | ------------------------------------------------------------ | ------- | ------------ |
| id           | 设置 id（原生属性）                                          | String  | -            |
| type         | 文本框类型（原生属性）<br />虽为原生属性，但是只允许以下类型：<br />`text` `password` `email` `number` `tel` | String  | text         |
| placeholder  | 占位文本（原生属性）                                         | String  | empty string |
| name         | （原生属性）                                                 | String  | -            |
| value        | 文本内容                                                     | String  | empty string |
| disable      | 是否禁用文本框                                               | Boolean | false        |
| readonly     | 是否只读                                                     | Boolean | false        |
| autocomplete | 自动填充（原生属性）                                         | String  | off          |
| style        | 设置行内样式                                                 | Object  | empty        |
| nativeProps  | 设置其他原生属性<br />以上定义的部分属性基本虽满足使用，但有时你可能需要一些其他原生属性，届时你便可以考虑此属性。 | Object  | empty        |

| Event        | 说明                   | 返回值           |
| ------------ | ---------------------- | ---------------- |
| onChange     | 输入框内容变化时的回调 | 改变后的文本内容 |
| onPressEnter | 按下回车的回调         | 文本内容         |

## Password

除`type`、`children`外其他属性全部与 Field 一致。