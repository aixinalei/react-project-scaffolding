React项目脚手架
----
这是一个可以应用于不同场景的项目脚手架 不同分支集成有不同的功能
## 项目集成

### master分支
* webpack4+react+reactRouter4+redux+antd
* 使用redux-promise+axios进行异步操作
* 集成less、css，使用模块化处理。同时将css文件单独抽离，进行缓存优化
* 集成HappyPack优化webpack打包速度
* 集成eslint检查
* 集成Mockjs，拦截请求生成测试数据
* 集成模块懒加载

### electron分支
  集成electron、elctron-builder、electron-updater后两者作为打包工具和自动更新工具

  继承所有master分支集成

### Typescript分支
使用Typescript重新构建的master分支

## 项目启动

1. 安装包

    `yarn` or `npm install`

2. 启动

    `yarn start` or `npm start`

## 使用指南
* 后端api地址配置

    src目录下存在三个文件：

    config.js ---- 开发中引用的config 会自动合并global.config.js与local.config.js 优先使用local.config.js

    global.config.js ---- 开发环境实际使用的配置

    local.config.js ---- 本地开发时用的配置，git不会提交

* src/Utils/util.js中集成了一些开发中常见函数

* 配置mock拦截请求编写样例数据

   直接写在mock.js中 demo路径：src/homepage/redux/mock.js

   样例代码：
    ``` javascript
    import Mock from 'mockjs';
    import { API_SERVER } from '../../config';
    Mock.mock(
      `${API_SERVER}/loadUserInfo`, {
        userId: 'dljia',
        name: 'dljia',
        dept: '产品开发部',
        post: '前端工程师',
      },
    );

    ```
* 模块懒加载样例：

    demo 路径:src/homepage/component/main.js

    样例代码：
    ``` javascript
    import loadable from '@loadable/component';
    const homepage = loadable(() => import('./homepage'));
    // 懒加载组件防止首页过大加载时间慢
    export default homepage;

    ```

* eslint 检查

    `yarn run eslint-test`

* 生成文件

     `yarn run build`