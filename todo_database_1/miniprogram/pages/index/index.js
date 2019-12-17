const db = wx.cloud.database({
  env: 'release-a38306'
})
const todoDB = db.collection('todos_db')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal:"",
    todoList:[]
  },
  //保存inp值
  inpHandle(e){
    this.setData({
      inpVal:e.detail.value
    })
  },
  //添加新纪录
  addHandle(){

    todoDB.add({
      data:{
        title:this.data.inpVal,
        done:false
      }
    }).then((res)=>{
      this.setData({
        inpVal:""
      })
      this.getToDoList()
    })

  },
  //条件按钮
  getWhere(e){
    let thisOrder = e.currentTarget.dataset.order;
    if(thisOrder == 0){

    }else if(thisOrder == 1){

    }else if(thisOrder){}
  },
  //获取列表数据
  getToDoList(){
    wx.showLoading({
      title: 'loading',
    })
    todoDB.where({
      done:false
    }).get().then((res)=>{
      console.log(res)
      this.setData({
        todoList:res.data
      })
      wx.hideLoading()
    })
  },
  //完成按钮
  doneHandle(e){
    let thisId = e.currentTarget.dataset.id;
    todoDB.doc(thisId).update({
      data:{
        done:true
      }
    }).then((res)=>{
      this.getToDoList();
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getToDoList()
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