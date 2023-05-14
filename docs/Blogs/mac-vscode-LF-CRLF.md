---
group:
  title: MacOS
  order: 0
---

# VScode 在MacOS与Windows下LF，CRLF格式的问题解决办法

## 前情提要, 在Windows 与MacOS 切换开发的时候，提交的代码会出现LF与CRLF不一样导致没有改动，但是在Git暂存区中出现文件改动的情况。

## 解决方法： 统一格式。
- 打开VSCode，设置 - 搜索 "EOL", 修改该选项为(\n: LF)。统一标准
- 执行完成后，再在Git中设置一下。
  ```
    git config --global core.autocrlf false
  ```
