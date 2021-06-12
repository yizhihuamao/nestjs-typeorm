## 说明
数据库要手动创建，表会自动创建，仅限于初始化；多人开发有数据要同步需要手动导入sql

### 命令
- 安装依赖：yarn
- 开发：yarn dev；http://127.0.0.1:3006/
- 部署：yarn build && yarn start；http://127.0.0.1:3009

### 数据库配置文件
- 开发：.env.development
- 生产：ormconfig.json && .env
### 文档
- API：http://127.0.0.1:3006/api/ ，yarn dev即可和后端服务一起查看

