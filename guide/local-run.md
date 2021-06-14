# 本地运行

开发环境本地运行 正式环境请参考部署教程！

1. 项目运行所需环境：

    - [MySQL5.7或以上](https://dev.mysql.com/downloads/mysql/)
    - [JDK1.8或以上](http://www.oracle.com/technetwork/java/javase/overview/index.html)
    - [Maven](https://maven.apache.org/download.cgi)
    - [Nodejs](https://nodejs.org/en/download/)

2. 创建一个tduck的数据库，并执行项目目录下doc/tduck.sql文件

3. 启动后端服务

   拉取后端代码

   `git clone https://gitee.com/TDuckApp/tduck-platform.git`

   打开命令行，输入以下命令

   ```
   mvn clean install -DskipTests
   cd tduck-platform/tduck-api
   mvn clean package -DskipTests
   java -Dfile.encoding=UTF-8 -jar tduck-api.jar
   ```

4. 启动前端项目

   拉取前端代码

   `git clone https://gitee.com/TDuckApp/tduck-front.git`

5. 打开命令行，输入以下命令

   ```
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   cd tduck-front
   cnpm install
   cnpm run serve
   ```

   此时，浏览器打开，输入网址`http://localhost:8888`, 进入页面

   

