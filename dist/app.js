; require('common.js'); var webpackJsonp = wx.webpackJsonp;webpackJsonp([9],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


App({
  onLaunch: function onLaunch() {
    //小程序初始化完成只执行一次
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
  },
  onShow: function onShow() {
    //启动小程序或者从后台进入前台
  },
  onHide: function onHide() {
    //从前台进入后台
  },
  getUserInfo: function getUserInfo(cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userItabBarnfo);
    } else {
      //调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              that.globalData.userInfo = res.userInfo;
              typeof cb == "function" && cb(that.globalData.userInfo);
            }
          });
        }
      });
    }
  },
  globalData: {
    //全局信息
    userInfo: null
  }
});

/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(150)

/***/ })

},[52]);