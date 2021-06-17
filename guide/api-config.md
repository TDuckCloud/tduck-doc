# 后端项目配置



#### 必要配置

```yaml
spring:
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: #数据库地址
    username:  #用户名
    password: #密码
  redis:
    database: 1
    host: #地址
    port: #端口
    password:    # 密码（默认为空）
```

####  文件存储配置

不配置文件存储系统中上传文件无法使用

```yaml
oss:
  ossType: #oss类型 0：阿里云 1：七牛云
  endpoint: 
  accessKeyId: 
  accessKeySecret: 
  bucketName: 
  domain: 
```

#### 微信公众号配置

不配置在使用微信公众号相关功能时会抛出异常(登录，微信通知，微信中分享信息定义等)，可以申请微信测试公众号

https://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login

```
wx:
  mp:
    configs:
      - appId: 
        secret: 
        token: 
        aesKey:
```

![输入图片说明](https://images.gitee.com/uploads/images/2021/0318/174301_a94222ba_1495174.png "屏幕截图.png")
如图所示 把对应参数appId等配置到项目中，然后启动项目，本地可以使用内网穿透
微信接口配置信息
url填入 外网可访问地址/tduck-api/wx/mp/portal/你的appId
token可自行定义 需要与项目中token相同

如果提示配置失败请仔细检查项目中参数是否配置正确



#### 邮箱配置

具体配置去对应邮箱**客户端设置**中查看 我这里以88完美邮箱为例

经测试 163等邮箱对发送次数上限比较低  目前88邮箱限制还比较低



![enter image description here](https://images.gitee.com/uploads/images/2021/0327/205930_b43a1860_1495174.png "屏幕截图.png")

```yaml
mail:
  host: smtp.88.com #邮箱服务提供者
  username: tduck 
  password: 12345678
```

