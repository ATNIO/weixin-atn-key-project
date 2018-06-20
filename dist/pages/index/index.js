; require('../../common.js'); var webpackJsonp = wx.webpackJsonp;webpackJsonp([1],{

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(56)

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tina = __webpack_require__(0);

var _code_key = __webpack_require__(57);

var _code_key2 = _interopRequireDefault(_code_key);

var _banner_ = __webpack_require__(58);

var _banner_2 = _interopRequireDefault(_banner_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import banner_atn from '../../images/banner_atn.jpg'

var app = getApp();
_tina.Page.define({
    data: {
        indexmenu: [],
        imgUrls: []
    },
    onLoad: function onLoad() {
        //生命周期函数--监听页面加载
        this.fetchData();
        // var that = this
        // //调用应用实例的方法获取全局数据
        // app.getUserInfo(function(userInfo){
        //   //更新数据
        //   that.setData({
        //     userInfo:userInfo
        //   })
        // })
    },

    methods: {
        fetchData: function fetchData() {
            this.setData({
                indexmenu: [{
                    'icon': _code_key2.default,
                    'text': '子私钥生成',
                    'url': 'keycreate'
                }, {
                    'icon': _code_key2.default,
                    'text': '子私钥找回',
                    'url': 'keycombine'
                }],
                imgUrls: [_banner_2.default]
            });
        },

        changeRoute: function changeRoute(url) {
            wx.navigateTo({
                url: '../' + url + '/' + url
            });
        },

        onReady: function onReady() {
            //生命周期函数--监听页面初次渲染完成
            // console.log('onReady');
        },
        onShow: function onShow() {
            //生命周期函数--监听页面显示
            // console.log('onShow');
        },
        onHide: function onHide() {
            //生命周期函数--监听页面隐藏
            // console.log('onHide');
        },
        onUnload: function onUnload() {
            //生命周期函数--监听页面卸载
            // console.log('onUnload');
        },
        onPullDownRefresh: function onPullDownRefresh() {
            //页面相关事件处理函数--监听用户下拉动作
            // console.log('onPullDownRefresh');
        },
        onReachBottom: function onReachBottom() {
            //页面上拉触底事件的处理函数
            // console.log('onReachBottom');
        }
    }
});

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/code_key.440c9c.png";

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/banner_atn.jpg";

/***/ })

},[55]);