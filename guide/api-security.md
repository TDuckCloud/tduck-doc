### 接口安全配置

为了保证接口调用的安全性，防止恶意请求接口，项目对接口进行了签名验证，接口请求时对参数进行排序加密计算签名，后端对签名进行校验，如果校验失败，则提示非法请求。

项目配置如下

```yaml
platform:
  sign:
    enable: true # 是否启用签名校验 关闭之后所有请求无需校验 本地调试方便可以设置false
    secret: 916lWh2WMcbSWiHv # 签名秘钥
    ignore-urls:   # 签名校验忽略的地址
      - /tduck-api/webjars/** 
      - /tduck-api/swagger/**
```

#### 实现部分

前端：**/src/api/index.js**

使用axios在请求前统一计算签名

签名具体算法如下

请求参数统一添加当前时间戳，然后根据key做升序

（ 签名秘钥（secret）+ 请求参数json字符串）做MD5然后转小写

拼接的秘钥和参数

`916lWh2WMcbSWiHv{"current":"1","name":"","size":"10","timestamp":"1616904031441"}`

md5之后

81deff67b73d2669f04e48f45faa20ac



后端请参考**SignAuthFilter.java**

**如果正常情况下出现提示“非法访问，请检查请求信息” 请检查部署环境时间是否正常** 

