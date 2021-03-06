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
    todoList:[],
    orderType:0
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
    this.setData({
      orderType:thisOrder
    }) 
    this.getToDoList();
  },
  //获取列表数据
  getToDoList(){
    let orderType = this.data.orderType;
    let orderObj = {};
    if(orderType==0){
      orderObj={}
    }else if(orderType == 1){
      orderObj={
        done:true
      }
    }else if(orderType == 2){
      orderObj={
        done:false
      }
    }
    wx.showLoading({
      title: 'loading',
    })
    todoDB.where(orderObj).get().then((res)=>{
      let thisList = res.data.map((item)=>{
        item.isCheck = false;
        return item
      })
      this.setData({
        todoList:thisList
      })
      wx.hideLoading()
    })
  },
  //完成按钮 & 删除操作
  doneHandle(e){
    let thisId = e.currentTarget.dataset.id;
    let thisDone = e.currentTarget.dataset.done;
    console.log(thisDone)
    if(thisDone){
      todoDB.doc(thisId).remove().then((res)=>{
        this.getToDoList();
      })
    }else{
      todoDB.doc(thisId).update({
        data:{
          done:true
        }
      }).then((res)=>{
        this.getToDoList();
      })
    }
    
  },
  //单行选中
  checkItem(e){
    let thisId = e.currentTarget.dataset.id;
    let thisList = this.data.todoList;
    thisList = thisList.map((item)=>{
      if(thisId == item._id){
        item.isCheck = true;
      }
      return item;
    })
    this.setData({
      todoList:thisList
    })
  },
  //完成选中项
  doneCheck(){
    let checkIds = [];
    let thisList = this.data.todoList;
    thisList.map((item)=>{
      if(item.isCheck){
        checkIds.push(item._id)
      }
    })
    console.log(checkIds);
    wx.cloud.callFunction({
      name:"todo_update",
      data:{
        ids:checkIds
      }
    }).then((res)=>{
      console.log(res);
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