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

### 插槽 children

Field 组件提供一个默认插槽供实现文本框左右自定义内容。children 类型为：

```typescript
interface childrenShape =  {
  left: PropTypes.node
  right: PropTypes.node
}
```
示例代码：
```react
<Field placeholder="输入关键字">
  {
    {
    	left: <p>左侧</p>,
    	right: <SvgIcon iconName="#search" />
    }
  }
</Field>
```

## Password

密码框所有 Props 与 Field 组件一致。

- 取消 `type`属性

- 取消`children`类型

### 插槽 children

由于取消了默认的 children 类型，Field.Password 只能自定义左侧内容。

示例代码：

```react
<Field placeholder="输入关键字">
  <p>左侧内容</p>
</Field>
```

