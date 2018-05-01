//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '今天我们的服务挂了吗??'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  naviToCallerPage: function(){
    wx.navigateTo({
      url: '../servicescaller/servicescaller',
    })
  },
  onLoad: function () {
   
  }
})
