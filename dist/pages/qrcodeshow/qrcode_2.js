; require('../../common.js'); var webpackJsonp = wx.webpackJsonp;webpackJsonp([4],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(116)

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tina = __webpack_require__(0);

var _sssa = __webpack_require__(3);

var _weappQrcodeEsm = __webpack_require__(19);

var _weappQrcodeEsm2 = _interopRequireDefault(_weappQrcodeEsm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var QR = require("../../utils/qrcode.js")


_tina.Page.define({
    data: {
        index: 0,
        list: [],
        text: ''
    },
    onLoad: function onLoad(options) {

        this.setData({
            index: options['index']
        });
        var secretStrs = wx.getStorageSync('secretkeys');
        var secretList = JSON.parse(secretStrs);
        this.setData({
            text: secretList[this.data.index]
        });
        secretList[this.data.index];
        if (secretList[this.data.index].length > 300) {
            wx.showLoading({
                title: '亲，你是在摧残我啊！！！'
            });
            (0, _weappQrcodeEsm2.default)({
                width: 300,
                height: 300,
                canvasId: 'myQrcode_2',
                text: secretList[this.data.index]
            });
            setTimeout(function () {
                wx.hideLoading();
            }, 2000);
        } else {
            console.log(secretList[this.data.index]);
            (0, _weappQrcodeEsm2.default)({
                width: 300,
                height: 300,
                canvasId: 'myQrcode_2',
                text: secretList[this.data.index]
            });
            // QR.qrApi.draw(secretList[this.data.index], 'mycanvas2', 300, 300);

        }
    },

    methods: {

        lastQRCode: function lastQRCode(e) {
            wx.navigateTo({
                url: '../qrcodeshow/qrcode_1?index=0',
                success: function success(res) {
                    // success
                    console.log('wx.navigateTo:[qrcode_1,index=0]');
                },
                fail: function fail() {
                    // fail
                },
                complete: function complete() {
                    // complete
                }
            });
        },
        //路由到下一个QRCode页面
        nextQRCode: function nextQRCode(e) {
            wx.navigateTo({
                url: '../qrcodeshow/qrcode_3?index=2',
                success: function success(res) {
                    // success
                    console.log('wx.navigateTo:[qrcode_3,index=2]');
                },
                fail: function fail() {
                    // fail
                },
                complete: function complete() {
                    // complete
                }
            });
        },
        //点击图片进行预览，长按保存分享图片
        previewImg: function previewImg(e) {
            wx.showActionSheet({
                itemList: ['保存二维码'],
                success: function success(res) {
                    console.log(res.tapIndex);
                    if (res.tapIndex == 0) {
                        console.log('保存二维码');
                        wx.canvasToTempFilePath({
                            canvasId: 'myQrcode_2',
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

},[115]);