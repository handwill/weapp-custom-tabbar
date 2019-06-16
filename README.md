# weapp-custom-tabbar
小程序自定义tabbar 首页
由于各种原因微信自带的`tabbar` 无法满足我们的需求，所以采用自定义`tabbar`。

自定义`tabbar` 有几种方式，其中一种是所有的子页面都用`page `，`tabbar` 切换的时候用[navigator 跳转](https://blog.csdn.net/weixin_43227172/article/details/85563221)，这种方式页面会跳动闪，体验不是很好。

我采用的是将`tabbar子页面`都写成`component`，`tabbar` 切换的时候，显示不同的`component`。其中`tabbar`采用的是[ vant 的tabbar组件 ](https://youzan.github.io/vant-weapp/#/tabbar),效果如下图所示。
![页面切换效果](https://upload-images.jianshu.io/upload_images/2210164-b56f85b938c15914.gif?imageMogr2/auto-orient/strip)
