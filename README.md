##特别说明
请务必按照本文档部署运行章节 进行操作，减少踩坑弯路！！

##下载前端代码
git clone https://gitee.com/log4j/pig-ui.git
安装cnpm 镜像
切换到 pig-ui 根目录执行

npm install -g cnpm --registry=https://registry.npm.taobao.org
##安装依赖
切换到 pig-ui 根目录执行

cnpm install
##启动
切换到 pig-ui 根目录执行

npm run dev


##访问前端
chrome 访问http://localhost:8080
默认用户名： admin 默认密码： 123456

##特别说明
npm install 过程中可能由于网络关系等，提示报错，请删除
pig-ui 根目录中 node_modules 重写执行 cnpm install 命令即可