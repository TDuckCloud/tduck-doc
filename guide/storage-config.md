# 文件存储配置

项目目前支持 七牛云oss 阿里云oss  又拍云 本地存储方式存储文件



1. Oss存储（以七牛云为例）

   ```yaml
     oss:
       ossType: 1 # 0:阿里云 1：七牛云 2：又拍云 3：本地存储
       endpoint: # 阿里云需配置
       accessKeyId: # 平台认证参数 需要去对应oss提供平台获取
       accessKeySecret: # 平台认证参数 需要去对应oss提供平台获取
       bucketName: tduck-cloud #oss存储桶名 
       domain: https://qiniu.smileyi.top #oss可供访问的域名
   ```



2.本地存储  使用项目本身对外提供文件访问

```yaml
  oss:
    ossType: 3 # 3表示使用本地存储
    endpoint:  
    accessKeyId:
    accessKeySecret: 
    bucketName: 
    domain: http://localhost:8999/tduck-api/u/  #对外访问的地址 使用后端项目部署的ip+端口 后面可以固定 
    upload-folder: C:\temp #文件存放的位置
    access-path-pattern: /u/**  # 文件访问路径前缀 这里更改domain也需要更改
```

