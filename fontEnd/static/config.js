const config = {
  common: { //全局通用配置
    title: 'DLHTX的博客园',
    indexDescription:'Your art blog repository.',//首页logo下面的描述
    indexLogo:'http://dlhtx.zicp.vip:3000/img/fontlogo.png',//首页logo
    showVideo:false,//是否首页显示随机视频(默认否 显示随机图片)
    showSearch:true,//是否显示搜索主页
    dirShow:true,//是否显示侧边导航目录
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
