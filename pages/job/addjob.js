// pages/job/addjob.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // date: util.formatDate(new Date)
  },


  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })

    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;  
    var n = timestamp * 1000;
    var date = new Date(n);
    //年  
    var Y = date.getFullYear();
    //月  
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
    //日  
    var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    //时  
    var h = date.getHours();
    //分  
    var m = date.getMinutes();
    //秒  
    var s = date.getSeconds();

    console.log("当前时间：" + Y + "-" + M + "-" + D +" " + h + ":" + m + ":" + s);
    var timeString = new Array(Y + "-" + M + "-" + D + " ") ;
    console.log(timeString)
    this.setData({
      pubTime: timeString
    })
  },
  formSubmit: function (e) {
    // console.log('form发生了submit事件，携带数据为：', e.detail.value)
    wx:wx.request({
      url: 'http://superc:8080/yueysite/addJob.site',
      data: e.detail.value,
      // data: "{title:'test'}",
      header: {
        
        'content-type': 'application/json;charset=UTF-8'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log(e)
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  /**
 * 生命周期函数--监听页面加载
 */
  onLoad: function (options) {

  },
  formReset: function () {
    console.log('form发生了reset事件')
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