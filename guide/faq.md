# 常见问题

## 1.Q：mvn clean package -DskipTests时报错

```
[ERROR] Failed to execute goal on project tduck-api: Could not resolve dependencies for project com.tduck:tduck-api:jar:0.0.1-SNAPSHOT: The following artifacts could not be resolved: com.tduck:tduck-common:jar:0.0.1-SNAPSHOT, com.tduck:tduck-project:jar:0.0.1-SNAPSHOT, com.tduck:tduck-account:jar:0.0.1-SNAPSHOT, com.tduck:tduck-storage:jar:0.0.1-SNAPSHOT, com.tduck:tduck-wx-mp:jar:0.0.1-SNAPSHOT: Failure to find com.tduck:tduck-common:jar:0.0.1-SNAPSHOT in http://maven.aliyun.com/nexus/content/groups/public/ was cached in the local repository, resolution will not be reattempted until the update interval of public has elapsed or updates are forced -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/DependencyResolutionException
```



#### 解决方法：把maven的中央源换成阿里源就行

##2.部署成功之后，访问登录页一直弹出ERROR

#### 解决方法：需要设置正确的微信公众号appid,secret,token;请注意，图中示例对应参数已经加密，参数也可以支持不加密填写
![enter image description here](https://images.gitee.com/uploads/images/2021/0413/111637_100aa7b5_1674451.png "屏幕截图.png")

## 3.启动的时候报错：Createing bean with name "wxMpService" defined in Class path .....
#### 解决方法：检查你的配置文件，是否已经配置了微信登录的参数，具体请查看：[部署文档-后端-微信参数配置](https://gitee.com/TDuckApp/tduck-platform/wikis/%E5%90%8E%E7%AB%AF%E9%A1%B9%E7%9B%AE%E9%85%8D%E7%BD%AE?sort_id=3681757)

## 为什么我的滑动验证码出不来

#### 滑动验证码无需请求第三方平台，无法显示请检查后台接口请求是否正常，多半是nginx配置错误
