const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: Number,
      value: app.homePageHeight
    },
    onShow: {
      type: Boolean,
      value: false,
      observer: 'onShowHideChange'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    onShowHideChange(show) {
      if (show) {
        console.log('page4 show')
      } else {
        console.log('page4 hide')
      }
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
