import { RouteComponentProps } from 'react-router-dom'

declare interface RouterConfig {
  /** 路由路径 */
  path: string,
  /** [Key值] 路由 Name 值，与组件名称一致 */
  name: string,
  /** 路由组件 */
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>,
  /** 是否精确匹配, 默认不匹配 */
  exact?: boolean,
  /** 重定向来源，生成 <Redirect from={ redirectFrom } path={ path } /> 标签 */
  redirectFrom?: string,
  /** 是否在框架中显示 */
  frame?: boolean,
  /** 子路由 */
  childrenRoute?: Array<RouterConfig>
}

declare interface RouterType {
  frame: Array<RouterConfig>
  fullScreen: Array<RouterConfig>
}
