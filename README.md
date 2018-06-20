# weixin-atn-key-project
> 密钥分割
## License
MIT &copy; edgeowner

## ATN密钥分割微信小程序
### 简介
ATN微信小程序现有功能如下：
1. <font color=#FA8072 size=7 face="黑体">**子私钥生成**</font>：是基于现有微信平台开发的纯客户端的**密钥分割**以及**密钥合成**的工具，目的是为了将用户私钥拆解成子私钥，并转换为QRCode(二维码)，以QRCode的形式保存子私钥。用户既可以到本地，也可以将子私钥的QRCode分享给好友保存，这样可以降低密钥丢失的概率。
2. <font color=#FA8072 size=7 face="黑体">**子私钥合并**</font>：子私钥合并，是为了满足用户将父私钥丢失，为了找回父私钥的场景下，通过提供分发的子私钥，在满足**最小分割**的背景下合成父私钥，最大程度上避免父私钥的丢失。

### 原理简介
    **子私钥生成**和**子私钥合并**功能都是基于**密钥分割**的原理而开发的小工具，核心代码在于sssa.js中的create()和combine()方法。如果只是基于浏览器端开发应用，可通过npm引入module的方式，直接引入调用既可，参考项目[coldwallet](https://github.com/bihu-id/)以及[sssa.js](https://github.com/SSSaaS/sssa-js)。密钥分割的原理有兴趣可以自己去探索下。大致原理就是将一个秘密数"raw"分成"shares"份，要求至少"minimum"份凑到一起才能恢复(combine)出秘密raw。minimum就是之前提到的**最小分割**基数，简单讲就是恢复父私钥需要的最小子私钥的份数。

### 实现方式
      子私钥生成和子私钥合并的功能代码主体是基于 纯客户端安全的思想进行代码编写的，主要难点在微信小程序对传统JS库的生态兼容问提，由于微信小程序微信小程序不运行在浏览器，所以不能操作Dom，也没有document、window对象，直接引入第三发插件sssa.js是不能在小程序平台上运行的，只能导出源码，将sssa.js依赖的window对象的代码全部抽出重写，同时通过[Tina框架](https://tina.js.org/#/guide/component)编译生成对应的微信小程序可运行代码。至于QRCode二维码的生成参考

### 本地开发环境搭建
1. 本地安装Node开发环境 [(安装地址)](https://nodejs.org/en/download/)
2. 克隆项目 

   ```angular2html
   git clone https://github.com/ATNIO/weixin-atn-key-project.git
   ```
3. 切换分支(alpha分支为开发分支)
   ```angular2html
   git checkout alpha
   ```
4. 使用 npm 安装 tina
   ```angular2html
   npm i --save @tinajs/tina
   ```
5. 进入项目所在更目录，执行下面脚本后，会生成dist目录
    
   ```angular2html
   npm start
   ```
   
6. 安装微信开发者工具:
    1. 开发权限、注册账号参考[地址](https://developers.weixin.qq.com/miniprogram/dev/)，
    2. 开发工具[下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=2018614)
    3. 平台工具[使用说明](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html?t=2018614)
    
7. 使用开发者工具打开dist目录，填写好相关配置，AppId，项目名称(自定义)
   <img src="http://p5vswdxl9.bkt.clouddn.com/xiaochenxu.png" width="600" height="500" alt="亦菲表演机器猫"/>
 
   
### 后期改进
      后期可将Tina框架改为美团点评开发的**mpvue框架**([Github地址](https://github.com/Meituan-Dianping/mpvue)，[文档地址](http://mpvue.com/))，或者Tecent自己开发的**wepy框架**([Github地址](https://github.com/Tencent/wepy)，[文档地址](https://tencent.github.io/wepy/))。同时可持续迭代优化和丰富小程序功能。
  


### 参考资料
1. [weapp.qrcode.js在微信小程序中，快速生成二维码](https://github.com/yingye/weapp-qrcode)
2. [Github开源项目coldwallet](https://github.com/bihu-id/coldwallet)


