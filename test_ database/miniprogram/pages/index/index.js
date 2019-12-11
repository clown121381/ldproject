const db = wx.cloud.database({
  env: 'release-a38306'
})
const testDB = db.collection('test_db')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testList:[]
  },
  testAdd(){
    testDB.add({
      data:{
        name:"testName",
        title:"testTitle"
      }
    }).then((res)=>{
      console.log(res);
    })
  },
  testGet(){
    testDB.get().then((res)=>{
      console.log(res);
      this.setData({
        testList:res.data
      })
    })
  },
  testUpdate(e){
    let thisId = e.currentTarget.dataset.id;
    console.log(thisId)
    testDB.doc(thisId).update({
      data:{
        title: "update"
      }
    }).then((res)=>{
      console.log(res)
    })
  },
  testDelete(e){
    let thisId = e.currentTarget.dataset.id;
    testDB.doc(thisId).remove().then((res)=>{
      console.log(res);
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