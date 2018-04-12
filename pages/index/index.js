var Util = require('../../utils/util.js');  
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    isIpx: app.globalData.isIpx ? true : false,
    adImg:{
      'imgLink':'index',
      'imgSrc':'http://img0.helper-sys.com/images/18/09/59fc4df20b38ed27b73041bd91f9fe70222bf4f7.png?1519969472#w'
    },
  
  },
  clauseModal:function(){
    wx.showModal({
      title: '借书条款',
      content: '',
      showCancel:false,
      confirmColor:"#fd6e70",
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  scanCode:function(){
    wx.scanCode({
      // onlyFromCamera: true,
      success: (res) => {
        wx.navigateTo({
          url: '../member/member'
        });
        console.log(res)
        var result = res.result
        wx.showModal({
          title: '借书条款',
          content: result,
          showCancel: false,
          confirmColor: "#fd6e70",
          success: function (res) {
            if (res.confirm) {
              wx.navigateTo({
                url: '../member/member'
              })
            } 
          }
        })
      }
    })
  },
  onLoad: function () {
    
    
    
  }
})
