# Scholar-Future Theme

[![GitHub license](https://img.shields.io/github/license/yaoqs/hexo-theme-scholar-future.svg)](https://github.com/yaoqs/hexo-theme-scholar-future/blob/master/LICENSE)
[![Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://yaoqs.github.io/hexo-theme-scholar-future/)

## 🎯 主题简介

Scholar-Future 是一个基于 [Hexo](https://github.com/hexojs/hexo) 框架的学术杂志风格博客主题，专为研究人员、学者和技术爱好者设计。

### 特色徽章

- ![Title](https://img.shields.io/badge/FUTURE-Natural_Philosophy_&_Infomation_Sciences-ffffff?style=flat-squre&logo=Author&logoColor=black)
- ![Author](https://img.shields.io/badge/Author-Yao_Qingsheng-ffffff?style=flat-squre&logo=Author&logoColor=black)
- ![Author-cn](https://img.shields.io/badge/Author-要庆生-ffffff?style=flat-squre&logo=author&logoColor=black)
- ![slogan](https://img.shields.io/badge/Slogan-解放思想，发展生产力-darkred?style=flat-squre&logo=china&logoColor=black)
- ![Address](https://img.shields.io/badge/Address-Department_of_Natural_Philosophy_&_Infomation_Sciences,CHINA-blue?style=for-the-badge&logo=address&logoColor=black)

## 🖼️ 主题预览

[![Demo Screenshot](https://via.placeholder.com/800x500?text=Scholar-Future+Theme+Preview)](https://yaoqs.github.io)

## ✨安装指南

### 推荐安装方式 (使用Git子模块)

```bash
mkdir blog
cd blog
git submodule add https://github.com/yaoqs/hexo-theme-scholar-future.git ./themes/scholar_future
git submodule update --remote # 更新主题
```

### 启用主题/主题配置

修改Hexo配置文件 `_config.yml`:

```yaml
theme: scholar-future
theme_config:
  # 主题配置项,用于覆盖模板中的配置项,例如:
  logo:
  slogan:
  Email: your@email.com
  # 其他配置...
```

## 💝 支持项目

您可以通过以下方式支持项目发展：

| 支付方式 | 二维码 |
|---------|--------|
| 支付宝 | <image alt="alipay" src="https://yaoqs.github.io/images/支付宝收款码.jpg" width="200"/> |
| 微信 | <image alt="wechat" src="https://yaoqs.github.io/images/微信收款码.png" width="200"/> |
| PayPal | [![PayPal](https://img.shields.io/badge/Donate-paypal-ffffff?style=flat-square&logo=paypal&logoColor=red)](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=243292490@qq.com&currency_code=USD&amount=1&return=http://yaoqs.github.com/about.html&item_name=LordYao%27s%20Blog&undefined_quantity=1) |
| PayPal | ![PayPal](https://yaoqs.github.io/images/paypal.png) |

## 🤝 贡献指南

欢迎通过以下方式参与贡献：

- 提交[Issue](https://github.com/yaoqs/hexo-theme-scholar-future/issues)报告问题
- [Fork](https://github.com/yaoqs/hexo-theme-scholar-future/fork)仓库并提交Pull Request
- 参与文档翻译

## 📌 联系方式

- GitHub Issues: [问题追踪](https://github.com/yaoqs/hexo-theme-scholar-future/issues)
- 微博: [@LordYao](http://weibo.com/lordyao)
- [![Email](http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_01.png)](http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=m_L69OroxPj1qqKjrdvq6rX49PY)

## 📜 许可证/License & Copyright

[![GitHub license](https://badgen.net/github/license/yaoqs/hexo-theme-scholar-future)](https://github.com/yaoqs/hexo-theme-scholar-future/blob/master/LICENSE) [![GitHub license](https://img.shields.io/github/license/yaoqs/hexo-theme-scholar-future.svg)](https://github.com/yaoqs/hexo-theme-scholar-future/blob/master/LICENSE)

- 版权声明：Copyright © 2019-2025 要庆生. All rights reserved. 转载时请注明出处。
- 知识共享许可协议 版权声明：署名，允许他人基于本文进行创作，且必须基于与原先许可协议相同的许可协议分发本文([Creative Commons](http://creativecommons.org/licenses/by-sa/4.0/ ))

## 🚀 Todo/Roadmap

### 核心功能

- [x] **内容组织**
  - [x] 分类功能
  - [x] 标签功能
  - [x] 归档功能
- [x] **评论系统**
  - [x] [utterances](https://utteranc.es/) A lightweight comments widget built on GitHub issues. Use GitHub issues for blog comments, wiki pages and more!
  - [x] [giscus](https://giscus.app/) 利用 GitHub Discussions 实现的评论系统
- [x] **页面布局及UI设计**
  - [x] 统计页statistics.ejs
  - [x] 关注页follow.ejs
  - [x] 导航页nav.ejs
  - [ ] ScrollProgress
  - [ ] editorAnnotate批注插件
  - [ ] [Naranja](https://github.com/e1016/naranja):Pure JS, HTML, and CSS Notifications with a great look – [Live demo](http://demo.jb51.net/js/2018/js_notification_prompt/)
  - [ ] journal-face.png journal-menu.png
  - [x] 主页网站副标题及打字效果
- [x] **搜索功能**：全站内容搜索
- [x] **RSS订阅功能**：RSS订阅按钮
- [x] **归档功能**：按年份归档文章
- [x] **标签云**：动态标签云展示
- [x] **作者信息**：作者头像、简介、社交链接
- [x] **文章目录**：ToC生成
- [x] **转载声明**

### 增强功能

- [x] **统计图表**：
  - [x] hexo-statistics-charts
    - [x] [hexo（sakura）仿gitee添加文章贡献度日历图（echarts）](https://blog.csdn.net/cungudafa/article/details/106420842)
    - [x] [Hexo主题美化 -  给你的博客加上GITHUB日历云和分类雷达图](https://blog.csdn.net/u013854486/article/details/104777219)
  - [x] [文章统计图](https://liutianyi123.github.io/about/) [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery)
  - [x] 访问统计statistics.ejs
- [x] **社交分享**：集成[social-share.min.js](https://www.jsdelivr.com/package/npm/social-share.js)实现多平台分享
- [x] **捐赠插件**：自定义实现的捐赠功能[donate-plugin](https://github.com/yaoqs/donate-plugin)
- [x] **GitHub集成**：
  - [x] Fork me on GitHub图标
  - [x] GitHub Actions自动化部署

### 核心改进

- [ ] **多语言支持**：中英文双语界面
- [ ] **布局优化**：响应式设计改进
- [ ] **性能优化**：
  - [ ] 静态资源压缩
  - [ ] CDN加速：jsdelivr可以自动帮你生成.min版的js和css，所以你在上面设置js及css路径中可以直接写.min.xxx

### 功能增强

- [ ] **友链系统**：友情链接管理
- [ ] **广告**：根据需要适当增加广告功能
- [ ] **多媒体支持**：
  - [ ] 音乐播放器
  - [ ] 视频播放器
  - [ ] 相册功能：图片页图片轮播 参考jb51.net代码
- [ ] **交互增强**：
  - [ ] 滚动进度指示器
  - [ ] 回到顶部按钮
  - [ ] 夜间模式切换
  - [ ] 收藏
  - [ ] 快速评论
  - [ ] 公告栏滚动文字:marquee标签

### 技术探索

- [x] &#x1f9ea;Lab 页面**实验室**功能设计
  - [ ] 地图及天气预报
  - [ ] **JS插件集成**
    - [ ] [Three.js](https://github.com/mrdoob/three.js) - 3D可视化
    - [ ] D3.js - 数据可视化
    - [ ] ECharts - 图表库
    - [ ] Babylon.js
    - [ ] [Underscore.js](https://underscorejs.org/)

### 📅 版本计划

- &#x1f9ea; v0.0.1 发布日期：Sep 15, 2021
- &#x1f9ea; v1.0.0 发布日期：Jul 22, 2024
- &#x1f9ea; v2.0.0 发布日期：Sep 16, 2025

## 以下代码用于在GitHub page 中显示

<script type="text/javascript" src="https://cdn.staticfile.org/jquery/3.7.0/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.staticfile.org/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
<div id="qrcode"></div>
<script>$('#qrcode').qrcode({width: 173,height: 173,text:"https://yaoqs.github.io/hexo-theme-scholar-future"});</script>

## 🔗 技术参考/References

### 主题开发

- [Hexo官方文档](https://hexo.io/zh-cn/docs/themes)
- [Matery主题](https://github.com/blinkfox/hexo-theme-matery)
- [«NexT»](https://github.com/theme-next/hexo-theme-next) is a high quality elegant Hexo theme. It is crafted from scratch with love.
- [hexo-theme-matery](https://github.com/blinkfox/hexo-theme-matery):A beautiful hexo blog theme with material design and responsive design.一个基于材料设计和响应式设计而成的全面、美观的Hexo主题。国内访问：<http://blinkfox.com>
- [Hexo主题开发](https://www.cnblogs.com/yyhh/p/11058985.html)
- [Hexo主题(EJS模板)自定义页面扩展](https://cloud.tencent.com/developer/beta/article/1558677)
- [hexo博客搭建及主题优化(一)](https://blog.csdn.net/u013044713/article/details/120250802)
- [【持续更新】最全Hexo博客搭建+主题优化+插件配置+常用操作+错误分析 -遇见西门](https://www.simon96.online/2018/10/12/hexo-tutorial/)
- [自定义hexo创建文章的模板](https://www.mad-coding.cn/2019/08/02/%E8%87%AA%E5%AE%9A%E4%B9%89hexo%E5%88%9B%E5%BB%BA%E6%96%87%E7%AB%A0%E7%9A%84%E6%A8%A1%E6%9D%BF/#0x02-%E4%BF%AE%E6%94%B9%E6%AD%A5%E9%AA%A4)
- [第三方服务集成 - NexT 使用文档](http://theme-next.iissnan.com/third-party-services.html#share-system)
- [Hexo 搭建个人博客系列：进阶设置篇](http://yearito.cn/posts/hexo-advanced-settings.html)
- [Hexo 博客搭建](https://blog.csdn.net/qq_36759224/category_9285510.html)
- [Hexo百度主动提交链接](https://www.jianshu.com/p/f37452d4978e)
- [hexo笔记六：next主题添加字数统计和阅读时长估计](https://blog.csdn.net/Awt_FuDongLai/article/details/107425490)
- [hexo搭建静态博客(五)——其他一些DIY](https://liutianyi123.github.io/posts/d7f7.html)
- [从零开始制作 Hexo 主题](https://www.cnblogs.com/mmzuo-798/p/10451385.html)
- [hexo博客优化之next主题美化](https://blog.csdn.net/nightmare_dimple/article/details/86661502)
- [hexo+github搭建博客(超级详细版，精细入微)](https://segmentfault.com/a/1190000021614307)
- [个人博客搭建笔记----hexo根目录下的_config.yml配置解释](https://blog.csdn.net/zemprogram/article/details/104288872)
- [个人博客搭建笔记----hexo初始化目录结构和打包文件](https://blog.csdn.net/zemprogram/article/details/96638820)
- [个人博客搭建笔记----hexo自定义主题搭建](https://blog.csdn.net/zemprogram/article/details/104412386)
- [Hexo建站过程总结](https://www.cnblogs.com/manastudent/p/10190746.html)
- [手把手教你github actions 部署 pages，动态网页，静态网页，缓存优化，多分支部署等](https://juejin.cn/post/7334714350899642407)
- [【Hexo自动部署】优雅的使用 Github Actions 进行 Hexo 静态博客的持续集成与部署](https://cloud.tencent.com/developer/article/2369534)
- [hexo引入tailwindcss的操作方式](https://www.youdiandongxi.com/article/hexo-coding-with-tailwind.html)

### js

- [JavaScript 教程](https://www.runoob.com/js/js-tutorial.html "菜鸟教程")
- [JavaScript 教程](https://github.com/wangdoc/javascript-tutorial) <https://wangdoc.com/javascript>
- [JavaScript 应用实例](https://www.runoob.com/js/js-examples.html)
- [JavaScript 教程](https://www.w3school.com.cn/js/index.asp "w3school")
- [AJAX 教程](https://www.runoob.com/ajax/ajax-tutorial.html)
- [XMLHttpRequest Level 2 使用指南](https://www.ruanyifeng.com/blog/2012/09/xmlhttprequest_level_2.html)
- [jQuery之家](http://www.htmleaf.com/) 自由分享jQuery、html5和css3的插件库
- [jQuery查找标签和操作标签](https://www.cnblogs.com/zgf-666/p/9164719.html)
- [jquery绑定元素id事件_JQuery绑定click事件的3种写法](https://blog.csdn.net/weixin_35998457/article/details/113537618)
- [Zepto](https://zeptojs.com/)is a minimalist JavaScript library for modern browsers with a largely jQuery-compatible API. If you use jQuery, you already know how to use Zepto.
- [Zepto](https://www.zeptojs.com.cn/)是一个轻量级的针对现代高级浏览器的JavaScript库， 它与jquery有着类似的api。 如果你会用jquery，那么你也会用zepto。Zepto的设计目的是提供 jQuery 的类似的API，但并不是100%覆盖 jQuery 。Zepto设计的目的是有一个5-10k的通用库、下载并快速执行、有一个熟悉通用的API，所以你能把你主要的精力放到应用开发上。
- [粒子倒计时](http://demo.jb51.net/js/2021/HTML5_Canvas_lzdjs/)
- [Naranja](https://github.com/e1016/naranja):Pure JS, HTML, and CSS Notifications with a great look – [Live demo](http://demo.jb51.net/js/2018/js_notification_prompt/)
- [WinBox.js](http://demo.jb51.net/js/2022/html5.WinBox_ymtc/) – Modern HTML5 Window Manager
- [social-share.js](https://www.jsdelivr.com/package/npm/social-share.js):一键分享到微博、QQ空间、QQ好友、微信、腾讯微博、豆瓣、Facebook、Twitter、Linkedin、Google+、点点等社交网站。

- Moment.js : a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates. <https://momentjs.com/>

### css

- [CSS Conditional Rules Module Level 3](https://drafts.csswg.org/css-conditional-3/)
- [Font Awesome](https://www.thinkcmf.com/font/font_awesome/examples.html)
- [Tailwind CSS](https://tailwindcss.com/): Rapidly build modern websites without ever leaving your HTML. A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
- [bootstrap](https://getbootstrap.com/): Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.
- Materialize: a modern responsive front-end framework based on Material Design <https://materializecss.com/>
