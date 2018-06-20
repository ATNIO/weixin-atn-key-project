; require('../../common.js'); var webpackJsonp = wx.webpackJsonp;webpackJsonp([8],{

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(104)

/***/ }),

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tina = __webpack_require__(0);

var _sssa = __webpack_require__(3);

_tina.Page.define({

  /**
   * 页面的初始数据
   */
  data: {
    recognizeCode_1: '',
    recognizeCode_2: '',
    recognizeCode_3: '',
    combineData: '',
    isShowResult_1: true,
    isShowResult_2: true,
    isShowResult_3: true,
    sharesStrs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      isShowResult: true
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function onReady() {
    // 页面渲染完成
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function onShow() {
    // 页面显示
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function onHide() {
    // 页面隐藏
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function onUnload() {
    // 页面关闭
  },

  methods: {

    generateData: function generateData() {
      var recognizeCode_1 = wx.getStorageSync('recognizeCode_1');
      var recognizeCode_2 = wx.getStorageSync('recognizeCode_2');
      var recognizeCode_3 = wx.getStorageSync('recognizeCode_3');
      if ((null == recognizeCode_1 || recognizeCode_1 == "") && (null == recognizeCode_2 || recognizeCode_2 == "") && (null == recognizeCode_3 || recognizeCode_3 == "")) {
        wx.showToast({
          title: '生成失败',
          icon: 'loading',
          duration: 500
        });
        return;
      }
      var sharesStrs = new Array();
      if (recognizeCode_1.length > 0) {
        sharesStrs.push(recognizeCode_1);
      }
      if (recognizeCode_2.length > 0) {
        sharesStrs.push(recognizeCode_2);
      }
      if (recognizeCode_3.length > 0) {
        sharesStrs.push(recognizeCode_3);
      }
      if (sharesStrs.length >= 2) {
        var result = (0, _sssa.combine)(sharesStrs);
        this.setData({
          combineData: result
        });
      } else {
        wx.showToast({
          title: '至少需要两个子私钥',
          icon: 'loading',
          duration: 500
        });
        return;
      }
      var that = this;
      wx.setStorage({
        key: "combineData",
        data: that.data.combineData,
        success: function success() {
          console.log('setStorage success');
        }
      });
      wx.removeStorage({
        key: 'recognizeCode_1',
        success: function success(res) {
          console.log('recognizeCode_1  removeStorage success');
        }
      });
      wx.removeStorage({
        key: 'recognizeCode_2',
        success: function success(res) {
          console.log('recognizeCode_2  removeStorage success');
        }
      });
      wx.removeStorage({
        key: 'recognizeCode_3',
        success: function success(res) {
          console.log('recognizeCode_3  removeStorage success');
        }
      });

      wx.navigateTo({
        url: '../keycombineshow/parentqrcode',
        success: function success(res) {
          // success
          console.log('wx.navigateTo  /keycombineshow/parentqrcode');
        },
        fail: function fail() {
          // fail
        },
        complete: function complete() {
          // complete
        }
      });
    },

    recognizeCode_1: function recognizeCode_1(e) {
      console.log(e);
      this.setData({
        isShowResult_1: false
      });
      var that = this;
      wx.scanCode({
        success: function success(res) {
          that.setData({
            recognizeCode_1: res["result"]
          });
          wx.setStorage({
            key: "recognizeCode_1",
            data: that.data.recognizeCode_1,
            success: function success() {
              console.log('recognizeCode_1 setStorage success');
            }
          });
        },
        fail: function fail() {
          // fail
        },
        complete: function complete() {
          // complete
        }
      });
    },

    recognizeCode_2: function recognizeCode_2(e) {
      console.log(e);
      this.setData({
        isShowResult_2: false
      });
      var that = this;
      wx.scanCode({
        success: function success(res) {
          // success
          console.log('recognizeCode wx.scanCode1:' + res);
          console.log('recognizeCode wx.scanCode2:' + that.data);
          that.setData({
            recognizeCode_2: res["result"]
          });

          //将子密钥数组本地存储

          wx.setStorage({
            key: "recognizeCode_2",
            data: that.data.recognizeCode_2,
            success: function success() {
              console.log('recognizeCode_2  setStorage success');
            }
          });
        },
        fail: function fail() {
          // fail
        },
        complete: function complete() {
          // complete
        }
      });
    },

    recognizeCode_3: function recognizeCode_3(e) {
      console.log(e);
      this.setData({
        isShowResult_3: false
      });
      var that = this;
      wx.scanCode({
        success: function success(res) {
          that.setData({
            recognizeCode_3: res["result"]
          });
          wx.setStorage({
            key: "recognizeCode_3",
            data: that.data.recognizeCode_3,
            success: function success() {
              console.log(' recognizeCode_3 setStorage success');
            }
          });
        },
        fail: function fail() {
          // fail
        },
        complete: function complete() {
          // complete
        }
      });
    }

  }

});

/***/ })

},[103]);