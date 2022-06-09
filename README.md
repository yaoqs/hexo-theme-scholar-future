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

### Install

```shell
git clone git@github.com:yaoqs/hexo-theme-scholar-future.git themes/scholar-future
```

### Enable

Modify hexo theme setting in _config.yml to scholar-future. such as:

```yml
theme: scholar-future                                           #当前主题名称。值为false时禁用主题
theme_config:                                                   #主题的配置文件。在这里放置的配置会覆盖主题目录下的 _config.yml 中的配置
```

### Update

```shell
cd themes/scholar-future
git pull
```

## Configuration

+ logo - Your website logo
+ ...

## License & Copyright

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
All Rights Reserved.

## issue

+ <https://github.com/yaoqs/hexo-theme-scholar-future/issues>
+ weibo留言: <http://weibo.com/lordyao>

## Project plan/Roadmap

+ [ ] azure
+ [ ] Bootstrap
+ [ ] 注册域名
+ [ ] 配置英文说明/双语；加小图标，并解决大小写不敏感问题
  + [ ] About页/个人简历页(resume)
  + [ ] 404页
  + [ ] 捐献Donate.md
  + [ ] 导航页Navigator.md
  + [ ] 游戏Game.md
  + [ ] 音乐Music.md
  + [ ] Feature.md
+ [ ] lab.html实验示例代码
+ [ ] layout布局
+ [ ] 主题相关插件
+ [x] 统计页statistics.ejs
+ [x] 关注页follow.ejs
+ [x] 导航页nav.ejs
+ [x] tag cloud
+ [ ] editorAnnotate批注插件
+ [ ] journal-face.png journal-menu.png
+ [ ] 图片页图片轮播 参考jb51.net代码
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
    作者：Bravo Yeung
    Email: legege007@126.com
    源地址：https://www.cnblogs.com/enjoy233/p/10328361.html#%E5%A4%8D%E5%88%B6%E6%AD%A3%E6%96%87%E6%96%87%E5%AD%97%E6%97%B6%E8%87%AA%E5%8A%A8%E5%8A%A0%E7%89%88%E6%9D%83
    复制时间: 2019-12-02 15:39:24
    来源：博客园cnblogs
    © 版权声明：本文为博主原创文章，转载请附上博文链接！
    ```

+ [ ] 在公告栏添加滚动文字 使用marquee标签即能实现文字的滚动
+ [x] 在页面顶部添加"Fork me on Github"图标
+ [ ] 修改主题风格 Github+Jekyll 搭建个人网站详细教程 <https://www.jianshu.com/p/9f71e260925d>
+ [ ] github action流
+ [ ] github project

## 以下代码用于在GitHub page 中显示

<script type="text/javascript" src="https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.staticfile.org/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
<div id="qrcode"></div>
<script>
    $('#qrcode').qrcode({width: 173,height: 173,text:"<%- url_for(page.permalink) %>"});
</script>
