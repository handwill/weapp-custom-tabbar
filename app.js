//app.js
App({
  onLaunch: function () {
    // 获取系统信息
    wx.getSystemInfo({
      success: res => {
        console.log(res);
        this.systemInfo = res
        const iphoneX = /iphone x/i.test(res.model);
        const iphoneNew = /iPhone11/i.test(res.model) && res.screenHeight === 812;
        this.isIPhoneX = iphoneX || iphoneNew
        this.homePageHeight = res.screenHeight - (this.isIPhoneX ? 84 : 50) - 44 - res.statusBarHeight;
      }
    })
  },
  systemInfo:null,
  isIPhoneX:false,
  homePageHeight:0,
})