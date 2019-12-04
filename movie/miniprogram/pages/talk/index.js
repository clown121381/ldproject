import md5 from "../../utils/md5.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    inpVal:"",
    talkList:[]
  },

  //组件通信测试函数
  fooHandle(n){
    console.log(n.detail)
  },

  //获取聊天内容
  inpHandle(e){
    this.setData({
      inpVal:e.detail.value
    })
  },
  //获取时间戳
  getTimeStamp(){
    var timer = new Date();
    timer = Date.parse(timer);
    return(timer.toString().substr(0,10));
  },
  //获取随机字符串
  getNonceStr(){
    var str = Math.random();
    return(str.toString(36).substr(2));
  },
  //获取签名
  getSign(data){
    let arr = [];
    let urlStr = "";
    //第一步根据KEY值进行排序
    arr = Object.keys(data).sort();
    //第二部拼接url 并转码
    arr.map((item) => {
      urlStr += item + "=" + encodeURI(data[item]) + "&"
    })
    //第三部拼接 app_key
    urlStr +="app_key=EowwNAHk1c0s8vx6"
    //第四步 MD5加密
    urlStr = md5(urlStr).toUpperCase()

    return urlStr
  },
  //发送聊天请求
  sendHandle(){
    let thisTalkList = this.data.talkList;
    let _this = this;
    let data={
      app_id:"2125031440",
      time_stamp:this.getTimeStamp(),
      nonce_str:this.getNonceStr(),
      session:"10000",
      question: this.data.inpVal
    }
    data.sign = this.getSign(data)
    wx.request({
      url: 'https://api.ai.qq.com/fcgi-bin/nlp/nlp_textchat',
      data,
      success(res){
        thisTalkList.push({
          answer: res.data.data.answer,
          question: _this.data.inpVal
        })
        _this.setData({
          talkList:thisTalkList
        })
      }
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