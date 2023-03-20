import { Tooltip } from 'antd';
import React from 'react';
import Styles from './style.module.scss';
/**
 * @description 可配置的超出文本隐藏组件
 */
interface IProps {
  /** 标题 */
  title: any;
  /** 自定义样式 */
  style?: any;
  /** 内容, 不限制类型 */
  content: any;
  /** 配置多行的行数，有值则用-webkit-clamp 来实现多行文本溢出，保留单行文本溢出样式做兼容 */
  clampLine?: number;
}
const Text = (props: IProps) => {
  const { title, style = {}, content, clampLine, ...restProps } = props;
  /** 如果有配置 */

  return (
    <Tooltip title={title} {...restProps}>
      <div
        style={{
          ...style,
          ...(clampLine ? { WebkitLineClamp: clampLine } : {}),
        }}
        className={`${Styles.ellipsisTxt} ${
          clampLine ? Styles.multiLine : ''
        } `}
      >
        {content}
      </div>
    </Tooltip>
  );
};
const EllipsisText = () => {
  const text = new Array(30).fill('我是content');

  return (
      <Text
        title={<div style={{ color: '#fff' }}>{text}</div>}
        content={text}
        clampLine={2}
      ></Text>
  );
};
export default EllipsisText;
