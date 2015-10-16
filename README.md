#Pure Qrcode extension for chrome

一个不干净的插件居然 inject style 影响到我正在开发的页面样式，生气，顺带卸载了一大堆。把二维码的插件也卸载了，就自己写一个。

Icon都是自己用Sketch画的，感谢同桌的设计老湿教会我用Sketch神器。

最困难的地方在于理解插件运行机制，太TM复杂了，从官方示例中的金字塔回调中就能看出来了。很难懂，只好下了官方的示例源码来反复调试，然后就是拷贝粘贴修改整理。使用了 qrcode 库，自写代码加注释不超过 60行，开心。

*插件没有在 chrome 应用中心注册，所以会有警告，下载下来直接往 chrome://extensions 里面拖，安装就行了

###下载地址：[https://coding.net/u/yuanoook/p/Pure-Qrcode/git/raw/master/PureQrcode.crx](https://coding.net/u/yuanoook/p/Pure-Qrcode/git/raw/master/PureQrcode.crx)

###最终效果：

![shot.png](https://coding.net/u/yuanoook/p/Pure-Qrcode/git/raw/master/shot.png)

##Download

Source code: [http://fly.yuanoook.com/PureQrcode](http://fly.yuanoook.com/PureQrcode)

##Author

Name: Rango Yuan

WebSite: [http://yuanoook.com](http://yuanoook.com)

Email: yuanoook@foxmail.com

##Developer Reference

[https://developer.chrome.com/extensions](https://developer.chrome.com/extensions)

[http://open.chrome.360.cn/extension_dev/overview.html](http://open.chrome.360.cn/extension_dev/overview.html)