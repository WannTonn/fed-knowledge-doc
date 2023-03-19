---
nav:
  title: 组件
  order: 0
# group:
#   title: 组件
#   order: 0
---
# 封装的日常组件
## 带防抖的 Selector 组件
  - Select组件基于Antd Select组件
  - 引入 `loadsh` 库的 `debounce` 方法，对Select的`onSearch`的触发事件进行防抖操作
  - 请求的接口 https://jsonplaceholder.typicode.com/users 为精准匹配，具体以实际业务为主
<code src="./Selector/index.tsx"></code>

## 带防抖的Input组件
  - Input组件基于Antd Input组件
  - 引入 `loadsh` 库的 `debounce` 方法，对Input触发事件进行防抖操作
  - 添加对中文输入的处理，避免在中文输入时频繁触发事件
<code src="./Input/index.tsx"></code>

## 