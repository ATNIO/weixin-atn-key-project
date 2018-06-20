# weixin-atn-key-project
> 密钥分割
## License
MIT &copy; edgeowner

## ATN密钥分割微信小程序
### 简介
ATN微信小程序现有功能如下：
1. 子私钥生成：是基于现有微信平台开发的纯客户端的**密钥分割**以及**密钥合成**的工具，目的是为了将用户私钥拆解成子私钥，并转换为QRCode(二维码)，以QRCode的形式保存子私钥。用户既可以到本地，也可以将子私钥的QRCode分享给好友保存，这样可以降低密钥丢失的概率。
2. 子私钥合并：子私钥合并，是为了满足用户将父私钥丢失，为了找回父私钥的场景下，通过提供分发的子私钥，在满足**最小分割**的背景下合成父私钥，最大程度上避免父私钥的丢失。

### 原理简介
**子私钥生成**和**子私钥合并**功能都是基于**密钥分割**的原理而开发的小工具，核心代码在于sssa.js中的create()和combine()方法。如果只是基于浏览器端开发应用，可通过npm引入module的方式，直接引入调用既可，参考项目[coldwallet](https://github.com/bihu-id/)以及[sssa.js](https://github.com/SSSaaS/sssa-js)。密钥分割的原理有兴趣可以自己去探索下。大致原理就是将一个秘密数"raw"分成"shares"份，要求至少"minimum"份凑到一起才能恢复(combine)出秘密raw。minimum就是之前提到的**最小分割**基数，简单讲就是恢复父私钥需要的最小子私钥的份数。

### 实现方式
子私钥生成和子私钥合并的功能代码主体是基于 纯客户端安全的思想进行代码编写的，主要难点在微信小程序对传统JS库的生态兼容问提，由于微信小程序微信小程序不运行在浏览器，所以不能操作Dom，也没有document、window对象，直接引入第三发插件sssa.js是不能在小程序平台上运行的，只能导出源码，将sssa.js依赖的window对象的代码全部抽出重写，同时通过[Tina框架](https://tina.js.org/#/guide/component)编译生成对应的微信小程序可运行代码。

### 本地开发环境搭建
1. 本地安装Node开发环境 [(安装地址)](https://nodejs.org/en/download/)
2. 克隆项目 

   ``` javascript
   
   ```
3. 使用 npm 安装 tina
   ``` javascript
   npm i --save @tinajs/tina
   ```
4. 进入项目所在更目录，执行下面脚本后，会生成dist目录
    
   ```javascript
   npm start
   ```
   
5. 安装微信开发者工具(开发权限，注册账号参考[地址](https://developers.weixin.qq.com/miniprogram/dev/))，[下载地址](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html?t=2018614)，平台工具[使用说明](https://developers.weixin.qq.com/miniprogram/dev/devtools/devtools.html?t=2018614)

6. 使用开发者工具打开dist目录，填写好相关配置，AppId，项目名称(自定义)
  ![](http://p5vswdxl9.bkt.clouddn.com/xiaochenxu.png) 
  
  

