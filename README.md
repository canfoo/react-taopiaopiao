# react与express构建淘票票页面
## 描述
前段时间用[vue2.0构建的淘票票app](https://github.com/canfoo/vue2.0-taopiaopiao)，得到许多童鞋的支持，这些天一气呵成用react又来重构一下这个项目，目的无他，在于分享和共同进步！因此这个项目与[vue2.0-taopiaopiao](https://github.com/canfoo/vue2.0-taopiaopiao)项目的结构是一致的，项目中同样个server服务，模拟服务器环境，为前端提供数据来源，当用`npm run deploy`命令运行前端环境时，就可以直接将前端资源部署到server服务里。因此本项目有两个环境，一个是前端开发环境(端口是3000)，一个是server服务环境(端口是9000)。

主要技术栈：<br/>
- react
- react-router
- redux
- ant-design-mobile
- nodejs
- express

## 如何运行
下载项目
```
 git clone https://github.com/canfoo/react-taopiaopiao.git
```
 打开一个终端（称这个终端为A终端）进入到react-taopiaopiao目录安装依赖包（注意：如果`npm install` 不能正常安装完成，请使用`cnpm install`进行安装）
```
 npm install
```
 打开另一个一个终端（称这个终端为B终端）进入到server目录安装依赖包
```
 npm install
```
启动server服务（得先启动后台服务，否则前端页面没有数据），在server目录（B终端）下执行以下命令，成功执行会终端会提示服务端口号为9000
```
 npm run start
```
启动前端开发服务，在react-taopiaopiao目录（A终端）里执行以下命令，成功执行后，会自动打开浏览器访问前端开发环境，浏览地址是`http://localhost:3000`
```
 npm run dev
```
前端资源部署到server里，开发完成后，在react-taopiaopiao目录里执行以下命令，成功执行后，可以通过访问server提供的路径访问到页面了，访问路径为`http://localhost:9000/app`
```
 npm run deploy
```

备注：因为本项目有提供后台服务，所以当前端部署到服务器后，只要后台服务启动，就可以直接通过`http://localhost:9000/app`路径访问到前端页面，无须再启动前端的开发服务。

## 项目预览
![Mou icon](./Screenshots/1.gif)

## 主要目录结构
```
.
├── bin                      # 启动脚本
├── build                    # webpack相关配置
├── config                   # 项目配置文件
├── server                   # 后台服务
│   ├── bin                  # 程序启动和渲染
│   ├── database             # 存放页面所需要的json数据
│   ├── public               # 前端静态资源存放位置
│   ├── routes               # 路由于请求接口管理
│   ├── views                # 前端模板存放位置
│   ├── app.js               # 后台服务入口
├── src                      # 程序源文件
│   ├── main.js              # 程序启动和渲染
│   ├── components           # 全局组件
│   ├── containers           # 路由页面容器组件
│   ├── layouts              # 主页结构
│   ├── static               # 静态文件
│   ├── styles               # 样式文件
│   ├── store                # Redux管理
│   └── routes               # 前端路由管理
└
```

## 后台接口
本项目是手动抓取淘票票部分数据，数据是16年12月份的，城市数据只有北上广有数据，其它城市都是随机从北上广数据抽取过来的，电影数据也是部分有数据。抓取的数据存放在server目录里的database里，供前端调用。

1. 访问淘票票首页路径： `http://localhost:9000/app`

2. 部分数据接口
	- 获取热映数据 
	```
	method: GET
 	url: http://localhost:9000/movie/hot/?city=bj
 	参数说明: city可以为bj、sh、gz
	```
	- 获取即将上映数据 
	```
	method: GET
 	url: http://localhost:9000/movie/coming/?limit=20&offset=0
 	参数说明: limit为每次请求的数据数量，offset为所有数据的偏移量
	```
	- 获取城市数据
	```
	method: GET
 	url: http://localhost:9000/movie/city
	```
	- 获取电影院数据
	```
	method: GET
 	url: http://localhost:9000/movie/cinema/?city=bj
 	参数说明:  city可以为bj、sh、gz
	```