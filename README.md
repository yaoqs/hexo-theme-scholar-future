# scholar-future [gh-page](https://yaoqs.github.io/hexo-theme-scholar-future/)

Journal:

+ Title: **FUTURE**
+ Subtitle: Natural Philosophy & Infomation Sciences
+ Author: Yao Qing-sheng
+ Author-cn: 要庆生
+ Slogan: 解放思想，发展生产力
+ Address: Department of Natural Philosophy & Infomation Sciences, CHINA

---

## About

基于[hexo](https://github.com/hexojs/hexo)的博客模板主题。A scholar magazine/journal-like blog theme

## pre-view/Screenshot

[Demo](https://yaoqs.github.io)

## Donate

[paypal捐赠 paypal.me/LordYao](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=243292490@qq.com&currency_code=USD&amount=1&return=http://yaoqs.github.com/about.html&item_name=LordYao%27s%20Blog&undefined_quantity=1)

<image alt="alipay" src="https://yaoqs.github.io/images/支付宝收款码.jpg" width="200"/><br>
<image alt="alipay" src="https://yaoqs.github.io/images/支付宝红包码.jpg" width="200"/><br>
<image alt="wechat" src="https://yaoqs.github.io/images/微信收款码.png" width="200"/><br>
<image alt="wechat" src="https://yaoqs.github.io/images/微信打赏码.png" width="200"/><br>
<image alt="PayPal" src="https://yaoqs.github.io/images/paypal.png" width="200"/><br>

## 感谢/Thanks

[hexo](https://github.com/hexojs/hexo):A fast, simple & powerful blog framework, powered by Node.js. <https://hexo.io>

部分代码参考自
+ <https://github.com/guolin/crisp-hexo-theme>
+ <https://github.com/theme-next/hexo-theme-next>
+ <https://github.com/blinkfox/hexo-theme-matery>
+ etc.

## Contributing

Contribution is welcome, free to open an issue and fork. Waiting for your pull request.

## Installation

### Clone/Fork

This is not necessary(~~!Deprecated~~).

```shell
git clone git@github.com:yaoqs/hexo-theme-scholar-future.git themes/scholar-future
```

### Install

Add this theme as submodule(!Recommend).

```sh
mkdir blog
cd blog
git submodule add https://github.com/yaoqs/hexo-theme-scholar-future.git ./themes/scholar_future
git submodule update --remote #update theme
```

### Enable

Modify hexo theme setting in _config.yml to scholar-future. such as:

```yml
theme: scholar-future                                           #当前主题名称。值为false时禁用主题
theme_config:                                                   #主题的配置文件。在这里放置的配置会覆盖主题目录下的 _config.yml 中的配置
```

### Update

#### Method 1(~~!Deprecated~~)

```shell
cd themes/scholar-future
git pull
```

#### Method 2(!Recommend)

```sh
git submodule update --remote #update theme
```

## Configuration

根据需求自定义修改相关配置hexo站点根目录（_config.yml）->theme_config: {}下进行覆盖，主要包括但不限于：
```yml
theme: scholar-future                                           #当前主题名称。值为false时禁用主题
theme_config:                                                   #主题的配置文件。在这里放置的配置会覆盖主题目录下的 _config.yml 中的配置
  logo: 
  slogan:
  Email: 350788415@qq.com
  Author: Yao Qing-sheng
  githubname: yaoqs
  Address: Department of Natural/Social Philosophy & Infomation Sciences, CHINA
  bio: <a href="https://github.com/yaoqs#biography">Biography...</a>
  Repositories_Pages: https://yaoqs.github.io/
  url: https://yaoqs.github.io/
  Site_visit_tongji:
  favicon: 
  wechat_subscriber:
  Social_Accounts:
  Reward:
  Journal:
  Copyright:
```


## License & Copyright

[![GitHub license](https://badgen.net/github/license/yaoqs/hexo-theme-scholar-future)](https://github.com/yaoqs/hexo-theme-scholar-future/blob/master/LICENSE) [![GitHub license](https://img.shields.io/github/license/yaoqs/hexo-theme-scholar-future.svg)](https://github.com/yaoqs/hexo-theme-scholar-future/blob/master/LICENSE)

+ 版权声明：Copyright © 2019-2024 要庆生. All rights reserved. 未经本人同意请勿转载。经本人同意后转载时请注明出处。
+ 知识共享许可协议 版权声明：署名，允许他人基于本文进行创作，且必须基于与原先许可协议相同的许可协议分发本文([Creative Commons](http://creativecommons.org/licenses/by-sa/4.0/ ))
+ 业余时间所作，难免有不足及错漏之处，敬请包涵指正，可通过github仓库在线留言或[![Email](http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_01.png)](http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=m_L69OroxPj1qqKjrdvq6rX49PY)告知；如需补充其他相关专业信息，亦可邮件通知或github仓库在线留言；同时欢迎各位热心人士star、fork或共同参与维护仓库

## issue

+ <https://github.com/yaoqs/hexo-theme-scholar-future/issues>
+ weibo留言: <http://weibo.com/lordyao>

## Todo/Roadmap

+ [ ] azure/aws
+ [ ] Bootstrap
+ [ ] 注册域名
+ [ ] 配置英文说明/双语；加小图标，并解决大小写不敏感问题
  + [ ] About页/个人简历页(resume)
  + [ ] 404页
  + [ ] 捐献Donate.md
  + [ ] 导航Navigator.md
  + [ ] 游戏Game.md
  + [ ] 音乐Music.md
  + [ ] Feature.md
+ [ ] lab.html实验示例代码
~~+ [ ] ArtPlayer.js~~
+ [ ] 评论功能
+ [x] 增加搜索功能
+ [x] 增加分类功能
+ [x] 增加标签功能
+ [x] 增加归档功能
+ [ ] 增加友链功能
+ [ ] 增加音乐功能
+ [ ] 增加游戏功能
+ [ ] 增加相册功能
+ [ ] 增加视频功能
+ [ ] 增加留言功能
+ [x] 增加统计功能
+ [ ] 增加广告功能
+ [ ] layout布局
+ [ ] Tailwindcss
+ [ ] 增加多语言支持
+ [ ] 主页网站副标题及打字效果 
+ [x] 统计页statistics.ejs
+ [x] 关注页follow.ejs
+ [x] 导航页nav.ejs
+ [x] 侧边栏 Donate
+ [ ] ScrollProgress
+ [ ] editorAnnotate批注插件
+ [ ] [Naranja](https://github.com/e1016/naranja):Pure JS, HTML, and CSS Notifications with a great look – [Live demo](http://demo.jb51.net/js/2018/js_notification_prompt/)
+ [ ] journal-face.png journal-menu.png
+ [ ] 图片页图片轮播 参考jb51.net代码
+ [ ] 底边栏/侧边栏/下拉列表日历、天气
+ [x] [hexo（sakura）仿gitee添加文章贡献度日历图（echarts）](https://blog.csdn.net/cungudafa/article/details/106420842) hexo-statistics-charts
+ [x] [Hexo主题美化 -  给你的博客加上GITHUB日历云和分类雷达图](https://blog.csdn.net/u013854486/article/details/104777219) hexo-statistics-charts
+ [x] 分享[social-share.min.js](https://www.jsdelivr.com/package/npm/social-share.js)
+ [x] 打赏功能 widget/donate.ejs ~~tctip  <https://www.cnblogs.com/enjoy233/p/10328361.html> <https://github.com/greedying/tctip>~~已自编码实现 [Donate & Reward 大吉大利，今晚吃鸡](https://yaoqs.github.io/donate-plugin/)  github repo：[donate-plugin](https://github.com/yaoqs/donate-plugin)
+ [x] 分享组件的嵌入(支持http/https/移动端访问)侧边悬挂式
+ [ ] 页面底部添加"回到顶部" + "收藏" + "快速评论"功能
+ [ ] stackoverflow，官方在StackExchange页面提供了flair，比如: [User Bravo Yeung - Stack Exchange](https://stackexchange.com/users/4637854/bravo-yeung?tab=flair) ，页面中提供了可嵌入的html代码:

    ```html
    Language:  HTML
    <a href="https://stackexchange.com/users/4637854/bravo-yeung"><img src="https://stackexchange.com/users/flair/4637854.png" width="208" height="58" alt="profile for Bravo Yeung on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Bravo Yeung on Stack Exchange, a network of free, community-driven Q&amp;A sites" /></a>
    ```
+ [x] 转载声明
```
---------------------
著作权归作者所有。
商业转载请联系作者获得授权，非商业转载请注明出处。
作者：
Email:
源地址：
复制时间:
来源：
© 版权声明：本文为博主原创文章，转载请附上博文链接！
```
+ [ ] 在公告栏添加滚动文字 使用marquee标签即能实现文字的滚动
+ [ ] gulp:静态资源压缩
+ [ ] CDN访问加速：# 注：jsdelivr可以自动帮你生成.min版的js和css，所以你在上面设置js及css路径中可以直接写.min.xxx
+ [x] 在页面顶部添加"Fork me on Github"图标
+ [ ] 修改主题风格 Github+Jekyll 搭建个人网站详细教程 <https://www.jianshu.com/p/9f71e260925d>
+ [x] [文章统计图](https://liutianyi123.github.io/about/) [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)
+ [x] github action流
+ [ ] github project
+ [ ] js插件
  + [ ] three.js <https://threejs.org/> <https://github.com/mrdoob/three.js> <http://www.webgl3d.cn/>
  + [ ] Babylon.js
  + [ ] d3.js
  + [ ] [Underscore.js](https://underscorejs.org/)
  + [ ] Apache ECharts

## 以下代码用于在GitHub page 中显示

<script type="text/javascript" src="https://cdn.staticfile.org/jquery/3.7.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.staticfile.org/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
<div id="qrcode"></div>
<script>$('#qrcode').qrcode({width: 173,height: 173,text:"https://yaoqs.github.io/hexo-theme-scholar-future"});</script>

## References

### [theme](https://hexo.io/zh-cn/docs/themes)

+ [«NexT»](https://github.com/theme-next/hexo-theme-next) is a high quality elegant Hexo theme. It is crafted from scratch with love.
+ [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery):A beautiful hexo blog theme with material design and responsive design.一个基于材料设计和响应式设计而成的全面、美观的Hexo主题。国内访问：<http://blinkfox.com>
+ [Hexo主题开发](https://www.cnblogs.com/yyhh/p/11058985.html)
+ [Hexo主题(EJS模板)自定义页面扩展](https://cloud.tencent.com/developer/beta/article/1558677)
+ [hexo博客搭建及主题优化(一)](https://blog.csdn.net/u013044713/article/details/120250802)
+ [【持续更新】最全Hexo博客搭建+主题优化+插件配置+常用操作+错误分析 -遇见西门](https://www.simon96.online/2018/10/12/hexo-tutorial/)
+ [自定义hexo创建文章的模板](https://www.mad-coding.cn/2019/08/02/%E8%87%AA%E5%AE%9A%E4%B9%89hexo%E5%88%9B%E5%BB%BA%E6%96%87%E7%AB%A0%E7%9A%84%E6%A8%A1%E6%9D%BF/#0x02-%E4%BF%AE%E6%94%B9%E6%AD%A5%E9%AA%A4)
+ [第三方服务集成 - NexT 使用文档](http://theme-next.iissnan.com/third-party-services.html#share-system)
+ [Hexo 搭建个人博客系列：进阶设置篇](http://yearito.cn/posts/hexo-advanced-settings.html)
+ [Hexo 博客搭建](https://blog.csdn.net/qq_36759224/category_9285510.html)
+ [Hexo百度主动提交链接](https://www.jianshu.com/p/f37452d4978e)
+ [hexo笔记六：next主题添加字数统计和阅读时长估计](https://blog.csdn.net/Awt_FuDongLai/article/details/107425490)
+ [hexo搭建静态博客(五)——其他一些DIY](https://liutianyi123.github.io/posts/d7f7.html)
+ [从零开始制作 Hexo 主题](https://www.cnblogs.com/mmzuo-798/p/10451385.html)
+ [hexo博客优化之next主题美化](https://blog.csdn.net/nightmare_dimple/article/details/86661502)
+ [hexo+github搭建博客(超级详细版，精细入微)](https://segmentfault.com/a/1190000021614307)
+ [个人博客搭建笔记----hexo根目录下的_config.yml配置解释](https://blog.csdn.net/zemprogram/article/details/104288872)
+ [个人博客搭建笔记----hexo初始化目录结构和打包文件](https://blog.csdn.net/zemprogram/article/details/96638820)
+ [个人博客搭建笔记----hexo自定义主题搭建](https://blog.csdn.net/zemprogram/article/details/104412386)
+ [Hexo建站过程总结](https://www.cnblogs.com/manastudent/p/10190746.html)
+ [手把手教你github actions 部署 pages，动态网页，静态网页，缓存优化，多分支部署等](https://juejin.cn/post/7334714350899642407)
+ [【Hexo自动部署】优雅的使用 Github Actions 进行 Hexo 静态博客的持续集成与部署](https://cloud.tencent.com/developer/article/2369534)
+ [hexo引入tailwindcss的操作方式](https://www.youdiandongxi.com/article/hexo-coding-with-tailwind.html)

### js

+ [JavaScript 教程](https://www.runoob.com/js/js-tutorial.html "菜鸟教程")
+ [JavaScript 教程](https://github.com/wangdoc/javascript-tutorial) <https://wangdoc.com/javascript>
+ [JavaScript 应用实例](https://www.runoob.com/js/js-examples.html)
+ [JavaScript 教程](https://www.w3school.com.cn/js/index.asp "w3school")
+ [AJAX 教程](https://www.runoob.com/ajax/ajax-tutorial.html)
+ [XMLHttpRequest Level 2 使用指南](https://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html)
+ [jQuery之家](http://www.htmleaf.com/) 自由分享jQuery、html5和css3的插件库
+ [jQuery查找标签和操作标签](https://www.cnblogs.com/zgf-666/p/9164719.html)
+ [jquery绑定元素id事件_JQuery绑定click事件的3种写法](https://blog.csdn.net/weixin_35998457/article/details/113537618)
+ [Zepto](https://zeptojs.com/)is a minimalist JavaScript library for modern browsers with a largely jQuery-compatible API. If you use jQuery, you already know how to use Zepto.
+ [Zepto](https://www.zeptojs.com.cn/)是一个轻量级的针对现代高级浏览器的JavaScript库， 它与jquery有着类似的api。 如果你会用jquery，那么你也会用zepto。Zepto的设计目的是提供 jQuery 的类似的API，但并不是100%覆盖 jQuery 。Zepto设计的目的是有一个5-10k的通用库、下载并快速执行、有一个熟悉通用的API，所以你能把你主要的精力放到应用开发上。
+ [粒子倒计时](http://demo.jb51.net/js/2021/HTML5_Canvas_lzdjs/)
+ [Naranja](https://github.com/e1016/naranja):Pure JS, HTML, and CSS Notifications with a great look – [Live demo](http://demo.jb51.net/js/2018/js_notification_prompt/)
+ [WinBox.js](http://demo.jb51.net/js/2022/html5.WinBox_ymtc/) – Modern HTML5 Window Manager
+ [social-share.js](https://www.jsdelivr.com/package/npm/social-share.js):一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+、点点等社交网站。

+ Moment.js : a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates. <https://momentjs.com/>


### css

+ [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/)
+ [Font Awesome](https://www.thinkcmf.com/font/font_awesome/examples.html)
+ [Tailwind CSS](https://tailwindcss.com/): Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
+ [bootstrap](https://getbootstrap.com/): Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins. 
+ Materialize: a modern responsive front-end framework based on Material Design <https://materializecss.com/>