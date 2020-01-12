<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
         document.title = '大爷，去哪儿浪了？';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/images/favicon-32x32-next.png");
         document.title = '欢迎回来呀。。。';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });