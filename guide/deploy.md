# 线上部署

## 后端部署

`mvn clean install -DskipTests`
`cd tduck-platform/tduck-api`
`mvn clean package -DskipTests`
`nohup -Dfile.encoding=UTF-8 -jar tduck-api.jar   &`

nohup意为后台不挂断运行，与是否账号退出无关

## 前端部署

拉取前端代码
进入tduck-front目录执行命令
试用cnpm或者yarn都可以 推荐使用yarn
yarn命令
```
npm install -g yarn
yarn install 
yarn run build
```

cnpm 命令

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
cnpm install 
cnpm run build
```


构建打包成功之后，会在根目录生成 `dist` 文件夹，里面就是构建打包好的文件，通常是 `***.js` 、`***.css`、`index.html` 等静态文件。

通常情况下 `dist` 文件夹的静态文件发布到你的 nginx 或者静态服务器即可，其中的 `index.html` 是项目的入口页面。

#### nginx配置

```nginx
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    server {
        listen       80;
        server_name  localhost;

       location / {
          # 静态文件地址
            root   /usr/share/nginx/html/tduck;
	    try_files $uri $uri/ /index.html;
            index  index.html index.htm;
        }
		
	location /tduck-api/{
	    proxy_set_header Host $http_host;
	    proxy_set_header X-Real-IP $remote_addr;
	    proxy_set_header REMOTE-HOST $remote_addr;
	    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
	    # 改为你后端接口地址   http://xxxx/tduck-api/
	    proxy_pass http://localhost:8999/tduck-api/;
	}

        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }
    }
}
```

