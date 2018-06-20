; require('../../common.js'); var webpackJsonp = wx.webpackJsonp;webpackJsonp([7],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(120)

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tina = __webpack_require__(0);

var _weappQrcodeEsm = __webpack_require__(19);

var _weappQrcodeEsm2 = _interopRequireDefault(_weappQrcodeEsm);

var _sssa = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var time = 0;
var touchDot = 0; //触摸时的原点
var interval = "";
var flag_hd = true;

_tina.Page.define({
    data: {
        qrMsg: ''
    },

    onShow: function onShow() {
        flag_hd = true; //重新进入页面之后，可以再次执行滑动切换页面代码
        clearInterval(interval); // 清除setInterval
        time = 0;
    },

    onLoad: function onLoad(options) {

        var combineData = wx.getStorageSync('combineData');
        console.log('combineDataQQQQQQ:' + combineData);
        this.setData({
            qrMsg: combineData
        });
        var that = this;
        if (that.data.qrMsg.length > 300) {
            wx.showLoading({
                title: '亲，你是在摧残我啊！！！'
            });
            (0, _weappQrcodeEsm2.default)({
                width: 300,
                height: 300,
                canvasId: 'myQrcode',
                text: that.data.qrMsg
            });
            setTimeout(function () {
                wx.hideLoading();
            }, 2000);
        } else {
            console.log('qrMsg:' + that.data.qrMsg);
            (0, _weappQrcodeEsm2.default)({
                width: 300,
                height: 300,
                canvasId: 'myQrcode',
                text: that.data.qrMsg
            });
        }
    },

    methods: {
        //点击图片进行预览，长按保存分享图片
        previewImg: function previewImg(e) {
            wx.showActionSheet({
                itemList: ['保存二维码'],
                success: function success(res) {
                    console.log(res.tapIndex);
                    if (res.tapIndex == 0) {
                        console.log('保存二维码');
                        wx.canvasToTempFilePath({
                            canvasId: 'myQrcode',
                            success: function success(res) {
                                var tempFilePath = encodeURI(res.tempFilePath);
                                console.log('tempFilePath' + res.tempFilePath);
                                wx.saveImageToPhotosAlbum({
                                    filePath: res.tempFilePath,
                                    success: function success(res) {
                                        console.log('saved::' + res.savedFilePath);
                                        wx.showToast({
                                            title: '保存成功'
                                        });
                                    }
                                });
                            },
                            fail: function fail(res) {
                                console.log(res);
                                wx.showToast({
                                    title: '保存失败',
                                    icon: 'loading'
                                }), setTimeout(function () {
                                    wx.hideLoading();
                                }, 2000);
                            }
                        });
                    }
                },
                fail: function fail(res) {
                    console.log(res.errMsg);
                }
            });
        }
    }

});

/***/ })

},[119]);