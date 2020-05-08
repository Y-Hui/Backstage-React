# Button

```typescript
import Button from '@/components/Button'
```

| Props     | 说明         | 类型                                                         | 默认值 |
| --------- | ------------ | ------------------------------------------------------------ | ------ |
| color     | 按钮颜色     | string                                                       | blue   |
| round     | 设置圆角     | boolean \| string<br />若 `round=true`则显示为胶囊按钮<br />按钮默认圆角为`4px` | -      |
| disabled  | 是否禁用     | boolean                                                      | false  |
| className | 设置类名     | string                                                       | -      |
| style     | 设置行内样式 | 符合 React Style 的对象类型                                  | -      |

| Event   | 说明     |
| ------- | -------- |
| onClick | 点击事件 |

| Slot     | 说明         | 类型      |
| -------- | ------------ | --------- |
| children | 默认内容区域 | ReactNode |

## Color

`color` 属性提供默认值以及自定义。

默认值：

```typescript
type color = 'blue' | 'red' | 'yellow' | 'gray'
```

```jsx
<Button color="red">Color</Button>
```

自定义：

```jsx
<Button color="#2b2f32">Color</Button>
<Button color="rgba(43, 47, 50, 0.8)">Color</Button>
```

## Round

`round`属性默认情况下为 boolean 值，若值为 `true` 则设置为胶囊按钮。按钮样式默认为 4px。

```jsx
<Button round>Round</Button>
```

自定义：

```jsx
<Button round="6px">Round</Button>
<Button round="10%">Round</Button>
```

