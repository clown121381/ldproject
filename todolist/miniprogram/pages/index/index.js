// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    initId:103,
    inpVal:"",
    todoList:[ //当前列表数据
      {
        title:"测试一",
        id:"101",
        isCheck:false
      },
      {
        title: "测试二",
        id: "102",
        isCheck: false
      },
      {
        title: "测试三",
        id: "103",
        isCheck: false
      }
    ]
  },
  //选中当前行
  checkItem(e){
    let nowIndex = e.currentTarget.dataset.id;
    let thisList = this.data.todoList;
    thisList = thisList.map((item)=>{
      if (item.id == nowIndex){
        let nowIem = item;
        nowIem.isCheck = !nowIem.isCheck;
        return nowIem
      }else{
        return item;
      }
    })
    this.setData({
      todoList: thisList
    })
  
  },
  //移除当前行
  doneHandle(e){
    let nowIndex = e.currentTarget.dataset.id;
    let thisList = this.data.todoList;
    thisList = thisList.filter((item)=>{
      if(item.id != nowIndex){
        return item;
      }
    })
    console.log(thisList)
    this.setData({
      todoList: thisList
    })
  },
  //移除选中项
  doneCheck(){
    let thisList = this.data.todoList;
    thisList = thisList.filter((item)=>{
      if(!item.isCheck){
        return item
      }
    })
    this.setData({
      todoList: thisList
    })
  },
  //文本框输入事件
  inpHandle(e){
    this.setData({
      inpVal: e.detail.value
    })
  },
  //id处理函数
  idHandle(){
    let nowid = this.data.initId;
    this.setData({
      initId: ++nowid
    })
    return nowid
  },
  //添加待办事项
  addHandle(){
    let thisList = this.data.todoList;
    thisList.push({
      title: this.data.inpVal,
      isCheck:false,
      id: this.idHandle()
    })
    this.setData({
      todoList:thisList
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