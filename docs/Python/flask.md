---
group: flask
order: 1
---

# 在本地调试时遇到的问题
- 当遇到访问127.0.0.1:5000时，返回403的错误
解决方案：
 1. 如果是macOS (Monterey以上)，是因为5000端口被macOS占用导致，需要依次按`系统设置(System Preferences) > 分享(Sharing) > AirPlay Receiver`的路径，找到 隔空播放接收器选项，将其关闭。如果没有找到，则直接在搜索栏中搜索 `AirPlay Receiver` 即可找到。
 2. 重配置Flask的启动端口。
  ```shell
  $ flask run -p 8848 # 8848为自定义的端口号
  # 或者将自定义端口号配置到系统的环境变量中
  $ export FLASK_RUN_PORT=8848 # macOS/Linux
  > set FLASK_RUN_PORT=8848 # Windows CMD
  > $env:FLASK_RUN_PORT=8848 # Powershell
  ```

  3. 如果是用pycharm新建的项目则按以下步骤走
    1. 点击右上角的当前py文件，下拉框，点击Edit configuration
    2. 找到 Environment Variables
    3. 点击图标，
    4. 在User Environment Variables 那块，点击 + 。添加变量
    5. key值输入 FLASK_RUN_PORT, value值输入 8848 （8848为自定义端口号）
    6. 保存，重启服务
