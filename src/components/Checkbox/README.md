# Checkbox

| Props    | 说明                                              | 类型     | 默认值         |
| -------- | ------------------------------------------------- | -------- | -------------- |
| checked  | 是否选中                                          | Boolean  | false          |
| disable  | 是否禁用                                          | Boolean  | false          |
| keyCode  | 键盘事件按键码，触发 onChange。<br />获取焦点生效 | Number   | 13（回车）     |
| onChange | 点击事件                                          | Function | Empty function |

```react
// 默认选中
<Checkbox checked/>

// 事件处理
<Checkbox checked={agree} onChange={updateAgree} />

// 禁用
<Checkbox disable />
<Checkbox checked disable />

// 插槽
<Checkbox
  checked={agree}
  onChange={updateAgree}
>
  同意协议
</Checkbox>
```

