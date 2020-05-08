import stylePropType from 'react-style-proptype'

export type styleType = typeof stylePropType

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 为按钮设置额外类名 */
  className?: string,
  /** 按钮颜色 */
  color?: string,
  /**
   * 按钮圆角 boolean | string
   *
   * 使用 boolean 类型：设置为胶囊按钮
   *
   * 使用 string 类型：
   *
   *      round="20px"
   *      round="50%"
   */
  round: boolean | string,
  /** 行内样式 */
  style?: styleType,
  /** Button 标签包裹内容 */
  children: React.ReactNode,
  /** 点击事件 */
  onClick?: React.MouseEventHandler<HTMLElement>,
}

export const defaultProps:Props = {
  color: 'blue',
  round: false,
  children: null
}
