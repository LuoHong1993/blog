# LuoHong1993.github.io

## blog

index url https://blog.iboot.tech

## framework

[Hexo](https://hexo.io/)

theme [next](http://theme-next.iissnan.com/)

## plug-in

### hexo-admin
```
-- or npm install --save hexo-admin
cnpm install --save hexo-admin
```
go to url http://ip:port/admin/#/auth-setup

input ==username== ==password== ==secret==

```
// main _config_yml add

# hexo-admin authentification
admin:
  username: login name
  password_hash: Automatic generation
  secret: my super secret phrase
```
enjoy http://ip:port/admin

### hexo-generator-searchdb
```
-- or npm install --save hexo-generator-searchdb
cnpm install --save hexo-generator-searchdb
```

```
// main _config_yml add
search:
    path: search.xml
    field: post
    format: html
    limit: 10000
    
// next _config_yml modify
local_search:
  enable: true
```

### hexo-wordcount
```
-- or npm i --save hexo-wordcount
cnpm i --save hexo-wordcount
```

```
// next _config_yml modify
post_wordcount:
  item_text: true
  wordcount: true
  min2read: true
  totalcount: true
  separated_meta: true
  
// themes/next/languages/zh-Hans.yml modify
post:
  totalcount: 总字数
```

### daovoice

```
// next _config_yml add
# Online contact
daovoice: true
daovoice_app_id: 23ba41b0  
  
// themes/next/layout/_partials/head.swig add
{% if theme.daovoice %}
  <script>
  (function(i,s,o,g,r,a,m){i["DaoVoiceObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;a.charset="utf-8";m.parentNode.insertBefore(a,m)})(window,document,"script",('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/0f81ff2f.js","daovoice")
  daovoice('init', {
      app_id: "{{theme.daovoice_app_id}}"
    });
  daovoice('update');
  </script>
{% endif %}
```

### hitokoto

```
// themes/next/layout/_macro/sidebar.swig
<p class="site-description motion-element" itemprop="description" id="hitokoto">获取中...</p>
  
// themes/next/layout/_layout.swig add
<script>
  fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto; 
    })
    .catch(function (err) {
      console.error(err);
    })
</script>
{% endif %}
```

## mine config summary

*main _config.yml*

```
# Site
title: 儒客
subtitle: 谈笑有鸿儒，往来无白丁
description:
keywords:
author: Hong Luo
language: zh-Hans
timezone: Asia/Shanghai

# Theme
theme: next

# hexo-admin authentification
admin:
  username: login name
  password_hash: hash
  secret: my super secret phrase

# Search
search:
    path: search.xml
    field: post
    format: html
    limit: 10000
    
```

*next _config.yml*

```
# Menu
menu:
  home: /|| home
  categories: /categories/|| th
  tags: /tags/ || tags
  archives: /archives/|| archive
  about: /about/|| user

# Avatar
avatar: /images/lh_head.jpg

# Canvas-nest
canvas_nest: true

# Scroll percent label in b2t button.
  scrollpercent: true

# social
social:
  GitHub: https://github.com/LuoHong1993 || github
  码云: https://gitee.com/hong1993 || git
  E-Mail: mailto:luohong_studio@163.com || envelope
  #Twitter: https://twitter.com/yourname || twitter
  FaceBook: https://www.facebook.com/hongluo1993 || facebook  
  
# social  
footer:
  since: 2018  
  powered: false
  beian:
    enable: true
    icp: 琼ICP备17003039号-3
  theme:
    enable: false

# Online contact
daovoice: true
daovoice_app_id: 23ba41b0    
    

```

*themes/next/languages/zh-Hans.yml*

```
post:
  totalcount: 总字数
```

*themes/next/layout/_layout.swig*

```
<!--崩溃欺骗-->
<script type="text/javascript" src="/js/src/crash_cheat.js"></script>
<!-- 页面点击小红心 -->
<script type="text/javascript" src="/js/src/love.js"></script>

<script>
  fetch('https://v1.hitokoto.cn')
    .then(function (res){
      return res.json();
    })
    .then(function (data) {
      var hitokoto = document.getElementById('hitokoto');
      hitokoto.innerText = data.hitokoto; 
    })
    .catch(function (err) {
      console.error(err);
    })
</script>

```

*themes/next/source/css/_common/components/sidebar/sidebar-author.styl*

```
.site-author-image {
  display: block;
  margin: 0 auto;
  padding: $site-author-image-padding;
  max-width: $site-author-image-width;
  height: $site-author-image-height;
  border: $site-author-image-border-width solid $site-author-image-border-color;

  border-radius: 50%;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  transition: 1.4s all;
}

.site-author-image:hover {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -transform: rotate(360deg);
}
```

*themes/next/layout/_third-party/analytics/busuanzi-counter.swig*

```
{% if theme.busuanzi_count.enable %}
<div class="busuanzi-count">
  <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>

  {% if theme.busuanzi_count.site_uv %}
    <span class="site-uv">
      {{ theme.busuanzi_count.site_uv_header }}&nbsp;&nbsp;访问人数:
      <span class="busuanzi-value" id="busuanzi_value_site_uv"></span>
      {{ theme.busuanzi_count.site_uv_footer }}
    </span>
  {% endif %}

  {% if theme.busuanzi_count.site_pv %}
    <span class="site-pv">
      {{ theme.busuanzi_count.site_pv_header }}&nbsp;&nbsp;阅读数量:
      <span class="busuanzi-value" id="busuanzi_value_site_pv"></span>
      {{ theme.busuanzi_count.site_pv_footer }}
    </span>
  {% endif %}
</div>
{% endif %}

```

*themes/next/layout/_partials/footer.swig*

```
{% if theme.footer.beian.enable %}
  <div class="beian"><a target="_blank" href="http://www.beian.miit.gov.cn/" >{{ theme.footer.beian.icp }}</a></div>
{% endif %}
```

*themes/next/layout/_macro/sidebar.swig*

```
<p class="site-description motion-element" itemprop="description" id="hitokoto">获取中...</p>

{# Blogroll #}
          {% if theme.links %}
            <div class="links-of-blogroll motion-element {{ "links-of-blogroll-" + theme.links_layout | default('inline') }}">
              <div class="links-of-blogroll-title">
                <i class="fa  fa-fw fa-{{ theme.links_icon | default('globe') | lower }}"></i>
                {{ theme.links_title }}
              </div>
              <ul class="links-of-blogroll-list">
                {% for name, link in theme.links %}
                  <li class="links-of-blogroll-item">
                    <a style="color:#fc6423;border-bottom: 0;" href="{{ link }}" title="{{ name }}" target="_blank">{{ name }}</a>
                  </li>
                {% endfor %}
              </ul>
            </div>
          {% endif %}
```

*themes/next/layout/_partials/head.swig*

```
{% if theme.daovoice %}
  <script>
  (function(i,s,o,g,r,a,m){i["DaoVoiceObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;a.charset="utf-8";m.parentNode.insertBefore(a,m)})(window,document,"script",('https:' == document.location.protocol ? 'https:' : 'http:') + "//widget.daovoice.io/widget/0f81ff2f.js","daovoice")
  daovoice('init', {
      app_id: "{{theme.daovoice_app_id}}"
    });
  daovoice('update');
  </script>
{% endif %}
```

*themes/next/layout/_macro/post.swig*

```
{% if not is_index %}
  <div>
    {% include 'passage-end-tag.swig' %}
    </div>
  {% endif %}
```