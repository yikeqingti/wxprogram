//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  logBtn:function(e){
    wx.switchTab({
      url: '/pages/category/index',
    })
  }
})
