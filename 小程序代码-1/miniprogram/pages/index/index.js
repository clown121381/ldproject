// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    age:10,
    isShow:true,
    arr:[
      {
        name:"name1",
        price:100,
        num:20
      },
      {
        name: "name2",
        price: 101,
        num: 21
      },
      {
        name: "name3",
        price: 103,
        num: 23
      },
      {
        name: "name4",
        price: 104,
        num: 24
      }
    ]
  },
  addHandle(){
    // this.data.num++;
    this.setData({
      num: ++this.data.num
    })
    // console.log(this.data.num)
  },
  showBox(){
    this.setData({
      isShow:!this.data.isShow
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