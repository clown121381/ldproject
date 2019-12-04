// component/linda/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation:"apply-shared" 
  },
  properties: {
    type:{
      type:String,
      value:"计算机"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    str:"hello"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickHandle(){
      console.log("hello");
      this.triggerEvent("ldHandle",{n:10})
    }
  }
})
