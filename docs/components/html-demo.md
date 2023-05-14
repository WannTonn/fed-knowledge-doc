---
nav:
  title: 组件
  order: 1
# group:
#   title: 组件
#   order: 0
---

# HTML原生组件

```jsx
/**
 * iframe: false
 * compact: false
 */
import React from 'react';
import RippleBtn from './HTML/rippleButton';

export default () => (
  <div>
    <h3> 
      实现点击出现涟漪效果的按钮
    </h3>
    <RippleBtn />
  </div>
)

```