# scholar-future

Journal:

+ title: *FUTURE*
+ subtitle: Natural Philosophy & Infomation Sciences
+ Author: Yao Qing-sheng
+ Author-cn: 要庆生
+ slogan: 解放思想，发展生产力
+ Address: Department of Natural Philosophy & Infomation Sciences, CHINA

---

## About

基于[hexo](https://github.com/hexojs/hexo)的博客模板。A scholar magazine/journal like blog

## pre-view/Screenshot

[Demo](https://yaoqs.github.io)

## Contact

### Social accounts

#### 开发

- github_page: <https://yaoqs.github.io/>
+ github: <https://github.com/yaoqs>
+ gitee: <https://gitee.com/yaoqs>
+ dockerhub: <https://hub.docker.com/u/lordyao>
+ Azure:
+ StackOverflow:
+ greasyfork: <https://greasyfork.org/zh-CN/users/806993-lordyao>
+ csdn: <https://blog.csdn.net/yaokingson>
+ cnblog:

#### 学术/scholar

#### 社交/social intercourse

- weibo: <http://weibo.com/lordyao>
+ 哔哩哔哩/bilibili：<https://space.bilibili.com/19354848>
+ twitter: <http://twitter.com/Lord_Honor_Yao>

#### IM

- QQ: 350788415
+ Telegram:

#### Email list

- Email: 350788415@qq.com

## Donate

[paypal捐赠 paypal.me/LordYao](https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=243292490@qq.com&currency_code=USD&amount=1&return=http://yaoqs.github.com/about.html&item_name=LordYao%27s%20Blog&undefined_quantity=1)

<image alt="alipay" src="https://yaoqs.github.io/images/支付宝收款码.jpg" width="200"/><br>
<image alt="alipay" src="https://yaoqs.github.io/images/支付宝红包码.jpg" width="200"/><br>
<image alt="wechat" src="https://yaoqs.github.io/images/微信收款码.png" width="200"/><br>
<image alt="wechat" src="https://yaoqs.github.io/images/微信打赏码.png" width="200"/>

## 感谢/Thanks

[hexo](https://github.com/hexojs/hexo):A fast, simple & powerful blog framework, powered by Node.js. <https://hexo.io>

部分代码参考自<https://github.com/guolin/crisp-hexo-theme>

## Contributing

Contribution is welcome, feel free to open an issue and fork. Waiting for your pull request.

## Installation

### Install

```
git clone git@github.com:yaoqs/hexo-theme-scholar-future.git themes/scholar-future
```

### Enable

Modify theme setting in _config.yml to scholar-future.

### Update

```
cd themes/scholar-future
git pull
```

## Configuration

+ logo - Your website logo
+ ...

## License & Copyright

著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
All Rights Reserved.

## Project plan

+ [ ] azure
+ [ ] Bootstrap
+ [ ] 注册域名
+ [ ] about页，404页（公益）
+ [ ] 个人简历页(resume)
+ [ ] lab.html实验示例代码
+ [x] 统计页statistics.ejs
+ [x] follow.ejs
+ [ ] journal-face.png journal-menu.png
+ [ ] 图片页图片轮播 参考jb51.net代码
+ [x] 打赏功能tctip  <https://www.cnblogs.com/enjoy233/p/10328361.html> <https://github.com/greedying/tctip>
+ [ ] 分享组件的嵌入(支持http/https/移动端访问)侧边悬挂式
+ [ ] 页面底部添加"回到顶部" + "收藏" + "快速评论"功能
+ [ ] stackoverflow，官方在StackExchange页面提供了flair，比如我的是: [User Bravo Yeung - Stack Exchange]?9<https://stackexchange.com/users/4637854/bravo-yeung?tab=flair>) ，页面中提供了可嵌入的html代码:

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

<script type="text/javascript" src="https://cdn.staticfile.org/jquery/3.4.1/jquery.min.js"></script>
<script type="text/javascript" src="https://cdn.staticfile.org/jquery.qrcode/1.0/jquery.qrcode.min.js"></script>
<div id="qrcode"></div>
<script>
    $('#qrcode').qrcode({width: 173,height: 173,text:"<%- url_for(page.permalink) %>"});
</script>