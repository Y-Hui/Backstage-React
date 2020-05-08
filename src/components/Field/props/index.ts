import stylePropType from 'react-style-proptype'
import { Omit } from '@/utils/type'

type omitProps = 'value' | 'prefix' | 'type' | 'onChange'
export interface Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, omitProps> {
  /** input 类型 */
  type: 'text' | 'password' | 'email' | 'number' | 'tel';
  /** 文本内容 */
  value: string;
  /** 行内样式 */
  style?: typeof stylePropType;
  /** css 类名 */
  className?: string;
  /** 左侧内容 */
  prefix?: React.ReactNode;
  /** 右侧内容 */
  suffix?: React.ReactNode;
  /** 文本内容变更回调 */
  onChange?: ((value: string) => void);
  /** 文本框获取焦点事件 */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  /** 文本框失去焦点事件 */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  /** 按下回车的回调 */
  onPressEnter?: ((value: string) => void);
}

export const defaultProps:Props = {
  type: 'text',
  value: ''
}
