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
<image alt="wechat" src="https://yaoqs.github.io/images/微信打赏码.png" width="200"/>

## 感谢/Thanks

[hexo](https://github.com/hexojs/hexo):A fast, simple & powerful blog framework, powered by Node.js. <https://hexo.io>

部分代码参考自<https://github.com/guolin/crisp-hexo-theme> 以及 <https://github.com/theme-next/hexo-theme-next>

## Contributing

Contribution is welcome, free to open an issue and fork. Waiting for your pull request.

## Installation

### Clone

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

+ logo - Your website logo
+ ...

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
+ [ ] ArtPlayer.js

```js
 <!-- jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/artplayer/dist/artplayer.js"></script>

<!-- unpkg -->
<script src="https://unpkg.com/artplayer/dist/artplayer.js"></script>
<div class="artplayer-app"></div>
var art = new Artplayer({
    container: '.artplayer-app',
    url: 'path/to/video.mp4',
});
```

+ [ ] layout布局
+ [ ] 主题相关插件
  + [ ] [hexo-wordcount](https://github.com/willin/hexo-wordcount) 字数统计
  + [ ] hexo-tag-mmedia 是 MonoLogueChi 自用的一个媒体插入插件
    + [ ] [hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer) 是 APlayer播放器的 Hexo 标签插件，可以十分方便地在文章内插入音乐播放器。
    + [ ] [hexo-tag-dplayer](https://github.com/MoePlayer/hexo-tag-dplayer)是 APlayer 播放器的 Hexo 标签插件，可以十分方便地在文章内插入视频播放器。
  + [ ] hexo-git-backup
  + [x] hexo-tag-cloud
  + [ ] hexo-tag-chart:在 Hexo 站点中插入 Chartjs 动态图表;Chartjs 是一款简单优雅的数据可视化工具，对比其他图表库如 echarts 、 highcharts 、 c3 、 flot 、 amchart 等，它的画面效果、动态效果都更精致，它的 文档首页 (opens new window) 就透出一股小清新，基于 HTML5 Canvas，它拥有更好的性能且响应式，基本满足了一般数据展示的需要，包括折线图，条形图，饼图，散点图，雷达图，极地图，甜甜圈图等。
  + [ ] hexo-filter-mathjax 是一个用于在 Hexo 渲染 MathJax (opens new window)（数学公式）的插件
  + [ ] hexo-renderer-marked-lazy
  + [x] highlight
  + [x] hexo-renderer-markdown-it
  + [ ] [hexo-tipue-search-db](https://github.com/rqh656418510/hexo-tipue-search-db)
  + [ ] hexo-generator-searchdb
  + [ ] [hexo-generator-search](https://github.com/wzpan/hexo-generator-search)
  + [x] hexo-permalink-pinyin
  + [ ] [hexo_submit_urls_to_search_engine](https://easyhexo.com/3-Plugins-use-and-config/3-6-hexo-submit-urls-to-search-engine/#%E4%BD%BF%E7%94%A8)
  + [ ] [hexo-generator-sitemap](https://github.com/hexojs/hexo-generator-sitemap)
  + [ ] baidusitemap
  + [ ] aplayer/music
  + [ ] post_wordcount
  + [ ] hexo-generator-feed
  + [ ] 主页网站副标题及打字效果
  + [ ] [Hexo主题开发 - ﹏猴子请来的救兵 - 博客园](https://www.cnblogs.com/yyhh/p/11058985.html)
  + [ ] [hexo-blog-encrypt](https://github.com/MikeCoder/hexo-blog-encrypt)
  + [ ] [Hexo主题开发](https://www.cnblogs.com/yyhh/p/11058985.html)
  + [ ] [Hexo主题(EJS模板)自定义页面扩展](https://cloud.tencent.com/developer/beta/article/1558677)
  + [ ] [hexo（sakura）仿gitee添加文章贡献度日历图（echarts）](https://blog.csdn.net/cungudafa/article/details/106420842)
  + [ ] [Hexo主题美化 | 给你的博客加上GITHUB日历云和分类雷达图](https://blog.csdn.net/u013854486/article/details/104777219)
  + [ ] <https://karobben.github.io/2021/03/22/Blog/hexo-sitemap/>
+ [x] 统计页statistics.ejs
+ [x] 关注页follow.ejs
+ [x] 导航页nav.ejs
+ [x] tag cloud
+ [x] 侧边栏 Donate
+ [ ] editorAnnotate批注插件
+ [ ] [Naranja](https://github.com/e1016/naranja):Pure JS, HTML, and CSS Notifications with a great look – [Live demo](http://demo.jb51.net/js/2018/js_notification_prompt/)
+ [ ] journal-face.png journal-menu.png
+ [ ] 图片页图片轮播 参考jb51.net代码
+ [ ] 底边栏/侧边栏/下拉列表日历、天气
+ [ ] 站内搜索
+ [x] 打赏功能 widget/donate.ejs ~~tctip  <https://www.cnblogs.com/enjoy233/p/10328361.html> <https://github.com/greedying/tctip>~~已自编码实现 [Donate & Reward 大吉大利，今晚吃鸡](https://yaoqs.github.io/donate-plugin/)  github repo：[donate-plugin](https://github.com/yaoqs/donate-plugin)
+ [ ] 分享组件的嵌入(支持http/https/移动端访问)侧边悬挂式
+ [ ] 页面底部添加"回到顶部" + "收藏" + "快速评论"功能
+ [ ] stackoverflow，官方在StackExchange页面提供了flair，比如: [User Bravo Yeung - Stack Exchange](https://stackexchange.com/users/4637854/bravo-yeung?tab=flair) ，页面中提供了可嵌入的html代码:

    ```html
    Language:  HTML
    <a href="https://stackexchange.com/users/4637854/bravo-yeung"><img src="https://stackexchange.com/users/flair/4637854.png" width="208" height="58" alt="profile for Bravo Yeung on Stack Exchange, a network of free, community-driven Q&amp;A sites" title="profile for Bravo Yeung on Stack Exchange, a network of free, community-driven Q&amp;A sites" /></a>
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
+ [ ] [文章统计图](https://liutianyi123.github.io/about/) [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)
+ [ ] github action流
+ [ ] github project
+ [ ]
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

### theme

+ [主题](https://hexo.io/zh-cn/docs/themes)
  + [«NexT»](https://github.com/theme-next/hexo-theme-next) is a high quality elegant Hexo theme. It is crafted from scratch with love.
  + [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery):A beautiful hexo blog theme with material design and responsive design.一个基于材料设计和响应式设计而成的全面、美观的Hexo主题。国内访问：<http://blinkfox.com>
  + [ ] [Hexo主题开发](https://www.cnblogs.com/yyhh/p/11058985.html)
  + [ ] [Hexo主题(EJS模板)自定义页面扩展](https://cloud.tencent.com/developer/beta/article/1558677)

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

### css

+ [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/)
+ [Font Awesome](https://www.thinkcmf.com/font/font_awesome/examples.html)
