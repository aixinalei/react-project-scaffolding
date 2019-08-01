React项目脚手架
----
这是一个可以应用于不同场景的项目脚手架 不同分支集成有不同的功能。同时也是一个非常好的react+redux入门项目，里面有非常详尽的demo与注释
## 项目集成

### master分支
* 核心库：webpack4+react16.7+reactRouter4+redux+antd
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

* redux+ajax操作样例：
    1. ajax.js 中写好ajax，demo：
    ```javascript
    export const loadUserInfo = () => new Promise((resolve) => {
      axios.post(`${API_SERVER}/loadUserInfo`).then((res) => {
        resolve(res);
      });
    });
    ```
    2. actions-type.js 中注册redux中 action的名字，demo：
    ```javascript
    export const AJAX_ACTION_DEMO_LOAD_USERINFO = `${NAME}/AJAX_ACTION_DEMO_LOAD_USERINFO`;
    ```
    3. actions.js 中绑定此action的ajax,demo:
    ```javascript
    actions.ajaxActionDemoLoadUserInfo = createAction(
      t.AJAX_ACTION_DEMO_LOAD_USERINFO,
      a.loadUserInfo,
    );
    ```
    4. reducer中写触发actions后触发的纯函数
    ```javascript
      case t.AJAX_ACTION_DEMO_LOAD_USERINFO: {
        draft.userInfo = action.payload;
        break;
      }
    ```
* eslint 检查

    `yarn run eslint-test`

* 生成文件

     `yarn run build`

### 共同维护：
jiadonglei0070@dingtalk.com