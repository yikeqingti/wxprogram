var wxCharts = require('../../utils/wxcharts.js');
const app = getApp()
var daylineChart = null;
var yuelineChart = null;
Page({
  data: {

  },
  getMothElectro: function () {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    yuelineChart = new wxCharts({ //当前温度配置
      canvasId: 'yueEle',
      type: 'line',
      categories: ['1小时前','45min前','30min前','15min前','当前'], //categories X轴
      animation: true,
      // background: '#f5f5f5',
      series: [ 
      {
        name: '温度走向',
        data: ['18','19','20','24','22'],//伪数据
        format: function (val, name) {
          return val.toFixed(1) + 'c';
        }
      }
      ],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '实时温度监控',
        format: function (val) {
          return val.toFixed(0)+'c';
        },
        max: 30,
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  },
  getMothElectroH: function () {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    yuelineChart = new wxCharts({ //当前湿度配置
      canvasId: 'yueEle1',
      type: 'line',
      categories: ['1小时前', '45min前', '30min前', '15min前', '当前'], //categories X轴
      animation: true,
      // background: '#f5f5f5',
      series: [
        {
          name: '湿度走向',
          data: ['40', '45', '50', '55', '51'],//伪数据
          format: function (val, name) {
            return val.toFixed(1) +'rh';
          }
        }
      ],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '实时湿度监控',
        format: function (val) {
          return val.toFixed(0)+'rh';
        },
        max: 100,
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  },
  getMothElectroThree: function () {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    yuelineChart = new wxCharts({ //当前光照强度配置
      canvasId: 'yueEle2',
      type: 'line',
      categories: ['1小时前', '45min前', '30min前', '15min前', '当前'], //categories X轴
      animation: true,
      // background: '#f5f5f5',
      series: [
        {
          name: '光照强度走向',
          data: ['26.8', '24.5', '26.2', '26', '28'],//伪数据
          // data: ['28.8', '27.5', '26.2', '26', '26.2'],//伪数据
          
          format: function (val, name) {
            return val.toFixed(2)+'lx';
          }
        }
      ],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '光照强度',
        format: function (val) {
          return val.toFixed(1)+'lx';
        },
        max: 40,
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  },
  onLoad: function (options) {
    
  },
  onReady: function () {

  },

  onShow: function () {//打开页面开启监控
    this.getMothElectro();
    this.getMothElectroH();
    this.getMothElectroThree();
  },
  onHide: function () {

  },

  onPullDownRefresh: function () {

  },
  onReachBottom: function () {//页面上拉触底事件的处理函数
    wx:wx.showToast({
      title: '已经到底啦',
    })
  }
})