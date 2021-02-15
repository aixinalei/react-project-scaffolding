后台管理项目——React脚手架
----
这是一个后台管理项目脚手架 不同分支集成有不同的功能。同时也是一个非常好的react+redux入门项目，里面有非常详尽的demo与注释
## 项目集成

### master分支
* 核心库：webpack+react17+reactRouter4++antd
* 集成less、css，使用模块化处理。同时将css文件单独抽离，进行缓存优化
* 集成HappyPack优化webpack打包速度
* 集成eslint检查
* 集成Mockjs，拦截请求生成测试数据
* 集成模块懒加载
* 不推荐使用redux。全局变量推荐使用react-context解决。或者直接使用localstorage
### electron分支
  集成electron、elctron-builder、electron-updater后两者作为打包工具和自动更新工具

  继承所有master分支集成

### Typescript分支
使用Typescript重新构建的master分支

## 项目启动

1. 安装包

    `yarn`

2. 启动

    `yarn start`

## 使用指南
* 目录结构

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

    样例代码：
    ``` javascript
    import loadable from '@loadable/component';
    const homepage = loadable(() => import('./homepage'));
    export default homepage;

    ```

* eslint 检查

    `yarn run eslint-test`

* 打包文件

     `yarn run build`

### 共同维护：
jiadonglei0070@dingtalk.com