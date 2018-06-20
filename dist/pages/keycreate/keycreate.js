; require('../../common.js'); var webpackJsonp = wx.webpackJsonp;webpackJsonp([6],{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(62)

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(31);

var _stringify2 = _interopRequireDefault(_stringify);

var _tina = __webpack_require__(0);

var _sssa = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pages/keycreate/keycreate.js
_tina.Page.define({

    /**
     * 页面的初始数据
     */
    data: {
        qrMsg: '',
        isShowMsg: false,
        isShowResult: false,
        showClear: true,
        list: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function onLoad(options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.setData({
            isShowMsg: false,
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

    // 生成二维码
    methods: {
        makeQrcode: function makeQrcode(e) {

            this.setData({
                isShowMsg: false,
                isShowResult: true,
                index: 0
            });

            var qrMsgStr = this.data.qrMsg;
            console.log(qrMsgStr + "家");
            var minimum = 2,
                shares = 3,
                raw = qrMsgStr.toString('hex');
            var secretStrList = (0, _sssa.create)(minimum, shares, raw);

            console.log('keycreate   secretStrList:' + secretStrList);

            if (null == this.data.qrMsg || this.data.qrMsg == "") {
                wx.showToast({
                    title: '二维码内容不能为空',
                    icon: 'loading',
                    duration: 500
                });
                return;
            }

            var jsonSecrets = (0, _stringify2.default)(secretStrList);
            //将子密钥数组本地存储
            wx.setStorage({
                key: "secretkeys",
                data: jsonSecrets,
                success: function success() {
                    console.log('setStorage success');
                }
            });

            wx.navigateTo({
                url: '../qrcodeshow/qrcode_1?index=0',
                // url: '../qrcodeshow/qrcode_1',
                success: function success(res) {
                    // success
                    console.log('wx.navigateTo ' + secretStrList);
                },
                fail: function fail() {
                    // fail
                },
                complete: function complete() {
                    // complete
                }
            });
        },
        bindInput: function bindInput(e) {
            console.log(e.detail.value);
            this.setData({
                qrMsg: e.detail.value
            });
            if (this.data['qrMsg'].length > 1) {
                this.setData({
                    showClear: false
                });
            } else {
                this.setData({
                    showClear: true
                });
            }
        },

        // 清空
        bindClearAll: function bindClearAll(e) {
            this.setData({
                qrMsg: '',
                isShowMsg: false,
                isShowResult: false,
                showClear: true,
                index: 0
            });
        }
    }
});

/***/ })

},[61]);