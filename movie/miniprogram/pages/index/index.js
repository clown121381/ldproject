// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movieList:[],
    movieIds:[]
  },
  //格式化图片地址
  formatUrl(dataList){
    let thisList = [];
    thisList = dataList.map((item)=>{
      item.img = item.img.replace("/w.h/","/128.180/")
      return item;
    })
    return thisList
  },
  //获取猫眼电影列表 - 更多
  getMoreList(){
    let thisMovieId = this.data.movieIds;
    let thisMovieIds = thisMovieId.splice(0,10);
    wx.request({
      data:{
        token:"",
        movieIds: thisMovieIds.join(",")
      },
      url: 'http://m.maoyan.com/ajax/moreComingList',
      success(res){
        console.log(res.data.coming);
      }
    })
  },
  //获取猫眼电影列表
  getDataList(){
    let _this = this
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'http://m.maoyan.com/ajax/movieOnInfoList',
      success(res){
        _this.setData({
          movieIds: res.data.movieIds,
          movieList: _this.formatUrl(res.data.movieList) 
        })
        wx.hideLoading()
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDataList();
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
    this.getMoreList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})