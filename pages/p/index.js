// pages/p/index.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    margintop:10,
    array: [
      {
      //   title: "0工作名称",
      // // },{
      //   extra: "招聘一位派单的同学",
      // // },{
      //   thumb: "https://i.loli.net/2017/08/21/599a521472424.jpg",
      // // },{
      //   content: "今天是周一，西区食堂猪脚饭招聘一位派单同学，资薪13RMB/h",
      // // },{
      //   footer: "yueysite"
      
      }
    ],
    ress:[{}]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {
    var that = this;
    let array = this.data.array;
    let ress = this.data.ress;
    wx:wx.request({
      url: 'http://superc:8080/yueysite/getC.site',
      data: '',
      header: {'content-type': 'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
    //     console.log(res.data.length)
        for (var i = 0; i <= res.data.length-1; i++) {
              // console.log(i)      
              let arraya = "array[" + i + "]";
              that.setData({
                [arraya]: res.data[i]
              })
            };
            console.log(array);

      },
      fail: function(res) {},
      complete: function(res) {},
    })
    // console.log(this.data.ress);
    // console.log(this.data.array["0"]);
    // console.log(array[0].value);
    // that.setData({
    //   "array[0].value": "000"
    // })
    // console.log("ces ??");
    // console.log(array[0].value);
  },
addJob:function(){
  wx.navigateTo({
    url: '../job/addjob',
  })
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