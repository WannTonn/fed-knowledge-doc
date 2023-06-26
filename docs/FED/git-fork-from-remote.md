---
nav: Git
group: Git
order: 1
---

# Git 相关知识点

## 更新同步 fork到本地的其他GitHub上的项目的内容

- 从原作者的Github上fork项目之后开发了一段时间，要从本地拉取远程最新的内容。
  - 查看远程状态
  ```shell
  $ git remote -v
  ```
  - 将上游仓库的git分配给fork到本地的项目
  ```shell
  # 抽卡本地remote
  $ git remote 
  # 不出意外的话会出现一个 origin
  # 接下来添加一个upstream
  $ git remote add upstream https://github.com/qier222/YesPlayMusic.git
  ```
  - 同步fork
    ```shell
    # 请求上游更新的内容
    $ git fetch upstream
    # 切换到本地主分支
    $ git checkout master
    # 合并上游master分支的内容
    $ git merge upstream/master
    ```
- 完成更新