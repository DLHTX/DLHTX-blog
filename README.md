<div align="center">
  <h1 style=''><img with='30' height='30' src='http://dlhtx.zicp.vip:3000/img/logo.png'> </img>DLHTX</h1>

<img src="https://img.shields.io/badge/coverage-98-green?style=flat-square" style='display: inline;'></img> <img src="https://img.shields.io/badge/version-1.0.2-blue?style=flat-square" style='display: inline;'></img> <img src="https://img.shields.io/badge/platform-pc&mobile-green?style=flat-square" style='display: inline;'></img> <img alt="Codecov" src="https://img.shields.io/badge/node->=6.0.0-brightgreen?style=flat-square&logo=node.js" style='display: inline;'></img>


<img src='http://dlhtx.zicp.vip:3000/uploads/1573549778563*GIF.gif'></img>
</div>

## Demo&简介
- DLHTX是一款基于`vue`和`nodejs`搭建的个人独立博客系统。写博客无需在后台写,只要登录博客就可以直接写博客
- [http://dlhtx.zicp.vip](http://dlhtx.zicp.vip:9090)
- 后台api [预览地址](http://dlhtx.zicp.vip:3000/api)

## 主要功能：
- 文章，页面，分类目录，分类的添加，删除等。
- 文章及页面支持`Markdown`，支持代码高亮。
- 支持文章全文搜索。
- 完整的评论功能，包括发表回复评论，以及评论的邮件提醒，支持`Markdown`。
- 基本信息功能,包含评论,点赞,收藏,查看数量的收集。
- 支持Oauth登陆，GitHub。
- 支持文章缓存，支持缓存自动刷新。
- 支持登录注册功能,支持后端api鉴权功能
- 可展示的后端api REST风格列表[api](http://dlhtx.zicp.vip:3000/api)
- 支持文件上传,下载功能

## 准备
 如果您想要搭建一个这样的博客那么你可能需要准备以下东西

- 服务器
- 域名
- nginx
- mysql
- pm2
- 勇于折腾的心

## 前端运行(无后端版本)
无后端版本是利用本项目自带的后台,可定制性较差.所有人都可用的后台,但是本项目的后台配置也很简单傻瓜式的,先把前台部署好吧~

在文件夹`fontEnd`中就是你所需的前台代码,将`fontEnd`文件夹中的`index.html`和`static`部署到服务器的ngnix中或者其他网站服务器中,这一步很简单就不多说了


## 前端配置
如果你想要个性化修改你的博客,本项目也提供了配置路径

修改
`fontEnd/static/config.js`
``` javascript
const config = {
  common: { //全局通用配置
    title: 'DLHTX的博客园',
    indexDescription:'Your art blog repository.',//首页logo下面的描述
    indexLogo:'http://dlhtx.zicp.vip:3000/img/fontlogo.png',//首页logo
  },
  head: { //头部导航栏配置
    logo:'http://dlhtx.zicp.vip:3000/img/logo.png',//导航栏logo

    ArticleName: 'dlhtx', //会显示文章查询的用户
    ArticleNameShow: true, //显示文章按钮
    ArticleNameText: '文章',

    FriendChain: 666, //友链文章的id
    FriendChainShow: true, //显示友链按钮
    FriendChainText: '友链',

    About: 888, //关于文章的id
    AboutShow: true, //显示文章按钮
    AboutText: '关于',

    UpdateLog: 12319, //更新id
    UpdateLogShow: true, //显示更新按钮
    UpdateLogText: '更新日志',

    Feedback: 1024, //反馈id
    FeedbackShow: true, //显示反馈按钮
    FeedbackText: '反馈入口',
  },
  foot: { //底部基本信息配置(后期会加我的网址)
    randomVerse: ["我是天空里的一片云", "偶尔投影在你的波心", "你不必讶异", "更无须欢喜", "在转瞬间消灭了踪影", "你我相逢在黑夜的海上", "在这交会时互放的光亮"], //底部随机诗句
  },
  url: { //url配置
    baseUrl: "http://dlhtx.zicp.vip:3000", //基本后台url
    // baseUrl: "http://localhost:3000", //基本后台url
    indexVideoSrc: "http://dlhtx.zicp.vip:3000/file/s", //在后台中的file文件夹放入随机10个封面视频mp4格式
    randomImgUrl:"http://dlhtx.zicp.vip:3000/file/randomBg",//随机图片壁纸,替换后台url和 file/randomBg里面的壁纸
  },
}

export {
  config
}

```
注释的很清楚咯

如果您不想部署后台,那么下面的教程就不用看了


## 后台部署
后台部署也十分的简单,首先你需要准备一个mysql数据库,这个网上教程也很多,这里也就不多说了

1. 配置数据库
修改`backEnd/dist/config.js`

```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class config {
}
config.dbConfig = {//数据库配置
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '106111',
    database: 'mytest',
    entities: [__dirname + '/**/*.entity{.ts,.js}'], synchronize: true,
};
config.emailConfig = {
    host: 'smtp.qq.com',
    port: 465,
    auth: {
        user: '949729789@qq.com',
        pass: 'vtfosfstfzvtbehf'
    }
};
config.baseImgUrl = 'http://dlhtx.zicp.vip:3000/img/';
config.baseUploadUrl = 'http://dlhtx.zicp.vip:3000/uploads/';
exports.config = config;
//# sourceMappingURL=config.js.map
```
只要连接数据库,实体会自动映射和创建表,什么也不用做

2. 修改邮箱smtp地址
3. 修改文件路径

以上都在congfig中完成

## 运行后端
本项目是利用pm2持久化后台


在dist目录下执行
`pm2 start ./main.js`

浏览器打开: http://127.0.0.1:3000/api/  就可以看到效果了。

## 结语
如果您感觉这个项目不错,请给个star吧~


