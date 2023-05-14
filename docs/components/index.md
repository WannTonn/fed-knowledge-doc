---
nav:
  title: 组件
  order: 0
# group:
#   title: 组件
#   order: 0
---

# 封装的日常组件

## React 相关
### 带防抖的 Selector 组件

- Select 组件基于 Antd Select 组件
- 引入 `loadsh` 库的 `debounce` 方法，对 Select 的`onSearch`的触发事件进行防抖操作
- 请求的接口 https://jsonplaceholder.typicode.com/users 为精准匹配，具体以实际业务为主

```jsx
/**
 * iframe: false
 * compact: false
 */

import React from 'react';
import Selector from './Selector';
export default () => (
  <div style={{ padding: 20 }}>
    <Selector />
  </div>
);
```

<!-- <code src="./Selector/index.tsx">1</code> -->

### 带防抖的 Input 组件

- Input 组件基于 Antd Input 组件
- 引入 `loadsh` 库的 `debounce` 方法，对 Input 触发事件进行防抖操作
- 添加对中文输入的处理，避免在中文输入时频繁触发事件

```jsx
/**
 * iframe: false
 * compact: false
 */

import React from 'react';
import Input from './Input';
export default () => (
  <div>
    <Input />
  </div>
);
```

<!-- <code src="./Input/index.tsx" iframe="false"></code> -->

### 单/多行文本超出截断

- 可自由配置行数
- 兼容配置 Tooltip 属性/样式
- 非 Webkit 浏览器，则显示单行

```jsx
/**
 * iframe: false
 * compact: false
 */

import React from 'react';
import EllipsisText from './EllipsisText';
export default () => {
  const text = new Array(30).fill('我是content');
  return (
    <div style={{ padding: 20 }}>
      <EllipsisText
        title={<div style={{ color: '#fff' }}>{text}</div>}
        content={text}
        clampLine={2}
      />
    </div>
  );
};
```

### 水印组件
```jsx
import React, { useEffect } from 'react';
import WaterMark from 'tonn-watermarkjs';
export default () => {
  useEffect(() => {
    const waterMark = new WaterMark({
      watermark_text:
        '我是水印组件，我将覆盖整个页面，且无法被覆写',
      font_color: '#ddd',
      width: 500,
      height: 500,
      rotate: 30,
      parent_node_id: '#watermark_node'
    });
     return () => {
      waterMark.set({
        watermark_text: ""
      });
    }
    }, []);
  return <div id="watermark_node">水印组件，见页面所示。渲染之后将挂载在body</div>;
};
```
