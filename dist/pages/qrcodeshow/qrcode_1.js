; require('../../common.js'); var webpackJsonp = wx.webpackJsonp;webpackJsonp([1],{

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(109)

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tina = __webpack_require__(0);

var _sssa = __webpack_require__(3);

var _sssa2 = _interopRequireDefault(_sssa);

var _weappQrcodeEsm = __webpack_require__(19);

var _weappQrcodeEsm2 = _interopRequireDefault(_weappQrcodeEsm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// var QR = require("../../utils/qrcode.js")
var uuidutil = __webpack_require__(114);

var time = 0;
var touchDot = 0; //触摸时的原点
var interval = "";
var flag_hd = true;

_tina.Page.define({
    data: {
        index: 0,
        list: [],
        text: ''
    },

    onShow: function onShow() {
        flag_hd = true; //重新进入页面之后，可以再次执行滑动切换页面代码
        clearInterval(interval); // 清除setInterval
        time = 0;
    },

    onLoad: function onLoad(options) {

        this.setData({
            index: options['index']
        });

        var secretStrs = wx.getStorageSync('secretkeys');
        var secretList = JSON.parse(secretStrs);

        console.log('secretkeyQQQQQ:' + secretStrs);
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
                canvasId: 'myQrcode_1',
                text: secretList[this.data.index]
            }), setTimeout(function () {
                wx.hideLoading();
            }, 2000);
        } else {
            console.log(secretList[this.data.index]);
            (0, _weappQrcodeEsm2.default)({
                width: 300,
                height: 300,
                canvasId: 'myQrcode_1',
                text: secretList[this.data.index]
            });
            // QR.qrApi.draw(secretList[this.data.index], 'mycanvas1', 300, 300);
        }
    },

    methods: {
        //路由到下一个QRCode页面
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
        nextQRCode: function nextQRCode(e) {
            wx.navigateTo({
                url: '../qrcodeshow/qrcode_2?index=1',
                success: function success(res) {
                    // success
                    console.log('wx.navigateTo:[qrcode_2,index=1]');
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
            var that = this;
            wx.showActionSheet({
                itemList: ['保存二维码'],
                success: function success(res) {
                    console.log(res.tapIndex);
                    if (res.tapIndex == 0) {
                        console.log('保存二维码');
                        wx.canvasToTempFilePath({
                            // canvasId: 'mycanvas1',
                            canvasId: 'myQrcode_1',
                            success: function success(res) {
                                console.log('canvasToTempFilePath_______START');
                                var tempFilePath = encodeURI(res.tempFilePath);
                                // var uuid= uuidutil.uuid(10,10);
                                // res.tempFilePath = 'http://tmp/'+uuid+'.png'

                                // console.log('tempFilePath:---'+res.tempFilePath)
                                // console.log('canvasToTempFilePath_______START:  '+res.tempFilePath);
                                console.log('canvasToTempFilePath_______START:  ' + res.tempFilePath);

                                wx.saveImageToPhotosAlbum({
                                    filePath: res.tempFilePath,
                                    success: function success(res) {
                                        console.log('saved:: savedFilePath' + res.tempFilePath);
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

/***/ }),

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function uuid(len, radix) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [],
      i;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) {
      uuid[i] = chars[0 | Math.random() * radix];
    }
  } else {
    // rfc4122, version 4 form
    var r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}

module.exports = {
  uuid: uuid
};

/***/ })

},[108]);