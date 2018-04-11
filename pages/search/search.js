// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history:['chanel口红','iphoneX'],
    hot:['粉底','iphoneX','进口奶粉','眼线笔','液晶电视','Ipad','连衣裙','春季外套']
  },
  goBack: function () {
    wx.navigateBack({
      delta: 1
    })
  },
  clearHis:function(){
    this.setData({
      history:[]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})