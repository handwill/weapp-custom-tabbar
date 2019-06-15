// pages/main/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabbar: [
      {
        pagePath: "/pages/index/index",
        name: "页面1",
        iconPath: "../../assets/images/tab1.png",
        selectedIconPath: "../../assets/images/tab1_cur.png",
        tips:'',
        selected: true
      },
      {
        pagePath: "/pages/fabu/fabu",
        name: "页面2",
        iconPath: "../../assets/images/tab_new.png",
        selectedIconPath: "../../assets/images/tab_new.png",
        tips:'new',
        selected: false
      },
      {
        pagePath: "/pages/fabu/fabu",
        name: "页面3",
        iconPath: "../../assets/images/tab_new.png",
        selectedIconPath: "../../assets/images/tab_new.png",
        tips: 'new',
        selected: false
      },
      {
        pagePath: "/pages/user/user",
        name: "页面4",
        iconPath: "../../assets/images/tab4.png",
        selectedIconPath: "../../assets/images/tab4_cur.png",
        tips:'4',
        selected: false
      }
    ],
    tabbarHeight: app.isIPhoneX ? 84 : 50, // 底部tabbar高度
    activeIndex: 0,  // 选中的tab
    scrollTopArray: [], // 记录每个页面的滚动位置
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.tabbar.forEach((item, index, arr) => {
      this.data.scrollTopArray[index] = 0;
      // item.isFirstLoad = true
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},
  /**
 * 生命周期函数--监听页面隐藏
 */
  onHide: function () {},

  onChange(event) {
    if (event.detail == this.data.activeIndex) return;
    this.updateSubPageShowHide(event.detail);
    this.setData({
      activeIndex: event.detail,
      pageName: this.data.tabbar[event.detail].name
    })
    // 还原子页面的滚动位置
    wx.pageScrollTo({
      duration: 0,
      scrollTop: this.data.scrollTopArray[event.detail]
    })
  },
  // 记录每个子页面的滚动位置
  onPageScroll(e) {
    this.data.scrollTopArray[this.data.activeIndex] = e.scrollTop;
  },
  // 更新组件的show hide 生命周期
  updateSubPageShowHide(currentIndex) {
    this.data.tabbar.forEach(function (value, i) {
      if (i == currentIndex) {
        value.onShow = true;
        value.hasLoad = true;
      } else {
        value.onShow = false;
      }
    })
    this.setData({
      tabbar: this.data.tabbar,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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